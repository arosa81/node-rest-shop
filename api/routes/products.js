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
  const id = req.params.productID;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id,
    });
  } else {
    res.status(200).json({
      message: 'you passed an ID',
    });
  }
});

module.exports = router;

// concat('$',div(body('Get_item')?['amount'],100),'.',if(less(mod(body('Get_item')?['amount'],100),10),concat('0',mod(body('Get_item')?['amount'],100)),mod(body('Get_item')?['amount'],100)))
