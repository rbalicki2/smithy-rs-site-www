import React from 'react';
import BodyClassName from 'react-body-classname';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { Flexxor, Container } from 'src/page-ui';
import Logo from 'src/SmithyLogo';

import { breakpointInfo, colors } from 'src/style-constants';
import HEADER_HEIGHT from './height';
import Hamburger from './hamburger.svg';
import Cancel from './cancel.svg';

const BODY_CLASS_NAME = 'margin-top-class';
const BORDER_SIZE = 2;

import {
  BOX_SHADOW,
  OnlyMobile,
  OnlyDesktop,
} from 'src/page-ui';
import StateProvider from 'src/util/StateProvider';

const HeaderPositioning = styled.div`
  height: ${HEADER_HEIGHT}px;
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
  box-shadow: ${BOX_SHADOW};
  z-index: 1;
  align-items: center;
`;

const HeaderLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LOGO_MAX_HEIGHT = 50;

const BaseLink = styled.a`
  transition: 200ms color ease;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
  cursor: pointer;
  line-height: ${HEADER_HEIGHT - BORDER_SIZE}px;
  
  text-decoration: none;
  user-select: none;
  
  ${props => props.isCurrent
    ? `
      color: ${colors.HIGHLIGHT_SOFT};
      border-bottom-color: ${props.isMobile ? 'transparent' : colors.HIGHLIGHT_SOFT};
      &:hover {
        color: ${colors.HIGHLIGHT};
        border-bottom-color: ${props.isMobile ? 'transparent' : colors.HIGHLIGHT};
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

const HeaderGlobalStyle = createGlobalStyle`
  body {
    margin: ${HEADER_HEIGHT}px 0 0;
    box-sizing: border-box;
  }
`;

const LinkSection = styled.div`
  background-color: ${colors.BLACK};
  display: flex;
  flex-direction: column;
`;

const LogoLink = styled(BaseLink)`line-height: 1px; cursor: pointer; padding-left: 0;`;

const pathMatches = (path, target) => path.startsWith(target);

const getSmithyLogo = (path) => <Link href="/">
  <LogoLink isCurrent={path === '/'}>
    <Logo />
  </LogoLink>
</Link>

const codeLink = <InnerLink href="https://www.github.com/rbalicki2/smithy">Code</InnerLink>;

const links = (path, isMobile) => <>
  <Link href="/features">
    <InnerLink isCurrent={pathMatches(path, "/features")} isMobile={isMobile}>Features</InnerLink>
  </Link>
  <Link href="/guide">
    <InnerLink isCurrent={pathMatches(path, "/guide")} isMobile={isMobile}>Guide</InnerLink>
  </Link>
  <Link href="/news">
    <InnerLink isCurrent={pathMatches(path, "/news")} isMobile={isMobile}>News</InnerLink>
  </Link>
  <InnerLink href="https://docs.smithy.rs/smithy/">Docs</InnerLink>
  <Link href="/examples">
    <InnerLink isCurrent={pathMatches(path, "/examples")} isMobile={isMobile}>Examples</InnerLink>
  </Link>
  { isMobile && codeLink }
</>;

export default ({ path }) => (<>
  <HeaderGlobalStyle />
  <OnlyDesktop>
    <HeaderPositioning>
      <Container>
        <Flexxor>
          <HeaderLeftSide>
            { getSmithyLogo(path) }
            { links(path) }
          </HeaderLeftSide>
          { codeLink }
        </Flexxor>
      </Container>
    </HeaderPositioning>
  </OnlyDesktop>
  <OnlyMobile>
    <StateProvider>{(isOpen, setOpen) => <>
      <HeaderPositioning>
        <Container>
          <Flexxor>
            <HeaderLeftSide>
              {
                !isOpen && <Hamburger
                  style={{ fill: colors.WHITE }}
                  onClick={() => { setOpen(true); window.scrollTo(0, 0); }}
                />
              }
              {
                isOpen && <Cancel style={{ fill: colors.WHITE, height: 40 }} onClick={() => setOpen(false)} />
              }
            </HeaderLeftSide>
            { getSmithyLogo(path) }
          </Flexxor>
        </Container>
      </HeaderPositioning>
      {
        isOpen && <LinkSection>{ links(path, true) }</LinkSection>
      }
    </>}</StateProvider>
  </OnlyMobile>
</>);
