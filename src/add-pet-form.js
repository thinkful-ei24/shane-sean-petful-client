
import React from 'react';

class AddPetForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name"></label> 
        <input type="text" name="name"></input>
      </form>
    )
  }
}

export default AddPetForm;