import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 750, delay: 750 });
  return (
    <div className="bg-background bg-no-repeat" ref={scrollRef}>
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}
