const API_URI = 'http://localhost:3000/api/';

export const FETCH_PET_REQUEST = 'FETCH_PET_REQUEST';
export const fetchPetRequest =(petType) => ({
  type: 'FETCH_PET_REQUEST',
  petType
});

export const FETCH_PET_SUCCESS = 'FETCH_PET_SUCCESS';
export const fetchPetSuccess = (petType ,pet) => ({
  type: 'FETCH_PET_SUCCESS',
  pet
});

export const FETCH_PET_FAILURE = 'FETCH_PET_FAILURE';
export const fetchPetFailure = () => ({
  type: 'FETCH_PET_FAILURE'
});

export const fetchPet = (petType) => (dispatch) => {
  dispatch(fetchPetRequest());

  return fetch(API_URI + petType, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject({
          message: res.statusText,
          code: res.status
        });
      }
      return res.json();
    })
    .then(res => {
      dispatch(fetchPetSuccess(petType, res));
    })
    .catch(err => {
      fetchPetFailure(err);
      console.log(err);
    })
}

