import React from 'react';
import Helmet from 'react-helmet';

export default ({
  pageTitle,
}) => <Helmet>
  <meta charSet="utf-8" />
  <title>{ pageTitle }</title>
</Helmet>;
