/**
 * useIonicTabsUtils hook
 *  Exposes Ionic Tabs related utilities
 *  Built on top of useDomElementShowHide hook
 * 
 * @utilities
 *  
 *  .tabBarShow(): void
 *  .tabBarHide(): void
 *  .$tabBarGet(domSelector: string | undefined = undefined): HTMLElement | null
 * 
 * @usage
 * 
 *  const {tabBarShow, tabBarHide} = useIonicTabsUtils();
 *  React.useEffect(() => {
 *      tabBarHide();
 *      return () => {
 *          tabBarShow();
 *      };
 *  }, []);
 */

import domElementShowHide from './useDomElementShowHide';

const CONFIG = {
    css: {
        hideClass: 'ion-hide'
    },
    domSelectors: {
        tabBar: 'ion-tab-bar'
    }
};

const {
    domElementShow,
    domElementHide,
    $domElementGet
} = domElementShowHide();

const tabBarShow = () => {
    domElementShow(CONFIG.domSelectors.tabBar, CONFIG.css.hideClass);
};

const tabBarHide = () => {
    domElementHide(CONFIG.domSelectors.tabBar, CONFIG.css.hideClass);
};

const $tabBarGet = (domSelector: string | undefined = undefined): HTMLElement | null => {
    return $domElementGet(domSelector || CONFIG.domSelectors.tabBar);
};

export default () => {
    return {
        tabBarShow,
        tabBarHide,
        $tabBarGet
    }
}