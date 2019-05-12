import React from 'react';
import styled from 'styled-components';

import { colors } from 'src/style-constants';

import {
  Flexxor,
  BodySectionTitle,
  BodyText,
} from 'src/page-ui';

const LifecycleRow = styled(Flexxor)`
  padding 20px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.BLACK};
  }
`;

const LeftSide = styled.div`
  flex: 1;
  flex-grow: 0;
  flex-basis: 200px;
  font-weight: 500;
`;

const RightSide = styled.div`
  flex: 1;
  flex-grow: 1;
`;

const MultilineCodeSnippet = styled.div`
  padding: 15px 20px;
  background-color: ${colors.OFF_WHITE};
`;

const CodeSnippet = styled.code`
  background-color: ${colors.OFF_WHITE};
  display: inline-block;
  padding: 5px;
`;

const Lifecycles = styled.div`
`;

export default () => <>
  <BodySectionTitle>Smithy app lifecycle</BodySectionTitle>
  <BodyText>
    At any point in time, a Smithy app is in one of a series of phases.
    The code that goes into the contents of the <CodeSnippet>smd!</CodeSnippet> macro
    gets used or executed during the different phases.
  </BodyText>
  <Lifecycles>
    <LifecycleRow>
      <LeftSide>
        Mounting
      </LeftSide>
      <RightSide>
        <p>
          Consider the following code:
        </p>
        <p>
          <MultilineCodeSnippet>
            <code>
              #[wasm_bindgen]<br />
              pub fn start(root_element: web_sys::Element) &#123;<br />
              &nbsp;&nbsp;let app: SmithyComponent = smd!(&lt;div&gt;hello world&lt;/div&gt;);<br />
              &nbsp;&nbsp;smithy::mount(Box::new(app), root_element);<br />
              &#125;
            </code>
          </MultilineCodeSnippet>
        </p>
        <p>
          In this, we are constructing a <CodeSnippet>SmithyComponent</CodeSnippet>, which is a wrapper
          around <CodeSnippet>pub Box&#123;FnMut(Phase) -> PhaseResult + 'a&#125;</CodeSnippet>.
        </p>
        <p>
          One of the first things Smithy does is enter the rendering phase.
          During the rendering phase, this inner function
          is executed, returning a <CodeSnippet>PhaseResult::Rendering(Node)</CodeSnippet>.
        </p>
        <p>
          This <CodeSnippet>Node</CodeSnippet> can represent one or more DOM nodes, text strings or comments,
          which can then be rendered. It only contains the information that is necessary for rendering:
          node type, children and attributes. It does <b>not</b> contain event handlers.
        </p>
        <p>
          (Event handlers are returned from the <CodeSnippet>app</CodeSnippet> function when
          it is passed a different <CodeSnippet>Phase</CodeSnippet>.)
        </p>
        <p>
          Armed with this <CodeSnippet>Node</CodeSnippet>, Smithy updates the DOM accordingly.
        </p>
      </RightSide>
    </LifecycleRow>
    <LifecycleRow>
      <LeftSide>asdfa</LeftSide>
      <RightSide>asdfad</RightSide>
    </LifecycleRow>
  </Lifecycles>
</>;
