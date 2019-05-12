import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'src/Header';
import Head from 'src/Head';

import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  CtaButton,
  BodyContainer,
  BodySectionTitle,
  BodyText,
  Flexxor,
} from 'src/page-ui';

const PageColumn = styled.div`
  flex: 1;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
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
        <a href="#get-started">
          <CtaButton isPrimary>Get started</CtaButton>
        </a>
      </HeadingContainer>
      <BodyContainer>
        <Flexxor alignItems="start">
          <PageColumn>
            <BodySectionTitle>Write Idiomatic Rust</BodySectionTitle>
            <BodyText>
              Smithy apps are written using idiomatic Rust code. You won't learn
              to build Smithy apps, you&rsquo;ll learn Rust.
            </BodyText>
          </PageColumn>
          <PageColumn>
            <BodySectionTitle>Component-Based</BodySectionTitle>
            <BodyText>
              Smithy apps are built up from smaller components.
            </BodyText>
            <BodyText>
              Encapsulation? Yes, please!
            </BodyText>
          </PageColumn>
          <PageColumn>
            <BodySectionTitle>Typesafe</BodySectionTitle>
            <BodyText>
              If you build a Smithy app, you give up very few of the compiler's
              guarantees. Smithy is the most typesafe framework for building
              WebAssembly apps using Rust.
            </BodyText>
          </PageColumn>
          <PageColumn>
            <BodySectionTitle>Unopinionated and Boilerplate-Free</BodySectionTitle>
            <BodyText>
              Manage your app's state however you want to. And don&rsquo;t write extra
              code to do so.
            </BodyText>
            <BodyText>
              Smithy is there to give you the support you need, and then get out of your way.
            </BodyText>
          </PageColumn>
        </Flexxor>
      </BodyContainer>
    </>;
  }
}
