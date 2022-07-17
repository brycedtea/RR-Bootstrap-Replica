import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreListing() {
  return (
    <Container>
      <Row>
        <Col>Restaurant</Col>
        <Col xs={6}>Restaurant</Col>
      </Row>
      <Row>
        <Col>Restaurant</Col>
        <Col xs={6}>Restaurant</Col>
      </Row>
      <Row>
        <Col>Restaurant</Col>
        <Col xs={6}>Restaurant</Col>
      </Row>
    </Container>
    
  );
}

export default StoreListing;


