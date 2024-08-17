import express from 'express';
import axios from 'axios';
import cors from 'cors';
import NodeGeocoder from 'node-geocoder';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
const PORT = 5000;

const options = {
  provider: 'opencage',
  apiKey: process.env.GEOCODER_API_KEY,
};

const geocoder = NodeGeocoder(options);

// Função para obter a temperatura pela localização
async function getTempByLocation(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
    const temp = Math.round(response.data.main.temp)
    console.log(`${temp}°C`)
  } catch (error) {
    console.error('Erro ao obter temperatura:', error);
  }
}

// Função para obter localização pelo IP
async function getLocationByIP() {
  try {
    const response = await axios.get(`https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`);
    const { city, country } = response.data;
    console.log(`Localização: ${city}, ${country}`);
    getTempByLocation(city)
  } catch (error) {
    console.error('Erro ao obter localização:', error);
  }
}

getLocationByIP()

app.get('/news', async (req, res) => {
  const query = req.query.q;
  const apiKey = process.env.GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=pt&apikey=${apiKey}&max=9`;

  try {
    const response = await axios.get(url);
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});