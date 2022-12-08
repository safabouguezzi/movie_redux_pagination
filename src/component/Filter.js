import React from "react";
import {Form} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { rating, search } from "../redux_features/actions/actions";
import "./style.css";

const Filter = () => {
// const text = useSelector(state => state.searchReducer)
// const movies = useSelector(state => state.movieReducer)

const dispatch= useDispatch();

  return (
    <div className="filters">
        <div className="alignFilter"> 
    <Form.Group className="mb-3">
        <Form.Control className="search" placeholder="SEARCH MOVIE🔎"  onChange={(e) => dispatch(search(e.target.value))} />
      </Form.Group>
      </div>

      {/* I used React Simple Rating package from https://www.npmjs.com/package/react-simple-star-rating */}
      <div className="alignFilter">
      <Rating onClick={(e)=>dispatch(rating(e))} />
      </div>
    </div>
  );
};
export default Filter;
