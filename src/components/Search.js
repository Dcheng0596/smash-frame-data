import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'

const searchSize = {width: 250, height: 50};
const selectSize = {width: 110, height: 50};

// From that querys the fighters
function Search({ changeGame, handleFilter}) {
  return(
    <Form className="d-flex flex-wrap justify-content-around">
        <div className="d-none d-md-block"style={selectSize} ></div>
        <Form.Control size="lg" style={searchSize} onChange={ e => {handleFilter(e.target.value)}} 
                     type="search" placeholder="Search..." />
          <Form.Group as={Row} controlId="game">
            <Form.Label column   xs="4" className="text-center">Game</Form.Label>
            <Col>
              <Form.Control style={selectSize} as="select" onChange={ e => {changeGame(e.target.value)}}>
                <option>Ultimate</option>
                <option>Smash 4</option>
              </Form.Control>
            </Col>
          </Form.Group>
    </Form>
  );
}

export default Search