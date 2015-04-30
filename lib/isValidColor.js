/**
 * Validating css color based on different regexes
 * - hex string
 * - rgba format
 * - rgb format
 * - some basic color strings + transparent
 * @param color
 */


module.exports = function (color) {
    "use strict";
    var hexRegEx = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i,
        rgbaRegEx = /^rgba\(\s?(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?){3}([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s?\)$/,
        rgbRegEx = /^rgb\(\s?(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?){2}([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s?\)$/,
        colorRegEx = /^black|white|red|blue|green|transparent$/;


    return hexRegEx.test(color) || rgbaRegEx.test(color) || rgbRegEx.test(color) || colorRegEx.test(color);
};