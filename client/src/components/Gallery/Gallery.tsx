import React, { useState } from "react";
import { Carousel } from "../Carousel/Carousel";

interface GalleryProps {
  images: Array<string>;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="mb-sizeLarge">
      <div style={{ marginBottom: "5px" }}>
        <img
          style={{
            width: "100%",
            height: "55rem",
            objectFit: "cover",
          }}
          src={images[selectedImage]}
        />
      </div>
      <div
        id="secondaryImages"
        className="flex gap-1"
        style={{ width: "100%", minHeight: "12rem", overflowX: "scroll" }}
      >
        <Carousel>
          {images.map((img, index) => (
            <img
              style={{
                width: "18rem",
                height: "12rem",
                objectFit: "cover",
              }}
              src={images[index]}
              onClick={() => setSelectedImage(index)}
              key={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
