import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { CircleFactory } from './circle.js';

const User = UserFactory(sequelize);
const Circle=CircleFactory(sequelize);

export { User, Circle };