//  commonJS, every file is module (by default)
//  Modules - Encapsulated code (only share minimum)
const names= require('./names');
const sayHi= require('./utils');
const data= require('./alternative');
console.log(data);
require('./mind-grenade');
sayHi('Sarthak');
sayHi(names.john);
sayHi(names.peter);