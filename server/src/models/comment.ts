// src/models/Comment.ts

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
import Post from './post';  // Import Post model


// Define Comment attributes
interface CommentAttributes {
  id: number;
  user_id: number;
  comment_content: string;
  commentable_type: 'post' 
  commentable_id: number;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {}

class Comment extends Model<CommentAttributes, CommentCreationAttributes> implements CommentAttributes {
  public id!: number;
  public user_id!: number;
  public comment_content!: string;
  public commentable_type!: 'post';
  public commentable_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function CommentFactory(sequelize: Sequelize): typeof Comment {
  Comment.init(
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
      comment_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      commentable_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commentable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'comments',
    }
  );

  // Set up polymorphic associations
  Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });

  return Comment;
}

export default Comment;
