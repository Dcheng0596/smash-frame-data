import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import FighterList from './FighterList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
  const [filter, setFilter] = useState('');
  const handleFilter = (filter) => {
    setFilter(filter);
  }

  return(
    <Container className="fluid" >
      <h1 className="font-weight-bold text-center">Choose Your Fighter!</h1>
      <Row>
        <Col>
          <Search  handleFilter={handleFilter}/>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col>
          <FighterList  filter={filter}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Grid