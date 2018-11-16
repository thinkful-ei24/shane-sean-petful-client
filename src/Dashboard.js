
import React from 'react';

export default function Dashboard(props) {
  const cat = props.catToAdopt;
  const dog = props.dogToAdopt;

  console.log(_extractDetails(cat));
  const catDetailList =  _getDetailsList(_extractDetails(cat));
  console.log(catDetailList);
  const dogDetailList =  _getDetailsList(_extractDetails(dog));

  return (
    <main>
      <h1>Petful</h1>
      <section>
        <h2>Cats</h2>
        {/* <h3>{cat.name}</h3> */}
        <img src={cat.imageURL} alt={cat.imageDescription}></img>
        <div className="pet-info">
          <dl>
            {catDetailList}
          </dl>
          <button>Adopt</button>
        </div>
      </section>
      <section>
        <h2>Dogs</h2>
        {/* <h3>{dog.name}</h3> */}
        <img src={dog.imageURL} alt={dog.imageDescription}></img>
        <div className="pet-info">
          <dl>
            {dogDetailList}
          </dl>
          <button>Adopt</button>
        </div>
      </section>
    </main>
  );
}

// returns JSX for detail items
function _getDetailsList(petDetailsObj) {
  return Object.keys(petDetailsObj).map(key => {
    const value = petDetailsObj[key];
    return (
      <React.Fragment>
        <dt>{key[0].toUpperCase() + key.substr(1)}</dt>
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