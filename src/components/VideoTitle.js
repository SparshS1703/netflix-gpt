



const VideoTitle = ({title , overview}) => {
  return (
    <div className="pl-24 py-36 pb-2 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/2"> {overview}</p>
        <div className=" flex"> 
            <button className="bg-white text-black  px-16 py-4 text-lg  flex mx-2  rounded-lg hover:bg-opacity-80"> <img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg" className="w-6"></img><p className="px-2 text-xl">Play</p></button>
            <button className="bg-gray-500 text-black  px-12 py-4 text-lg bg-opacity-50 flex text-white rounded-lg">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle