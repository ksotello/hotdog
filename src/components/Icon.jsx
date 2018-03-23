import React, { Component } from 'react';
import hotdogSVG from '../assets/svg/hotdog.svg';
import instagramSVG from '../assets/svg/instagram.svg';

export default class Icon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { iconName } = this.props;
    const svgObjMap = {
      'instagram': instagramSVG,
      'hotdog': hotdogSVG
    }

    return <img src={svgObjMap[iconName]}></img>
  }

}
