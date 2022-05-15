# statewalker-ns

This package contains common namespace for StateWalker libraries.
This namespace allows to share code loaded independently by various applications. 

Logically this module gets the global context (the `g` variable 
in the example below) and verifies that there is an object 
associated with the `statewalker` key:

```js
let g;
g = g || (typeof window !== 'undefined' ? window : undefined);
g = g || (typeof global !== 'undefined' ? global : undefined);
g = g || {};
const ns = g.statewalker = g.statewalker || {};
export default ns;
```

This global namespace is used to share code and data between applications loaded independently:
```js
import { default as ns } from "@setatewalker/ns";
import newServices from ...
const services = ns.services = ns.services || newServices();
...
```