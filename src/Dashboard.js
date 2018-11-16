
import React from 'react';
import Pet from './Pet';

export default class Dashboard extends React.Component {
  adoptCat() {
    console.log('adopt this cat');
  }

  adoptDog() {
    console.log('adopt this dog');
  }

  render() {
    return (
      <main>
        <h1>Petful</h1>
        <Pet species="Cats" animalToAdopt={this.props.catToAdopt} onAdoptPet={() => this.adoptCat()}/>
        <Pet species="Dogs" animalToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.adoptDog()}/>
      </main>
    );
  }
}