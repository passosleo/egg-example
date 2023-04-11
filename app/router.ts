import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  router.get('/', middleware.logger(), controller.user.getUser);
  router.get('/create', middleware.auth(), controller.user.createUser);
};
