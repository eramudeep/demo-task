import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser, setLogin } from './authActions';

export const mapStateToProps = (state) => ({
  ...state
});

export const mapDispatchToProps = {
  setLogin$:setLogin,
  logoutUser$:logoutUser
};

export const ReduxWrapper = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default (WrapperComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(ReduxWrapper(WrapperComponent));
