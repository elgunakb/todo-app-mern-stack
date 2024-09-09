const express = require('express');
const router = express.Router();
const { join } = require('path');
const { sendMessage } = require(join(__dirname, '..', 'help', 'help.js'));
const Text = require(join(__dirname, '..', 'models', 'textSchema.js'));

router.post('/', async (req, res) => {
  try {
    const text = await Text.find().exec();
    return sendMessage(res, true, text);
  } catch (error) {
    console.log(error);
    return sendMessage(res, false, 'Gozlenilmeyen xeta!');
  }
});

module.exports = router;
