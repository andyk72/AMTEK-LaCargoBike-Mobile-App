import * as actionTypes from './actionsTypes';

import IGeolocationCoords from '../../interfaces/IGeolocationCoords';

export const coordsRegister = (coords: IGeolocationCoords): {
    type: string,
    coords: IGeolocationCoords
} => ({
    type: actionTypes.GEOLOCATION_COORDS_REGISTER,
    coords
});