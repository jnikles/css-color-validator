# css-color-validator
Css color validation with regexes

Usage
--------
Require module in your package.json like so:
```js
"css-color-validator": "git://github.com/jnikles/css-color-validator.git#master"
```

It exposes a function, returning true|false:
```js
var cssValidator = require('css-color-validator');
cssValidator('#fff'); // true
cssValidator('#ffff'); // false
```

Same for rgba/rgb and very basic color string support

Test
------
```
npm test
```
