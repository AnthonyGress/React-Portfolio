function TestimonialCard(props) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <img
          src={props.image}
          alt="person's profile"
          className="rounded-circle thumb"
        />
        <p className="mt-3 fs-5 card-text">{props.review}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
