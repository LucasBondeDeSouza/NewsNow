const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = 5000;

// Rota para buscar notícias
app.get('/news', async (req, res) => {
  const query = req.query.q;
  const apiKey = process.env.GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=pt&apikey=${apiKey}&max=9`

  try {
    const response = await axios.get(url);
    console.log(response)
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});