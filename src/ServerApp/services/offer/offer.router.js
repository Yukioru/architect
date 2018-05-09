export default ctx => {
  const api = ctx.asyncRouter();

  api.get('/ping', () => ({
    pong: true,
    date: new Date(),
    test: 'HELLO',
  }));

  api.all('/date', () => {
    return new Date();
  });
}