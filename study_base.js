console.log("---------------------------------------- 判斷 ")

console.log("5 == '5'           >>> " + (5 == '5')); // 寬鬆相等: 只檢查值是否相等, 會自動進行類型轉換
console.log("5 === '5'          >>> " + (5 === '5')); // 嚴格相等: 不僅檢查值是否相等, 還檢查類型是否一致, 不會進行隱式轉換
console.log("null == undefined  >>> " + (null == undefined)); // true, 因為 `null` 和 `undefined` 被認為是相等的
console.log("null === undefined >>> " + (null === undefined)); // false, 類型不同

console.log("0                  >>> " + Boolean(0));
console.log("''                 >>> " + Boolean(''));
console.log("null               >>> " + Boolean(null));
console.log("undefined          >>> " + Boolean(undefined));
console.log("NaN                >>> " + Boolean(NaN));
console.log("[]                 >>> " + Boolean([]));
console.log("{}                 >>> " + Boolean({}));
// 除此之外判斷都是true


console.log("---------------------------------------- for ")

for (let a = 0; a < 5; a++) {
    console.log("for a : " + a);
}

for (let b of [9, 5, 2, 7]) {
    console.log("for b : " + b);
}

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log("for key : " + key);
}

[5, 6, 7, 8].forEach((e) => {
    console.log("for e : " + e);
});


console.log("---------------------------------------- 展開運算子 (Spread operator) ")

const arr1 = ['emma', 'is'];
const arr2 = [18, 'years old'];
console.log(arr1.concat(arr2));
console.log([...arr1, 18, 'years old']); // 這裡的 ... 是展開運算子, 也可當作 clone 陣列使用
console.log([...'name']); // 將可迭代(Iterable)的物件轉為陣列, String/Array/TypedArray/Map/Set


console.log("---------------------------------------- 其餘運算子 (Rest operator)");

((x, y, ...z) => {
    console.log(x);
    console.log(y);
    console.log(z);
})(1, 2, 3, 4, 5);


console.log("---------------------------------------- 解構賦值 (destructuring)");

{
    const [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3]
}

{
    let {a, b, ...rest} = {a: '1', b: '2', c: '3', d: '4'};
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // {c:3, d:4}
}




