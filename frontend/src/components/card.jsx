import React from "react";

export default (props) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={props.key}>
            <a href={props.url} target="_blank" className="text-decoration-none text-reset">
                <div className="card">
                    <img src={props.image} alt={props.title} className="card-img-top" />
                    <div className={`card-body rounded-bottom ${props.darkMode ? "bg-dark text-light" : ""}`}>
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">
                            {props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
                        </p>
                        <p className="card-text"><small>{props.name}</small></p>
                        <p className="card-text"><small>{formatDate(props.publishedAt)}</small></p>
                    </div>
                </div>
            </a>
        </div>
    );
}