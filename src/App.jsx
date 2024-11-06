import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer' />
        <Program />
        <About setPlayVideo={setPlayVideo} />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
    </div>
  );
}

export default App;
