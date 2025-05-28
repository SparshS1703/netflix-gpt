import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './movieList';

const GPTSuggestions = () => {
  const gpt=useSelector(store=>store.gpt);
  const {movieResult, movieNames}=gpt;
  console.log(movieNames, " ",movieResult);
  
  if(movieResult==null)
    return null;
  return (
    <div className="text-white p-4 m-4">
      <div>
       {
        movieNames.map((movie , index)=><MovieList key={movie} title={movie} movies={movieResult[index]}/>)
       }
      </div>

    </div>
  )
}

export default GPTSuggestions