// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const { john, peter } = require('./4-first-module')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')
sayHi('Gabi')
sayHi(john)
sayHi(peter)
