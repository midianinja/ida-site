import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Store from '../../store/Store';
import { initIDA } from './main.controller';

/**
 * This render the main components. The main component controls authorize life cycle
 * initilizing IDa SDK and build the link with the S.O.M API. Also, the main component
 * defines the resets stylesheets
 * @param {object} props component props
 * @param {React.Component} props.children page to be render
 * @returns contains PrimaryButton Component
 */
const Main = ({ children }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    initIDA(dispatch, router);
  }, []);

  if (state.loading.auth) return null;

  return children;
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
