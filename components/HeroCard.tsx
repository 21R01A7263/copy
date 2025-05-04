"use client";
import React, { useState } from "react";
import Image from "next/image";

interface HeroCardProps {
  img: string;
  title: string;
  quip1: string;
  quip2: string;
  quip3: string;
}

const HeroCard = (props: HeroCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleCopy = () => {
    const quips = [props.quip1, props.quip2, props.quip3];
    const randomQuip = quips[Math.floor(Math.random() * quips.length)];
    navigator.clipboard.writeText(randomQuip)
      .then(() => {
        console.log("Copied to clipboard:", randomQuip);
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div 
      className="w-[640px] h-[114px] max-w-[640px] max-h-[117px] min-w-[640px] min-h-[117px] relative flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={`/assets/${props.img}.png`}
        alt={props.title}
        className="object-cover rounded-lg"
        width={640}
        height={114}
        priority
      />
      <p className="text-3xl font-bold absolute z-10 pl-24 text-shadow-lg/60 text-shadow-gray-800">
        {props.title}
      </p>
      
      {isHovering && (
        <button
          onClick={handleCopy}
          className="absolute right-3 z-20 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full transition-all duration-200"
          title="Copy random quip"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HeroCard;
