/**
 * useIonicTabWithoutToolBar hook
 * 
 *  Removes the IonTabBar from a Tab page
 * 
 * @usage
 * 
 *  useIonicTabWithoutTabBar();
 */
import React from 'react';

import useIonicTabsUtils from './useIonicTabUtils';

export default () => {
    const {
        tabBarShow,
        tabBarHide
    } = useIonicTabsUtils();

    // Page Home hides IonTabBar on mount and shows it again on unmount
    React.useEffect(() => {
        tabBarHide();
        return () => {
            tabBarShow();
        };
    }, []);

    return null;
}