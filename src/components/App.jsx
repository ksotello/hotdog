import React, { Component } from 'react';
import { HeroSection, MenuContainer, Summary, Grid, GridSection, Footer, Header } from '.';

import allBeefHotdogPNG from '../assets/images/beef-hotdog.png';
import veganHotDogPNG from '../assets/images/vegan-hotdog.png';
import veggieHotdogPNG from '../assets/images/veggie-hotdog.png';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <HeroSection />
        <MenuContainer />
        <Summary />
        <Grid>
          <GridSection>
            <Header text="Gormet All Beef Hotdogs" />
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pallentesque ornare sem lacinia quam venenatis vestibulum</p>
          </GridSection>
          <GridSection>
            <img src={allBeefHotdogPNG} alt="Gormet All Beef Hotdogs" />
          </GridSection>
          <GridSection>
            <img src={veganHotDogPNG} />
          </GridSection>
          <GridSection>
            <Header text="Vegan Hotdogs" />
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pallentesque ornare sem lacinia quam venenatis vestibulum</p>
          </GridSection>
          <GridSection>
            <Header text="Vegatarian Hotdogs" />
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pallentesque ornare sem lacinia quam venenatis vestibulum</p>
          </GridSection>
          <GridSection>
            <img src={veggieHotdogPNG} alt="Vegan Hotdogs" />
          </GridSection>
        </Grid>
        <Footer copyWrite="® 2016 Dirty Dogs all rights reserved"
                address="274 Marconi Blvd. Columbus, Ohio 43215"
                phone="614.538.0095"
                contact="Contact Us"/>
      </div>
    );
  }

}
