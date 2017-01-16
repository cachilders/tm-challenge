import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import {
  loadInitialState,
  navigateSlideshow } from '../actions/index';

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
    slides,
    slidesLoading,
    slidesIndex } = state.notify;
  return {
    slides,
    slidesLoading,
    slidesIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitialState: () => dispatch(loadInitialState()),
    navigateSlideshow: step => dispatch(navigateSlideshow(step)),
  };
}

App.propTypes = {
  children: PropTypes.shape.isRequired,
  loadInitialState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
