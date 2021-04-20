import { init } from '../../libs/ida.lib';

/**
 * initilize ida auth listener, stop de verify authentication
 * loading
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const initIDA = async (dispatch, router) => {
  const sdk = await init({
    onAuthChange: (auth) => {
      if (auth) {
        router.push('quem-somos');
      } else {
        dispatch({ type: 'STOP_AUTH_LOADING' });
      }

      // setta o usuário IDa na context API
      dispatch({
        type: 'SET_AUTH',
        auth
      });
    }
  });

  // setta o sdk do IDa na context API
  dispatch({ type: 'SET_IDA_SDK', sdk });
  dispatch({ type: 'STOP_AUTH_LOADING' });
};

export default initIDA;
