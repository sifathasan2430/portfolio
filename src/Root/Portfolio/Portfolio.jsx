import React from 'react';
import { Button } from "@/components/ui/button"
import Navbar from '../../components/Layout/Navbar/Navbar';
import Hero from '../../components/Sections/Hero/Hero';
import Education from '../../components/Sections/Education/Education';
import MySkills from '../../components/Sections/Skills/MySkills';
import Contact from '../../components/Sections/Contact/Contact';
import About from '../../components/Sections/About/About';
import Project from '../../components/Sections/Project/Project';

const Portfolio = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Hero></Hero>
            <About></About>
           <Education></Education>
           <MySkills></MySkills>
           <Project></Project>
           <Contact></Contact>
        </div>
    );
};

export default Portfolio;