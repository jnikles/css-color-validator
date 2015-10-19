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
        colorRegEx = /^aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|transparent$/;
    return hexRegEx.test(color) || rgbaRegEx.test(color) || rgbRegEx.test(color) || colorRegEx.test(color);
};
