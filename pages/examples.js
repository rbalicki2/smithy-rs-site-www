import React, { Component } from 'react';

import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';
import examplesData from 'src/examples/examplesData';

import { colors } from 'src/style-constants';
import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  BodyContainer,
  LinkStyle,
} from 'src/page-ui';
import Link from 'next/link';

export default class Examples extends Component {
  static async getInitialProps({ asPath }) {
    return {
      path: asPath,
    };
  }

  render() {
    return <>
      <Head pageTitle="Smithy - Examples" />
      <Header path={this.props.path} />
      <HeadingContainer
        backgroundColor={colors.WHITE}
        textAlign="left"
        paddingTop={5}
        paddingBottom={5}
      >
        <PageTitle>Examples</PageTitle>
        <PageSubtitle color={colors.BLACK} marginBottom={5}>
          Built with Smithy
        </PageSubtitle>
      </HeadingContainer>
      <BodyContainer>
        <ul>
          {
            examplesData.map((item) =>
              <li key={item.url}><LinkStyle href={item.url}>{item.title}</LinkStyle> - <LinkStyle href={item.codeUrl}>Source Code</LinkStyle></li>
            )
          }
        </ul>
      </BodyContainer>
      <Footer />
    </>;
  }
}
