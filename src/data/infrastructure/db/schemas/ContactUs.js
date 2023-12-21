const moment = require('moment');
const uniqueValidator = require('mongoose-unique-validator');
const {
  model,
  Schema,
} = require('mongoose');
const ContactUsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  created: Date,
});

ContactUsSchema.index({ name: 1, created: -1 });

ContactUsSchema.plugin(uniqueValidator);

ContactUsSchema.pre('save', function (next) {
  this.created = moment().toJSON();
  return next();
});

const ContactUsDao = model('ContactUs', ContactUsSchema);

module.exports = { ContactUsDao };
