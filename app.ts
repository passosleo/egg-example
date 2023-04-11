import { Application } from 'egg';
import Knex from 'knex';
import knexConfig from './config/knex';

export default (app: Application) => {
  const knex = Knex(knexConfig.development);
  app.knex = knex;
};
