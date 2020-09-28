import initialState from '../initialState';
import * as actionTypes from '../actions/actionsTypes';

const map = (state = initialState.map, action) => {

    switch (action.type) {

        case actionTypes.MAP_MAPINSTANCE_SET:
          return {
              ...state,
              mapInstance: action.mapInstance
          };

        default:
            return state;
        
    }

};
  
  export default map;