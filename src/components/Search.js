import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'

function Search() {
  return(
    <Form>
      <Row>
        <Col>
        <Form.Control className="center-block" type="search" placeholder="Search..." />
        </Col>
        <Col>
          <Form.Group as={Row} controlId="order-by">
            <Form.Label coulumn className="d-inline">Order by</Form.Label>
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
        <Col>
          <Form.Group as={Row} controlId="game-select">
            <Form.Label column lassName="d-inline">Game</Form.Label>
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