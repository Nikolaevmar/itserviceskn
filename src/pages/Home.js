import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import RequestForm from "../components/RequestForm";

export default function Home() {
  return (
    <div className="bg-background bg-no-repeat">
      <Hero />
      <Features />
      <Pricing />
      <RequestForm />
    </div>
  );
}
