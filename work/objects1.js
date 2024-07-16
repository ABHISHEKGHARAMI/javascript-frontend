let objects = {
    name : 'shocks',
    price : 1059
};

console.log(objects);
console.log(objects.name);
console.log(objects.price);

objects.new_property = false;
objects.name = 'cotton shocks';

console.log(objects);

// json stringify the object then log it
let jsonObject = JSON.stringify(objects);
console.log(jsonObject);

// after that back to object
let backObject = JSON.parse(jsonObject);
console.log(backObject);