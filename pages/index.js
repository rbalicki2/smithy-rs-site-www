import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';

// TODO
// - mobile header and footer
// - getting started page
// - examples
// - icon, meta, etc

import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  CtaButton,
  BodyContainer,
  BodySectionTitle,
  BodyText,
  Flexxor,
  BOX_SHADOW,
  OnlyMobile,
  OnlyDesktop,
} from 'src/page-ui';
import columnData from 'src/home/columnData';
import bodyData from 'src/home/bodyData';

const PageColumn = styled.div`
  flex: 1;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

const TopSectionTitle = styled(BodySectionTitle)`
  min-height: 3rem;
`;

export default class Index extends Component {
  static async getInitialProps({ asPath }) {
    return {
      path: asPath,
    };
  }

  render() {
    return <>
      <Head pageTitle="Smithy" />
      <Header path={this.props.path} />
      <HeadingContainer>
        <PageTitle>Smithy</PageTitle>
        <PageSubtitle>
          Build WebAssembly applications with Rust.
        </PageSubtitle>
        <Link href="/guide#getting-started">
          <CtaButton isPrimary>Get started</CtaButton>
        </Link>
      </HeadingContainer>
      <BodyContainer>
        <OnlyDesktop>
          <Flexxor alignItems="start">
            {
              columnData.map(({ title, bodyText }) => <PageColumn key={title}>
                <TopSectionTitle>{ title }</TopSectionTitle>
                { bodyText }
              </PageColumn>)
            }
          </Flexxor>
        </OnlyDesktop>
        <OnlyMobile>
          {
            columnData.map(({ title, bodyText }) => <Fragment key={title}>
              <BodySectionTitle>{ title }</BodySectionTitle>
              { bodyText }
            </Fragment>)
          }
        </OnlyMobile>
      </BodyContainer>
      <OnlyDesktop>
        {
          bodyData.map((item, i) => {
            const descriptionItem = <PageColumn key="description">{item.description}</PageColumn>;
            const codeItem = <Fragment key="code">{item.code}</Fragment>;
            const items = i % 2 === 0
              ? [descriptionItem, codeItem]
              : [codeItem, descriptionItem];
            
            return (<BodyContainer key={i}>
              <Flexxor alignItems="start">
                { items }
              </Flexxor>
            </BodyContainer>);
          })
        }
      </OnlyDesktop>
      <OnlyMobile>
        {
          bodyData.map((item, i) => (
            <BodyContainer key={i}>
              { item.description }
              { item.code }
            </BodyContainer>
          ))
        }
      </OnlyMobile>
      <Footer />
    </>;
  }
}
