
import React from 'react';

class AddPetForm extends React.Component {
  render() {
    return (
      <form>
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
        <label htmlFor="info"></label>
        <textarea name="info"></textarea>
      </form>
    )
  }
}

export default AddPetForm;