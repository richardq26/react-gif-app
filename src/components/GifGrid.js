import React, { useEffect, useState } from "react";
import axios from "axios";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

const GifGrid = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
        getGifs(props.category).then(imgs=>setImages(imgs))
  }, []);
  

  return (
    <>
      <h3>{props.category} </h3>
      <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        
      </div>
    </>
  );
};

export default GifGrid;
