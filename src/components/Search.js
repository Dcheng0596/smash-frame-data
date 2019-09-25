import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'

// From that querys the fighters
function Search({ changeGame}) {
  return(
    <Form>
      <Row className="justify-content-md-end">
        <Col md={3}>
        <Form.Control className="center-block" type="search" placeholder="Search..." />
        </Col>
        <Col xs={6} md="auto">
          <Form.Group as={Row} controlId="game">
            <Form.Label column md="3" className="text-center">Game</Form.Label>
            <Col>
              <Form.Control as="select" onChange={ e => {changeGame(e.target.value)}}>
                <option>Ultimate</option>
                <option>Smash 4</option>

              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default Search