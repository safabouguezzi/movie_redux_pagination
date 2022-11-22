
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../redux_features/actions/actions";
import {v4 as uuid4} from "uuid"

const UpdateMovie = ({movie}) => {
    const movies = useSelector(state => state.movieReducer)
      const [show, setShow] = useState(false);
      const [updatedMovie, setUpdatedMovie] = useState({
        id: movie.id,
        name: movie.name,
        rate: movie.rate,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        type: movie.type,
        trailer : movie.trailer
      } )
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const dispatch = useDispatch()

    
      const handleChange = (e) => {
        setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="addMovie">
                      <svg
                      onClick={handleShow}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="26"
                      // fill="currentColor"
                      className="bi bi-pen-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                    </svg>

    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Movie Poster</Form.Label>
                  <Form.Control value={updatedMovie.image} type="text" name="image" onChange={handleChange} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control value={updatedMovie.name} type="text" name="name" onChange={handleChange} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                  value={updatedMovie.rate}
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
                    value={updatedMovie.year}
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
                    value={updatedMovie.description}
                    as="textarea"
                    name="discription"
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Movie Category</Form.Label>
                  <Form.Control value={updatedMovie.type} type="text" name="type" onChange={handleChange} />
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
                onClick={(e) => {
                  handleClose();
                  dispatch(updateMovie(updatedMovie));
                }} 
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    };

export default UpdateMovie