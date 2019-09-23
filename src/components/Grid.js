import React from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import FighterList from './FighterList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
    return(
      <Container className="fluid text-warning font-weight-bold">
        <h1 className="font-weight-bold text-center">Choose Your Fighter!</h1>
        <Row>
          <Col>
            <Search/>
          </Col>
        </Row>
        <Row>
          <Col>
            <FighterList/>
          </Col>
        </Row>
      </Container>
    )
}

export default Grid