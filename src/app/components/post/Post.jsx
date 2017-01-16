import React, { PropTypes } from 'react';
import moment from 'moment';
import { Comment, Icon } from 'semantic-ui-react';

function Post({ avatar, username, postBody, timestamp, privacy, handleText }) {
  const timeSince = moment(timestamp).fromNow();
  const reply = `reply:@${username} `;
  const renotify = `renotify:${postBody.slice(0, 131)}`;
  return (
    <Comment>
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Text>
          {postBody}
        </Comment.Text>
        {
          privacy !== 'public' ?
            <Icon color="red" name="eye" />
          :
            null
        }
        <Comment.Metadata>
          <Comment.Author>{username}</Comment.Author>
          <span>{ timeSince }</span>
        </Comment.Metadata>
        <Comment.Actions>
          <Comment.Action>
            <Icon name="reply" onClick={() => handleText(reply)} />
          </Comment.Action>
          <Comment.Action>
            <Icon name="repeat" onClick={() => handleText(renotify)} />
          </Comment.Action>
        </Comment.Actions>
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
  handleText: PropTypes.func.isRequired,
};

export default Post;
