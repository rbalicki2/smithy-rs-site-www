import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';

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

const PageColumn = styled.div`
  flex: 1;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

const CodeExample = styled.div`
  box-shadow: ${BOX_SHADOW};
  background-color: #EEE;
  align-self: stretch;
  flex: 2;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  border-radius: 5px;
  padding: 1rem;
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
      <BodyContainer>
        <Flexxor alignItems="start">
          <PageColumn>
            <BodySectionTitle>A Simple Smithy App</BodySectionTitle>
            <BodyText>The following is a simple hit counter.</BodyText>
          </PageColumn>
          <CodeExample>
            TODO example
          </CodeExample>
        </Flexxor>
      </BodyContainer>
      <BodyContainer>
        <Flexxor alignItems="start">
          <CodeExample>
            Formatted code example
          </CodeExample>
          <PageColumn>
            <BodySectionTitle>Interact with Javascript</BodySectionTitle>
            <BodyText>Interact with Javascript woo!</BodyText>
          </PageColumn>
        </Flexxor>
      </BodyContainer>
      <BodyContainer>
        <Flexxor alignItems="start">
          <PageColumn>
            <BodySectionTitle>Futures? No Problem.</BodySectionTitle>
            <BodyText>Yeah...</BodyText>
          </PageColumn>
          <CodeExample>
            Formatted code example
          </CodeExample>
        </Flexxor>
      </BodyContainer>
      <Footer />
    </>;
  }
}
