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
      <div className="card-footer d-flex justify-content-end">
        <small style={{color: 'white'}}>
          {" Profile photo from Generated Photos"}
        </small>
      </div>
    </div>
  );
}

export default TestimonialCard;
