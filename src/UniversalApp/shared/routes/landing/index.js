export default () => ({
  async action({ next, page }) {
    return page
      .layout(import('../../ui/templates/Landing'))
      .next(next);
  },
  children: [
    {
      path: '/',
      async action({ page }) {
        return page
          .meta({ title: 'The Title', url: '/' })
          .component(import('../../pages/Landing'));
      },
    },
    {
      path: '/auth',
      ...require('./auth').default,
    },
  ],
});
