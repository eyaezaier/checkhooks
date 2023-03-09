import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';

export default function AddMovie({add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //init
  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')
  const [rate, setRate]= useState('')
  const [posterUrl, setPosterUrl]= useState('')

  //update
  const handleTitle= (e) =>{
    setTitle(e.target.value)
  }

  const handleDescription= (e) =>{
    setDescription(e.target.value)
  }

  const handleRate= (e) =>{
    setRate(e.target.value)
  }

  const handlePosterUrl= (e) =>{
    setPosterUrl(e.target.value)
  }

  const handleAdd=() => {
    const newMovie= {title, description, rate, posterUrl}
    add(newMovie)
    handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
    Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Movie Title</Form.Label>
        <Form.Control OnChange={()=> handleTitle ()}placeholder='Movie title'></Form.Control> 
        <Form.Label> Movie description</Form.Label>
        <Form.Control  OnChange={()=> handleDescription ()} placeholder='Movie description'></Form.Control> 
        <Form.Label>Movie rate</Form.Label>
        <Form.Control OnChange={()=> handleRate()} max='5' type='number' placeholder='Movie rate'></Form.Control> 
        <Form.Label>Movie picture</Form.Label>
        <Form.Control OnChange={()=> handlePosterUrl ()} placeholder='Movie picture'></Form.Control> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 