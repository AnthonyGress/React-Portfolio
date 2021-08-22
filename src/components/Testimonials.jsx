import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import TestimonialCard from "./TestimonialCard";
import face1 from "../images/faces/face1.jpg";
import face2 from "../images/faces/face2.jpg";
import face3 from "../images/faces/face3.jpg";
import face4 from "../images/faces/face4.jpg";
import face5 from "../images/faces/face5.jpg";
import face6 from "../images/faces/face6.jpg";

const review1 = {
  image: face1,
  review:
    "Great person all the way around. Anthony knew exactly what I was talking about and how to handle my situation. Very knowledgeable, pleasant, and had a great sense of humor. I was just very lucky to have had this great person to help me. He did an excellent job. Thanks for having such a nice man to do business with. Keep him, he is GREAT.",
};
const review2 = {
  image: face2,
  review:
    "Anthony was very good, very knowledgeable . He helped me with the phone mess and got it fixed in no time whatsoever! This representative was the best I’ve ever dealt with. He made the awful Verizon help call better.",
};
const review3 = {
  image: face3,
  review:
    "Outstanding customer service! Great communication. Wonderful attitude. Thank you Anthony! Very satisfied. He explained why I was having the issue versus just correcting the issue.",
};
const review4 = {
  image: face4,
  review:
    "When they couldn’t help me at the Verizon store, they gave me the number to get further assistance. Anthony was very informative as he walked me through every step of the way.",
};
const review5 = {
  image: face5,
  review:
    "Issue easily resolved and he was easy to communicate with. He walked me through the entire process and was patient, friendly, and overall pleasant to work with.",
};
const review6 = {
  image: face6,
  review:
    "I don’t know how much easier he could have made it. He helped me and I would never want any other type of phone. I can usually tell when a person is sincere and really wants to help. I am an older woman and he was very patient and did not rush me.",
};

const testimonials = [review1, review2, review3, review4, review5, review6];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1 className="fs-1 text-center">Testimonials</h1>

      <Container>
        <Row>
          {testimonials.map((testimonial) => (
            <Col size="col-lg-6 mb-4" key={testimonial.index}>
              <TestimonialCard
                image={testimonial.image}
                review={testimonial.review}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
