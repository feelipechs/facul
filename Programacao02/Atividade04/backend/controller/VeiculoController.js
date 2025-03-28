const Veiculo = require("../model/Veiculo");

module.exports = {
  async create(req, res) {
    try {
      const veiculo = await Veiculo.create(req.body);
      res.status(201).json(veiculo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async findAll(req, res) {
    try {
      const veiculos = await Veiculo.findAll();
      res.status(200).json(veiculos);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Veiculo.destroy({ where: { id } });
      res.status(200).json({ message: "Veículo deletado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

async update(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Veiculo.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedVeiculo = await Veiculo.findOne({ where: { id } });
      res.status(200).json(updatedVeiculo);
    } else {
      res.status(404).json({ message: "Veículo não encontrado" });
    }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
