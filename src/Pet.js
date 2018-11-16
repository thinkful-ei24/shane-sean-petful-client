
import React from 'react';
import './Pet.css';

export default function Pet(props) {
  const animal = props.animalToAdopt;
  if(animal === null) {
    return (
      <section className="pet-info-section">
        <h2>{props.species}</h2>
        <div>Loading</div>
      </section>
    );
  }
  // prep to render details
  const animalDetailList = _getDetailsList(_extractDetails(animal));

  return (
    <section className="pet-info-section">
      <h2>{props.species}</h2>
      <img src={animal.imageURL} alt={animal.imageDescription}></img>
      <div className="pet-details">
        <dl>
          {animalDetailList}
        </dl>
        <button onClick={props.onAdoptPet}>Adopt</button>
      </div>
    </section>
  );
}

// returns JSX for detail items
function _getDetailsList(petDetailsObj) {
  return Object.keys(petDetailsObj).map(key => {
    const value = petDetailsObj[key];
    return (
      <React.Fragment>
        <dt>{key[0].toUpperCase() + key.substr(1)}:</dt>
        <dd>{value}</dd>
      </React.Fragment>
    );
  });
}

// gets a details object from pet info
function _extractDetails(petObj) {
  const petInfo = {
    name: petObj.name,
    gender: petObj.sex,
    age: petObj.age,
    breed: petObj.breed,
    story: petObj.story
  }
  return petInfo;
}