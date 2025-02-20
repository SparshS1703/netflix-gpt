import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/MoviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const useMovietrailer=(movieID)=>{
    const dispatch=useDispatch();
  
    const getMovieVideo=async ()=>{
      console.log(movieID);
      const data=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", API_OPTIONS);
      const json=await data.json();
      console.log(json);
      
      const trailers=json.results.filter((video)=> (video.type=="Trailer"));
      const trailer=trailers.length==0?trailers[0]:json.results[0];
      dispatch(addTrailerVideo(trailer));
    
      
    }
    useEffect(()=>{
      getMovieVideo();
    },[])
}

export default useMovietrailer;