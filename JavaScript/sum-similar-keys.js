//Sum similar keys in an array of objects

var firstObj = [
    { 'unit': 'U1', 'price': 50 },
    { 'unit': 'U1', 'price': 50 },
    { 'unit': 'U2', 'price': 20 },
    { 'unit': 'U3', 'price': 40 },
    { 'unit': 'U4', 'price': 40 }
];

var holder = {};

firstObj.forEach(function(d) {
  if (holder.hasOwnProperty(d.unit)) {
    holder[d.unit] = holder[d.unit] + d.price;
  } else {
    holder[d.unit] = d.price;
  }
});

var lastObj = [];

for (var prop in holder) {
  lastObj.push({ unit: prop, price: holder[prop] });
}

console.log(firstObj,lastObj);
