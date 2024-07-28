import React from 'react';
import { Approachcom } from 'src/components/E-com/Approach/page';
import { Detailscom } from 'src/components/E-com/Details/page';
import { EcomHero } from 'src/components/E-com/Hero/Page';
import { Pathcom } from 'src/components/E-com/Path/page';
import { Processcom } from 'src/components/E-com/Process/page';
import { Footer } from 'src/components/Footer/page';
import { Work } from 'src/components/Work/page';



const Ecommerce = () => {
  return (
    <div>
      <EcomHero/>
      <Detailscom/>
      <Approachcom/>
      <Pathcom/>
      <Processcom/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Ecommerce;
