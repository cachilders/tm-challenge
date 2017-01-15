import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

function Filter() {
  return (
    <Button.Group widths="3">
      <Button toggle>ALL</Button>
      <Button toggle>PUBLIC</Button>
      <Button toggle>PRIVATE</Button>
    </Button.Group>
  );
}

Filter.PropTypes = {};

export default Filter;
