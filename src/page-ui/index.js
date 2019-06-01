import styled from 'styled-components';
import { colors, breakpointInfo, visibilityBreak } from 'src/style-constants';
import HEADER_HEIGHT from 'src/Header/height';

export const PageTitle = styled.h1`
  color: ${colors.HIGHLIGHT};
  font-size: 3rem;
  text-shadow: 0 2px 0 rgba(0,0,0,.25);
  margin-bottom: 1.5rem;
`;

export const PageSubtitle = styled.h2`
  color: ${props => props.color || colors.WHITE};
  font-weight: 200;
  line-height: 1.3em;
  margin-bottom: ${props => props.marginBottom || 50}px;
`;

export const BOX_SHADOW = `1px 1px rgba(238, 243, 246, 0.04), -1px -1px rgba(238, 243, 246, 0.04), 0 15px 80px 0px rgba(39, 45, 63, 0.1), 0 30px 20px -20px rgba(39, 45, 63, 0.06)`;
export const CtaButton = styled.button`
  ${
    props => props.isPrimary
      ? `
        background-color: ${colors.HIGHLIGHT_SOFT};
        color: ${colors.WHITE};
      `
      : `
        background-color: ${colors.WHITE};
        color: ${colors.HIGHLIGHT};
      `
  }
  border-radius: 10000px;
  border: none;
  -webkit-appearance: none;
  font-size: 2rem;
  padding: 0.4em 1.25em;
  outline: none;
  cursor: pointer;

  transition: all 200ms ease;
  &:active:hover {
    box-shadow: none;
    transform: translateY(2px);
  }

  box-shadow: none;
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${BOX_SHADOW};
  }
`;

export const Flexxor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  align-content: ${props => props.alignContent || 'center'};
  justify-content: space-between;
`;

export const Container = styled.div`
  width: calc(100% - ${2 * breakpointInfo.MOBILE.containerPadding}px);
  margin: 0 auto;
  ${breakpointInfo.DESKTOP.mediaQuery} {
    width: ${breakpointInfo.DESKTOP.containerWidth}px;
  }
`;

const HeadingStyle = styled.div`
  background-color: ${props => props.backgroundColor || colors.ALMOST_BLACK};
  padding: ${props => props.paddingTop || 35}px 0 ${props => props.paddingBottom || 85}px;
  text-align: ${props => props.textAlign || 'center'};
`;

export const HeadingContainer = ({ children, ...rest }) =>
  <HeadingStyle {...rest}>
    <Container>{ children }</Container>
  </HeadingStyle>;

export const BodyContainer = styled(Container)`
  padding: 60px 0 0;
`;

export const BodySectionTitle = styled.h3`
  margin: 2rem 0 1rem;
  font-weight: 500;
`;

export const BodySubTitle = styled.h2`
  margin: 2rem 0 1rem;
  font-weight: 500;
`;

export const BodyText = styled.div`
  margin: 0 0 10px;
  line-height: 1.3em;
`;

export const CodeSnippet = styled.code`
  background-color: ${colors.OFF_WHITE};
  display: inline-block;
  padding: 5px 0;
  position: relative;
  top: -1px;
`;

export const MultilineCodeSnippet = styled.span`
  display: block;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${colors.OFF_WHITE};
  box-shadow: ${BOX_SHADOW};
  border-radius: 5px;
`;

export const LinkStyle = styled.a`
  cursor: pointer;
  color: ${colors.HIGHLIGHT_SOFT};
  &:hover {
    text-decoration: underline;
  }
  text-decoration: none;
`;

export const OnlyDesktop = styled.div`
  display: none;
  @media only screen and (min-width: ${visibilityBreak}px) {
    display: block;
  }
`;

export const OnlyMobile = styled.div`
  display: block;
  @media only screen and (min-width: ${visibilityBreak}px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  visibility: hidden;
  position: absolute;
  top: -${HEADER_HEIGHT}px;
  &::after {
    content: "foo";
  }
`;
