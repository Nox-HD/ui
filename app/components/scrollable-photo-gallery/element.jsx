'use client'
import React from "react";
import gsap from "gsap";
import Image from "next/image";

const Element = () => {
  const Images = [
    "/photogallery/image1.jpg",
    "/photogallery/image2.jpg",
    "/photogallery/image3.jpg",
    "/photogallery/image4.jpg",
    "/photogallery/image5.jpg",
    "/photogallery/image6.jpg",
    "/photogallery/image7.jpg",
    "/photogallery/image8.jpg",
    "/photogallery/image4.jpg",
    "/photogallery/image9.jpg",
    "/photogallery/image10.jpg",
    "/photogallery/image11.jpg",
    "/photogallery/image12.jpg",
    "/photogallery/image13.jpg",
    "/photogallery/image14.jpg",
    "/photogallery/image15.jpg",
    "/photogallery/image16.jpg",
    "/photogallery/image17.jpg",
    "/photogallery/image18.jpg",
    "/photogallery/image19.jpg",
    "/photogallery/image20.jpg",
  ];

  return (
    <main>
      <div className="flex flex-nowrap items-center">
        <div className="min-w-[400px] min-h-[200px]"/>
        {Images.slice(0, 4).map((image, index) => (
            <div key={index} className="flex-shrink-0">
                <Image src={image} height={200} width={400} />
            </div>
        ))}
      </div>
      <div className="flex flex-nowrap items-center">
        {Images.slice(5, 8).map((image, index) => (
          <div key={index} className="flex-shrink-0">
                <Image src={image} height={200} width={400} />
            </div>
        ))}
        <div className="min-w-[400px] min-h-[200px]"/>
      </div>
      <div className="flex flex-nowrap items-center">
        <div className="min-w-[400px] min-h-[200px]"/>
        {Images.slice(9, 12).map((image, index) => (
            <div key={index} className="flex-shrink-0">
                <Image src={image} height={200} width={400} />
            </div>
        ))}
      </div>
      <div className="flex flex-nowrap items-center">
        {Images.slice(13, 16).map((image, index) => (
          <div key={index} className="flex-shrink-0">
                <Image src={image} height={200} width={400} />
            </div>
        ))}
        <div className="min-w-[400px] min-h-[200px]"/>
      </div>
    </main>
  );
};

export default Element;
