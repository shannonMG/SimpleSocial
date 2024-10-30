import { Circle } from '../models/index.js';

export const seedCircle = async () => {
  await Circle.bulkCreate([
    { name: 'Bootcamp', permission_key: 'youarein', assignedUserId: 1},
  
  ], { individualHooks: true });
};