import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { fonts, breakpointInfo } from 'src/style-constants';

const MIN_BASE_FONT_SIZE = 10;
const MAX_BASE_FONT_SIZE = 20;
const FONT_DIFF = MAX_BASE_FONT_SIZE - MIN_BASE_FONT_SIZE;
const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${fonts.FONT_FAMILY};
    ${breakpointInfo.MOBILE.mediaQuery} {
      font-size: calc(${MIN_BASE_FONT_SIZE}px + ${FONT_DIFF} * (100vw / ${breakpointInfo.DESKTOP.minWidth}));
    }
    ${breakpointInfo.DESKTOP.mediaQuery} {
      font-size: ${MAX_BASE_FONT_SIZE}px;
    }
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
