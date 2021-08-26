import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import TestimonialCard from "./TestimonialCard";
import TestimonialContent from "./TestimonialContent";

const Testimonials = () => {
  const testimonials = TestimonialContent;
  return (
    <section id="testimonials">
      <h1 className="heading">Testimonials</h1>

      <Container>
        <Row>
          {testimonials.map((testimonial) => (
            <Col size="col-md-6 mb-4" key={testimonial.id}>
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
