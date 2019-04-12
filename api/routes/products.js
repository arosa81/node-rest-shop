const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products',
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests to /products',
  });
});

router.get('/:productID', (req, res, next) => {
  const id = req.params.productID
  if (id === 'special') {
    req.status(200).json({
      message: 'You discovered the special ID',
    });
  }
});

module.exports = router;