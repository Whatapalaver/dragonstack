const express = require('express');
const DragonTable = require('../dragon/table');

const router = express.Router();

router.get('/new', (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonTable.storeDragon(dragon)
    .then(({ dragonId }) => {
      console.log('dragonId: ', dragonId);

      dragon.dragonId = dragonId;
      res.json({ dragon })
    })
    .catch(error => next(error)); // the next error handler middleware is the block in index.js
});

module.exports = router;