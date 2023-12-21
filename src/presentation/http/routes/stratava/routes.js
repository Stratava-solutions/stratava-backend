const express = require('express');
const asyncWrapper = require('@dimosbotsaris/express-async-handler');
const {
  validateContactUsBody,
} = require('../../middleware/endpointValidator');
const {
  toResponseModel,
} = require('../users/mapper');

// eslint-disable-next-line new-cap
const router = express.Router({ mergeParams: true });

function init({ stratavaService }) {
  router.post(
    '/contact',
    validateContactUsBody(),
    asyncWrapper(async (req, res) => {
      const result = await stratavaService.createContact({
        email: req.body.email,
        name: req.body.name,
        subject: req.body.subject,
        mobile: req.body.mobile,
        message: req.body.message,
      });
      console.log("result", result)
      return res.send({
        data: toResponseModel(result),
      });
    }),
  );

  return router;
}

module.exports.init = init;
