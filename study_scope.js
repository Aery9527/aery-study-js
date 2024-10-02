(function () {
    console.log("---------------------------------------- test1")

    {
        console.log("scope2 : " + scope2); // 提升(hoisting)
        // console.log("scope3 : " + scope3); // let 沒有 hoisting
        // console.log("scope4 : " + scope4); // const 沒有 hoisting

        scope1 = 10; // 全域變數
        var scope2 = 20; // 早期的變數宣告方式, 作用域為函數內或全局, 容易導致作用域污染
        let scope3 = 30; // 區塊作用域變數，推薦使用，避免變數提升（hoisting）和作用域混淆問題
        const scope4 = 40; // 宣告常數, 值不可重新賦值, 亦有區塊作用域

        console.log("scope2 : " + scope2);
        console.log("scope3 : " + scope3);
        console.log("scope4 : " + scope4);

        scope1 = 100; // 全域變數
        var scope2 = 200; // 可以重新宣告
        // let scope3 = 300; // 不能重新宣告
        // const scope4 = 400; // 不能重新宣告
    }

    console.log("scope1 === 100 : " + scope1 === 100);
    console.log("scope2 === 200 : " + scope2 === 200); // scope2 在 for 迴圈裡宣告, 但是由於 var 是函數作用域, 所以這裡可以存取到
    // console.log("scope3 : " + scope3); // scope3 是區塊作用域變數, 所以這裡無法存取到
    // console.log("scope4 : " + scope4); // scope4 是常數, 所以這裡無法存取到

    const times = 3;
    const rest = 100;

    setTimeout(function () {
        console.log("---------------------------------------- for by var")
        for (var i = 0; i < times; i++) {
            setTimeout(() => console.log(`for by var ${i}`), rest);
        }
    }, 0);

    setTimeout(function () {
        console.log("---------------------------------------- for by let")
        for (let i = 0; i < 3; i++) {
            setTimeout(() => console.log(`for by let ${i}`), rest);
        }
    }, times * (rest + 1));

})();

(function () {
    console.log("---------------------------------------- test2")
    console.log(scope1); // 由於 test 裡宣告的 scope1 是全域變數，所以這裡可以存取到
    console.log(this.scope1);
    // console.log(scope2); // 由於 test 裡宣告的 scope2 是函數作用域，所以這裡無法存取到
    // console.log(scope3); // 由於 test 裡宣告的 scope3 是區塊作用域，所以這裡無法存取到
    // console.log(scope4); // 由於 test 裡宣告的 scope4 是常數，所以這裡無法存取到
})();