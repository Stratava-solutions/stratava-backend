const mapper = require('../../mapper');
const ContactUsDomainModel = require('../../../domain/contactUs/model');

const contactUsStore = {
  async createContact({
    email,
    name,
    subject,
    mobile,
    message,
  }) {
    const {
      ContactUs: contactUsSchema,
    } = this.getSchemas();
    const newContactUs = new contactUsSchema({
      name,
      subject,
      mobile,
      email,
      message,
    });
    const contactUsDoc = await newContactUs.save();
    return mapper.toDomainModel(contactUsDoc, ContactUsDomainModel);
  },
};

module.exports.init = function init({ ContactUs }) {
  console.log("ContactUs", ContactUs)
  return Object.assign(Object.create(contactUsStore), {
    getSchemas() {
      return {
        ContactUs,
      };
    },
  });
};
