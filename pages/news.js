import React, { Component } from 'react';

import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';

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
      <Footer />
    </>;
  }
}
