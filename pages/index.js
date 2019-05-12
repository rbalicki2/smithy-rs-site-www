import React, { Component } from 'react';

import Header from 'src/Header';
import Head from 'src/Head';

import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  CtaButton,
  Container,
} from 'src/page-ui';

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
        <a href="#foo">
          <CtaButton isPrimary>Get started</CtaButton>
        </a>
      </HeadingContainer>
      <Container>
        stuff
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <a name="foo" />
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
        <h1>asdfasd</h1>
      </Container>
    </>;
  }
}
