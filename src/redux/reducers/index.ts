import { combineReducers } from 'redux';
import geolocation from './geolocationReducer';
import map from './mapReducer';

export default combineReducers({
    geolocation,
    map
})