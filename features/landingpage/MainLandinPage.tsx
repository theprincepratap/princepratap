import React from "react";
import Hero from "./components/Hero";
import GridCarousel from "./components/GridCarousel";
import FavSongs from "./components/FavSongs";
import SuffelCard from "./components/SuffelCard";
import Contributions from "./components/Contributions";
import ResumeSection from "./components/ResumeSection";
import XCards from "./components/XCards";
import WorkSection from "./components/WorkSection";

const MainLandinPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>
    
      <section id="work">
        <GridCarousel />
      </section>
      {/* <section>
    <ImageCard/>
   </section> */}
      <section>
        <FavSongs />
      </section>
      <section>
        <SuffelCard />
      </section>
      <section id="projects">
        <WorkSection />
      </section>
      <section id="contributions">
        <Contributions/>
      </section>
      <section id="resume">
        <ResumeSection/>
      </section>
      <section id="contact">
        
       <XCards/>

        
      </section>
       
    </div>
  );
};

export default MainLandinPage;
