const { registerProperty } = require('./transaction');

const router = require('express').Router();

router.post('/property/:id', registerProperty);

module.exports = router;