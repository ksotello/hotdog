import React, { Component } from 'react';
import { Icon } from '.';

export default class HeroSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const hashtagHotdogs = '#hotdogs';

    return (
      <section className="hero-section">
        <div className="hero-section__top-shader"></div>
        <div className="hero-section__instagram">
          <Icon iconName="instagram"/>
          <span>{hashtagHotdogs}</span>
        </div>
      </section>

    );
  }

}
