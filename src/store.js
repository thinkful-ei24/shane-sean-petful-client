import { createStore } from 'redux';
import { petReducer } from './reducers/pet-reducer';

const store = createStore(petReducer);

export default store;