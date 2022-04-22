let value = require("./mernstack")
console.log(value)

// object export
// let { frontend, backend, database } = require('./mernstack')

// let x = frontend("html", "css", "js", "reactjs")
// let y = backend("nodejs", "java");
// let z = database("mangodb", "mysql");

// console.log(x)
// console.log(y)
// console.log(z)

// object destructuring
// let { trainers, courses } = require("./mernstack.js");
// trainers.forEach(x => console.log(x));
// courses.forEach(x=>console.log(x))

// for (let course of courses) {
//     console.log(course)
// }

// witoutvariable object exporting

// let value = require("./mernstack")
// let trainers = value.jspider.trainers;
// let courses = value.jspider.courses;

// trainers.map(x => console.log(x))
// courses.forEach(x=>console.log(x))

// es6 modules
// named export

// import { frontend, backend, database } from "./mernstack.js";

// let x = frontend("html", "css", "javscript");
// let y = backend("nodejs", "pung", "java");
// let z = database("mongodb", "mysql");

// console.log(`the frontend technology:${x}`)
// console.log(`the backend technology:${y}`);
// console.log(`the database are:${z}`);

// export default

// import xyz, { backend } from "./mernstack.js";
// console.log(xyz);
// console.log(backend);

// name import as alias

// import { fullstack as x } from "./mernstack.js"

// let javafullstack = x("java", "spring", "hibernate", "react", "javascript")

// let mernfullstack = x("js", "express", "nodejs", "reactjs", "react")

// javafullstack.forEach(x => console.log(x))

// console.log(" ")

// mernfullstack.forEach(x => console.log(x));

// name export as alias

// import { jspuser, jspcourses } from "./mernstack.js"

// console.log(jspuser);
// console.log(jspcourses);

// both name and defalt

// import jspiders, { users, courses } from "./mernstack.js";
// let jsp = jspiders("java", "javascript", "nodejs", "reactjs")
// console.log(
//   `my name is ${users.name} i am getting ${users.salary} i work for ${users.company} even i am selected ${courses.coursesname}my trainer is ${courses.trainer} and duration is ${courses.duration} courses are ${jsp}`
// );

// import * as jsp from "./mernstack.js";
// console.log(jsp);

// console.log(jsp.users.name);
// console.log(jsp.courses.coursesname);
// let course = jsp.default("html", "css");
// console.log(course);
