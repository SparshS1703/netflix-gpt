import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    console.log(movies);
    
    if(movies==null || movies==undefined) return;   ///-early return
    const mainMovie=movies[0];
    
    
    const {original_title, overview, id}=mainMovie;


  return (
   <div className="w-screen">
    <VideoTitle overview={overview} title={original_title}/>
    <VideoBackground movieID={id}/>
   </div>
  )
}

export default MainContainer