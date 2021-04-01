// import { sum, sub } from './calc.js';

// console.log('The Sum is', sum(2, 3));
// console.log('The Sub is', sub(5, 3));


//Importing as a Namespace
import * as Calc from './calc.js';
import { default as name, sayGreeting } from './whoami.js';

console.log('The Sum is', Calc.sum(2, 3));
console.log('The Sub is', Calc.sub(5, 3));


//Import using default as syntax
// import { default as sayMyName } from './whoami.js';


//Import without the curly braces ({ })
import sayMyName from './whoami.js';


console.log('The name is', name());
console.log('Greeting is', sayGreeting('Tapas'));

