import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

function Filter({ activeFilter }) {
  return (
    <Button.Group widths="3">
      <Button active={activeFilter === 'all'} value="all" toggle>ALL</Button>
      <Button active={activeFilter === 'public'} value="public" toggle>PUBLIC</Button>
      <Button active={activeFilter === 'private'} value="private" toggle>PRIVATE</Button>
    </Button.Group>
  );
}

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
};

export default Filter;
