class App {
  constructor(a) {
    this.a = a;
    alert(this.a);
  }
}
const videoAuto = require("videoauto");
console.log(videoAuto);
var app = new App("a");

var pro = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
async function main(){
  var res = await pro;
  console.log(res);
}
main();
// console.log(pro);
// pro
//   .then((res) => {
//     alert(res);
//   })
//   .then((res) => {
//     alert(1 + res);
//   })
//   .catch(() => {
//     alert("error1");
//   })
//   .catch(() => {
//     alert("error2");
//   });
