import React from "react";

export default (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card-img-top" />
            <div className="card-body">
                <h4 class="card-title">{props.title}</h4>
                <p class="card-text">
                    {props.description.length > 20 ? props.description.slice(0, 100) + '...' : props.description}
                </p>
                <p className="card-text"><small className="text-muted">{props.name}</small></p>
                <a href={props.url} class="btn btn-primary" target="_blank">Leia mais</a>
            </div>
        </div>
    )
}