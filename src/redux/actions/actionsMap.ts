import * as actionTypes from './actionsTypes';

export const mapInstanceSet = (mapInstance: any): {
    type: string,
    mapInstance: any
} => ({
    type: actionTypes.MAP_MAPINSTANCE_SET,
    mapInstance
});