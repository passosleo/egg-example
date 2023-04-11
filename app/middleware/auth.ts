import { Context, Next } from 'koa';

export default function authMiddleware() {
  return async (ctx: Context, next: Next) => {
    console.log('ctx: ', ctx);
    console.log('authMiddleware called');
    await next();
  };
}
