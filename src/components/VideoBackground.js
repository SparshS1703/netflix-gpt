
import { useDispatch, useSelector } from 'react-redux'
import useMovietrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieID}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
  useMovietrailer(movieID);
  
  



  return (
    <div className="w-screen">
   <iframe className="w-screen aspect-video px-0 mx-0 "
     src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground