import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user';
import { Circle } from './circle';

interface CircleUsersAttributes {
  id: number;
  user_id: number;
  circle_id: number;
}

interface CircleUsersCreationAttributes extends Optional<CircleUsersAttributes, 'id'> {}

export class CircleUsers extends Model<CircleUsersAttributes, CircleUsersCreationAttributes> implements CircleUsersAttributes {
  public id!: number;
  public user_id!: number;
  public circle_id!: number;

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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Name of the User table
          key: 'id',
        },
      },
      circle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'circles', // Name of the Circle table
          key: 'id',
        },
      },
    },
    {
      tableName: 'circle_users', // Naming the join table clearly
      sequelize,
      timestamps: true,
    }
  );

  return CircleUsers;
}
