import React from 'react';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import gridListCode from '!raw!material-ui/lib/grid-list/grid-list';
import gridTileCode from '!raw!material-ui/lib/grid-list/grid-tile';
import gridListReadmeText from './README';
import gridListExampleSimpleCode from '!raw!./ExampleSimple';
import GridListExampleSimple from './ExampleSimple';
import gridListExampleComplexCode from '!raw!./ExampleComplex';
import GridListExampleComplex from './ExampleComplex';

const descriptions = {
  simple: 'A simple example of a scrollable `GridList`.',
  complex: 'This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the ' +
  'tile. The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.',
};

const GridListPage = () => (
  <div>
    <MarkdownElement text={gridListReadmeText} />
    <CodeExample
      title="Simple example"
      description={descriptions.simple}
      code={gridListExampleSimpleCode}
    >
      <GridListExampleSimple />
    </CodeExample>
    <CodeExample
      title="Complex example"
      description={descriptions.complex}
      code={gridListExampleComplexCode}
    >
      <GridListExampleComplex />
    </CodeExample>
    <PropTypeDescription header="### GridList Properties" code={gridListCode}/>
    <PropTypeDescription header="### GridTile Properties" code={gridTileCode}/>
  </div>
);

export default GridListPage;
