import React from 'react';
import Form from 'react-bootstrap/Form'

const searchSize = {width: 250, height: 50};

// From that querys the fighters
function Search({ changeGame, handleFilter}) {
  return(
    <Form className="d-flex flex-wrap justify-content-around m-5">
      <Form.Control  size="lg" style={searchSize} onChange={ e => {handleFilter(e.target.value)}} 
                     type="search" placeholder="Search..." />
    </Form>
  );
}

export default Search