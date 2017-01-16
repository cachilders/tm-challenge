import React, { PropTypes } from 'react';
import { Comment, Segment } from 'semantic-ui-react';
import Post from '../post/Post';

function Timeline({ filteredPosts, postsLoading }) {
  return (
    <div>
      {
        postsLoading ?
          <Segment loading basic padded="very" />
        :
          <Segment basic>
            <Comment.Group>
              { filteredPosts.map(post => <Post key={post.id} {...post} />) }
            </Comment.Group>
          </Segment>
      }
    </div>
  );
}

Timeline.propTypes = {
  filteredPosts: PropTypes.arrayOf.isRequired,
  postsLoading: PropTypes.bool.isRequired,
};

export default Timeline;
