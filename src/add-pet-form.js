
import React from 'react';
import './add-pet-form.css';
class AddPetForm extends React.Component {
  render() {
    return (
      <form className="animal-entry-form">
        <fieldset>
          <legend>Add a new animal</legend>
            <label htmlFor="name">Animal name</label> 
            <input type="text" name="name"></input>
            <label htmlFor="gender">Gender</label>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select> 
            <label htmlFor="age">Age</label>
            <input type="text" name="age"></input>
            <label htmlFor="breed">Breed</label>
            <input type="text" name="breed"></input>
            <label htmlFor="info">Background information</label>
            <textarea name="info" rows="5"></textarea>
            <button type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default AddPetForm;