/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // NumPicker
  {
    path: '/numpicker',
    name: 'numpicker.index',
    component: require('@/pages/numpicker/index.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/numpicker',
  },
  {
    path: '/*',
    redirect: '/numpicker',
  },
];
