/**
  * This is the app Model it is decoupled from
  * the Entities used for the databse
*/
class ContactUs {
  constructor({
    _id,
    email,
    name,
    subject,
    mobile,
    message,
    created,
  } = {}) {
    this.id = _id;
    this.name = name;
    this.subject = subject;
    this.email = email;
    this.mobile = mobile;
    this.message = message;
    this.created = created;
  }
}

module.exports = ContactUs;
