import React, { PropTypes } from 'react';
import { Comment } from 'semantic-ui-react';
import Post from '../post/Post';

let mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Timeline() {
  return (
    <Comment.Group>
      { mock.map(key => <Post key={key} />) }
    </Comment.Group>
  );
}

Timeline.propTypes = {};

export default Timeline;
