const express = require('express');
const veiculoRotas = require('./rotas/VeiculosRotas');
const manutencaoRotas = require('./rotas/ManutencoesRotas');
const sequelize = require('./config/database');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use('/veiculos', veiculoRotas);
app.use('/manutencoes', manutencaoRotas);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
