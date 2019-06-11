import {
  CodeSnippet,
  LinkStyle,
} from 'src/page-ui';
import Link from 'next/link';
import BasicSnippet from 'src/snippets/BasicSnippet';

export default {
  SYNTAX: {
    leftText: <><code>smd!</code> syntax</>,
    bodyText: <>
      <p>
        Smithy includes the <CodeSnippet>smd!</CodeSnippet> macro, which has
        a fairly simple syntax that is inspired by
        React&rsquo;s <CodeSnippet>jsx</CodeSnippet> syntax. An example:
      </p>
      <p>
        <BasicSnippet />
      </p>
      <p>
        See a complete description of
        the <CodeSnippet>smd!</CodeSnippet> syntax <Link href="/guide#smd-syntax">
          <LinkStyle>here</LinkStyle>
        </Link>.
      </p>
    </>,
  },
  INTERPOLATION: {
    leftText: <>Interpolation and sub-components</>,
    bodyText: <>
      <p>
        Interpolation in Smithy is easy: just place the item between curly
        brackets (<CodeSnippet>&#123;</CodeSnippet> and <CodeSnippet>&#125;</CodeSnippet>).
        It&rsquo;s as easy as this:
      </p>
      <p>
        <code>
          let count = 42;<br />
          let component = smd!(&lt;div&gt;&#123; count &#125;&lt;/div&gt;);
        </code>
      </p>
      <p>
        As long as an item implements the <CodeSnippet>Component</CodeSnippet> trait,
        it can be interpolated. <CodeSnippet>Component</CodeSnippet> has already been
        implemented for many common types,
        including <CodeSnippet>&amp;str</CodeSnippet>, <CodeSnippet>String</CodeSnippet>,
        the numeric types, and (of course) what is returned from
        the <CodeSnippet>smd!</CodeSnippet> macro.
      </p>
      <p>
        In addition, types
        like <CodeSnippet>Option&lt;T&gt; where T: Component</CodeSnippet> and&nbsp;
        <CodeSnippet>Vec&lt;T&gt; where T: Component</CodeSnippet> also
        implement <CodeSnippet>Component</CodeSnippet>.
      </p>
      <p>
        <b>Sub-components are interpolated just like regular values.</b> There
        is no distinction between sub-components that take props and those
        that do not. An example:
      </p>
      <p>
        <code>
          let inner_component = smd!(&lt;div&gt;inner&lt;/div&gt;);<br />
          let component_with_props = |s: &amp;'static str| smd!(&#123; s &#125;);<br />
          let outer_component = smd!(&lt;div&gt;<br />
          &nbsp;&nbsp;&#123; inner_component &#125;<br />
          &nbsp;&nbsp;&#123; component_with_props("component with props") &#125;<br />
          &lt;/div&gt;);
        </code>
      </p>
      <p>
        These interpolated components can make use of all of
        the <CodeSnippet>smd!</CodeSnippet> features, such as event handlers, with no
        extra wiring.
      </p>
    </>,
  },
  HANDLING_EVENTS: {
    leftText: <>Handling events</>,
    bodyText: <>
      <p>
        There are two types of events: those that are originate from interactions with
        DOM elements (such as click events), and those that do not (such as hash
        change events). We call these two types of
        events <CodeSnippet>UiEvent</CodeSnippet>s and <CodeSnippet>WindowEvent</CodeSnippet>s,
        and they are added to components in slightly different ways. Consider
        the following example:
      </p>
      <p>
        <code>
          let app = smd!(<br />
          &nbsp;&nbsp;on_hash_change=&#123;|_| log("hash changed")&#125;;<br />
          &nbsp;&nbsp;&lt;div on_click=&#123;|_| log("div clicked")&#125;&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Click me<br />
          &nbsp;&nbsp;&lt;/div&gt;<br />
          );
        </code>
      </p>
      <p>
        Here, we&rsquo;ve created a component that will
        execute <CodeSnippet>log("hash changed")</CodeSnippet> if the hash changes,
        and execute <CodeSnippet>log("div clicked")</CodeSnippet> if the div is clicked.
      </p>
      <p>
        Because they&rsquo;re not associated with any DOM
        element, <CodeSnippet>WindowEvent</CodeSnippet>s are included in the
        beginning of an <CodeSnippet>smd!</CodeSnippet> invocation, and followed
        by a semi-colon. <CodeSnippet>UiEvent</CodeSnippet>s are added directly
        to the DOM element to which they apply.
      </p>
      <p>
        For a complete list
        of <CodeSnippet>WindowEvent</CodeSnippet>s and <CodeSnippet>UiEvent</CodeSnippet>s,
        please see <LinkStyle
          href="https://docs.smithy.rs/smithy_types/enum.UiEvent.html/"
        >
          here
        </LinkStyle> and <LinkStyle
          href="https://docs.smithy.rs/smithy_types/enum.WindowEvent.html"
        >
          here
        </LinkStyle>.
      </p>
      <p>
        Note: by default, events are not listened to and not included in Smithy
        unless you turn on the the related feature
        flag. <Link href="/guide#feature-flags"><LinkStyle>
          See a complete list of feature flags.
        </LinkStyle></Link>
      </p>
    </>,
  },
  MANAGING_STATE: {
    leftText: <>Managing state</>,
    bodyText: <>
      <p>
        Managing state is a fundamental responsibility of any web app. Smithy's
        opinion about managing state is: it doesn&rsquo;t have an opinion. Do whatever
        feels right.
      </p>
      <p>
        Most of the time, the simplest way to manage state will suffice. Take
        a look at this example of a click counter:
      </p>
      <p>
        <code>
          let mut count = 0;<br />
          let app = smd!(<br/>
          &nbsp;&nbsp;&lt;div on_click=&#123;|_| count = count + 1&#125;&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;I have been clicked &#123; count &#125; times.<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br />
          );
        </code>
      </p>
      <p>
        No hullabaloo, no hoopla and no hassle. It just works.
      </p>
      <p>
        Note that this at first looks like it <b>shouldn&rsquo;t compile</b>, because
        there is a mutable reference to <CodeSnippet>count</CodeSnippet> (in
        the <CodeSnippet>on_click</CodeSnippet> event handler) as well as
        another reference to that variable (the one that gets
        rendered). <Link href="/guide#how-smd-works">
          <LinkStyle>How this works is explained in more detail in the guide</LinkStyle>
        </Link>, but the short version of it is that this call
        to <CodeSnippet>smd!</CodeSnippet> is transformed into a large match
        statement, and the multiple references end up in separate branches.
      </p>
      <p>
        Note that there are some caveats when you have nested calls
        to <CodeSnippet>smd!</CodeSnippet>. <Link href="/guide#nested-calls-to-smd">
          <LinkStyle>This section of the guide</LinkStyle>
        </Link> explores that in more detail.
      </p>
    </>,
  },
  INTERACTING_WITH_JAVASCRIPT: {
    leftText: <>
      Interacting with Javascript
    </>,
    bodyText: <>
      <p>
        Interacting with Javascript is as easy as using
        the <LinkStyle href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/">
          <CodeSnippet>web_sys</CodeSnippet>
        </LinkStyle>, <LinkStyle href="https://rustwasm.github.io/wasm-bindgen/api/js_sys/">
          <CodeSnippet>js_sys</CodeSnippet>
        </LinkStyle>, and <LinkStyle href="https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/">
          <CodeSnippet>wasm_bindgen</CodeSnippet>
        </LinkStyle> crates. For example, let&rsquo;s create a component that logs
        a message to the console when you click.
      </p>
      <p>
        <code>
          use web_sys::console::log_1;<br />
          use wasm_bindgen::JsValue::from_str;<br />
          let app = smd!(<br />
          &nbsp;&nbsp;&lt;div on_click=&#123;|_| log_1(from_str("you clicked me!"))&#125; /&gt;<br />
          );
        </code>
      </p>
      <p>
        These libraries are incredibly well designed and hew very closely to the regular
        Javascript, and are fairly easy to pick up and learn.
      </p>
    </>,
  },
  DEPLOYMENT: {
    leftText: <>Deploying to production</>,
    bodyText: <>
      <p>
        Smithy can be deployed to production using
        the <LinkStyle href="https://github.com/rbalicki2/smithy_app_server">
          <CodeSnippet>smithy_app_server</CodeSnippet>
        </LinkStyle> repository. As Smithy matures, the CLI experience
        will also improve.
      </p>
    </>,
  },
};
