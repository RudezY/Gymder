const Gym = require('./Gym');
const User = require('./User');
const Post = require('./Post');
const UserAttributes = require('./UserAttributes');
// const Comment = require('./Comment');

User.hasMany(Post, { foreignKey: 'user_id' });

Post.belongsTo(User, { foreignKey: 'user_id' });

Gym.hasMany(UserAttributes, { foreignKey: 'gym_id' });

Gym.hasMany(Post, { foreignKey: 'gym_id' });

UserAttributes.belongsTo(Gym, { foreignKey: 'gym_id' });

User.hasOne(UserAttributes, { foreignKey: 'user_id' });

UserAttributes.belongsTo(User, { foreignKey: 'user_id' });

// Post.hasMany(Comment, { foreignKey: 'post_id' });

module.exports = { UserAttributes, User, Post, Gym };
