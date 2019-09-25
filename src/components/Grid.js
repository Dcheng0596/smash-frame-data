import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import FighterList from './FighterList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
  const [game, setGame] = useState('Ultimate');
  const [filter, setFilter] = useState('');
  const changeGame = (game) => {
    setGame(game);
    console.log(game);
  }
  const handleFilter = (filter) => {
    setFilter(filter);
    console.log(filter);
  }

  return(
    <Container className="fluid text-warning font-weight-bold">
      <h1 className="font-weight-bold text-center">Choose Your Fighter!</h1>
      <Row>
        <Col>
          <Search changeGame={changeGame} handleFilter={handleFilter}/>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col>
          <FighterList game={game} filter={filter}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Grid