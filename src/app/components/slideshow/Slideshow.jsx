import React, { PropTypes } from 'react';
import {
  Segment,
  Image,
  Header,
  Label,
  Icon } from 'semantic-ui-react';

function Slideshow({
  slidesLoading,
  slides,
  slidesIndex,
  navigateSlideshow,
}) {
  return (
    <div>
      {
        slidesLoading ?
          <Segment loading basic padded="very" />
        :
          <div>
            <Segment basic>
              <Image src={slides[slidesIndex].url} fluid />
              {
                slidesIndex > 0 ?
                  <Label as="a" attached="bottom left" size="large" onClick={() => navigateSlideshow(-1)}>
                    <span className="center"><Icon name="arrow circle left" size="big" fitted /></span>
                  </Label>
                :
                  null
              }
              {
                slidesIndex < slides.length - 1 ?
                  <Label as="a" attached="bottom right" size="large" onClick={() => navigateSlideshow(1)}>
                    <span className="center"><Icon name="arrow circle right" size="big" fitted /></span>
                  </Label>
                :
                  null
              }
            </Segment>
            <Header textAlign="center" disabled>{slides[slidesIndex].title}</Header>
          </div>
      }
    </div>
  );
}

Slideshow.propTypes = {
  slidesLoading: PropTypes.bool.isRequired,
  slides: PropTypes.arrayOf.isRequired,
  slidesIndex: PropTypes.number.isRequired,
  navigateSlideshow: PropTypes.func.isRequired,
};

export default Slideshow;
