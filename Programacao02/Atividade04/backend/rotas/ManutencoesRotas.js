const express = require('express');
const ManutencaoController = require('../controller/ManutencaoController');

const router = express.Router();

router.post('/', ManutencaoController.create);
router.get('/', ManutencaoController.findAll);
router.delete('/:id', ManutencaoController.delete);
router.put('/:id', ManutencaoController.update);

module.exports = router;
