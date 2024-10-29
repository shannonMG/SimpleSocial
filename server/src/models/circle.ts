import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user';
import { v4 as uuidv4 } from 'uuid';

interface CircleAttributes {
  id: number;
  name: string;
  permission_key: string;
  assignedUserId?: number; // Optional to reflect potential owner or assigned user
}

interface CircleCreationAttributes extends Optional<CircleAttributes, 'id'> {}

export class Circle extends Model<CircleAttributes, CircleCreationAttributes> implements CircleAttributes {
  public id!: number;
  public name!: string;
  public permission_key!: string;
  public assignedUserId?: number;

  // associated User model
  public readonly assignedUser?: User;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function CircleFactory(sequelize: Sequelize): typeof Circle {
  Circle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      permission_key: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: uuidv4, // Automatically generates a unique key
      },
      assignedUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'circles',
      sequelize,
    }
  );

  return Circle;
}
