import React from 'react';
import styled from 'styled-components';

import { colors, breakpointInfo } from 'src/style-constants';
import { BOX_SHADOW } from 'src/page-ui';

import {
  Flexxor,
  BodySectionTitle,
  BodyText,
  CodeSnippet,
  MultilineCodeSnippet,
  OnlyDesktop,
  OnlyMobile,
} from 'src/page-ui';

const LifecycleRow = styled.div`
  ${breakpointInfo.DESKTOP.mediaQuery} {
    display: flex;
    flex-direction: row;
    align-items: ${props => props.alignItems || 'center'};
    align-content: ${props => props.alignContent || 'center'};
    justify-content: space-between;
    border-bottom: 1px solid ${colors.OFF_WHITE};
  }
`;

const LeftSide = styled.div`
  flex: 1;
  flex-grow: 0;
  flex-basis: 200px;
  font-weight: 500;
  ${breakpointInfo.MOBILE.mediaQuery} {
    margin-top: 40px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  flex-grow: 1;
`;

export default () => <>
  <BodySectionTitle>Smithy app lifecycle</BodySectionTitle>
  <BodyText>
    A Smithy app will go through several phases.
    The code that goes into the contents of the <CodeSnippet>smd!</CodeSnippet> macro
    gets used or executed during the different phases.
  </BodyText>
  <LifecycleRow>
    <LeftSide>
      Mounting and Rendering
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
            &nbsp;&nbsp;let mut click_count = 0;<br />
            &nbsp;&nbsp;let mut div_ref: Option&lt;web_sys::HtmlElement&gt; = None;<br />
            &nbsp;&nbsp;let app: SmithyComponent = smd!(<br />
            &nbsp;&nbsp;&nbsp;&nbsp;post_render=&#123;|| do_something_with(div_ref)&#125;;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref=&#123;&amp; mut div_ref&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on_click=&#123;|_| click_count = click_count + 1&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This div has been clicked &#123;click_count&#125; times<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;);<br />
            &nbsp;&nbsp;smithy::mount(Box::new(app), root_element);<br />
            &#125;
          </code>
        </MultilineCodeSnippet>
      </p>
      <p>
        In this, we are constructing a <CodeSnippet>SmithyComponent</CodeSnippet>, which is a wrapper
        around <CodeSnippet>Box&lt;FnMut(Phase) -> PhaseResult + 'a&gt;</CodeSnippet>.
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
    <LeftSide>
      Ref Assignment
    </LeftSide>
    <RightSide>
      <p>
        After the DOM is updated, Smithy will assign to each ref
        an <CodeSnippet>Option&lt;web_sys::HtmlElement&gt;</CodeSnippet> that
        contains the element.
      </p>
    </RightSide>
  </LifecycleRow>
  <LifecycleRow>
    <LeftSide>
      Post Rendering
    </LeftSide>
    <RightSide>
      <p>
        Immediately after ref&rsquo;s are assigned, Smithy will execute
        any <CodeSnippet>post_render</CodeSnippet> callbacks. During these
        callbacks, ref&rsquo;s will be present, and can be manipulated.
      </p>
      <p>
        For an example, if you were writing an text field input that limited
        the number of characters a user could enter, you might have
        a <CodeSnippet>post_render</CodeSnippet> callback like so:
      </p>
      <p>
        <MultilineCodeSnippet>
          <code>
            post_render=&#123;|| &#123;<br />
            &nbsp;&nbsp;if let Some(html_input_element) = input_ref.and_then(<br />
            &nbsp;&nbsp;&nbsp;&nbsp;|el| el.dyn_into::&lt;web_sys::HtmlInputElement&gt;()<br />
            &nbsp;&nbsp;) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;html_element.set_value(&amp;input_value_in_state)<br />
            &nbsp;&nbsp;&#125;<br />
            &#125;&#125;
          </code>
        </MultilineCodeSnippet>
      </p>
      <p>
        <i>
          <CodeSnippet>wasm_bindgen::JsCast</CodeSnippet> must be in scope
          to call <CodeSnippet>dyn_into</CodeSnippet>.
        </i>
      </p>
    </RightSide>
  </LifecycleRow>
  <LifecycleRow>
    <LeftSide>
      Event Handling
    </LeftSide>
    <RightSide>
      <p>
        After <CodeSnippet>post_render</CodeSnippet> callbacks are executed,
        the app will listen for events. When an event occurs,
        Smithy will find and execute the appropriate event handler.
        If an event handler is found and executed, the app is re-rendered.
      </p>
      <p>
        Note that there are two types of event callbacks: those tied to
        events that are tied to specific DOM elements, such as
        the <CodeSnippet>on_click</CodeSnippet> callback, and those tied to
        window events, such as an <CodeSnippet>on_hash_change</CodeSnippet> event
        callback.
      </p>
      <p>
        Continuing with the first example, if the <CodeSnippet>div</CodeSnippet> is clicked,
        the <CodeSnippet>on_click</CodeSnippet> event handler will fire, updating the click
        count. When the app is re-rendered, the new click count is visible in the DOM.
      </p>
    </RightSide>
  </LifecycleRow>
</>;
