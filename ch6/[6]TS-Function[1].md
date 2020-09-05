![Node.js之父新專案Deno 1.0正式亮相| iThome](https://s4.itho.me/sites/default/files/styles/picture_size_large/public/field/image/v1_wide.jpg?itok=aqrO_0jM)

# 強型闖入DenoLand[6] - TS基礎系列之函式宣告(1)

如果讀者有寫過程式，想必大家對於函式都不陌生。

> 除非你把邏輯都寫在 `main()` 啦，那就另當別論了 XDDD

## 什麼是函式?

函式 (function) 是執行特定工作的敘述集合，它的主要功能如下:

- 將程式碼中的重複邏輯抽取出來，使程式碼更簡潔。

  原始程式碼:

  ```typescript
  let a = 1 + 3;
  let b = a + 2;
  let c =  a + b;
  let d = c + 1;
  ```

  使用函式後:

  ```typescript
  sum(para1, para2){
      return para1 + para2;
  }
  let a = sum(1,3); // 1 + 3 = 4
  let b = sum(a,2); // 4 + 2 = 6
  ```

- 當程式碼非常龐大時，可以依據不同的功能將程式碼分成好幾個片段，讓程式碼結構化以方便管理。

## 學習宣告函式!

在瞭解函式的定義以及用途以後，我們一起來學習如何宣告函式吧!

- 原始作法

  我們將函式宣告以後沒有賦予它名字，便直接將其存放在 `sum` 變數中，這類函式又稱為匿名函式。

  ```typescript
  let sum = function(para1, para2){
      return para1 + para2;
  }
  sum(1,2); //3
  ```

  當然，如果你希望它也有屬於自己的名字，也可以考慮這樣做:

  ```typescript
  let sum = function myName(para1, para2){
      return para1 + para2;
  }
  ```

  > 注意 ! myName 這個名字只有在函式本身內有效，跳脫該函式的範圍後就沒有人認識他了 !

  ```typescript
  let sum = function myName(para1, para2){
      console.log(myName); //valid
      return para1 + para2;
  }
  console.log(sum) //valid
  console.log(myName) //invalid
  ```

- 簡潔作法

  ```typescript
  function sum(para1, para2){
      return para1 + para2;
  }
  sum(1,2); //3
  ```

- 使用 `new Function` 建構函式

  > ```new Function (arg1, arg2, ... argN, functionBody)```
  >
  > -- [MDN web docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions)

  如果利用該方法去建構函式，先前的範例會變成:

  ```typescript
  let sum = new Function ('para1', 'para2', 'return para1 + para2');
  ```

  > 筆者並不建議利用這個方式去宣告函式，因為該作法會讓編譯器需要花費多餘的性能去解析字串。

- 物件函式縮寫

  一般情況，若我們需要在物件內宣告函式會需要這麼做:

  ```typescript
  let obj = {
    sum: function(para1, para2){
       return para1 + para2; 
    }  
  };
  ```

  JavaScript ES2015 (ES6) 提供給我們更簡潔的作法:

  > 如果讀者對於 ES2015, ES2020... 等常見字眼感到疑惑，可以參考今天的延伸閱讀唷 !

  ```typescript
  let obj = {
    sum(para1, para2){
       return para1 + para2; 
    }  
  };
  ```

## 在函式中應用強行別

在 TypeScript 問世前，開發者需要耗費額外的心力去避免下面的情況發生:

```typescript
function sum(para1, para2){
    return para1 + para2;
}
let result = sum('Ian',3);
```

雖然這樣的錯誤並不會讓程式崩潰，但我們會得到超乎開發者預期的結果。

若我們今天是開發一項線上的大專案，是不會允許這種低級錯誤發生的。

然而， TypeScript 的出現，幫助我們解決這個看似簡單，但又惱人的問題。

```typescript
function sum(para1: number, para2: number){
    return para1 + para2;
}
```

事實上，在我們在 Deno 上撰寫 TypeScript 時，編譯器也會要求我們對函式的做型別註記。

```typescript
function sum(para1, para2) {
  return para1 + para2;
}
```

若以上面的程式碼下去編譯，編譯器便會跳出錯誤訊息:

```
TS7006 [ERROR]: Parameter 'para1' implicitly has an 'any' type.
function sum(para1, para2) 
// ...
```

```
[ERROR]: Parameter 'para2' implicitly has an 'any' type.
function sum(para1, para2)
// ...
```

## 延伸閱讀

> 同樣的事情在不同人眼中可能會有不同的見解、看法。
>
> 在讀完本篇以後，筆者也強烈建議大家去看看以下文章，或許會對型別、變數宣告...等觀念有更深層的看法唷！

- [Wiki-ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)

- [ES6 的縮寫概念](https://wcc723.github.io/javascript/2017/12/23/javascript-short-hand/)

  > 六角學院共同創辦人 - 卡斯柏 大大的部落格也是學習前端技術的必讀網站，筆者學習相關知識時經常能夠在該網站獲得解答。因此，在這邊推薦給各位讀者。

