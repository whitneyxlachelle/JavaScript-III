/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. ???
 * 2. Implicit binding ---'This' is what's left of the period when the function is called.
 * 3. New binding --- The 'new' keyword creates a new object, and 'this' points to it.
 * 4. Explicit binding ---'Call' and 'Apply' can be used to invoke a function with a value for 'this'. And 'bind' is used to create a new function that’s bound to a 'this' value
 *
 * write out a code example of each explanation above
 */

// Principle 1

// ???? Research
// console.log(this);

// function week(Monday) {
//
//   console.log(this);
//   return `Today is ${Monday}.`;
// }
// console.log(week("Monday"));

// Principle 2

// code example for Implicit Binding
// const student = {
//   name: "Michelle",
//   age: 16,
//   favSubject: "Biology",
//   school: function() {
//     return `${this.name}\'s favorite subject is ${this.favSubject}`;

//   }
// };
// console.log(student.school());

//Principle 3

// code example for New Binding

// const netflix = new Netflix("param");
// function Netflix(show) {
//   this.show = show;
//   this.watch = function() {
//     console.log(`I love to binge watch ${this.show}.`);
//   };
// }
// const fireStick = new Netflix("The Office");
// console.log(fireStick);
// fireStick.watch();

// Principle 4

// code example for Explicit Binding
// const person = {
//   name: "Charlie"
// };
// const catagories = ["Bossa Nova", "Hip-Hop", "House", "Classical"];
// console.log(catagories);

// function listen(music1, music2, music3, music4) {

//   console.log(this);
//   return `${this.name} loves to listen to ${music1}, ${music2}, ${music3}, and ${music4}.`;
// }

//APPLY
// console.log(listen.apply(person, catagories));

// CALL
// console.log(
//   listen.call(
//     person,
//     catagories[0],
//     catagories[1],
//     catagories[2],
//     catagories[3]
//   )
// );

//BIND
// const tuneLibrary = listen.bind(person, ...catagories);
// console.log(tuneLibrary());
