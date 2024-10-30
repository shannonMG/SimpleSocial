import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { email: 'miami@circle.com', password: 'password', location: 'New York', time_zone:'America/New York'},
  
  ], { individualHooks: true });
};