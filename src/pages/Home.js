import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <div className="bg-background bg-no-repeat">
      <Hero />
      <Features />
      <Pricing/>
    </div>
  );
}
