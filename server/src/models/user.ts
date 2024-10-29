import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Define the attributes for the User model
interface UserAttributes {
  id: number;
  email: string;
  password: string;
  location?: string;
  time_zone?: string;
}

// Define optional attributes when creating a new user
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Extend the Sequelize Model class
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public location?: string;
  public time_zone?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the User model
export function UserFactory(sequelize: Sequelize): typeof User {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
      },
      time_zone: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'users',
    }
  );

  return User;
}

export default User;
