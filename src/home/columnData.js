import React from 'react';
import { BodyText } from 'src/page-ui';

export default [
  {
    title: 'Write Idiomatic Rust',
    bodyText: <BodyText>
      Smithy apps are written using idiomatic Rust code. You won't learn
      to build Smithy apps, you&rsquo;ll learn Rust.
    </BodyText>,
  },
  {
    title: 'Component-Based',
    bodyText: <>
      <BodyText>
        Smithy apps are built up from smaller components.
      </BodyText>
      <BodyText>
        Encapsulation? Yes, please!
      </BodyText>
    </>,
  },
  {
    title: 'Typesafe',
    bodyText: <BodyText>
      If you build a Smithy app, you give up very few of the compiler's
      guarantees. Smithy is the most typesafe framework for building
      WebAssembly apps using Rust.
    </BodyText>,
  },
  {
    title: 'Unopinionated and Boilerplate-Free',
    bodyText: <>
      <BodyText>
        Manage your app's state however you want to. And don&rsquo;t write extra
        code to do so.
      </BodyText>
      <BodyText>
        Smithy will give you the support you need, and then get out of your way.
      </BodyText>
    </>,
  },
];