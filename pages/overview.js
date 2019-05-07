import React, { Component } from 'react';

import Header from 'src/Header';
import Head from 'src/Head';

export default class Index extends Component {
  static async getInitialProps({ asPath }) {
    return {
      path: asPath,
    };
  }

  render() {
    return <>
      <Head pageTitle="Smithy - Overview" />
      <Header path={this.props.path} />
    </>;
  }
}
