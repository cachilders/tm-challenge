import { combineReducers } from 'redux';
import {
  LOAD_SLIDES,
  CHANGE_SLIDE } from '../actions/index';

const initialState = {
  slides: [],
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
