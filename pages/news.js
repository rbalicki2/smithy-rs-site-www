import React, { Component } from 'react';

import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';
import newsData from 'src/news/newsData';

import { colors } from 'src/style-constants';
import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  BodyContainer,
  LinkStyle,
} from 'src/page-ui';
import Link from 'next/link';

export default class Index extends Component {
  static async getInitialProps({ asPath }) {
    return {
      path: asPath,
    };
  }

  render() {
    return <>
      <Head pageTitle="Smithy - News" />
      <Header path={this.props.path} />
      <HeadingContainer
        backgroundColor={colors.WHITE}
        textAlign="left"
        paddingTop={5}
        paddingBottom={5}
      >
        <PageTitle>News</PageTitle>
        <PageSubtitle color={colors.BLACK} marginBottom={5}>
          What&rsquo;s happening?
        </PageSubtitle>
      </HeadingContainer>
      <BodyContainer>
        <ul>
          {
            newsData.map((item) =>
              <LinkStyle href={item.url}><li>{item.title}</li></LinkStyle>
            )
          }
        </ul>
      </BodyContainer>
      <Footer />
    </>;
  }
}
