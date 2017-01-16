import axios from 'axios';

export const LOAD_SLIDES = 'LOAD_SLIDES';
export const CHANGE_SLIDE = 'CHANGE_SLIDE';

function loadSlides(slides) {
  return {
    type: LOAD_SLIDES,
    slides,
  };
}

function changeSlide(index) {
  return {
    type: CHANGE_SLIDE,
    index,
  };
}

function fetchSlides() {
  return (dispatch) => {
    axios.get('/json?filename=slideshow')
    .then(res => res.data)
    .then(slides => dispatch(loadSlides(slides)));
  };
}

export function loadInitialState() {
  return dispatch => dispatch(fetchSlides());
}

export function navigateSlideshow(step) {
  return (dispatch, getState) => {
    const index = getState().notify.slidesIndex + step;
    dispatch(changeSlide(index));
  };
}
