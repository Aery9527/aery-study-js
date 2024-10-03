// async function 會回傳 Promise 物件
// await 只能在 async function 內使用
// await 會等待 Promise 物件的狀態變成 resolved 或 rejected

async function test_async(thrown) {
    if (thrown) {
        throw new Error('test1 error');
    } else {
        return 'test1';
    }
}

(function () {
    console.log("---------------------------------------- async")


})();


const promise1 = test_async();
promise1.then((result) => console.log(result))
    .catch((error) => console.error(error));

const promise2 = test_async(true);
promise2.then((result) => console.log(result))
    .catch((error) => console.error(error));

// 或者可以直接使用 Promise 物件
new Promise((resolve, reject) => {
    resolve('test2');
}).then((result) => console.log(result))
    .catch((error) => console.error(error));

new Promise((resolve, reject) => {
    reject('test2 error');
}).then((result) => console.log(result))
    .catch((error) => console.error(error));

new Promise((resolve, reject) => {
    throw new Error('test2 error');
}).then((result) => console.log(result))
    .catch((error) => console.error(error));


console.log("---------------------------------------- await");

(async function test_await() {
    console.log("test_await : 1")
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("test_await : 2")
        }, 1000);
    });
    console.log("test_await : 3")
})();