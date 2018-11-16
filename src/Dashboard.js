
import React from 'react';
import {connect} from 'react-redux';
import {fetchPet, removePet} from './actions/pets';
import Pet from './Pet';
import './Dashboard.css';

class Dashboard extends React.Component {
  componentDidMount(prevProps) {
    this.props.dispatch(fetchPet('cat'));
    this.props.dispatch(fetchPet('dog'));
  }

  adoptCat() {
    this.props.dispatch(removePet('cat'))
      .then(() => this.props.dispatch(fetchPet('cat')))
  }

  adoptDog() {
    this.props.dispatch(removePet('dog'))
      .then(() => this.props.dispatch(fetchPet('dog')));
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

const mapStateToProps = state => ({
  dogToAdopt: state.dogToAdopt,
  catToAdopt: state.catToAdopt,
  loading: state.loading
});
export default connect(mapStateToProps)(Dashboard);