import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
import Card from "./card";
import SearchNews from "./searchNews";

export default () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  //const API_URL = 'http://localhost:5000';

  const searchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/news?q=${query}`);
      setNews(response.data);
    } catch (error) {
      console.error("Erro ao buscar notícias", error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-vh-100 ${darkMode ? "bg-dark text-light" : ""}`}>
      <Header toggleDarkMode={toggleDarkMode} />

      <SearchNews 
        query={query} 
        setQuery={setQuery} 
        onClick={searchNews}
        darkMode={darkMode}
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
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};