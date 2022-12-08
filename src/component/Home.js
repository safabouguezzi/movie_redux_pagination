import "./style.css"
import React from 'react'
import MovieList from "./MovieList"
import AddMovie from "./AddMovie"
import Filter from "./Filter"
// import { useDispatch, useSelector } from "react-redux"


const Home = () => {

  // const movies = useSelector(state => state.movieReducer)
  // const dispatch = useDispatch()



  return (
    <div>
      <div className="navBar" >
        <h1 className="logo">
          Movies 📽️
        </h1>
        <div className="additional" >
          <Filter /> {/*} */}

          <AddMovie />
        </div>
      </div>
       
        <MovieList />


    </div>
  )
}

export default Home