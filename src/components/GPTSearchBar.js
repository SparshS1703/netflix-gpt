import React, { useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openAI";
import { addGPTmovieResult } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const dispatch=useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const fetchMovie=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1" , API_OPTIONS);
    const json=await data.json();
    return json.results;

  }





  const handleSearch = async () => {
    console.log(searchText.current.value);
    //make call to OPENAI
    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead : Gadar,Sholay,Abc,Xyz,Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    const gptMovies=["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"];
    const promiseArray=gptMovies.map((movie)=>fetchMovie(movie));

    const tmdbResults=await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGPTmovieResult({movieNames: gptMovies, movieResult: tmdbResults }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 border-white border-2 rounded-lg col-span-9"
        ></input>
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
