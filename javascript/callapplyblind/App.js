//call method examples

// ex1
let users = {
    username: "swati",
};

function displayname() {
    //console.log(this)//window
    //console.log(thi.username)//undefined
    //console.log(this.users)//undefined
    console.log(this.username)
}

displayname.call(users)

// ex2

let data = {
    num1: 10,
};

function sum(num2) {
    console.log(this.num1 + num2);
   
}


sum.call(data, 30)

//ex3
let items = {
    a: 10,
    b:20

}

function addmultiple(c,d) {
    return this.a + this.b + c + d;
}
let allvalue = addmultiple.call(items, 20, 100)
console.log(allvalue)

//ex4
let details = {
    firstname:"renuka"
}

function displayname(lastname) {
    console.log(this.firstname+lastname)
}
displayname.call(details, "narasareddy")



//apply methods

let itemsapply = {
  a: 10,
  b: 20,
};

function addmultiple(c, d) {
  return this.a + this.b + c + d;
}
let allvalues = addmultiple.apply(itemsapply, [20, 100]);
console.log(allvalues);

//bind method

let obj1 = {
    num: 10
}

function addnumber(num2, num3, num4) {
    return this.num+num2+num3+num4
}

let totalnumber = addnumber.bind(obj1, 10, 20, 10)
console.log(totalnumber)
console.log(addnumber)