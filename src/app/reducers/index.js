import { combineReducers } from 'redux';
import {
  LOAD_SLIDES,
  CHANGE_SLIDE,
  UPDATE_TEXT,
  NEW_POST } from '../actions/index';

const initialState = {
  posts: [],
  filteredPosts: [],
  slides: [],
  username: 'User Userton',
  avatar: 'avi/Cole.png',
  postBody: '',
  nextPost: 1,
  activeFilter: 'public',
  slidesLoading: true,
  slidesIndex: null,
};

function notify(state = initialState, action) {
  switch (action.type) {
    case LOAD_SLIDES:
      return Object.assign({}, state, {
        slides: action.slides,
        slidesLoading: false,
        slidesIndex: 0,
      });
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        postBody: action.postBody,
      });
    case NEW_POST:
      return Object.assign({}, state, {
        posts: [...state.posts, action.post],
        nextPost: state.nextPost + 1,
        postBody: '',
      });
    case CHANGE_SLIDE:
      return Object.assign({}, state, {
        slidesIndex: action.index,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  notify,
});

export default rootReducer;
