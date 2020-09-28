import { createStore } from 'redux';
import { getItem } from '../utils/objectUtil';

let store = null;

/**
 * Creates store and returns it
 * @param {Function} reducer 
 * @returns {Object}
 */
export const factory = (reducer) => {
    store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

/**
 * Returns store
 * @returns {Object}
 */
export const getStore = () => store;

/**
 * Returns the piece of state defined by piecePath
 * @param {String} piecePath 
 */
export const getPieceOfState = (piecePath) => {
    return getItem(piecePath, getStore().getState());
};
