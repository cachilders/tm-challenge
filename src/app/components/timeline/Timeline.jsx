import React, { PropTypes } from 'react';
import { Comment, Segment } from 'semantic-ui-react';
import Post from '../post/Post';

function Timeline({ posts, postsLoading }) {
  return (
    <div>
      {
        postsLoading ?
          <Segment loading basic padded="very" />
        :
          <Segment basic>
            <Comment.Group>
              { posts.map(post => <Post key={post.id} {...post} />) }
            </Comment.Group>
          </Segment>
      }
    </div>
  );
}

Timeline.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
  postsLoading: PropTypes.bool.isRequired,
};

export default Timeline;
