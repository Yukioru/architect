export default app => ({
  async action({ page }) {
    return page
      .meta({ title: 'Dashboard', url: '/cabinet/dashboard' })
      .component(import('../../pages/UserDashboard'));
  },
});
