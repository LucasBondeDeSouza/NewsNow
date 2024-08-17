import React, { useState } from "react";
import axios from 'axios'

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
              <div className="card">
                <img src={article.image} alt={article.title} className="card-img-top" />
                <div className="card-body">
                  <h4 class="card-title">{article.title}</h4>
                  <p class="card-text">
                    {article.description.length > 20 ? article.description.slice(0, 100) + '...' : article.description}
                  </p>
                  <p className="card-text"><small className="text-muted">{article.source.name}</small></p>
                  <a href={article.url} class="btn btn-primary" target="_blank">Leia mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}