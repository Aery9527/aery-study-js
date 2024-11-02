// 加上 async, 回傳值會被包裝成 Promise
async function getNumber() {
    return 5; // Promise.resolve(5)
}

getNumber().then((result) => console.log(result)); // 5

// await 只能在 async 函數中使用
(async function fetchData() {
    try {
        const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response = await promise; // await 有點像解包的概念, 會等待 promise 完成返回結果或拋出錯誤
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) { // 使用 await 可直接使用　try...catch 處理錯誤, 這樣寫更加直觀
        console.error('There has been a problem with your fetch operation:', error);
    }
})();

// 結合 Promise.all 和 async/await, 可以避免不必要的延遲
(async function parallelTasks() {
    const [result1,
        result2,
        result3] = await Promise.all([Promise.resolve("A"), Promise.resolve("B"), Promise.resolve("C")]);
    console.log(result1, result2, result3);
})();
