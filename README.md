- 原型鏈
    - [study code](./study_prototype_chain.js)
    - 原型鏈(Prototype Chain)是 js 的一個核心概念, 當訪問物件的屬性或方法時會先檢查該物件本身是否擁有這個屬性或方法, 如果沒有則會沿著原型鏈向上查找,
      直到找到這個屬性或者到達原型鏈的頂端, 即 null 為止
    - js 中所有物件最終都會繼承自 `Object` 的原型, 因此, `Object.prototype` 是所有物件的最終原型, 並且其原型是 null
    - 原型鏈允許物件共享屬性和方法, 這意味著不同的物件可以共用相同的函數或屬性, 而不需要在每個物件中重複定義, 這能節省記憶體
    - 原型鏈是 js 實現繼承的基礎, 使得子類別可以繼承父類別的行為
    - `__proto__` 是物件(包含函數)的一個隱式屬性, 其指向該物件的原型, 也就是依賴該值建立原型鏈
    - `prototype` 是每一個函數(尤其是構造函數, constructor function)在被定義時, 會自動具有一個 `prototype` 屬性, 其指向一個物件, 當這個函數來創建一個新物件時,
      該新物件的 `__proto__` 屬性會指向該函數的 `prototype` (感覺就像 factory pattern 的概念)
- 非同步
  - js 是單線程, 非同步則是藉由事件循環(event loop)來實現
  - [study code](./study_async.js)