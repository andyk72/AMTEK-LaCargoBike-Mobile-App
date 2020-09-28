import initialState from '../initialState';
import * as actionTypes from '../actions/actionsTypes';
import { geolocationCoordinatesToObject } from '../../data/geolocationFormatter';

const geolocation = (state = initialState.geolocation, action) => {

    switch (action.type) {

        case actionTypes.GEOLOCATION_GEOLOCATOR_SET:
            return {
                ...state,
                geolocator: action.geolocator
            };

        case actionTypes.GEOLOCATION_COORDS_REGISTER:
            const coords = geolocationCoordinatesToObject(action.coords);
            return {
                ...state,
                coords: coords,
                coordsHistory: [...state.coordsHistory, coords]
            };

        case actionTypes.GEOLOCATION_POSITION_WATCHER_FROM_MAP_REGISTER:
            return {
                ...state,
                positionWatcherFromMapRegistered: true
            };

        default:
            return state;
        
    }

  }
  
  export default geolocation;