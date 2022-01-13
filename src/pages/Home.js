import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="bg-background bg-cover bg-no-repeat">
      {/* Hero section */}
      <Hero />
      {/* Features */}
      <Features />
    </div>
  );
}
