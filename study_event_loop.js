console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve().then(() => {
    console.log('3');
});

console.log('4');

/*
output: 1 4 3 2

因為 1 跟 4 為當前主 thread 的同步任務, 會被放入 Call Stack 先執行,
而 3 因為是 Promise 的回調函數, 會被放入 Microtask Queue 裡,
其優先級因為比 Task Queue 高, 所以會在 Timeout 之前被執行.
 */