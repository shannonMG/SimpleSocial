import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user';
import { Circle } from './circle';
import { v4 as uuidv4 } from 'uuid';

interface CircleUsersAttributes {
  id: number;
  User_Id: number; //may change this to ownerId
  Circle_Id: number; //may change this to ownerId

  
}

interface CircleUsersCreationAttributes extends Optional<CircleUsersAttributes, 'id'> {}

export class CircleUsers extends Model<CircleUsersAttributes, CircleUsersCreationAttributes> implements CircleUsersAttributes {
  public id!: number;
  public User_Id!: number;
  public Circle_Id!: number;

  // associated User model
  public readonly User?: User;
  public readonly Circle?: Circle;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function CircleUsersFactory(sequelize: Sequelize): typeof CircleUsers {
  CircleUsers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      }, 
      
      User_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      Circle_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'circleusers',
      sequelize,
    }
  );

  return CircleUsers;
}
