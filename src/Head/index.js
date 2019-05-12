import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { fonts } from 'src/style-constants';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fonts.FONT_FAMILY};
  }
`;

export default ({
  pageTitle,
}) => <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ pageTitle }</title>
  </Helmet>
  <GlobalStyles />
</>;
