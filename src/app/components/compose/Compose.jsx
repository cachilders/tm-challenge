import React, { PropTypes } from 'react';
import { Form, Button } from 'semantic-ui-react';

function Compose({ postBody, handleText, publish }) {
  return (
    <Form>
      <Form.Group inline>
        {
          postBody.length !== 140 ?
            <Form.TextArea
              name="post"
              value={postBody}
              onChange={e => handleText(e.target.value)}
              placeholder="Say something..."
              rows="3" width={12}
            />
          :
            <Form.TextArea
              name="post"
              value={postBody}
              onChange={e => handleText(e)}
              placeholder="Say something..."
              rows="3" width={12}
              error
            />
        }
        <Button onClick={e => publish(e)} size="massive">POST</Button>
      </Form.Group>
    </Form>
  );
}

Compose.propTypes = {
  postBody: PropTypes.string.isRequired,
  handleText: PropTypes.func.isRequired,
  publish: PropTypes.func.isRequired,
};

export default Compose;
