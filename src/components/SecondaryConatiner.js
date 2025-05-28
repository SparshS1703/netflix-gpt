import React from 'react'
import MovieList from './movieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className=" bg-[#141414]">
      <div className="-mt-52 relative z-20 pl-4">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.nowPlayingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryConatiner