// .js --> por defecto utiliza CommonJS
// .mjs --> por defecto utiliza ES Modules
// .cjs --> para utilizar CommonJS. No aconsejable, usar .js

import { sum, sub, mult } from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mult(1, 2))
