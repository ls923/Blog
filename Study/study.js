// var httpGet = function (url, callback, timeout=0) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             if (xhr.status >= 200 && xhr.status < 400) {
//                 var response = xhr.responseText;
//                 if (callback) {
//                     callback(xhr.status, response);
//                 }
//             } else {
//                 console.error("httpGet[" + url + "] error->status:" + xhr.status + ' response:' + xhr.responseText);
//             }
//         }
//     };
//     if (timeout) {
//         xhr.timeout = timeout;
//     }
//     //超时回调记录
//     xhr.ontimeout = function () {
//         console.log("httpGet timeout url:" + url);
//     }
//     xhr.send();
// }

function want() {
    console.log(1);
}
function fn(want) {
    console.log(2);
    return new Promise(function (resolve, reject) {
        if (typeof want == "function") {
            resolve(want);
        } else {
            reject("TypeError:" + want + " no a function");
        }
    });
}
fn(want).then((want) => {
    want();
});
// fn("11").catch((err) => {
//     console.log(err);
// });


// function fn(num) {
//   return new Promise(function (resolve, reject) {
//     if (typeof num == "number") {
//       resolve();
//     } else {
//       reject();
//     }
//   }).then(
//     function () {
//       console.log("参数是一个number值");
//     },
//     function () {
//       console.log("参数不是一个number值");
//     }
//   );
// }
// fn("hahha");
// fn(1234);
// let fn = function(num){
//   return new Promise(function(resolve,reject){
//     if(typeof num == 'number'){
//       resolve(num);
//     }else{
//       reject("Error");
//     }
//   })
// }
// fn(2).then(function(num) {
//     console.log('first: ' + num);
//     return num + 1;
// })
// .then(function(num) {
//     console.log('second: ' + num);
//     return num + 1;
// })
// .then(function(num) {
//     console.log('third: ' + num);
//     return num + 1;
// });
// new Promise((resolve, reject) => {
//     console.log('初始化');
//     resolve();
// }).then(() => {
//     throw new Error('有哪里不对了');
//     console.log('执行「这个」”');
// }).catch(() => {
//     console.log('执行「那个」');
// }).then(() => {
//     console.log('执行「这个」，无论前面发生了什么');
// });
// let myFirstPromise = new Promise(function(resolve, reject){
//   console.log("进入 Promise ");
//     //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
//     //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
//     setTimeout(function(){
//         resolve("成功!"); //代码正常执行！
//     }, 1000);
// });
// myFirstPromise.then(function(successMessage){
//     //successMessage的值是上面调用resolve(...)方法传入的值.
//     //successMessage参数不一定非要是字符串类型，这里只是举个例子
//     console.log("Yay! " + successMessage);
// });
// var p1 = new Promise((resolve, reject) =>{
//     let timeOut = Math.random() * 2;
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             console.log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }).then((result)=>{
//   console.log('成功：' + result);
// }).catch(function (reason) {
//     console.log('失败：' + reason);
// });
// 同时执行多个Promise，
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 600, 'P2');
// });
// var p3 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 700, 'P3');
// });
// // 同时执行p1和p2，并在它们都完成后执行then:
// Promise.all([p1, p2, p3]).then(function (results) {
//     console.log(results); // 获得一个Array: ['P1', 'P2']
// }).catch((results)=>{
//     console.log(results); // 获得一个Array: ['P1', 'P2']
// });
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 400, 'P2');
// });
// Promise.race([p1, p2]).then(function (result) {
//     console.log(result); // 'P1'
// });
// async function testAsync() {
//     return "hello async";
// }
// testAsync().then(v => {
//     console.log(v);    // 输出 hello async
// });
// function getSomething() {
//     return "something";
// }
// async function testAsync() {
//     return Promise.resolve("hello async");
// }
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
// }
// test();
// let date = new Date();
// console.log(date);
// let url = 'https://wakatime.com/api/v1/users/current/summaries?api_key=cab8086b-99d9-402b-a91c-69be90b5d95c&start=2021-06-28&end=2021-06-28';
// httpGet(url, function (status, result) {
//     console.log(status, result);
// });

// const { log } = require("console");

// let [a, b, c] = [1, 2, 4];
// log(); (a, b, c);

// 对象解构赋值 属性无次序，但变量必须与属性同名
// let { foo2, bar2 } = { foo2: 'a', bar2: 'v' };
// log(foo2, bar2);

// let _reportData = { from_origin: 'FUZHOUAPPSHARE' };
// log("_reportData.from_origin.indexOf('FUZHOUAPPSHARE') >= 0 --->", _reportData.from_origin.indexOf('FUZHOUAPPSHARE') >= 0)
// log("_reportData.from_origin == 'FUZHOUAPPSHARE' --->", _reportData.from_origin == 'FUZHOUAPPSHARE')

