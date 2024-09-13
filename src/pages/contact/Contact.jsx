import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="my-5">
      <Row>
        <h1 className="text-light text-center">Contact Me</h1>
        <Col sm={12} md={12} lg={4}>
          <div className="contact-info">
            <IoMdMail />
            <p>Email</p>
          </div>

          <p className="text-light text-center">nurdoganbahadirr@gmail.com</p>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="contact-info">
            <FaPhoneSquareAlt />
            <p>Phone</p>
          </div>

          <p className="text-light text-center">+90 (531) 555 55 55</p>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="contact-info">
            <FaAddressBook />
            <p>Address</p>
          </div>

          <p className="text-light text-center">Kocaeli, Izmit</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
