const { PostDao } = require('./Post');
const { UserDao } = require('./User');
const { ContactUsDao } = require('./ContactUs');

module.exports.create = () => ({
  Post: PostDao,
  User: UserDao,
  ContactUs: ContactUsDao,
});
