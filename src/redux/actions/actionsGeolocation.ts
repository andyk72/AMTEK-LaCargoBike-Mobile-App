import * as actionTypes from './actionsTypes';

import IGeolocationCoords from '../../interfaces/IGeolocationCoords';

export const geolocatorSet = (geolocator: any): {
    type: string,
    geolocator: any
} => ({
    type: actionTypes.GEOLOCATION_GEOLOCATOR_SET,
    geolocator
});

export const coordsRegister = (coords: IGeolocationCoords): {
    type: string,
    coords: IGeolocationCoords
} => ({
    type: actionTypes.GEOLOCATION_COORDS_REGISTER,
    coords
});

export const positionWatcherFromMapRegister = (): {
    type: string
} => ({
    type: actionTypes.GEOLOCATION_POSITION_WATCHER_FROM_MAP_REGISTER
});