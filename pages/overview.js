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
      <Head pageTitle="Smithy - Overview" />
      <Header path={this.props.path} />
      <div>
        <div>Set up</div>
        <div>smd! syntax</div>
        <div>Capturing variables</div>
        <div>Handling events</div>
        <div>Interacting with window</div>
        <div>Deployment</div>
      </div>
      <div>
        <div>Lifecycle of Smithy app</div>
        <div>mount</div>
        <div>receive event</div>
        <div>re-render</div>
        <div>assign refs</div>
        <div>postRender</div>
      </div>
      <Footer />
    </>;
  }
}
