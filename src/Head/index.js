import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { fonts, breakpointInfo } from 'src/style-constants';

import android from './favicons/android-chrome-192x192.png';
import apple from './favicons/apple-touch-icon.png';
import browserConfig from './favicons/browserconfig.xml';
import favicon16 from './favicons/favicon-16x16.png';
import favicon32 from './favicons/favicon-32x32.png';
import favicon from './favicons/favicon.ico';
import mstile150 from './favicons/mstile-150x150.png';
// import safari from './favicons/safari-pinned-tab.svg';
import webmanifest from './favicons/site.webmanifest';

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
  code {
    white-space: nowrap;
  }
`;

export default ({
  pageTitle,
}) => <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ pageTitle }</title>
    <link rel="apple-touch-icon" sizes="180x180" href={apple} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon16} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon32} />
    <link rel="manifest" href={webmanifest} />
    {/* <link rel="mask-icon" href={safari} color="#5bbad5" /> */}
    <link rel="shortcut icon" href={favicon} />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="msapplication-config" content={mstile150}/>
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
  <GlobalStyles />
</>;
