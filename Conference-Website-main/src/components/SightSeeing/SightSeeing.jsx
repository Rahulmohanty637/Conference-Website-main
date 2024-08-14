/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./gallery.css";

const SightSeeing = () => {
  let konarkdata = [
    {
      id: 1,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1694475136007-14c4dbf484f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/11417323/pexels-photo-11417323.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      imgSrc:
        "https://images.pexels.com/photos/6040171/pexels-photo-6040171.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      imgSrc:
        "https://images.pexels.com/photos/6040174/pexels-photo-6040174.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // {
    //   id: 6,
    //   imgSrc:
    //     "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Konark_Sun_Temple_e8f0683db1.jpg",
    // },
  ];
  let puridata = [
    {
      id: 1,
      imgSrc:
        "https://t3.ftcdn.net/jpg/04/71/22/96/240_F_471229696_gBayPOEBrWbvhTq0vig3mvo6t6UgIhuF.jpg",
    },
    {
      id: 2,
      imgSrc:
        "https://media.gettyimages.com/id/1933425527/photo/ariel-view-of-the-shree-jagannath-temple-and-its-corridor-after-the-shree-mandir-parikrama.jpg?s=612x612&w=0&k=20&c=d0Z3dnjpb480QgU3y2hV5gY_1R5QjpqUjizZUbBOskY=",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      imgSrc:
        "https://images.pexels.com/photos/6040171/pexels-photo-6040171.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      imgSrc:
        "https://images.pexels.com/photos/6040174/pexels-photo-6040174.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // {
    //   id: 6,
    //   imgSrc:
    //     "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Konark_Sun_Temple_e8f0683db1.jpg",
    // },
  ];

  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div className={model ? "model open" : "model"}>
        <img src={tempingSrc} />
      </div>
      <div className="text-center text-2xl font-bold heading m-10">Konark</div>
      <div className="gallery mt-2">
        {konarkdata.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.imgSrc}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
              />
            </div>
          );
        })}
      </div>
      <div className="text-center text-2xl font-bold heading m-10">Puri</div>
      <div className="gallery mt-2">
        {puridata.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      <div className="text-center text-2xl font-bold heading m-10">
        Khandagiri
      </div>
      <div className="gallery mt-2">
        {konarkdata.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SightSeeing;
