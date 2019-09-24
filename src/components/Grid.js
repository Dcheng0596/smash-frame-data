import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import FighterList from './FighterList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
  const [game, setGame] = useState(null);
  const [order, setOrder] = useState(null);
  const changeGame = (game) => {
    setGame(game);
    console.log(game);
  }
  const changeOrder = (order) => {
    setOrder(order);
    console.log(order);
  }
  
  return(
    <Container className="fluid text-warning font-weight-bold">
      <h1 className="font-weight-bold text-center">Choose Your Fighter!</h1>
      <Row>
        <Col>
          <Search changeGame={changeGame} changeOrder={changeOrder}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <FighterList game={game}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Grid