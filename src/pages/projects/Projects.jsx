import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { imageData } from "../../helper/imageData";

const Projects = () => {
  console.log(imageData);
  return (
    <Container>
      <Row className="my-5 g-3">
        {imageData.map((item, index) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={index}
            className="d-flex justify-content-center"
          >
            <img src={item.image} alt={index} width={300} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
