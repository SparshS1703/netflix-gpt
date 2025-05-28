import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showSearch = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <div className="w-screen bg-[#141414]">
      <Header />
      {/*
       -main container
           -video background
           -video title
       -Secondary conatiner
            -movie list * n
            -cards * n


    */}
      {showSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
