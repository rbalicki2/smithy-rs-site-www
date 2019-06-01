import React, { Fragment } from 'react';

import {
  BodySubTitle,
  BodyText,
  Anchor,
} from 'src/page-ui';
import sectionData from './sectionData';

export default () => sectionData.map(data => <Fragment key={data.anchor}>
  <BodySubTitle>
    <Anchor name={data.anchor} />
    {data.title}
  </BodySubTitle>
  <BodyText>
    { data.body }
  </BodyText>
</Fragment>);
