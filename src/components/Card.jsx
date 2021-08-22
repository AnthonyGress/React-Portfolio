function Card(props) {
  return (
    <div className="card h-100">
      <img src={props.image} className="card-img-top" alt={props.heading} />
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          GitHub
        </a>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Live Site
        </a>
      </div>
    </div>
  );
}

export default Card;
