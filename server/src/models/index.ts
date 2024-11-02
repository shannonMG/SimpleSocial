// src/models/index.ts

import sequelize from '../config/connection.js'; // Import sequelize from configuration
import { UserFactory }  from './user';
import { CircleFactory } from './circle';
import { CircleUsersFactory } from './circleUsers';
import { PostFactory } from './post';
import { CommentFactory } from './comment';

// Initialize models
const User = UserFactory(sequelize);
const Circle = CircleFactory(sequelize);
const CircleUsers = CircleUsersFactory(sequelize);
const Post = PostFactory(sequelize);
const Comment = CommentFactory(sequelize);

// Define associations

// One-to-Many Associations
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });


User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Circle.hasMany(Post, { foreignKey: 'circle_id' });
Post.belongsTo(Circle, { foreignKey: 'circle_id' });

Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });


// Many-to-Many Association through CircleUsers
User.belongsToMany(Circle, { through: CircleUsers, foreignKey: 'user_id' });
Circle.belongsToMany(User, { through: CircleUsers, foreignKey: 'circle_id' });

// Export models and sequelize instance
export { sequelize, User, Circle, CircleUsers, Post, Comment };
