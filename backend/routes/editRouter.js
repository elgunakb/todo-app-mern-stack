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

    const { text, id } = req.body;
    if ((!text, !id)) {
      return sendMessage(res, false, 'data gonderilmedi!');
    }

    if (id.length !== 24) {
      return sendMessage(res, false, 'data tapilmadi!');
    }

    Text.findByIdAndUpdate(id, { text }, { new: true })
      .then((e) => {
        return sendMessage(res, true, e);
      })
      .catch((err) => {
        console.log(err);
        return sendMessage(res, false, 'bir xeta oldu!');
      });
    //
  } catch (error) {
    console.log(error);
    return sendMessage(res, false, 'Gozlenilmeyen xeta!');
  }
});

module.exports = router;
