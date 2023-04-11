import { Service } from 'egg';

export default class UserService extends Service {
  async getUser() {
    const { logger } = this;
    logger.info('UserService.getUser called');
    return 'Leo';
  }

  async createUser() {
    const { logger } = this;
    logger.info('UserService.createUser called');
    return 'Leo';
  }
}
