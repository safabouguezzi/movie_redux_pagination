
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux_features/actions/actions";
import {v4 as uuid4} from "uuid"

const AddMovie = () => {
      const [show, setShow] = useState(false);
      const [newMovie, setNewMovie] = useState({
        id: uuid4(),
        name: "",
        rate: 0,
        year: "",
        description: "",
        image: "",
        type: "",
        trailer : ""
      } )

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const dispatch = useDispatch()



      // console.log("rendering Add", newMovie);
    
      const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="addMovie">
          <Button
          className="button"
            variant="primary"
            onClick={handleShow}
          >
            Add Movie
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Movie Poster</Form.Label>
                  <Form.Control type="text" name="image" onChange={handleChange} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                    type="number"
                    max={5}
                    min={1}
                    name="rate"
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="number"
                    min={1900}
                    name="year"
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Movie Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="discription"
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Movie Category</Form.Label>
                  <Form.Control type="text" name="type" onChange={handleChange} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
              style = {{backgroundColor: "#CD3B3D", borderColor: "#CD3B3D"}}
                variant="primary"
                onClick={() => {
                  handleClose();
                  dispatch(addMovie(newMovie));
                }} 
              >
                Add Movie
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    };

export default AddMovie