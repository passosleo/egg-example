import { Service } from 'egg';

export default class UserService extends Service {
  async getUser() {
    const { app } = this;
    return app.knex.first().from('GRZ_API_USER');
  }

  async createUser() {
    const { logger } = this;
    logger.info('UserService.createUser called');
    return 'Leo';
  }
}
