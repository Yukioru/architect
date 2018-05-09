export default app => ({
  async action({ next, page }) {
    return page
      .layout(import('../../ui/templates/Fuild'))
      .next(next);
  },
  children: [
    {
      path: '/',
      async action({ page }) {
        return page
          .redirect('/cabinet/dashboard');
      },
    },
    {
      path: '/dashboard',
      ...require('./dashboard').default(app),
    },
  ],
});
