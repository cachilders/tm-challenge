import React, { PropTypes } from 'react';
import { Form, Button } from 'semantic-ui-react';

function Compose() {
  return (
    <Form>
      <Form.Group inline>
        <Form.TextArea name="post" placeholder="Say something..." rows="3" width={12} />
        <Button type="submit" size="massive">POST</Button>
      </Form.Group>
    </Form>
  );
}

Compose.PropTypes = {};

export default Compose;
