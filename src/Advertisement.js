import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  max-width: 100%;
  background-color: #EEE;
  overflow: auto;
`;

export default () => <Box>
  <h3>How many engineers does it take to escape a room?</h3>
  <p>Find out with{' '}
    <a href="https://www.breakoutgames.com">Breakout</a>, the{' '}
    <b>best private, online virtual breakout rooms</b>.<br />
    Your virtual offsites have never been so much fun:{' '}
    <a href="https://breakoutgames.com/onlineescaperoom">Book now!</a>
  </p>
</Box>