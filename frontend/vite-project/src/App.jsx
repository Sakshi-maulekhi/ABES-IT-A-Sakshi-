import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <Container className="my-5">
        <Row className="g-4">
          {/* Card 1 */}
          <Col md={4}>
            <Card className="shadow h-100">
              <Card.Header className="bg-primary text-white text-center fs-5">
                Card 1
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  This is the first card. You can add your content here.
                </Card.Text>
                <Button variant="primary">Action</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4}>
            <Card className="shadow h-100">
              <Card.Header className="bg-success text-white text-center fs-5">
                Card 2
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  This is the second card. You can add your content here.
                </Card.Text>
                <Button variant="success">Action</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4}>
            <Card className="shadow h-100">
              <Card.Header className="bg-warning text-dark text-center fs-5">
                Card 3
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  This is the third card. You can add your content here.
                </Card.Text>
                <Button variant="warning" className="text-dark">
                  Action
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
