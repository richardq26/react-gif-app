import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

const GifGrid = (props) => {
  const { data, loading } = useFetchGifs(props.category);
  console.log(data, loading);
  // useEffect(() => {
  //       getGifs(props.category).then(imgs=>setImages(imgs))
  // }, [props.category]);
  // también se puede poner solo setImages
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{props.category} </h3>
      {/*Lo mismo que loading ? <p></p> : null*/}
      {loading && <p className="animate__animated animate__fadeIn">Loading</p>}      <div className="card-grid" >
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
