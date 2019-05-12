import React from 'react';
import BodyClassName from 'react-body-classname';
import Link from 'next/Link';
import styled from 'styled-components';
import logo from './logo.png';

import { breakpointInfo, colors } from 'src/style-constants';

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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: ${breakpointInfo.DESKTOP.containerWidth}px;
`;

const HeaderLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LOGO_MAX_HEIGHT = 40;
const Logo = styled.img`
  max-height: ${LOGO_MAX_HEIGHT}px;
  margin-right: 40px;
`;

const InnerLink = styled.a`
  transition: 200ms color ease;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
  cursor: pointer;
  line-height: ${MARGIN - BORDER_SIZE}px;
  border-bottom-width: ${BORDER_SIZE}px;
  border-bottom-style: solid;
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

const LogoLink = styled.a`line-height: 1px;`;

const pathMatches = (path, target) => path.startsWith(target);

export default ({ path }) => (<>
  <BodyClassName className={BODY_CLASS_NAME} />
  <style type="text/css">{`.${BODY_CLASS_NAME} {
    margin-top: ${MARGIN}px;
    box-sizing: border-box;
  }`}</style>
  <HeaderPositioning>
    <HeaderContainer>
      <HeaderLeftSide>
        <LogoLink href="/">
          <Logo src={logo} style={{ maxHeight: LOGO_MAX_HEIGHT }} />
        </LogoLink>
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
    </HeaderContainer>
  </HeaderPositioning>
</>);
