/* eslint-disable no-unused-vars */
// src/components/Gallery.jsx
import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import Slider from "./Slider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Gallery = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      name: "Konark Sun Temple",
      coverImage:
        "https://t4.ftcdn.net/jpg/01/96/60/45/360_F_196604566_VbLj8lwfSJkkeqyXb7ym5KLphGesjIW5.jpg",
      description:
        "This 13th-century UNESCO World Heritage Site in Odisha is an architectural masterpiece, designed as a colossal chariot dedicated to the Sun God, Surya. The temple is adorned with intricate carvings of celestial beings, animals, and everyday life, reflecting the grandeur of Kalinga architecture.",
      images: [
        "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtvbmFyayUyMHN1biUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.pexels.com/photos/11417323/pexels-photo-11417323.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6040171/pexels-photo-6040171.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.unsplash.com/photo-1656000599453-b33750b7e094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww",
        "https://images.pexels.com/photos/11404370/pexels-photo-11404370.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6040174/pexels-photo-6040174.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/24238094/pexels-photo-24238094/free-photo-of-konark-sun-temple-puri-district-odisha-india.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      name: "Puri",
      coverImage:
        "https://t4.ftcdn.net/jpg/04/82/09/83/360_F_482098383_n6JMrdv1bBwHYXX27qQGalGJ97xa1eK2.jpg",
      description:
        "A prominent pilgrimage site in Odisha, Puri is renowned for the Jagannath Temple, one of Hinduism's Char Dham. The city is famous for its annual Rath Yatra, where millions gather to witness the grand chariot festival. Puri's serene beaches and spiritual ambiance make it a unique blend of devotion and natural beauty.",
      images: [
        "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-107749499/107749499.jpg",
        "https://w0.peakpx.com/wallpaper/114/276/HD-wallpaper-lord-jagannath-rath-yatra-temple.jpg",
        "https://w0.peakpx.com/wallpaper/848/431/HD-wallpaper-jagannath-rath-cloud-sky.jpg",
        "https://t3.ftcdn.net/jpg/05/41/13/84/360_F_541138479_0ZyLOAZxh5lNndsAcsLdVphWKht4icgy.jpg",
        "https://media.istockphoto.com/id/1169379447/photo/dynamic-golden-sea-beach-at-puri-odisha-india.jpg?s=612x612&w=0&k=20&c=-2SxhB0znREZNPazDU0j8EiUVLkr1a91yZMVOGnxAWI=",
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Puri_Sea_Beach_viewed_from_the_light_house.jpg",
        "https://media.assettype.com/outlooktraveller%2Fimport%2Foutlooktraveller%2Fpublic%2Fuploads%2Farticles%2Fexplore%2FPuri.jpg",
      ],
    },
    {
      name: "Khandagiri Caves",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Khandagari_and_Udaygiri_featured_image.jpg",
      description:
        "Located near Bhubaneswar, these ancient rock-cut caves date back to the 2nd century BCE. Carved during King Kharavela's reign, they served as a Jain monastic complex. The caves feature remarkable carvings, inscriptions, and sculptures, offering a glimpse into Odisha's rich history and Jain heritage.",
      images: [
        "https://img.veenaworld.com/wp-content/uploads/2021/10/Udaygiri-and-Khandagiri.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/aa/2f/d6/img-20170915-125714-largejpg.jpg?w=600&h=500&s=1",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Udaygiri_%26_Khandagiri_Caves%2C_Bhubaneswar_%2819%29_-_Oct_2010.jpg/293px-Udaygiri_%26_Khandagiri_Caves%2C_Bhubaneswar_%2819%29_-_Oct_2010.jpg",
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6e/b4/cc.jpg",
      ],
    },
    {
      name: "",
      coverImage: "/images/sydney.jpg",
      description: "",
      images: [
        "/images/sydney1.jpg",
        "/images/sydney2.jpg",
        "/images/sydney3.jpg",
      ],
    },
  ];

  const openSlider = (place) => setSelectedPlace(place);
  const closeSlider = () => setSelectedPlace(null);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          {places.map((place, index) => (
            <PlaceCard
              key={index}
              place={place}
              onClick={() => openSlider(place)}
            />
          ))}
        </div>
        {selectedPlace && (
          <Slider images={selectedPlace.images} onClose={closeSlider} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
