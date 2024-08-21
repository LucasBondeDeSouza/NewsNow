import React from "react";

export default ({ query, setQuery, onClick, darkMode }) => {
  return (
    <div className={`container mt-5 ${darkMode ? "bg-dark text-light" : ""}`}>
      <h1>Buscar Notícias</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o tema da notícia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};