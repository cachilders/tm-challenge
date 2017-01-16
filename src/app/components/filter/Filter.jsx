import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

function Filter({ activeFilter, filterPosts }) {
  return (
    <Button.Group widths="3">
      <Button
        active={activeFilter === 'all'}
        value="all" toggle
        onClick={() => filterPosts('all')}
      >ALL</Button>
      <Button
        active={activeFilter === 'public'}
        value="public" toggle
        onClick={() => filterPosts('public')}
      >PUBLIC</Button>
      <Button
        active={activeFilter === 'private'}
        value="private" toggle
        onClick={() => filterPosts('private')}
      >PRIVATE</Button>
    </Button.Group>
  );
}

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filterPosts: PropTypes.func.isRequired,
};

export default Filter;
