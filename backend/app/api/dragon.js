const express = require('express');

const router = express.Router();

router.get('/new', (req, res) => {
  res.json({ dragon: req.app.locals.engine.generation.newDragon() })
});

module.exports = router;