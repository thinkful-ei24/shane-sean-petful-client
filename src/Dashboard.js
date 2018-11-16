
import React from 'react';
import Pet from './Pet';
import './Dashboard.css';

export default class Dashboard extends React.Component {
  adoptCat() {
    console.log('adopt this cat');
  }

  adoptDog() {
    console.log('adopt this dog');
  }

  render() {
    return (
      <React.Fragment>
        <h1>Petful</h1>
        <main role="main">
          <div className="content-container">
            <Pet species="Cats" animalToAdopt={this.props.catToAdopt} onAdoptPet={() => this.adoptCat()}/>
            <Pet species="Dogs" animalToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.adoptDog()}/>
          </div>
        </main>
      </React.Fragment>
    );
  }
}