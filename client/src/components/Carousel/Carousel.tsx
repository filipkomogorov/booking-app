import React, { useState, useRef, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosX, setStartPosX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onMouseLeave = () => setIsDragging(false);

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("mouseup", onMouseUp);
      carouselElement.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("mouseup", onMouseUp);
        carouselElement.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startPosX) * 1.5;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      className="carousel"
      style={{
        display: "flex",
        overflow: "hidden",
        touchAction: "pan-y", // Enable vertical scrolling on mobile devices
        width: "100%", // Add a width property
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            flexShrink: 0, // Add this property to prevent children from shrinking
            width: "18rem", // Set the width of each child
            marginRight: "0.25rem", // Add some spacing between images
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
