/**
 * Map Component
 * 
 *  The leaflet map is instantiated once a GeolocationEvents.ON_GET_CURRENT_POSITION event is fired.
 *  This is because the map must be instantiated centered at the device's current position.
 * 
 * @Redux Connected
 * 
 *  mapDispatch
 * 
 *      .geolocatorSet(geolocator: Geolocation)
 *      .mapInstanceSet(mapInstance: LeafletMap)
 *      .positionWatcherFromMapRegister
 *      .positionDetected(position)
 * 
 * @Local State Reducer
 * 
 *  .geolocator {Geolocation}
 *  .map {LeafletMap}
 * 
 * @Dependencies
 * 
 *  leaflet.js
 */

import React from 'react';

import { connect } from 'react-redux';
import { getPieceOfState as appStorePieceOfState } from '../../redux/storeFactory';
import {
    geolocatorSet,
    coordsRegister,
    positionWatcherFromMapRegister
} from '../../redux/actions/actionsGeolocation';
import { mapInstanceSet } from '../../redux/actions/actionsMap';

import Geolocation, { GeolocationEvents } from '../../libs/geolocation/geolocation';
import { geolocationCoordinatesToLatLng } from '../../data/geolocationFormatter';

import LeafletMap from '../../libs/leaflet/LeafletMap';

import '../../libs/leaflet/assets/leaflet.css'; // leaflet native css
import '../../libs/leaflet/assets/leaflet-routing-machine.css'; // leaflet-routing-machine native css
import styles from './Map.module.css';

// Redux dispatch to props
const mapDispatch = dispatch => ({
    geolocatorSet: geolocator => {
        dispatch(geolocatorSet(geolocator))
    },
    mapInstanceSet: mapInstance => {
        dispatch(mapInstanceSet(mapInstance))
    },
    positionWatcherFromMapRegister: () => {
        dispatch(positionWatcherFromMapRegister());
    },
    positionDetected: position => {
        dispatch(coordsRegister(position.coords));
    }
});

// Component state reducer
const initialState = {
    geolocator: null,
    map: null
};
const actionsTypes = {
    SET_GEOLOCATOR: 'SET_GEOLOCATOR',
    SET_MAP: 'SET_MAP'
};
const reducer = (state, action) => {
    switch(action.type) {
        case actionsTypes.SET_GEOLOCATOR:
            return {
                ...state,
                geolocator: action.geolocator
            };
        case actionsTypes.SET_MAP:
            return {
                ...state,
                map: action.map
            };
        default:
            return state;
    }
}

const Map = (props) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    /**
     * Fired on mount
     * If geolocator does not exist in app store -> creates it and stores it in Component state (and in the app store)
     * If geolocator and map exist inapp astore -> update map's center to device position
     */
    React.useEffect(() => {

        let geolocator = appStorePieceOfState('geolocation.geolocator');
        let map = appStorePieceOfState('map.mapInstance');

        // geolocator does not exist -> create it and dispatch to local reducer
        if (!geolocator) {
            geolocator = createGeolocator();
            dispatch({
                type: actionsTypes.SET_GEOLOCATOR,
                geolocator
            });
        }

        // geolocator and map exist -> force a geolocation read which will cause a map render update
        if (geolocator && map) {
            geolocator.getPosition();
        }

    }, []);

    /**
     * Fired when map has been created (on state.map update)
     * Registers geolocator.WATCH_POSITION listener, if it has not yet been registered
     */
    React.useEffect(() => {

        const geolocator = appStorePieceOfState('geolocation.geolocator');
        const map = appStorePieceOfState('map.mapInstance');
        const positionWatcherRegistered = appStorePieceOfState('geolocation.positionWatcherFromMapRegistered');

        if (geolocator !== null && map !== null && !positionWatcherRegistered) {
            console.log('    SETUP WATCHING');
            geolocator.subscribe(
                GeolocationEvents.ON_WATCH_POSITION,
                (position) => {
                    console.log('ON_WATCH_POSITION');
                    console.log('    position = ', position);
                    props.positionDetected(position);
                    map.updateCenter(geolocationCoordinatesToLatLng(position.coords));
                }
            );
            props.positionWatcherFromMapRegister();
        }

    }, [state.map]);

    /**
     * Returns the geolocator instance
     * a) If geolocator is already stored in the app store, that instance is returned
     * b) Else, geolocator is instantiated and stored into the app store
     * Subscribes a GeolocationEvents.ON_GET_CURRENT_POSITION listener which will cause a map render on evry occurrence of that event
     */
    const createGeolocator = () => {

        let geolocator;

        // read geolocator from the app store
        const appGeolocator = appStorePieceOfState('geolocation.geolocator');

        // return app store geolocator if it exists
        if (appGeolocator) {
            console.log('appGeolocator exists!!!');
            geolocator = appGeolocator;
        } else {
            console.log('appGeolocator does not exist');
            // create a geolocator instance
            geolocator = Geolocation.factory({
                subscriptions: [
                    {
                        event: GeolocationEvents.ON_GET_CURRENT_POSITION,
                        callback: (position) => {
                            renderMap({ position });
                        }
                    }
                ]
            });
            // store geolocator instance into the app store
            props.geolocatorSet(geolocator);
        }

        return geolocator;  

    };

    /**
     * Manages map rendering
     *  Creates map if it does not exist in app store (= on first call)
     *  Updates map it it already ecists in app store (= on following calls)
     * @param {Object} options
     *  .position
     *      .coords
     *          .latitude
     *          .longitude
     */
    const renderMap = ({ position }) => {

        const appMap = appStorePieceOfState('map.mapInstance');

        if (appMap !== null) {
            renderMapUpdate(appMap, { position });
        } else {
            renderMapCreate({ position });
        }

    };
    /**
     * Creates map as a LeafletMap instance
     * Positions map at position
     * Stores map instance into Component state and into application store
     * @param {Object} options
     *  .position
     *      .coords
     *          .latitude
     *          .longitude 
     */
    const renderMapCreate = ({ position }) => {

        const startCenter = [position.coords.latitude, position.coords.longitude];

        // Create LeafletMap instance
        const map = new LeafletMap({
            startCenter
        });

        // Render the map
        map.render();
        
        // render route example
        //map.renderRoute([
        //    [57.74, 11.94],
        //    [57.6792, 11.949]
        //]);

        // store map instance in component state and in app store
        dispatch({ type: actionsTypes.SET_MAP, map });
        props.mapInstanceSet(map);

    };

    /**
     * Rerenders map at options.position
     * @param {LeafletMap} map 
     * @param {Object} options 
     *  .position
     *      .coords
     *          .latitude
     *          .longitude 
     */
    const renderMapUpdate = (map, { position }) => {
        map.render({
            startCenter: geolocationCoordinatesToLatLng(position.coords)
        });
    };

    return (
        <div id="map" className={ styles.map }></div>
    );

    /**
    TESTING geolocator creation
    return (
        <React.Fragment>
        {geolocator
            ? <div className="mntr">geolocator { JSON.stringify(geolocator.subscriptions) }</div>
            : <div>NO GEOLOCATOR STILL</div>
        }
        <div id="map" className={ styles.map } onClick={ onClickHandler }></div>
        </React.Fragment>
    );
     */

};

export default connect(null, mapDispatch)(Map);