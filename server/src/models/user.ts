import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
import bcrypt from 'bcryptjs';

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
  public location?: string; // Optional location attribute
  public time_zone?: string; // Optional time zone attribute

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Method to compare passwords for authentication
  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
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
        allowNull: true, // Optional in database
      },
      time_zone: {
        type: DataTypes.STRING,
        allowNull: true, // Optional in database
      },
    },
    {
      sequelize,
      tableName: 'users',
      hooks: {
        // Hash password before creating a new user
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
        // Hash password before updating if it has been modified
        beforeUpdate: async (user) => {
          if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
    }
  );

  return User;
}

export default User;
