const PATH_SEPARATOR = '.';

/**
 * Reads and returns the object's item identified by itemPath
 * @param {String} itemPath
 * @param {Object} object
 * @return {Mixed|null}
 * 
 * @usage
 *  const obj = {
 *      user: {
 *          profile: {
 *              name: 'Andrea',
 *              birth: '2000-01-27',
 *          }
 *      },
 *      location: {
 *          name: 'Milano'
 *      }
 *  }
 *  const item = getItem('user', obj);
 *      {profile:{name:'Andrea', birth:'2000-01-27'}} 
 *  const item = getItem('user.profile.name', obj); 
 *      'Andrea'
 *  const item = getItem('location.name', obj); 
 *      'Milano'
 */
const getItem = (itemPath, object = {}, separator = PATH_SEPARATOR) => {

    // get access keys as an array
    const itemAccessKeys = itemPath.split(separator);

    // extract first key
    const itemAccessKey = itemAccessKeys.shift();

    // read item with the exctracted key
    const readItem = object[itemAccessKey];

    // if it was the last key, return the item
    if (itemAccessKeys.length == 0) {
        return readItem;
    // if more keys are left to read, recurse
    } else {
        if (readItem) {
            return getItem(itemAccessKeys.join(separator), readItem);
        } else {
            return null;
        }
        
    }
    
};

export {
    getItem
};