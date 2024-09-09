const express = require('express');
const router = express.Router();
const { join } = require('path');
const { sendMessage } = require(join(__dirname, '..', 'help', 'help.js'));
const Text = require(join(__dirname, '..', 'models', 'textSchema.js'));

router.post('/', (req, res) => {
  try {
    if (!req.body) {
      return sendMessage(res, false, 'req.body-de xeta var!');
    }
    const { text } = req.body;
    if (!text) {
      return sendMessage(res, false, 'data gonderilmedi!');
    }

    const addText = new Text({
      text,
    });

    addText
      .save()
      .then((e) => {
        console.log(e);
        return sendMessage(res, true, e);
      })
      .catch((err) => {
        console.log(err);
        return sendMessage(res, true, 'bir xeta var !');
      });
  } catch (error) {
    console.log(error);
    return sendMessage(res, false, 'Gozlenilmeyen xeta!');
  }
});

module.exports = router;
