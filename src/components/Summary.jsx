import React, { Component } from 'react';
import { Icon, Header, LinkButton } from '.';

export default class Summary extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="summary">
        <Icon iconName="hotdog" />
        <Header size="large" text="Dirty Dogs serves all-beef, vegan and vegetarian hot dogs" />
        <LinkButton linkText="More dogs 'n make Em Hot'" />
      </section>
    );
  }

}
