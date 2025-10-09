import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Loader() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Spinner animation="border" role="status" variant="dark" size="lg">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </Container>
  );
}

export default Loader;