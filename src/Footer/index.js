import React from 'react';
import styled from 'styled-components';

import { colors } from 'src/style-constants';
import {
  Flexxor,
  Container,
} from 'src/page-ui';
import Logo from 'src/SmithyLogo';

const Footer = styled.div`
  margin-top: 40px;
  min-height: 120px;
  background-color: ${colors.BLACK};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default () => <Footer>
  <Container>
    <Flexxor>
      <Logo />
      <div>&copy; 2019 Robert Balicki</div>
    </Flexxor>
  </Container>
</Footer>;
