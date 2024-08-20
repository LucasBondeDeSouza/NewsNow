import express from 'express';
import axios from 'axios';
import cors from 'cors';
import NodeGeocoder from 'node-geocoder';
import dotenv from 'dotenv';

dotenv.config();

const corsOptions = {
  origin: 'https://newsnow-pi.vercel.app',
  methods: 'GET',
  allowedHeaders: 'Content-Type',
};

const app = express();
app.use(cors(corsOptions));
const PORT = 5000;

const options = {
  provider: 'opencage',
  apiKey: process.env.GEOCODER_API_KEY,
};

const geocoder = NodeGeocoder(options);

// Obter a temperatura e a localização
app.get('/weather', async (req, res) => {
  try {
    const locationResponse = await axios.get(`https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`);
    const { city, country } = locationResponse.data;

    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
    const temp = Math.round(weatherResponse.data.main.temp);
    const weather = weatherResponse.data.weather[0].main

    // Obtém informações de fuso horário, nascer e pôr do sol
    const timezone = weatherResponse.data.timezone; // em segundos a partir do UTC
    const sunrise = weatherResponse.data.sys.sunrise; // em segundos desde a época Unix
    const sunset = weatherResponse.data.sys.sunset;   // em segundos desde a época Unix

    // Obtém o horário atual em segundos desde a época Unix
    const currentTime = Math.floor(Date.now() / 1000); // em segundos

    // Ajusta o horário atual para o fuso horário do local
    const localTime = currentTime + timezone;

    // Verifica se está de dia ou de noite
    const isDay = localTime >= sunrise && localTime < sunset ? true : false;

    res.json({ city, country, temp, weather, isDay });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter localização e temperatura' });
  }
});

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