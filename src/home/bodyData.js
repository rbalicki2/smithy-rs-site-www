import React from 'react';
import styled from 'styled-components';

import {
  BodySectionTitle,
  BodyText,
  BOX_SHADOW,
} from 'src/page-ui';

const CodeExample = styled.div`
  box-shadow: ${BOX_SHADOW};
  background-color: #EEE;
  align-self: stretch;
  flex: 2;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  border-radius: 5px;
  padding: 1rem;
`;

export default [
  {
    description: <>
      <BodySectionTitle>A Simple Smithy App</BodySectionTitle>
      <BodyText>The following is a simple hit counter.</BodyText>
    </>,
    code: <CodeExample>
      TODO example
    </CodeExample>,
  },
  {
    description: <>
      <BodySectionTitle>Interact with Javascript</BodySectionTitle>
      <BodyText>Interact with Javascript woo!</BodyText>
    </>,
    code: <CodeExample>
      Formatted code example
    </CodeExample>,
  },
  {
    description: <>
      <BodySectionTitle>Futures? No Problem.</BodySectionTitle>
      <BodyText>Yeah...</BodyText>
    </>,
    code: <CodeExample>
      Formatted code example
    </CodeExample>,
  },
];
