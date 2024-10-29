import { Sequelize } from 'sequelize';
import { UserFactory } from './user';
import { CircleFactory } from './circle';
import { CircleMembersFactory } from './circleMembers';
import { PostFactory } from './post';
import { MediaFactory } from './media';
import { CommentFactory } from './comment';

const sequelize = new Sequelize(...);

const User = UserFactory(sequelize);
const Circle = CircleFactory(sequelize);
const CircleMembers = CircleMembersFactory(sequelize);
const Post = PostFactory(sequelize);
const Media = MediaFactory(sequelize);
const Comment = CommentFactory(sequelize);

// One-to-Many
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Media, { foreignKey: 'user_id' });
Media.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Circle.hasMany(Post, { foreignKey: 'circle_id' });
Post.belongsTo(Circle, { foreignKey: 'circle_id' });

Circle.hasMany(Media, { foreignKey: 'circle_id' });
Media.belongsTo(Circle, { foreignKey: 'circle_id' });

Post.hasMany(Comment, { foreignKey: 'commentable_id', constraints: false });
Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });

// Many-to-Many through Circle_Members
User.belongsToMany(Circle, { through: CircleMembers, foreignKey: 'user_id' });
Circle.belongsToMany(User, { through: CircleMembers, foreignKey: 'circle_id' });

// Polymorphic Comment association
Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });
Comment.belongsTo(Media, { foreignKey: 'commentable_id', constraints: false });

export { sequelize, User, Circle, CircleMembers, Post, Media, Comment };
