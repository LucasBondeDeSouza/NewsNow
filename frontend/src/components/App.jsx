import React, { useState } from "react";
import axios from 'axios'
import Header from "./header";
import Card from "./card";

export default () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);

  const searchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/news?q=${query}`);
      setNews(response.data);
    } catch (error) {
      console.error('Erro ao buscar notícias', error);
    }
  };

  return (
    <>
    <Header />
    <div className="container mt-5">
      <h1>Buscar Notícias</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o tema da notícia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={searchNews}>Buscar</button>
      </div>

      <div className="container">
        <div className="row">
          {news.map((article, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Card
                image={article.image}
                title={article.title}
                description={article.description}
                name={article.source.name}
                url={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}