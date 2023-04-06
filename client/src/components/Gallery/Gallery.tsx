import React from "react";

interface GalleryProps {
  images: Array<string>;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  let headImage: string | undefined;
  if (images.length !== 0) {
    headImage = images[0]
  } else {
    return null;
  }
// headImage = images.shift();
  return (
    <div>
      <div>
        <img
          style={{
            width: "60%",
            height: "50rem",
            objectFit: "cover",
          }}
          src={headImage}
        />
      </div>
    </div>
  );
};

export default Gallery;
