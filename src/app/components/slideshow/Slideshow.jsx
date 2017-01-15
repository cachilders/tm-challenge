import React, { PropTypes } from 'react';
import { Segment, Image, Header, Label, Icon } from 'semantic-ui-react';

function Slideshow() {
  return (
    <div>
      <Segment basic>
        <Image src="/assets/images/wireframe/image.png" fluid />
        <Label as="a" attached="bottom left" size="large">
          <span className="center"><Icon name="arrow circle left" size="big" fitted /></span>
        </Label>
        <Label as="a" attached="bottom right" size="large">
          <span className="center"><Icon name="arrow circle right" size="big" fitted /></span>
        </Label>
      </Segment>
      <Header textAlign="center" disabled>Image Title</Header>
    </div>
  );
}

Slideshow.PropTypes = {};

export default Slideshow;
