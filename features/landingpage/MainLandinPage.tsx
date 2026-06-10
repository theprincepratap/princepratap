import React from "react";
import Hero from "./components/Hero";
import GridCarousel from "./components/GridCarousel";
import FavSongs from "./components/FavSongs";
import SuffelCard from "./components/SuffelCard";
import Contributions from "./components/Contributions";
import XCards from "./components/XCards";
import WorkSection from "./components/WorkSection";

const MainLandinPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section>
        <Hero />
      </section>
    
      <section>
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
      <section>
        <WorkSection />
      </section>
      <section>
        <Contributions/>
      </section>
      <section>
        
       <XCards/>

        
      </section>
       
    </div>
  );
};

export default MainLandinPage;
