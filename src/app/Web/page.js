// src/Pages/Web/Page.js
import React from 'react';
import { Approach } from 'src/components/Web-comp/Approach/page';
import { Details } from 'src/components/Web-comp/Details/page';
import { WebHero } from 'src/components/Web-comp/Hero/Page';
import { Process } from 'src/components/Web-comp/Process/page';
import { Project } from 'src/components/Web-comp/Projects/page';
import { Work } from 'src/components/Work/page';
import { Footer } from 'src/components/Footer/page';


const Web = () => {
  return (
    <div>
      <WebHero />
      <Details/>
      <Approach/>
      <Project/>
      <Process/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Web;
