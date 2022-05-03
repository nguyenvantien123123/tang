
// function highlight ([first, ...strings], ...values){
//     return values.reduce(
//         (acc,aurr) => [acc, `<span>${aurr}</span>`, strings.shift()],
//         [first]
//     );
// }

// var brand = "F8";
// var course = "javascript";
// const html = highlight`Học lập trình ${course} tại ${brand} !`;
// console.log(html);

import logger from './logger.js';
console.log(typeof logger);