const divide = msg => console.log("---------------------------------------- " + msg);

// --------------------------------------------------------------------------------------------
const divideForNewPromise = (stage) => divide("new Promise(executor) at " + stage);

// resolve 與 reject 兩個只能擇其一調用, 後調用的會無效果
new Promise((resolve, reject) => {
    resolve("操作成功",); // 操作這個 then 回調函數會被執行
    reject("操作失敗"); // 操作這個 catch 回調函數會被執行
})
    .then((result) => {
        divideForNewPromise(1);
        console.log(result);
    })
    .catch((error) => {
        divideForNewPromise(1);
        console.log(error);
    })
    .finally(() => {
        divideForNewPromise(1);
        console.log("*無論如何都會被執行的區域* 但這裡會是另外一個回調函數, 是在 then 或 catch 之後才會被塞到 queue 裡, 因此被執行時間延後");
    });

// resolve 與 reject 只有第一個參數會被帶到 then 或 catch 回調函數
new Promise((resolve, reject) => {
    resolve("A1", "A2"); // 只有第一個參數會帶到 then 回調函數
    // reject("B1", "B2"); // 只有第一個參數會帶到 catch 回調函數
})
    .then((r1, r2) => {
        divideForNewPromise(2);
        console.log(r1, r2);
    })
    .catch((e1, e2) => {
        divideForNewPromise(2);
        console.log(e1, e2);
    });

// 在 then 或 catch 回傳值可串行接續處理
new Promise((resolve, reject) => {
    resolve(1);
    // reject(10);
})
    // ↓ 這邊是 Promise 的設定 ↓
    .then((result) => {
        divideForNewPromise(3);
        console.log(result);
        return result + 1;
    })
    .catch((result) => {
        divideForNewPromise(3);
        console.log(result);
        return result + 1;
    })
    // ↓ 這邊是 then 或 catch 回傳值之後接續
    .then((result) => {
        divideForNewPromise(3);
        console.log(result);
        return result + 2;
    })
    .then((result) => {
        divideForNewPromise(3);
        console.log(result);
        return result + 3;
    });

// --------------------------------------------------------------------------------------------
const divideForPromiseImmediately = () => divide("Promise.{resolve|reject}");

// 快速返回一個狀態為 fulfilled 的 Promise 物件
Promise.resolve("解決").then(result => {
    divideForPromiseImmediately();
    console.log(result);
});

// 快速返回一個狀態為 rejected 的 Promise 物件
Promise.reject("失敗").catch(error => {
    divideForPromiseImmediately();
    console.log(error);
});


// --------------------------------------------------------------------------------------------
// Promise.all(ARRAY) 靜態方法接受一個包含多個 Promise 的陣列, 當所有的 Promise 都完成時它才會返回, 如果其中有任何一個 Promise 失敗則會立即返回失敗。
// 若傳入array的元素非 Promise 物件時會被 Promise.resolve 包裹, 於是內容值依然會被傳遞到 then 或 catch 回調函數裡
const divideForPromiseAll = () => divide("Promise.all");

// 空陣列會立即執行 then 回調函數
const promiseOfAllReturnStillPromise = Promise.all([])
    .then((results) => {
        divideForPromiseAll();
        console.log("arg is array of []");
    })
    .catch((results) => {
        throw new Error("不會執行");
    });

// 所有 Promise 物件都 fulfilled (實現) 才會執行 then 回調函數
Promise.all([Promise.resolve(1), 9527, Promise.resolve(3)])
    .then((results) => {
        divideForPromiseAll();
        console.log(results);
    })
    .catch((results) => {
        throw new Error("不會執行");
    });

// 只要有一個 Promise 物件 rejected (拒絕) 就會執行 catch 回調函數, 並帶入第一個 rejected 的值
Promise.all([Promise.resolve(1), 9527, Promise.reject(3)])
    .then((results) => {
        throw new Error("不會執行");
    })
    .catch((results) => {
        divideForPromiseAll();
        console.error(JSON.stringify(results));
    });


// --------------------------------------------------------------------------------------------
// Promise.race(ARRAY) 和 Promise.all(ARRAY) 類似, 但它會在最先完成的一個 Promise 結束後立即返回, 無論該 Promise 成功還是失敗。
const divideForPromiseRace = () => divide("Promise.race");

let p1 = new Promise((resolve, reject) => setTimeout(() => resolve('p1'), 100));
let p2 = new Promise((resolve, reject) => setTimeout(() => resolve('p2'), 50));
Promise.race([p1, p2]).then(result => {
    divideForPromiseRace();
    console.log(result)
});


// --------------------------------------------------------------------------------------------
// Promise.allSettled(ARRAY) 類似 Promise.all(ARRAY), 但它會等待所有的 Promise 都 settled (已完成) 後才返回, 並返回一個包含所有 Promise 結果的陣列, 無論成功或失敗。
const divideForPromiseAllSettled = () => divide("Promise.allSettled");

Promise.allSettled([Promise.resolve(1), Promise.reject('錯誤')])
    .then((results) => {
        divideForPromiseAllSettled();
        console.log(results); // 打印 [{status: "fulfilled", value: 1}, {status: "rejected", reason: "錯誤"}]
    });


// --------------------------------------------------------------------------------------------
// Promise.any(ARRAY) 只要有一個 Promise 成功, 該方法就會返回其值, 只有當所有的 Promise 都失敗時才會拒絕
const divideForPromiseAny = () => divide("Promise.any");

Promise.any([
    Promise.reject("錯誤"),
    new Promise(resolve => setTimeout(() => resolve("成功"), 100))
])
    .then(result => {
        divideForPromiseAny();
        console.log(result);
    });

