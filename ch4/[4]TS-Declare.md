![Node.js之父新專案Deno 1.0正式亮相| iThome](https://s4.itho.me/sites/default/files/styles/picture_size_large/public/field/image/v1_wide.jpg?itok=aqrO_0jM)

# 強型闖入DenoLand[4] - TS基礎系列之變數宣告(2)

前一章介紹了在弱型別時如何宣告變數，並且補充了很多一名 JS Developer 需要有的先備知識。

本章要跟各位讀者介紹 `TypeScript` 中最大的賣點，也就是`型別系統`以及`型別預判`！

> 筆者技術力十分薄弱，更不是什麼 JS Developer ，希望講出這種話不會被毆打。

## 學會宣告之後：華麗變身強型別

我們在前一章節學習到如何宣告變數並且認識了 JavaScript 的基礎型別。

本小節要在這個基礎上教大家為變數增加型別系統，我們先看看以下範例:

```javascript
let num = 3;
```

筆者在上面宣告了 `num` 變數，其值為 `3` 。

`TypeScript` 非常的聰明，當你為宣告的變數賦值的那一刻開始，它便已經為變數添加型別了。

```javascript
num = 'Deno';
```

我們將 `num` 重新賦值，來看看會發生什麼事吧!

![]()

結果就是: 編譯不過。

> 為何編譯不過呢?

因為當我們在宣告 `num` 並賦值為 `3` 的那一刻起， `TypeScript` 會這樣認定我們的程式碼:

```javascript
let num: number = 3;
```

我想看到這邊，各位讀者就能明白剛剛為何會有編譯不過的狀況發生了。

> 'Deno' 是字串，並非數字。

當然，如果你希望這個變數可以存取 `string` 以及 `number` 類型的值，你可以這樣做:

```
let numOrString: number | string = 3;
numOrString = 'Peter';
```

> 這樣的概念在 `TypeScript` 的官方文件中稱為: 聯合型別  (Union Types) 。

至於 `TypeScript` 的型別種類，那可以說是不勝枚舉，多到爆阿!!!

- 原始型別

  JavaScript 原本就有的型別，也就是筆者前一章所提到的: `number`, `string`, `null`, `undefined` ...。

- 物件型別

  包含了我們經常使用的 `Json`, `Object`, `Array`, `Function` ...。

  > 對， `JavaScript` 真的很奇怪， 陣列跟函式都是屬於物件的一種喔 !
  >
  > 想當然爾， `TypeScript` 也怪怪的。
  >
  > ~~就像是如果一個怪人變成了蜘蛛人，當他穿上戰服時，他也還是個怪人，超級英雄的身分並不能改變他身為人的本質。~~

  > 喔對了 ! 我們之後學習物件導向時會使用到的 `Class` ，在實例化以後也是屬於物件型別唷 !

## 你怎麼什麼都知道？！：超牛逼的型別預判系統

## 延伸閱讀

> 同樣的事情在不同人眼中可能會有不同的見解、看法。
>
> 在讀完本篇以後，筆者也強烈建議大家去看看以下文章，或許會對型別、變數宣告...等觀念有更深層的看法唷！

- [讓 TypeScript 成為你全端開發的 ACE！](https://ithelp.ithome.com.tw/users/20120614/ironman/2685)

  > 如果讀者希望看到繁體中文的相關資料，我認為這系列真的必看，講的非常詳細。
  >
  > 筆者在這 30 天中很難將 `TypeScript` 的各項觀念一一帶出，如果有需要繼續向下探索，
  >
  > 真的大推、怒推這個系列文。

