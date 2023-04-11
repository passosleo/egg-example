import 'egg';
import { Knex } from 'knex';

declare module 'egg' {
  interface Application {
    knex: Knex;
  }
}
