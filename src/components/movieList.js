import React from 'react'
import MovieCard from './movieCard'

const movieList = ({title, movies}) => {
    console.log(movies);
    
  return (
    <div className='px-6   text-white'>
         <h1 className="text-2xl py-4" >{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
           
        <div className="flex ">
        {movies?.map(movies=> <MovieCard key={movies.id} posterPath={movies.poster_path}/>)}
        </div>
        </div>
        
    </div>
  )
}

export default movieList