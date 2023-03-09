import React from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactStars from 'react-stars'

const FilterMovie=({inputSearch, setInputSearch, newRate, setNewRate}) =>{
  return (
    <>
 

    <div>
        <Form>
            <Form.Control value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} placeholder ='Search Movie...'></Form.Control>
        </Form>
        <ReactStars
        starsSize={26}
        Count={5}
        half={false}
        Value={newRate}
        onChange={(e)=> setNewRate(e)}/>

<Button variant="primary" onClick={inputSearch(''), newRate(0)}>
    Reset
      </Button>
      <Button variant="primary" onClick={()=>(inputSearch(''), newRate(0))}>Reset</Button>

        </div>
        </>
  )
}

export default FilterMovie