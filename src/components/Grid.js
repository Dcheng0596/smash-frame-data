import React from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
    return(
      <Container className="text-warning font-weight-bold">
        <h1 class="font-weight-bold text-center">Choose Your Fighter!</h1>
        <Row>
          <Col>
            <Search/>
          </Col>
        </Row>
      </Container>
    )
}

export default Grid