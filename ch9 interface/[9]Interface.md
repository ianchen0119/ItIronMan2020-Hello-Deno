![Node.js之父新專案Deno 1.0正式亮相| iThome](https://s4.itho.me/sites/default/files/styles/picture_size_large/public/field/image/v1_wide.jpg?itok=aqrO_0jM)

# 強型闖入DenoLand[8] - TS基礎系列之函式宣告(3)

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

如果你希望程式碼更容易被理解，可以將回傳的參數也標記上型別:

```typescript
function sum(para1: number, para2: number): number{
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

## 函數表達式

## 延伸閱讀

> 同樣的事情在不同人眼中可能會有不同的見解、看法。
>
> 在讀完本篇以後，筆者也強烈建議大家去看看以下文章，或許會對型別、變數宣告...等觀念有更深層的看法唷！

- 

