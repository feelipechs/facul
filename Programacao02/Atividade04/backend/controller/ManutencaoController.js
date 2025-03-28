const Manutencao = require("../model/Manutencao");

module.exports = {
  async create(req, res) {
    try {
      const manutencao = await Manutencao.create(req.body);
      res.status(201).json(manutencao);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
},

async findAll(req, res) {
  try {
    const manutencoes = await Manutencao.findAll();
    res.status(200).json(manutencoes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
},

async delete(req, res) {
    try {
      const { id } = req.params;
      await Manutencao.destroy({ where: { id } });
      res.status(200).json({ message: "Manutenção deletada com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

async update(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Manutencao.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedManutencao = await Manutencao.findOne({ where: { id } });
      res.status(200).json(updatedManutencao);
    } else {
      res.status(404).json({ message: "Manutenção não encontrada" });
    }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
