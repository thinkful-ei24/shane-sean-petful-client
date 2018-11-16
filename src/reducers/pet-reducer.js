import {
  FETCH_PET_REQUEST,
  FETCH_PET_SUCCESS,
  FETCH_PET_FAILURE,
} from '../actions/pets';

const initialState = {
  loading: false,
  catToAdopt: null,
  dogToAdopt: null
}

export const petReducer = (state = initialState, action) => {
  if(action.type === FETCH_PET_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === FETCH_PET_SUCCESS) {
    if(action.petType === 'cat') {
      return Object.assign({}, state, {
        loading: false,
        catToAdopt: action.pet,
        error: null
      });
    } else if(action.petType === 'dog') {
      return Object.assign({}, state, {
        loading: false,
        dogToAdopt: action.pet,
        error: null
      });
    }
  } else if(action.type === FETCH_PET_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state;
}