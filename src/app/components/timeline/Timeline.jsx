import React, { PropTypes } from 'react';
import { Comment, Segment } from 'semantic-ui-react';
import Post from '../post/Post';

const click = {};

function Timeline({ filteredPosts, postsLoading, handleText }) {
  click.handleText = handleText;
  return (
    <div>
      {
        postsLoading ?
          <Segment loading basic padded="very" />
        :
          <Segment basic>
            <Comment.Group minimal>
              { filteredPosts.map(post => <Post key={post.id} {...Object.assign(click, post)} />) }
            </Comment.Group>
          </Segment>
      }
    </div>
  );
}

Timeline.propTypes = {
  filteredPosts: PropTypes.arrayOf.isRequired,
  postsLoading: PropTypes.bool.isRequired,
  handleText: PropTypes.func.isRequired,
};

export default Timeline;
