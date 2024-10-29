// src/models/Media.ts
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
import User from './user';
import Circle from './circle';
import Comment from './comment';

// Define the attributes for the Media model
interface MediaAttributes {
  id: number;
  user_id: number;
  circle_id: number;
  file_url: string;
  media_type: string;
}

interface MediaCreationAttributes extends Optional<MediaAttributes, 'id'> {}

class Media extends Model<MediaAttributes, MediaCreationAttributes> implements MediaAttributes {
  public id!: number;
  public user_id!: number;
  public circle_id!: number;
  public file_url!: string;
  public media_type!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function MediaFactory(sequelize: Sequelize): typeof Media {
  Media.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      circle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      file_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true, // Ensures the value is a valid URL
        },
      },
      media_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'media',
    }
  );

  return Media;
}

export default Media;
