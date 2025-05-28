import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { toggleSearch } from "../utils/GPTSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when components unmount
    return () => unsubscribe();
  }, []);

  const handleGPT = () => {
    dispatch(toggleSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-screen from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 bg-gray-900 m-2 text-white rounded-lg"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPT}
            className="py-2 px-4 my-2 mx-4 bg-gradient-to-r from-red-700 to-red-700 rounded-lg text-white hover:opacity-85"
          >
            {showGPTSearch ? "Home" : "GPT Search"}{" "}
          </button>
          <img
            className="w-12 h-12"
            src="https://occ-0-3217-3647.1.nflxso.net/dnm/api/v6/vN…uUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          ></img>
          <button onClick={handleSignOut} className="font -bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
