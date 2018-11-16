const API_URI = 'http://localhost:3000/api/';

export const FETCH_PET_REQUEST = 'FETCH_PET_REQUEST';
function fetchPetRequest(petType) {
  return {type: 'FETCH_PET_REQUEST', petType}
}

export const FETCH_PET_SUCCESS = 'FETCH_PET_SUCCESS';
function fetchPetSuccess(pet) {
  return {type: 'FETCH_PET_SUCCESS', pet}
}

export const FETCH_PET_FAILURE = 'FETCH_PET_FAILURE';
function fetchPetFailure() {
  return {type: 'FETCH_PET_FAILURE'}
}

export const fetchPet = (petType) => (dispatch) => {
  dispatch(fetchPetRequest());

  fetch(API_URI + petType)
    .then(res => {
      return res.json();
    })
    .then(res => {
      dispatch(fetchPetSuccess(res));
    })
    .catch(err => {
      fetchPetFailure(err);
      console.log(err);
    })
}

