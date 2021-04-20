import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  idaSDK: null,
  auth: null,
  loading: {
    auth: true
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_AUTH_LOADING':
      return { ...state, loading: { ...state.loading, auth: true } };
    case 'STOP_AUTH_LOADING':
      return { ...state, loading: { ...state.loading, auth: false } };
    case 'SET_IDA_SDK':
      return { ...state, idaSDK: action.sdk };
    case 'RESET_AUTH':
      return { ...state, auth: null };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };
  const { children } = props;
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node
};

StoreProvider.defaultProps = {
  children: []
};

export default Store;
