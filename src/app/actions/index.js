import axios from 'axios';

export const LOAD_POSTS = 'LOAD_POSTS';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const NEW_POST = 'NEW_POST';
export const LOAD_SLIDES = 'LOAD_SLIDES';
export const CHANGE_SLIDE = 'CHANGE_SLIDE';

function updateText(postBody) {
  return {
    type: UPDATE_TEXT,
    postBody,
  };
}

function newPost(post) {
  return {
    type: NEW_POST,
    post,
  };
}

function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts,
  };
}

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

function fetchPosts() {
  return (dispatch) => {
    axios.get('/json?filename=posts')
    .then(res => res.data)
    .then(posts => dispatch(loadPosts(posts)));
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
  return (dispatch) => {
    dispatch(fetchPosts());
    dispatch(fetchSlides());
  };
}

export function handleText(text) {
  return (dispatch) => {
    if (text.length <= 140) {
      return dispatch(updateText(text));
    }
  };
}

export function publish(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState().notify;
    const post = {
      username: state.username,
      avatar: state.avatar,
      postBody: state.postBody,
      timestamp: new Date(),
      privacy: state.activeFilter === 'private' ? 'private' : 'public',
      postId: state.nextPost,
    };
    dispatch(newPost(post));
  };
}

export function navigateSlideshow(step) {
  return (dispatch, getState) => {
    const index = getState().notify.slidesIndex + step;
    dispatch(changeSlide(index));
  };
}
