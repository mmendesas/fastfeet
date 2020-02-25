import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Order from '../app/models/Order';
import DeliveryProblem from '../app/models/DeliveryProblem';

const models = [User, Recipient, File, Order, DeliveryProblem];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // start database connection
    this.connection = new Sequelize(databaseConfig);

    // call every model with this connection
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
