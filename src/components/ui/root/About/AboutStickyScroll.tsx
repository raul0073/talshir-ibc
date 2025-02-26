"use client";

import Carousel from "../../carousel";
import ilan from './../../../../app/assets/images/about/ilan1.jpg'
export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: ilan
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: ilan
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: ilan
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: ilan
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
