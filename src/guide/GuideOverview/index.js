import React, { Fragment } from 'react';

import sectionData from '../sectionData';
import {
  BodySubTitle,
  LinkStyle,
} from 'src/page-ui';
import Link from 'next/link';
import StateProvider from 'src/util/StateProvider';


export default () => <>
  <StateProvider>{(expanded, isExpanded) =>
    <ul>{
      sectionData.map(section => <Link href={`/guide#${section.anchor}`}>
        <LinkStyle>
          <li>{section.title}</li>
        </LinkStyle>
      </Link>)
    }</ul>
  }</StateProvider>
</>;
