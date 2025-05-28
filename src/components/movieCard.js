import { IMG_CDN } from "../utils/constants";

const movieCard = ({ posterPath }) => {
  if(!posterPath)
    return null
  return (

    <div className="w-48 pr-2 cursor-pointer">
      <img src={IMG_CDN + posterPath} />
    </div>
  );
};

export default movieCard;
