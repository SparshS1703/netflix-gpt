import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="w-screen"> 
    <Header/>
    {/*
       -main container
           -video background
           -video title
       -Secondary conatiner
            -movie list * n
            -cards * n

    */}
    <MainContainer />
    <SecondaryConatiner />
    
    </div>
  )
}

export default Browse