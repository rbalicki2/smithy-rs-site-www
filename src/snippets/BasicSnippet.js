import React from 'react';

export default () => <code>
  smd!(<br />
  &nbsp;&nbsp;on_hash_change=&#123;on_hash_change_callback&#125;;<br />
  &nbsp;&nbsp;post_render=&#123;post_render_callback&#125;;<br />
  &nbsp;&nbsp;// comments can go anywhere<br />
  &nbsp;&nbsp;&#123; interpolated_item &#125;<br />
  &nbsp;&nbsp;&lt;div<br />
  &nbsp;&nbsp;&nbsp;&nbsp;ref=&#123;&amp;mut my_ref&#125;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;on_click=&#123;handle_on_click&#125;<br />
  &nbsp;&nbsp;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;Text can go inside of DOM nodes<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;hr /&gt;<br />
  &nbsp;&nbsp;&lt;/div&gt;<br />
  &nbsp;&nbsp;But it can also go outside of DOM nodes.<br />
  );
</code>;
