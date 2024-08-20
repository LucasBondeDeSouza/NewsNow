import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
import Card from "./card";
import SearchNews from "./searchNews";

export default () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  const searchNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/news?q=${query}`);
      setNews(response.data);
    } catch (error) {
      console.error("Erro ao buscar notícias", error);
    }
  };

  return (
    <>
      <Header />

      <SearchNews 
        query={query} 
        setQuery={setQuery} 
        onClick={searchNews} 
      />

      <div className="container">
        <div className="row">
          {news.map((article, index) => (
            <Card
              key={index}
              image={article.image}
              title={article.title}
              description={article.description}
              name={article.source.name}
              url={article.url}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};