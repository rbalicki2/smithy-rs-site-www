import React, { Component } from 'react';

import { colors } from 'src/style-constants';
import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';
import PartsOfASmithyApp from 'src/features/PartsOfASmithyApp';
import Lifecycles from 'src/features/Lifecycles';

import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  BodyContainer,
} from 'src/page-ui';

export default class Index extends Component {
  static async getInitialProps({ asPath }) {
    return {
      path: asPath,
    };
  }

  render() {
    return <>
      <Head pageTitle="Smithy - Features" />
      <Header path={this.props.path} />
      <HeadingContainer
        backgroundColor={colors.WHITE}
        textAlign="left"
        paddingTop={5}
        paddingBottom={5}
      >
        <PageTitle>Features of Smithy</PageTitle>
        <PageSubtitle color={colors.BLACK} marginBottom={5}>
          See what makes Smithy great
        </PageSubtitle>
      </HeadingContainer>
      <BodyContainer>
        <PartsOfASmithyApp />
      </BodyContainer>
      <BodyContainer>
        <Lifecycles />
      </BodyContainer>
      <Footer />
    </>;
  }
}
