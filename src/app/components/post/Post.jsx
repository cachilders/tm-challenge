import React, { PropTypes } from 'react';
import { Comment, Icon } from 'semantic-ui-react';

function Post() {
  return (
    <Comment>
      <Comment.Avatar as="a" src="http://semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo
        </Comment.Text>
        <Comment.Author as="a">Author McAuthorton</Comment.Author>
        <Comment.Metadata>
          <span>Posted 10 Minutes Ago</span>
          <Comment.Actions>
            <Icon name="reply" size="large" />
            <Icon name="repeat" size="large" />
          </Comment.Actions>
        </Comment.Metadata>
      </Comment.Content>
    </Comment>
  );
}

Post.propTypes = {};

export default Post;
