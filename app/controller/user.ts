import { Controller } from 'egg';

export default class UserController extends Controller {
  async getUser() {
    const { ctx } = this;
    const response = await ctx.service.user.getUser();
    ctx.body = response;
  }

  async createUser() {
    const { ctx } = this;
    const response = await ctx.service.user.createUser();
    ctx.body = response;
  }
}
