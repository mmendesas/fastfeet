import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';

const models = [User, Recipient, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // start database connection
    this.connection = new Sequelize(databaseConfig);

    // call every model with this connection
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
