import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container className="text-center text-light home-container">
      <p>Hi! My Name is</p>
      <h1 className="text-danger border-bottom p-2 w-100">Nurdoğan Bahadır</h1>
      <p>Frontend Web Developer</p>
    </Container>
  );
};

export default Home;
