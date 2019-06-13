import {
  BodySectionTitle,
  MultilineCode,
  LinkStyle,
} from 'src/page-ui';
import BasicSnippet from 'src/snippets/BasicSnippet';

const GIST_URL = 'https://gist.github.com/rbalicki2/b125a403cb327738b35d6a6e42a0191f';

export default [
  {
    anchor: 'getting-started',
    title: 'Getting started',
    body: 'TODO this section',
  },
  {
    anchor: 'smd-syntax',
    title: <><code>smd!</code> syntax</>,
    body: <>
      <p>
        The syntax to use when invoking the <code>smd!</code> and <code>smd_no_move!</code> macros
        is as follows:
      </p>
      <MultilineCode>
        smd!(<br />
        &nbsp;&nbsp;// any number of window_event_handlers;<br />
        &nbsp;&nbsp;// optional post_render block;<br />
        &nbsp;&nbsp;// any number of nodes<br />
        )<br />
      </MultilineCode>

      <BodySectionTitle><code>window_event_handler</code></BodySectionTitle>
      <p>
        A <code>window_event_handler</code> takes the following form:
      </p>
      <MultilineCode>
        name_of_event_handler=&#123;callback&#125;;
      </MultilineCode>
      <p>
        (The semicolon is significant.)
        The callback will take a single parameter, the event. The type of event depends
        on the event handler.
        A complete list of <code>window_event_handler</code>s and associated events can be
        found <LinkStyle
          href="https://docs.smithy.rs/smithy/types/enum.WindowEvent.html"
        >
          here
        </LinkStyle>.
      </p>

      <BodySectionTitle><code>post_render</code> block</BodySectionTitle>
      <p>
        A <code>post_render</code> block takes the following form:
      </p>
      <MultilineCode>
        post_render=&#123;callback&#125;;
      </MultilineCode>
      <p>
        (The semicolon is significant.)
        The callback does not accept any parameters.
      </p>

      <BodySectionTitle><code>node</code></BodySectionTitle>
      <p>
        A node takes the following form:
      </p>
      <MultilineCode>
        string | interpolated_item | dom_node
      </MultilineCode>

      <BodySectionTitle><code>string</code></BodySectionTitle>
      <p>
        Most strings are valid within an invocation to <code>smd!</code>. For
        example: <code>smd!(hello world)</code> or <code>smd!(123 " yaya " #123 *&amp;^%$#@)</code>.
      </p>
      <p>
        Within a string, quotes must be matched. In addition, there are known issues with braces
        (<code>(</code>, <code>)</code>, <code>[</code> and <code>]</code>). If you intend to need
        to use these characters, it is best to interpolate a string or character. For
        example, <code>smd!({')'})</code>.
      </p>
      <p>
        Within a string, you cannot use the <code>&lt;</code> character or curly braces
        (<code>&#123;</code> and <code>&#125;</code>).
      </p>
      <p>These restrictions will be loosened as bugs are worked out.</p>

      <BodySectionTitle><code>interpolated_item</code></BodySectionTitle>
      <p>
        Any item which implements <code>Component</code> can be interpolated by placing it between
        curly braces. <code>Component</code> is
        implemented for many of the common types, such as <code>f32</code>, <code>String</code>, etc.
      </p>
      <p>
        See <LinkStyle href="https://docs.smithy.rs/smithy/types/trait.Component.html">here</LinkStyle> for
        a complete list of types for which <code>Component</code> has already been implemented.
      </p>
      <p>
        For example:
      </p>
      <MultilineCode>smd!(&#123; 123 &#125;&#123; "hello" &#125;&#123; another_component &#125;&#123; vec![1,2,3] &#125;)</MultilineCode>

      <BodySectionTitle><code>dom_node</code></BodySectionTitle>
      <p>
        <code>dom_node</code>s in <code>smd!</code> invocations are either self-closing or not self-closing.
        Self-closing <code>dom_node</code>s are expressed as follows:
      </p>
      <MultilineCode>
        &lt;name-of-dom-node<br />
        &nbsp;&nbsp;any number of attributes, refs and ui_event_handlers<br />
        &gt;<br />
        &nbsp;&nbsp;any number of nodes<br />
        &lt;/name-of-dom-node&gt;<br />
      </MultilineCode>
      <p>Self closing <code>dom_node</code>s are defined as follows:</p>
      <MultilineCode>
        &lt;name-of-dom-node<br />
        &nbsp;&nbsp;any number of attributes, ref blocks and ui_event_handlers<br />
        /&gt;
      </MultilineCode>

      <BodySectionTitle><code>attribute</code></BodySectionTitle>
      <p>
        An attribute ends up in the final DOM. It takes the form:
      </p>
      <MultilineCode>
        attribute=&#123;value&#125;
        // or
        attribute
        // or
        attribute="value"
      </MultilineCode>
      <p>
        For example, a link with three attributes:
      </p>
      <MultilineCode>
        &lt;a
          class=&#123;link_class&#125;
          href
          target="_blank"
        /&gt;
      </MultilineCode>

      <BodySectionTitle><code>ref</code> block</BodySectionTitle>
      <p>
        A ref is a reference to the underlying DOM node, which will be populated
        before the post-render phase, and thus accessible in any post-render callbacks.
        It takes the following form:
      </p>
      <MultilineCode>ref=&#123; &amp;mut el_opt &#125;</MultilineCode>
      <p>
        <code>el_opt</code> has the type <code>Option&lt;web_sys::HtmlElement&gt;</code>.
      </p>

      <BodySectionTitle><code>ui_event_handler</code></BodySectionTitle>
      <p>Like <code>window_event_handler</code>s, these take the form:</p>
      <MultilineCode>name_of_event=&#123;callback&#125;</MultilineCode>
      <p>Though they are not followed by semicolons.</p>
      <p>
        The callback will take a single parameter, the event. The type of event
        depends on the event handler.
        A complete list of <code>ui_event_handler</code>s and associated events can be
        found <LinkStyle
          href="https://docs.smithy.rs/smithy/types/enum.UiEvent.html"
        >
          here
        </LinkStyle>.
      </p>
      <p>That&rsquo;s it! That&rsquo;s the <code>smd!</code> syntax.</p>
    </>,
  },
  {
    anchor: 'feature-flags',
    title: 'Feature flags',
    body: <>
      <p>
        Every event handler is only accessible if the appropriate feature flag is turned on.
        Fortunately, there is a feature flag <code>all-events</code> which will cause all
        event handlers to become available.
      </p>
      <p><i>
        In local development, for the <LinkStyle href="/examples/router/">router example</LinkStyle>,
        enabling all features adds 50kb to the payload. In production, this would be much less.
      </i></p>
      <p>
        To enable a Smithy feature, add it to your Cargo.toml as follows:
      </p>
      <MultilineCode>
      smithy = &#123; version = "0.0.4", features = ["all-events"], default-features = false &#125;
      </MultilineCode>
      <p>A complete list of supported features is as follows:</p>
      <MultilineCode>
        all-events<br />
        clipboard-events<br />
        keyboard-events<br />
        focus-events<br />
        input-events<br />
        mouse-events<br />
        pointer-events<br />
        select-events<br />
        touch-events<br />
        scroll-events<br />
        image-events<br />
        animation-events<br />
        transition-events<br />
        toggle-events<br />
        before-unload-events<br />
        hash-change-events<br />
        pop-state-events<br />
        promise-rejection-events<br />
        debug-logs<br />
        smd-logs<br />
      </MultilineCode>
    </>,
  },
  {
    anchor: 'how-smd-works',
    title: <>How <code>smd!</code> works under the hood</>,
    body: <>
      <p>
        <code>smd!</code> and <code>smd_no_move!</code> are macros that transform something like
      </p>
      <MultilineCode>
        <BasicSnippet />
      </MultilineCode>
      <p>
        into <LinkStyle href={GIST_URL}>this</LinkStyle>. You can cause this to be printed
        when compiling by enabling the <code>smd-logs</code> feature.
      </p>
      <p>
        The most important thing to do note is that this turns into a function with
        one massive match statement.
        This means that if there are multiple callbacks that take mutable references to a single
        variable, <i><code>smd!</code> continues to work!</i>
      </p>
      <p>
        The other thing to note is that <code>smd!</code> produces <code>move</code> closures,
        while <code>smd_no_move!</code> does
        not. <LinkStyle href="#nested-calls-to-smd">See why that matters.</LinkStyle>
      </p>
    </>,
  },
  {
    anchor: 'nested-calls-to-smd',
    title: <>Nesting calls to <code>smd!</code></>,
    body: <>
      <p>
        The <code>smd!</code> and <code>smd_no_move!</code> macros produce
        a <code>SmithyComponent</code>, a wrapper
        around <code>Box&lt;FnMut(Phase) -&gt; PhaseResult&gt;</code>. In the <code>smd!</code> case,
        this wrapper is a <code>move</code> closure. In the <code>smd_no_move!</code> case,
        it is not.
      </p>
      <p>
        This is important. Imagine you have a function that returns a <code>SmithyComponent</code>,
        which renders a string. You might write it like this:
      </p>
      <MultilineCode>
        fn&lt;'a&gt; render_message() -> SmithyComponent&lt;'a&gt; &#123; <br />
        &nbsp;&nbsp;let message = "hello, world";<br />
        &nbsp;&nbsp;smd!(&#123; message &#125;)<br />
        &#125;
      </MultilineCode>
      <p>
        If the resulting closure was not <code>move</code>, then <code>message</code> would go
        out of scope and be dropped, while a reference to it remained in the
        returned <code>SmithyComponent</code>. So, the outermost component that refers to other
        variables must be a <code>move</code> closure.
      </p>
      <p>
        Now, imagine there are nested calls to <code>smd!</code>, as in the following example:
      </p>
      <MultilineCode>
        let mut some_vec: Vec&lt;()&gt; = vec![];<br />
        let app = smd!(<br />
        &nbsp;&nbsp;&#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;smd!(<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div on_click=&#123;|_| some_vec.push(())&#125; /&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;)<br />
        &nbsp;&nbsp;&#125;<br />
        );<br />
      </MultilineCode>
      <p>
        <i>
          While this example may appear facetious, such situations happen often. For example,
          they can occur
          when matching over an enum, and changing the value of this enum. This is merely a
          minimal example.
        </i>
      </p>
      <p>
        This will refuse to compile, with the error
        message <code>cannot move out of captured variable in an `FnMut` closure</code>.
        Why does this happen?
      </p>
      <p>
        The reason is that the outer call to <code>smd!</code> creates a wrapper
        around an <code>FnMut</code> closure, meaning one that can be called multiple
        times. In order to do this, it takes ownership of <code>some_vec</code>.
      </p>
      <p>
        The inner call to <code>smd!</code> also takes ownership
        of <code>some_vec</code> (because that variable is used in the closure).
        But this means that the outer <code>smd!</code> invocation cannot be called
        multiple times!
      </p>
      <p>
        There are several ways out of this conundrum. For example, avoiding
        nested calls to <code>smd!</code>. However, this will often be infeasible,
        and in those cases you can use the <code>smd_no_move!</code> macro.
      </p>
      <p>
        <code>smd_no_move!</code> does the same thing as <code>smd!</code>,
        but it creates a non-move closure. Changing the inner macro invocation
        to <code>smd_no_move!</code> will cause this code to compile:
      </p>
      <MultilineCode>
        let mut some_vec: Vec&lt;()&gt; = vec![];<br />
        let app = smd!(<br />
        &nbsp;&nbsp;&#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;smd_no_move!(<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div on_click=&#123;|_| some_vec.push(())&#125; /&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;)<br />
        &nbsp;&nbsp;&#125;<br />
        );<br />
      </MultilineCode>
    </>,
  },
];

