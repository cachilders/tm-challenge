import React, { PropTypes } from 'react';
import moment from 'moment';
import { Comment, Icon, Label } from 'semantic-ui-react';

function Post({ avatar, username, postBody, timestamp, privacy }) {
  const timeSince = moment(timestamp).fromNow();
  return (
    <Comment>
      <Comment.Avatar as="a" src={avatar} />
      <Comment.Content>
        <Comment.Text>
          {postBody}
        </Comment.Text>
        {
          privacy === 'public' ?
            <Icon color="red" name="eye" />
          :
            null
        }
        <Comment.Author as="a">{username}</Comment.Author>
        <Comment.Metadata>
          <span>{ timeSince }</span>
          <Comment.Actions>
            <Icon name="reply" size="large" />
            <Icon name="repeat" size="large" />
          </Comment.Actions>
        </Comment.Metadata>
      </Comment.Content>
    </Comment>
  );
}

Post.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  privacy: PropTypes.string.isRequired,
};

export default Post;
