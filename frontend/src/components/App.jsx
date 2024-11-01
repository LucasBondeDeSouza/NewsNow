import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
import Card from "./card";
import SearchNews from "./searchNews";
import ButtonDarkMode from "./ButtonDarkMode";

export default () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('pt')
  const [darkMode, setDarkMode] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  const searchNews = async () => {
    try {
      const response = await axios.get(`https://newsnow-server-drab.vercel.app/news`, {
        params: {
          q: query,
          lang: language
        }
      });
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
      <ButtonDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Header 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
        language={language}
        setLanguage={setLanguage} 
        handleLanguageChange={handleLanguageChange}
      />

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