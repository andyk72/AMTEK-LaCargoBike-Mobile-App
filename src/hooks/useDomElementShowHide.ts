/**
 * useDomElementShowHide hook
 *  Exposes utilities to show/hide dom elements
 *  Show/Hide it accomplished by adding/removing a css hiding class to the dom element's classlist
 * 
 * @utilities 
 * 
 *  .domElementShow(domSelector: string, hideClass: string | undefined = undefined): void
 *  .domElementHide(domSelector: string, hideClass: string | undefined = undefined): void
 *  .$domElementGet(domSelector: string): HTMLElement | null
 * 
 * @usage
 * 
 *  const {domElementShow, domElementHide, $domElementGet} = domElementShowHide();
 *  domElementHide('.panel', 'ion-hide');
 *  domElementShow('.panel', 'ion-hide');
 */

const DEFAULT_HIDE_CLASS = 'ion-hide';

let $domElement: HTMLElement | null = null;

/**
 * Returns the css hide class name
 * @param hideClass
 */
const _getHideClass = (hideClass: string | undefined): string => {
    return hideClass || DEFAULT_HIDE_CLASS;
}

/**
 * Shows domSelector element, if any
 * @param domSelector 
 * @param hideClass 
 */
const domElementShow = (domSelector: string, hideClass: string | undefined = undefined): void => {
    const $domElement = $domElementGet(domSelector);
    if ($domElement) {
        $domElement.classList.remove(_getHideClass(hideClass));
    }
};

/**
 * Hides domSelector element, if any
 * @param domSelector 
 * @param hideClass 
 */
const domElementHide = (domSelector: string, hideClass: string | undefined = undefined): void => {
    const $domElement = $domElementGet(domSelector);
    if ($domElement) {
        $domElement.classList.add(_getHideClass(hideClass));
    }
};

/**
 * Returns domSelector element, if any
 * @param domSelector 
 * @param hideClass 
 */
const $domElementGet = (domSelector: string): HTMLElement | null => {
    if (!domSelector) {
        return null;
    }
   if (!$domElement) {
       $domElement = document.querySelector(domSelector);
   }
   return $domElement;
};

export default () => {
    return {
        domElementShow,
        domElementHide,
        $domElementGet
    }
}