const person = {
    name:"sandeep",
    age:25,
    location:{
        city:"Chennai",
        temp:200
    }
};
const {name,age,location} = person;

console.log(`${name} is ${age}`);

console.log(`It is ${person.location.temp} deg in ${person.location.city}`)