const API_URI = 'https://petful-client.now.sh/api/';

export const FETCH_PET_REQUEST = 'FETCH_PET_REQUEST';
export const fetchPetRequest =(petType) => ({
  type: 'FETCH_PET_REQUEST',
  petType
});

export const FETCH_PET_SUCCESS = 'FETCH_PET_SUCCESS';
export const fetchPetSuccess = (petType ,pet) => ({
  type: 'FETCH_PET_SUCCESS',
  pet,
  petType
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

export const removePet = (petType) => (dispatch) => {
  dispatch(fetchPetRequest());

  return fetch(API_URI + petType, {
    method: 'DELETE',
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
      res.sendStatus(204);
      return res.json();
    })
    // .then(() => {
    //   return dispatch(fetchPet(petType));
    // })
    // .then(nextPetRes => {
    //   if(!nextPetRes.ok) {
    //     return Promise.reject({
    //       message: nextPetRes.statusText,
    //       code: nextPetRes.status
    //     });
    //   }
    //   return nextPetRes.json();
    // })
    .catch(err => {
      fetchPetFailure(err);
      console.log(err);
    })
}
