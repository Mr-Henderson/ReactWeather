var names = ['Toby', 'Julie', 'Carmen'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
//
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Toby'));

// var person = {
//   name: 'Toby',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge
function add (a, b) {
  return a + b;
}

addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;


// names.forEach((name) => console.log(name));
//
console.log(addStatement(4, 9)
);
console.log(addExpression(9, 5));
