import React, { Fragment } from 'react';

import sectionData from '../sectionData';
import {
  BodySubTitle,
  LinkStyle,
} from 'src/page-ui';
import Link from 'next/link';

export default () => <>
  <ul>{
    sectionData.map(section => <Link key={section.anchor} href={`/guide#${section.anchor}`}>
      <LinkStyle>
        <li>{section.title}</li>
      </LinkStyle>
    </Link>)
  }</ul>
</>;
