const express = require('express');
const VeiculoController = require('../controller/VeiculoController');

const router = express.Router();

router.post('/', VeiculoController.create);
router.get('/', VeiculoController.findAll);
router.delete('/:id', VeiculoController.delete);
router.put('/:id', VeiculoController.update);

module.exports = router;
