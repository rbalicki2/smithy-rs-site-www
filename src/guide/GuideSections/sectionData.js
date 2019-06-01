import {
  BodySectionTitle,
  MultilineCodeSnippet,
  LinkStyle,
} from 'src/page-ui';

export default [
  {
    anchor: 'smd-syntax',
    title: <><code>smd!</code> syntax</>,
    body: <>
      <p>
        The <code>smd!</code> syntax is as follows:
      </p>
      <p>
        <MultilineCodeSnippet>
          <code>
            smd!(<br />
            &nbsp;&nbsp;// any number of window_event_handlers;<br />
            &nbsp;&nbsp;// optional post_render;<br />
            &nbsp;&nbsp;// any number of nodes<br />
            )<br />
          </code>
        </MultilineCodeSnippet>
      </p>
      <BodySectionTitle>
        <code>window_event_handlers</code>
      </BodySectionTitle>
      <p>
        A <code>window_event_handler</code> takes the following form:
      </p>
      <p>
        <MultilineCodeSnippet>
          <code>
            name_of_event_handler=&#123;callback&#125;;
          </code>
        </MultilineCodeSnippet>
      </p>
      <p>
        A complete list of <code>window_event_handler</code>s can be
        found <LinkStyle
          href="https://docs.smithy.rs/smithy/types/enum.WindowEvent.html"
        >
          here
        </LinkStyle>.
      </p>
    </>,
  },
];
