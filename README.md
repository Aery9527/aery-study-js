- 原型鏈
    - [study_prototype_chain](./study_prototype_chain.js)
    - 原型鏈(Prototype Chain)是 js 的一個核心概念, 當訪問物件的屬性或方法時會先檢查該物件本身是否擁有這個屬性或方法, 如果沒有則會沿著原型鏈向上查找,
      直到找到這個屬性或者到達原型鏈的頂端, 即 null 為止
    - js 中所有物件最終都會繼承自 `Object` 的原型, 因此, `Object.prototype` 是所有物件的最終原型, 並且其原型是 null
    - 原型鏈允許物件共享屬性和方法, 這意味著不同的物件可以共用相同的函數或屬性, 而不需要在每個物件中重複定義, 這能節省記憶體
    - 原型鏈是 js 實現繼承的基礎, 使得子類別可以繼承父類別的行為
    - `__proto__` 是物件(包含函數)的一個隱式屬性, 其指向該物件的原型, 也就是依賴該值建立原型鏈
    - `prototype` 是每一個函數(尤其是構造函數, constructor function)在被定義時, 會自動具有一個 `prototype` 屬性, 其指向一個物件, 當這個函數來創建一個新物件時,
      該新物件的 `__proto__` 屬性會指向該函數的 `prototype` (感覺就像 factory pattern 的概念)
- 非同步
    - js 是單線程, 非同步則是藉由事件循環(Event Loop)來實現 [study_event_loop](./study_event_loop.js)
        - **Call Stack (呼叫推疊)** : 是一個 LIFO（後進先出）的資料結構, 所有同步操作都會被放在該推疊中由主 thread 執行, 基本上是以函數為單位, 所以在清空之前
          **Call Stack** 是不會被 **Event Loop** 給插隊
        - **Task Queue (任務隊列)** : 是一個 FIFO（先進先出）的資料結構, 非同步操作完成後, 回調函數會被放入 **Task Queue** 中, 然後 Event Loop
        - **Event Loop (事件循環)** : 是一個不斷運行的進程, 會檢查 **Call Stack** 為空時, 從 **Task Queue** 中取出一個回調函數放入 **Call Stack** 中執行
        - **Microtask Queue (微任務隊列)** : 這裡存放的是 `Promise` 的回調函數及其他一些微任務, 優先級比 **Task Queue** 高, **Event Loop** 會在
          **Microtask Queue** 清空之後才處理 **Task Queue** 裡的回調函數
        - **Web APIs** : 當進行瀏覽器提供的非同步操作(如 `setTimeout()`、`XMLHttpRequest`、`EventListen`等)時, 這些操作並不會直接進入呼叫堆疊, 而是由瀏覽器或
          Node.js 提供的 Web APIs 處理. 這些 API 會負責非同步任務的運行, 完成後再將回調函數(callback function)放入 **Task Queue** 中
    - [Promise](study_Promise.js) 物件提供了一個標準化的方式來處理非同步操作, 可以避免 callback hell, 它有三種狀態
      - **pending (待定)** : 初始狀態, 操作尚未完成
      - **fulfilled (實現)** : 操作成功完成, 並返回一個值
      - **rejected (拒絕)** : 操作失敗, 並返回一個錯誤原因
    - `async` 跟 `await` 則是 ES2017(ES8)引入的語法, 用來簡化處理 js 中的非同步操作, 其依賴於 `Promise`, 以更加直覺和同步風格的方式來編寫非同步程式碼,
      可以避免過度使用 `.then()` 或早期的回調地獄(callback hell) [study_async_await](./study_async_await.js)