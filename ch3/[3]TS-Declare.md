![Node.js之父新專案Deno 1.0正式亮相| iThome](https://s4.itho.me/sites/default/files/styles/picture_size_large/public/field/image/v1_wide.jpg?itok=aqrO_0jM)

# 強型闖入DenoLand[3] - TS基礎系列之變數宣告

> 在介紹完Deno由來以後，我們正式進入到了TypeScript的學習路程上，開始之前還是想先讓讀者知道為何我們需要學會TypeScript。

Deno由於使用了V8引擎以及內建TypeScript編譯器，所以不管是Js或是Ts都能直接在Deno運行。

> 因此本系列文並不會花時間教大家如何安裝TypeScript的編譯器，因為我們的重點是`在Deno中利用TypeScript寫出可執行的程式碼`，而不是純粹的TypeScript教學文章。

TypeScript相比JavaScript，多出了型別系統、型別預判、對物件導向的實作方面...等也有更全面的支持，不過TypeScript其實就是JavaScript的超集合，JavaScript支持的API在TypeScript都是可用的。

- 知識點：應用程序接面 (API, Application Programing Interface)

## 從JS搬遷到TS

> 本小節將探討如何將現有的JavaScript程式檔搬遷到TypeScript上。

1. 將你的`.js`檔案準備好。
2. 將`.js`副檔名重新命名為`.ts`。
3. 搬遷成功！

> 前面提到`TypeScript其實就是JavaScript的超集合`，所以搬遷後的程式碼是完全可以正常運行的！

> 注意：其實這樣做一點意義都沒有，因為這樣並不會讓我們體驗到型別預判所帶來的好處。

## 變數宣告

>  注意！`TypeScript其實就是JavaScript的超集合`，或許筆者會認為我不斷的提醒很多餘，但在這個觀念根深蒂固以後，之後才能更快上手，不會有`這個到底是JS還是TS的語法啊？`這種充滿不確定的想法出現。

在加入強型別之前，我們先讓大家暸解在JavaScript上，我們是如何宣告變數的吧！

主要宣告方式有三種，分別是`const`、`let`、`var`，至於這三種宣告方式的主要差異到底在哪裡，就讓我們繼續看下去吧！

### const

### let

### var

## 學會宣告之後：華麗變身強型別



## 工程師都必須知道的事：暫時性死區

> 在暸解變數是如何宣告之後以及其作用域之後，我們一起來看看`暫時性死區`這個聽起來十分牛逼的技術名詞吧！

## 延伸閱讀

> 同樣的事情在不同人眼中可能會有不同的見解、看法。
>
> 在讀完本篇以後，筆者也強烈建議大家去看看以下文章，或許會對型別、變數宣告...等觀念有更深層的看法唷！

