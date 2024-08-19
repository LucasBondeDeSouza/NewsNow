import React from "react";

export default (props) => {
  return (
    <>
        <div className="container mt-5">
            <h1>Buscar Notícias</h1>
                <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o tema da notícia..."
                    value={props.query}
                    onChange={(e) => props.setQuery(e.target.value)}
                />
                <button className="btn btn-primary" onClick={props.onClick}>Buscar</button>
            </div>
        </div>
    </>
  );
};