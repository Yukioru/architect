export default app => ({
  async action({ next, page }) {
    return page
      .meta(app.config.site)
      .errorLayout(import('../ui/templates/Error'))
      .next(next);
  },
  children: [
    {
      path: '',
      ...require('./landing').default,
    },
    {
      path: '/cabinet',
      ...require('./cabinet').default(app),
    },
    {
      path: '/admin',
      ...require('./admin').default(app),
    },
    {
      path: '/auth',
      ...require('./auth').default(app),
    },
    {
      path: '(.*)',
      action({ path }) {
        throw `Not found: ${path}`;
      },
    },
  ],
});
