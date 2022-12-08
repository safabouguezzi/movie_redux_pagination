import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import ReactPaginate from "react-paginate"
import "./style.css"


const MovieList = () => {
  const [pageNumber, setPageNumber] = useState(0)
    const movies = useSelector(state => state.movieReducer)
    const text = useSelector(state => state.searchReducer)
    const rate = useSelector(state => state.ratingReducer)

    const moviePerPage = 3;
    const pagesVisited = pageNumber * moviePerPage
  
     const displayMovies = movies.filter(el => el.rate >= rate && el.name.toLowerCase().includes(text.trim().toLowerCase())).slice(pagesVisited, pagesVisited + moviePerPage).map((movie, key) => <MovieCard key={key} movie={movie}/>)
  
     const pageCount = Math.ceil(movies.length/ moviePerPage)
    const changePage = ({selected}) => {
      setPageNumber(selected)
    }
     return (
      <div className='homePages'>
        <div className='ListContainer'>
          {displayMovies}
        </div>
        <div> 
      <ReactPaginate 
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      />
      </div>
        {/* {movies.filter(el => el.rate >= rate && el.name.toLowerCase().includes(text.trim().toLowerCase())).map((movie, key) => <MovieCard key={key} movie={movie}/>)} */}
    
    </div>
  )
}

export default MovieList