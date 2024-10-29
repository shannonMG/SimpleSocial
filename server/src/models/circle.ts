import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface CircleAttributes {
  id: number;
  name: string;
  permission_key: string;
}

interface CircleCreationAttributes extends Optional<CircleAttributes, 'id'> {}

class Circle extends Model<CircleAttributes, CircleCreationAttributes> implements CircleAttributes {
  public id!: number;
  public name!: string;
  public permission_key!: string;

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
      },
    },
    {
      sequelize,
      tableName: 'circles',
    }
  );

  return Circle;
}

export default Circle;
