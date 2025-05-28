import React from "react";
import About from "./About";
import DarkModeToggle from "./DarkModeToggle";
import Footer from "./Footer";
import Hero from "./Hero";
import Lounges from "./Lounges";
import NavBar from "./NavBar";
import PopularItems from "./PopularItems";
import Reviews from "./Reviews";

function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <PopularItems />
            <Reviews />
            <Lounges />
            <About />
            <DarkModeToggle />
            <Footer />
        </div>
    );
}

export default Home;
