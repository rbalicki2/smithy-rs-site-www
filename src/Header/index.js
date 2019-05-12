import React from 'react';
import BodyClassName from 'react-body-classname';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { Flexxor, Container } from 'src/page-ui';
import Logo from './logo.svg';

import { breakpointInfo, colors } from 'src/style-constants';
import { red } from 'ansi-colors';

const BODY_CLASS_NAME = 'margin-top-class';
const MARGIN = 60;
const BORDER_SIZE = 2;

const HeaderPositioning = styled.div`
  height: ${MARGIN}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
`;

const HeaderLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LOGO_MAX_HEIGHT = 50;
// const Logo = styled.img`
//   max-height: ${LOGO_MAX_HEIGHT}px;
//   margin-right: 40px;
// `;

const BaseLink = styled.a`
  transition: 200ms color ease;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
  cursor: pointer;
  line-height: ${MARGIN - BORDER_SIZE}px;
  
  text-decoration: none;
  
  ${props => props.isCurrent
    ? `
      color: ${colors.HIGHLIGHT_SOFT};
      border-bottom-color: ${colors.HIGHLIGHT_SOFT};
      &:hover {
        color: ${colors.HIGHLIGHT};
        border-bottom-color: ${colors.HIGHLIGHT};
      }
    `
    : `
      border-bottom-color: transparent;
      color: ${colors.OFF_WHITE};
      &:hover {
        color: ${colors.WHITE};
      }
    `
  }
`;

const InnerLink = styled(BaseLink)`
  border-bottom-width: ${BORDER_SIZE}px;
  border-bottom-style: solid;
`

const HeaderStyle = createGlobalStyle`
  body {
    margin: ${MARGIN}px 0 0;
    box-sizing: border-box;
  }
`;

const LogoLink = styled(BaseLink)`line-height: 1px; cursor: pointer;`;

const pathMatches = (path, target) => path === target;

export default ({ path }) => (<>
  <HeaderStyle />
  <HeaderPositioning>
    <Container>
      <Flexxor>
        <HeaderLeftSide>
          <Link href="/">
            <LogoLink isCurrent={pathMatches(path, '/')}>
              <Logo style={{ height: LOGO_MAX_HEIGHT }} />
            </LogoLink>
          </Link>
          <InnerLink href="https://docs.smithy.rs/smithy/">Docs</InnerLink>
          <Link href="/overview">
            <InnerLink isCurrent={pathMatches(path, "/overview")}>Overview</InnerLink>
          </Link>
          <Link href="/guide">
            <InnerLink isCurrent={pathMatches(path, "/guide")}>Guide</InnerLink>
          </Link>
          <Link href="/news">
            <InnerLink isCurrent={pathMatches(path, "/news")}>News</InnerLink>
          </Link>
        </HeaderLeftSide>
        <InnerLink href="https://www.github.com/rbalicki2/smithy">Code</InnerLink>
      </Flexxor>
    </Container>
  </HeaderPositioning>
</>);
