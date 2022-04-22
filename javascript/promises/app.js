// let promises = new Promise((resolve, reject) => {
//     let roomcleanedornot = false;
//     if (roomcleanedornot) {
//         resolve("yes room is cleaned");
//     }
//     else {
//         reject("no room is not cleaned")
//     }

// })
// console.log(promises);


// promises.then((cleaned) => {
//      console.log(cleaned);
// })
// promises.catch((error) => {
//     console.log(error)
// })


// promises.finally(_ => {
//     console.log("worked");
// })



// 2.ex

// function checkMail() {
//     return new Promise((resolve, reject)=> {
//         if (Math.random() > 0.5) {
//             resolve("mail has been arrived")
//         }
//         else {
//             reject("something went wrong")
//         }
//     })
// }

// checkMail().then((mail) => {
//     console.log(mail)
// })

//     .catch(err => {
//         console.log(err)
//     }).finally(_ => {
//         console.log('mail has been send')
//     });

//ex 3

// let promises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i am first');
//     }, 5000)
//     setTimeout(() => {
//         reject('opps i am too late think i am error block')
//     }, 2000)
// });

// promises.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })
   


// promise static methods (imp for interview)

// Promise.all();
// Promise.race();
// Promise.allSettled();
// Promise.any();
// Promise.resolve();
// Promise.reject();

// 1.promise.all()

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(" i am promise1 success block")
//     },1000)
// })

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(" i am promise2 success block");
//   }, 1000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(" i am promise3 success block");
//   }, 1000);
// });


// Promise.all([promise1, promise2, promise3]).then((value) =>{
//     console.log(value)//array of value
// })
//     .catch((err) => {
//     console.log(err)
// })

// o/p [' i am promise1 success block', ' i am promise2 success block', ' i am promise3 success block']




// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(" i am promise1 success block")
//     },1000)
// })

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(" i am promise2 success block");
//   }, 1000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(" i am promise3 error block");
//   }, 1000);
// });


// Promise.all([promise1, promise2, promise3]).then((value) =>{
//     console.log(value)//array of value
// })
//     .catch((err) => {
//     console.log(err)
//     })

//     o/p  i am promise3 error block


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('you have completed task so you can go for lunch')
//     },1000)
// })
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("you have completed task so you can go for lunch");
//   },1000);
// });
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("you have not completed task so you cont go for lunch");
//   }, 1000);
// });

// Promise.all([promise1, promise2,promise3]).then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
// })

// o/p

//or


// let promise1 = new Promise((resolve, reject) => {
//     let program = true;
//     let completed = true;
//     if (program == true && completed == true) {
//         resolve(" i have written program and complete first")
//     }
//     else {
//         reject("i have not written and completed task")
//     }

// })
// let promise2 = new Promise((resolve, reject) => {
//   let program = true;
//   let completed = true;
//   if (program == true && completed == true) {
//     resolve(" i have written program and complete first");
//   } else {
//     reject("i have not written and completed task");
//   }
// });
// let promise3 = new Promise((resolve, reject) => {
//   let program = true;
//   let completed = false;
//   if (program == true && completed == true) {
//     resolve(" i have written program and complete first");
//   } else {
//     reject("i have not written and completed task");
//   }
// });


// Promise.all([promise1, promise2,promise3]).then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
// })



// 2.promise.any()


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(" i am promise1 success block")
//     },1000)
// })

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(" i am promise2 success block");
//   }, 1000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(" i am promise3 success block");
//   }, 1000);
// });

// Promise.any([promise1, promise2,promise3]).then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
// })




// let promise1 = new Promise((resolve, reject) => {
//   let program = true;
//   let completed = true;
//   if (program == true && completed == true) {
//     resolve(" i have written program and complete first");
//   } else {
//     reject("i have not written and completed task");
//   }
// });
// let promise2 = new Promise((resolve, reject) => {
//   let program = true;
//   let completed = true;
//   if (program == true && completed == true) {
//     resolve(" i have written program and complete first");
//   } else {
//     reject("i have not written and completed task");
//   }
// });
// let promise3 = new Promise((resolve, reject) => {
//   let program = true;
//   let completed = false;
//   if (program == true && completed == true) {
//     resolve(" i have written program and complete first");
//   } else {
//     reject("i have not written and completed task");
//   }
// });

// Promise.any([promise1, promise2, promise3])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// 3.promise.race()

// let shashi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('shashi in running race')
//     },2000)
// })

// let dixith = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('dixith in running race')
//     },10000)
// })

// let priyanka = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('priyanka in running race')
//     },1000)
// })

// let shivu = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("priyanka in running race");
//   }, 5000);
// });

// Promise.race([shashi, dixith, priyanka, shivu]).then((value) => {
//     console.log(value)
// })
//     .catch((err) => {
//     console.log(err)
// })

// 4.promise.allsettled()

// let shashi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('shashi in running race')
//     },2000)
// })

// let dixith = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('dixith in running race')
//     },10000)
// })

// let priyanka = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('priyanka in running race')
//     },1000)
// })

// let shivu = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("shivu in running race");
//   }, 5000);
// });

// Promise.allSettled([shashi, dixith, priyanka, shivu])
//     .then((value) => {
//     console.log(value)
// })
//     .catch((err) => {
//     console.log(err)
// })



// let promise = new Promise((resolve, reject) => {
//     let roomcleanedornot = false
//     if (roomcleanedornot) {
//         resolve('yes room clened')
//     }
//     else {
//         reject('no room not clenaed')
//     }
// })

//     promise.then((value) => {
//     console.log(value)
//     })
// promise.catch(err => {
//   console.log(err);
// });
