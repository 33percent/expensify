// const person = {
//     name:"sandeep",
//     age:25,
//     location:{
//         city:"Chennai",
//         temp:200
//     }
// };
// const {name,age,location} = person;

// console.log(`${name} is ${age}`);

// console.log(`It is ${person.location.temp} deg in ${person.location.city}`);


const address = ["1299","pallikaranai","chennai","TN",600100];

const [num,street,area,city,zip] = address;
console.log(`You are in ${address[0]}, ${area}, ${city}`);


const items = ["Capachino","$2.50","$3.50","$5.00"];

const [name,small,,large] = items;

console.log(`A large ${name} costs ${large}`);