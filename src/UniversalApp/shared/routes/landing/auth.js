export default () => ({
  async action({ next, page }) {
    return page
      .layout(import('../../ui/templates/Auth'))
      .next(next);
  },
  children: [
    {
      path: '/',
      async action({ page }) {
        return page
          .redirect('/auth/login');
      },
    },
    {
      path: '/login',
      async action({ page }) {
        return page
          .meta({ title: 'Login', url: '/auth/login' })
          .component(import('../../pages/Auth'), { type: 'login' });
      },
    },
    {
      path: '/register',
      async action({ page }) {
        return page
          .meta({ title: 'Register', url: '/auth/register' })
          .component(import('../../pages/Auth'), { type: 'register' });
      },
    },
  ],
});
