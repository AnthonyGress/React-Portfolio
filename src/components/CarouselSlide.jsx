const CarouselSlide = (props) => {
  const skillName = props.name
    .split(" ")
    .map((skillName) => `${skillName}-img`)
    .join(" ");
  return (
    <>
      <img
        src={props.image}
        className="img-fluid slider-image"
        draggable="false"
        id={skillName}
        alt={skillName}
      />
    </>
  );
};

export default CarouselSlide;
