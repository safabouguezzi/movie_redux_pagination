import React from "react";
import "./style.css";
// import { BsFillPlayFill } from "react-icons/bs";
import {Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux_features/actions/actions";
import UpdateMovie from "./UpdateMovie";
import { Link } from "react-router-dom";


const MovieCard = ({movie}) => {
  const dispatch= useDispatch()
  return (
    <div className="container">
    <Card className="card">
      <Card.Img className="image" variant="top" src={movie.image} style={{ height: '18rem' }}/>
      <Card.Body>
        <Card.Title className="title">{movie.name}</Card.Title>
        <Rating 
        style={{fillColor:"#FE4141" }}
         initialValue={movie.rate} readonly={true} />
        <Card.Text className="movieDescription">
          {movie.description}
        </Card.Text>
        <div className="moviebuttons"> 
        <Link to={`/Description/${movie.id}`} style={{ textDecoration: 'none' }} >
        <Button className="trailerButton" variant="primary">
        <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="20"
                          fill="currentColor"
                          className="bi bi-play-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
          Trailer</Button>
          </Link>
          <div className="updateDelete">
          <UpdateMovie  movie={movie}/>
          {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="26"
                      // fill="currentColor"
                      className="bi bi-pen-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                    </svg> */}

                    <svg onClick = {()=>dispatch(deleteMovie(movie.id))}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="26"
                      id={movie.id}
                      // fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                   
          </div>
          </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MovieCard;
