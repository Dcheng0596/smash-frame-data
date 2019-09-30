import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import FighterList from './FighterList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState(
    'Name'
  )
  const handleFilter = (filter) => {
    setFilter(filter);
  }

  const handleOrder = (order) => {
    setOrder(order);
  }

  return(
    <main>
      <Container className="fluid" >
        <Row>
          <Col>
            <Search  handleFilter={handleFilter}/>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col>
            <FighterList  filter={filter} order={order}/>
          </Col>
        </Row>
      </Container>
     </main>
  )
}

export default Grid