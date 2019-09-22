import React from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
    return(
      <Container className="">
        <h1 class="display-4 font-weight-bold w-25 mx-auto ">Choose Your Fighter!</h1>
        <Row>
          <Col>
            <Search/>
          </Col>
        </Row>
      </Container>
    )
}

export default Grid