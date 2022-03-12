// var json = '["Javascript", "PHP"]'

// console.log(JSON.stringify(
//   {
//     name: "Minh",
//     age: 18,
//   }
// ));


// setTimeout(function () {
//   console.log(1); //Task 1
//   setTimeout(function () {
//     console.log(2); //Task 2
//     setTimeout(function () {
//       console.log(3) //Task 3
//       setTimeout(function () {
//         console.log(4) //Task 4
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

//Promise (1. Pending, 2. Fulfilled, 3. Rejected)
// + Create new Promise (object constructor)
// + Executor
// + Prototypes
// + .then(callback);
// +.catch(callback);
// .finally(callback);

// var promise = new Promise(function (resolve, reject) {
// Logic 
// Passed: resolve();
// Fail: reject();

//Fake call API
// resolve([
//   {
//     id: 1,
//     name: "Javascript",
//   }
// ]);
//   resolve("Co loi");
// });
// promise
//   .then(function (courses) {
//     console.log("Sucessfully");
//     console.log(courses);
//     return 1;
//   })
//   .then(function () {
//     console.log();
//   })
//   .catch(function (error) {
//     console.log("Failure");
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Done");
//   })

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   })
// }
// sleep(1000).then(function () {
//   console.log(1);
//   return sleep(1000);
// })
//   .then(function () {
//     console.log(2);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   })




var promise = new Promise(function (resolve, reject) {
  // resolve('Success!');
  reject("Error");
})
promise.then(function (result) {
  console.log(result);
})
  .catch(function (Err) {
    console.log(Err);
  })
