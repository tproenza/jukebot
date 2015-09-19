var router = require('express').Router();

var controller = require('./juke.controller.js');

module.exports = router;

router.get('/:jukeId', controller.index);

router.post('/', controller.create);
