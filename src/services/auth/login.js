import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (token) => {
  store.dispatch('auth/login', token);
  // get user account //

  // navigate to home route
  Vue.router.push({
    name: 'home.index',
  });
};

// When the request fails
const failed = () => {
};

export default (user) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   * Vue.$http.post('/auth/login', user)
   *   .then((response) => {
   *     success(response);
   *   })
   *   .catch((error) => {
   *     failed(error);
   *   });
   */
  if (!user.email || !user.password) {
    failed();
  } else {
    success('RandomGeneratedToken');
  }
};
