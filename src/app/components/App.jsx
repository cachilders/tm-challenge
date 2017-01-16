import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import {
  loadInitialState,
  filterPosts,
  navigateSlideshow,
  handleText,
  publish } from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.loadInitialState();
  }

  render() {
    return (
      <Container fluid>
        {React.cloneElement(this.props.children, { ...this.props })}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const {
    postsLoading,
    filteredPosts,
    username,
    postBody,
    activeFilter,
    slides,
    slidesLoading,
    slidesIndex } = state.notify;
  return {
    postsLoading,
    filteredPosts,
    username,
    postBody,
    activeFilter,
    slides,
    slidesLoading,
    slidesIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitialState: () => dispatch(loadInitialState()),
    filterPosts: newFilter => dispatch(filterPosts(newFilter)),
    navigateSlideshow: step => dispatch(navigateSlideshow(step)),
    handleText: text => dispatch(handleText(text)),
    publish: e => dispatch(publish(e)),
  };
}

App.propTypes = {
  children: PropTypes.shape.isRequired,
  loadInitialState: PropTypes.func.isRequired,
  filterPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
