import React, { Component } from 'react';

import { colors } from 'src/style-constants';
import Header from 'src/Header';
import Head from 'src/Head';
import Footer from 'src/Footer';
import GuideSections from 'src/guide/GuideSections';
import GuideOverview from 'src/guide/GuideOverview';

import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  BodyContainer,
} from 'src/page-ui';

export default class Index extends Component {
  static async getInitialProps({ asPath }) {
    return {
      path: asPath,
    };
  }

  render() {
    return <>
      <Head pageTitle="Smithy - Guide" />
      <Header path={this.props.path} />
      <HeadingContainer
        backgroundColor={colors.WHITE}
        textAlign="left"
        paddingTop={5}
        paddingBottom={5}
      >
        <PageTitle>Guide</PageTitle>
        <PageSubtitle color={colors.BLACK} marginBottom={5}>
          Learn to use Smithy like a pro
        </PageSubtitle>
      </HeadingContainer>
      <BodyContainer>
        <GuideOverview />
        <GuideSections />
      </BodyContainer>
      <Footer />
    </>;
  }
}

// supported anchors
// #getting-started
// #smd-syntax
// #feature-flags
// #how-smd-works
// #nested-calls-to-smd

// TODO put this in the guide
// RESPONDING_TO_EVENTS: {
//   leftText: <>Responding to events</>,
//   bodyText: <>
//     <p>Take the following example code:</p>
//     <p>
//       <code>
//         let mut count = 1;<br />
//         let app = smd!(<br/>
//         &nbsp;&nbsp;on_hash_change=&#123;|_| count = 0&#125;;<br />
//         &nbsp;&nbsp;&lt;div on_click=&#123;|_| count = count + 1&#125;&gt;<br />
//         &nbsp;&nbsp;&nbsp;&nbsp;I have been clicked &#123; count &#125; times.<br/>
//         &nbsp;&nbsp;&lt;/div&gt;<br />
//         );
//       </code>
//     </p>
//     <p>
//       How can this compile? There is are multiple mutable references
//       to <CodeSnippet>count</CodeSnippet> (in
//       the <CodeSnippet>on_click</CodeSnippet> event handler and in
//       the <CodeSnippet>on_hash_change</CodeSnippet> event handler), as well as
//       an immutable reference to it (in <CodeSnippet>&#123; count &#125;</CodeSnippet>).
//       In other words, this goes against
//       the <LinkStyle href="https://doc.rust-lang.org/1.8.0/book/references-and-borrowing.html#the-rules">
//         fundamental rules of borrowing in Rust
//       </LinkStyle>, and should not compile!
//     </p>
//     <p>

//     </p>
//   </>,
// },
// CAPTURING_VARIABLES: {
//   leftText: <>Capturing variables</>,
//   bodyText: <>
//     <p>
//       In general, capturing and using variables
//       in <CodeSnippet>smd!</CodeSnippet> invocations is easy: just do it, and it will work.
//       However, this breaks down when it comes to nested macro invocations. For example,
//       the following will not compile:
//     </p>
//     <p>
//       <code>
//       let mut count = Some("some string".to_string());<br />
//       let mut byah = smd!(&#123;<br />
//       &nbsp;&nbsp;match count &#123;<br />
//       &nbsp;&nbsp;&nbsp;&nbsp;Some(_) =&gt; smd_borrowed!(&gt;div on_click=&#123;|_| count = None&#125;&lt;found some&gt;/div&lt;),<br />
//       &nbsp;&nbsp;&nbsp;&nbsp;None =&gt; smd!(none),<br />
//       &nbsp;&nbsp;&#125;<br />
//       &#125;);
//       </code>
//     </p>
//     <p>
//       There are two variants of the <CodeSnippet>smd!</CodeSnippet> macro. The
//       aforementioned one, and <CodeSnippet>smd_borrowed!</CodeSnippet>. (These names
//       are not intuitive, and will change.) Each of these return a wrapper 
//       around <CodeSnippet>Box&lt;FnMut(Phase) -> PhaseResult + 'a&gt;</CodeSnippet>.
//       In the <CodeSnippet>smd!</CodeSnippet> case, this is
//       a <CodeSnippet>move</CodeSnippet> closure. In
//       the <CodeSnippet>smd_borrowed!</CodeSnippet> case, it is not.
//     </p>
//     <p>
//       A move closure captures its 
//     </p>
//     <p>
//       Any variable that is referenced in an <CodeSnippet>smd!</CodeSnippet> macro
//       invocation is captured 
//     </p>
//   </>,
// },