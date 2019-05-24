import {
  CodeSnippet,
  MultilineCodeSnippet,
} from 'src/page-ui';
import Link from 'next/link';

export default {
  SYNTAX: {
    leftText: <><code>smd!</code> syntax</>,
    bodyText: <>
      <p>
        Smithy includes the <CodeSnippet>smd!</CodeSnippet> macro, which has
        an easy-to-learn syntax.
      </p>
      <p>
        Consider the following:
      </p>
      <p>
        <MultilineCodeSnippet>
          <code>
            let my_app = smd!(<br />
            &nbsp;&nbsp;on_hash_change=&#123;respond_to_hash_change_event&#125;;<br />
            &nbsp;&nbsp;post_render=&#123;post_render_callback&#125;;<br />
            &nbsp;&nbsp;// comments can go anywhere<br />
            &nbsp;&nbsp;&#123; interpolated_item &#125;<br />
            &nbsp;&nbsp;&lt;div<br />
            &nbsp;&nbsp;&nbsp;&nbsp;ref=&#123;my_ref&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;on_click=&#123;handle_on_click&#125;<br />
            &nbsp;&nbsp;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Text can go inside of DOM nodes...<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;hr /&gt;<br />
            &nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;But it can also go outside of DOM nodes.<br />
            );
          </code>
        </MultilineCodeSnippet>
      </p>
      <p>
        Hopefully, this will be approachable to those who have used
        React&rsquo;s <CodeSnippet>jsx</CodeSnippet> syntax.
      </p>
      <p>
        See a complete description of
        the <CodeSnippet>smd!</CodeSnippet> syntax <Link href="/guide#smd">here</Link>.
      </p>
    </>,
  },
  INTERPOLATION: {
    leftText: <>Interpolation</>,
    bodyText: <>Interpolate anything</>,
  },
  CAPTURING_VARIABLES: {
    leftText: <>Capturing variables</>,
    bodyText: <>variables</>,
  },
  RESPONDING_TO_EVENTS: {
    leftText: <>Responding to events</>,
    bodyText: <>events</>,
  },
  INTERACTING_WITH_JAVASCRIPT: {
    leftText: <>Interacting with Javascript</>,
    bodyText: <>js</>,
  },
  DEPLOYMENT: {
    leftText: <>Deploying to production</>,
    bodyText: <>deploys</>,
  },
};
