import React from 'react';
import styled from 'styled-components';

import {
  BodySectionTitle,
  BodyText,
  BOX_SHADOW,
  CodeSnippet,
} from 'src/page-ui';

const CodeExample = styled.code`
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
      <BodyText>Every framework needs a hit counter example.</BodyText>
    </>,
    code: <CodeExample>
      #[wasm_bindgen]<br />
      pub fn start(root_element: web_sys::Element) &#123;<br />
      &nbsp;&nbsp;let mut count = 0;<br />
      &nbsp;&nbsp;let app = smithy::smd!(<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;div on_click=&#123;|_| count = count + 1&#125;&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have been clicked &#123;count&#125; times.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
      &nbsp;&nbsp;);<br />
      <br />
      &nbsp;&nbsp;smithy::mount(Box::new(app), root_element);<br />
      &#125;
    </CodeExample>,
  },
  {
    description: <>
      <BodySectionTitle>Interact with Javascript</BodySectionTitle>
      <BodyText>
        Use
        the <CodeSnippet>web_sys</CodeSnippet>, <CodeSnippet>js_sys</CodeSnippet> and <CodeSnippet>wasm_bindgen</CodeSnippet> libraries
        to interact with Javascript.
      </BodyText>
    </>,
    code: <CodeExample>
      smd!(<br />
      &nbsp;&nbsp;&lt;div<br />
      &nbsp;&nbsp;&nbsp;&nbsp;on_click=&#123;|_| web_sys::window()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.unwrap()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.location()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.set_hash("smithy")<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
      &nbsp;&nbsp;&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;Click me to change your browser's hash<br />
      &nbsp;&nbsp;&lt;/div&gt;<br />
      )
    </CodeExample>,
  },
<<<<<<< HEAD
  // TODO this section
=======
>>>>>>> 92f538be248274b1a54a3cc6f5abc4a6e7828339
  // {
  //   description: <>
  //     <BodySectionTitle>Futures? No Problem.</BodySectionTitle>
  //     <BodyText>Yeah...</BodyText>
  //   </>,
  //   code: <CodeExample>
  //     Formatted code example
  //   </CodeExample>,
  // },
];
