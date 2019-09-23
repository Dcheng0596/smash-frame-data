import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'

function Search() {
  return(
    <Form>
      <Row className="justify-content-md-end">
        <Col md={3}>
        <Form.Control className="center-block" type="search" placeholder="Search..." />
        </Col>
        <Col xs={6} md="auto">
          <Form.Group as={Row} controlId="sort">
            <Form.Label column md="2" className="text-center">Sort</Form.Label>
            <Col>
              <Form.Control as="select">
                <option>Number</option>
                <option>Weight</option>
                <option>Fall Speed</option>
                <option>Air Speded</option>
                <option>Run Speed</option>
                <option>Walk Speed</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
        <Col xs={6} md="auto">
          <Form.Group as={Row} controlId="game">
            <Form.Label column md="3" className="text-center">Game</Form.Label>
            <Col>
              <Form.Control as="select">
                <option>Ultimate</option>
                <option>Wii U</option>

              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default Search