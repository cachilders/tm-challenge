import { combineReducers } from 'redux';
import {
  LOAD_POSTS,
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
  postsLoading: true,
  slidesIndex: null,
};

function notify(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return Object.assign({}, state, {
        posts: [...action.posts],
        postsLoading: false,
      });
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        postBody: action.postBody,
      });
    case NEW_POST:
      return Object.assign({}, state, {
        posts: [action.post, ...state.posts],
        nextPost: state.nextPost + 1,
        postBody: '',
      });
    case LOAD_SLIDES:
      return Object.assign({}, state, {
        slides: action.slides,
        slidesLoading: false,
        slidesIndex: 0,
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
