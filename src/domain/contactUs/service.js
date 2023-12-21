/*
  Here is the core of our application. Here we add our business logic.
  e.g. Lets say that every time that we ask for a user, we need his posts too.
  So we add this logic in domain layer.
*/
function init({ stratavaRepository }) {
  async function createContact({
    email,
    name,
    subject,
    mobile,
    message,
  }) {
    return stratavaRepository.createContact({
      email,
      name,
      subject,
      mobile,
      message,
    });
  }
  return {
    createContact
  };
}

module.exports.init = init;
