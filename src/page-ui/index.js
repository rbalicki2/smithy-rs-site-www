import styled from 'styled-components';
import { colors, breakpointInfo } from 'src/style-constants';

export const PageTitle = styled.h1`
  color: ${colors.HIGHLIGHT};
  font-size: 60px;
  text-shadow: 0 2px 0 rgba(0,0,0,.25);
  margin-bottom: 30px;
`;

export const PageSubtitle = styled.h2`
  color: ${colors.WHITE};
  font-weight: 200;
  line-height: 1.3em;
  margin-bottom: 50px;
`;

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
  font-size: 30px;
  padding: 0.5em 1.25em;
  outline: none;
  cursor: pointer;

  transition: all 200ms ease;
  &:focus {}

  &:active:hover {
    box-shadow: none;
    transform: translateY(2px);
  }

  box-shadow: none;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 1px 1px rgba(238, 243, 246, 0.04), -1px -1px rgba(238, 243, 246, 0.04), 0 15px 80px 0px rgba(39, 45, 63, 0.1), 0 30px 20px -20px rgba(39, 45, 63, 0.06);
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
  width: ${breakpointInfo.DESKTOP.containerWidth}px;
  margin: 0 auto;
`;

const HeadingStyle = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 35px 0 85px;
  text-align: center;
`;

export const HeadingContainer = ({ children, ...rest }) =>
  <HeadingStyle backgroundColor={colors.ALMOST_BLACK}>
    <Container>{ children }</Container>
  </HeadingStyle>;

export const BodyContainer = styled(Container)`
  padding: 80px 0;
`;

export const BodySectionTitle = styled.h3`
  font-weight: 500;
`;

export const BodyText = styled.p`
  margin: 0 0 10px;
  line-height: 1.3em;
`;
