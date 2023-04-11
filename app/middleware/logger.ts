import { Context, Next } from 'koa';

export default function loggerMiddleware() {
  return async (ctx: Context, next: Next) => {
    const startTime = Date.now();
    await next();
    const usedTime = Date.now() - startTime;
    console.log(`[${ctx.method} ${ctx.url}] ${usedTime}ms`);
  };
}
