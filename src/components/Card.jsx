import { Github, Globe2 } from "react-bootstrap-icons";

function Card(props) {
    return (
        <div className="card h-100">
            <img
                src={props.image}
                className="card-img-top img-fluid"
                alt={props.heading}
            />
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <a
                    href={props.github}
                    target="_blank"
                    rel="noreferrer"
                    className={
                        props.github !== ""
                            ? "btn btn-primary"
                            : "btn btn-primary disabled"
                    }
                >
                    <Github size={24} />
                    <span className="ms-1">{"GitHub"}</span>
                </a>
                <a
                    href={props.url}
                    target="_blank"
                    rel="noreferrer"
                    className={
                        props.url !== ""
                            ? "btn btn-primary"
                            : "btn btn-primary disabled"
                    }
                >
                    <Globe2 size={24} />
                    <span className="ms-1">{"Website"}</span>
                </a>
            </div>
        </div>
    );
}

export default Card;
