![Node.js之父新專案Deno 1.0正式亮相| iThome](https://s4.itho.me/sites/default/files/styles/picture_size_large/public/field/image/v1_wide.jpg?itok=aqrO_0jM)

# 強型闖入DenoLand[33] - Web API 正式完成!

昨天筆者介紹了 `deno_mongo` 的使用方法，本篇就來將 Web API 剩下的邏輯完成吧!

## 進入正題

在 [Day 30](https://ithelp.ithome.com.tw/articles/10253676) 中，我們已將大量的程式碼都實作完成了，只剩下:

- controllers/Usercontroller.ts
- controllers/models/Database.ts

需要完成。

### controllers/models/Database.ts

相較 `Usercontroller` ， `Database` 封裝了更底層的邏輯，它~~直面了整個社會~~被用來建立與資料庫的連結:

```typescript
import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

export class DatabaseController {
  private client;
  constructor() {
    this.client = new MongoClient();
    this.client.connectWithUri("mongodb://localhost:27017");
  }
  initModels(database) {
  return this.client.database(database);
}
}
```

> 由於筆者實作的是極簡易版的 Web API ，在該物件中只存在一個方法: `initModels()` 。

當 `Class::DatabaseController`  被實例化時， `constructor()` 就已經與 mongoDB 建立連線，而 `initModels` 只是用來選定使用者希望連線的資料庫。

#### controllers/UserController.ts

在完成 Database 連線邏輯的封裝後，我們進一步來看看 UserController 的實作:

```typescript
import { DatabaseController } from "./models/Database.ts";
const dataBase = await new DatabaseController().initModels("test");
const collection = dataBase.collection("data");

export class userController {
  findOne(props:any){
    return collection.findOne({"name":`${props}`});
  }
  insertData(props:any){
    collection.insertOne({
      name:`${props}`
    })
  }
}
```

`UserController.ts`  負責接收路由的請求並根據請求對資料庫進行操作，所以都會跟 `Route.ts` 內的路由相對應:

```typescript
import { Router, Status, RouterContext  } from "https://deno.land/x/oak/mod.ts";
import { userController } from "../controllers/UserController.ts";
const controller = new userController();
export function UserRoutes(router: Router) {
  return router
    .get("/user/:id", async (ctx: RouterContext) => {
      const users = await controller.findOne(ctx.params.id);
      if (users) {
        ctx.response.status = Status.OK;
        ctx.response.body = users;

      } else {
        ctx.response.status = Status.NotFound;
        ctx.response.body = [];
      }
    })
    .post("/insert", async(ctx: RouterContext)=>{
      const { name } = await ctx.request.body;
      if(name){
        await controller.insertData(name)
        ctx.response.status = Status.OK;
        ctx.response.body = 'Success!'
      }
    })
}
```

### 完整原始碼

完整原始碼都已經上傳到 [github](https://github.com/ianchen0119/WebAPI) 上，如果讀者有需要可以自行取用。

## 補充: ORM

> **物件關聯對映**（英語：**Object Relational Mapping**，簡稱**ORM**，或**O/RM**，或**O/R mapping**），是一種[程式設計](https://zh.wikipedia.org/wiki/程式設計)技術，用於實現[物件導向](https://zh.wikipedia.org/wiki/物件導向)程式語言裡不同[類型系統](https://zh.wikipedia.org/wiki/類型系統)的資料之間的轉換。從效果上說，它其實是建立了一個可在程式語言裡使用的「虛擬[物件資料庫](https://zh.wikipedia.org/wiki/物件資料庫)」。如今已有很多免費和付費的ORM產品，而有些程式設計師更傾向於建立自己的ORM工具。
>
> 物件導向是從[軟體工程](https://zh.wikipedia.org/wiki/軟體工程)基本原則（如耦合、聚合、封裝）的基礎上發展起來的，而[關聯式資料庫](https://zh.wikipedia.org/wiki/關聯式資料庫)則是從[數學](https://zh.wikipedia.org/wiki/數學)理論發展而來的，兩套理論存在顯著的區別。為了解決這個不匹配的現象，物件關聯對映技術應運而生。
>
> 簡單的說：ORM相當於[中繼資料](https://zh.wikipedia.org/w/index.php?title=中繼資料&action=edit&redlink=1)。具體到產品上，例如下邊的[ADO.NET Entity Framework](https://zh.wikipedia.org/wiki/ADO.NET_Entity_Framework)。DLINQ中實體類的屬性[Table]就算是一種中繼資料。
>
> 物件關聯對映成功運用在不同的物件導向持久層產品中，如：[Torque](https://zh.wikipedia.org/w/index.php?title=Torque&action=edit&redlink=1)，[OJB](https://zh.wikipedia.org/w/index.php?title=OJB&action=edit&redlink=1)，[Hibernate](https://zh.wikipedia.org/wiki/Hibernate)，[TopLink](https://zh.wikipedia.org/wiki/TopLink)，[Castor JDO](https://zh.wikipedia.org/w/index.php?title=Castor_JDO&action=edit&redlink=1)，[TJDO](https://zh.wikipedia.org/w/index.php?title=TJDO&action=edit&redlink=1)，[Active Record](https://zh.wikipedia.org/wiki/Active_Record)，[NHibernate](https://zh.wikipedia.org/wiki/NHibernate)，[ADO.NET Entity Framework](https://zh.wikipedia.org/wiki/ADO.NET_Entity_Framework) 等。
>
> -- [wikipedia](https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E5%85%B3%E7%B3%BB%E6%98%A0%E5%B0%84)

簡單來說， ORM 就是利用物件導向將資料庫連線過程與操作封裝成使用者容易閱讀的形式。

> 封裝 `Database.ts` 的作法其實與 ORM 的概念非常相似，只是筆者不確定這樣的做法是否為 ORM 。

其實 `deno_mongo` 本身就已經相當易懂再加上 MongoDB 並不像傳統的關聯式資料庫，一般在操作 SQL 時，我們都需要使用 SQL 語法:

```SQL
INSERT INTO customers (C_Id, Name, City, Address, Phone)
VALUES (3, '李三', '高雄縣', 'ZZ路300號', '07-12345678');
```

這樣的作法比起 ORM 封裝更不易懂，若沒有適當的防範，更會衍伸出常見的 [SQL Injection](https://zh.wikipedia.org/zh-tw/SQL%E6%B3%A8%E5%85%A5) 的攻擊問題。

因此，我們可以處處看到 ORM 的身影，像是 [Laravel 的 eloquent](https://laravel.tw/docs/5.0/eloquent) 。

說了這麼多 ORM 真的這麼好嗎 ? 筆者大概整理了一下 ORM 的優缺點:

### 優點

1. 容易理解
2. 安全

### 缺點

1. 效能較差

   因為多了一層物件封裝，所以在執行上，效能會比直接對資料庫操作來的更慢。

1. 靈活度較 SQL 語法差

   這點就考驗 ORM 開發者的功力了，因為 SQL 能做的事情非常多，除了一般操作還能將元素排序。

## 總結

長達 34 天的抗戰終於告一段落了...嗎?

不 ! 筆者還要繼續寫 !

下一篇會向大家分享在製作畢業專題時遇到的跨域存取問題，我們明天 (?) 見 !

## 延伸閱讀

>  同樣的事情在不同人眼中可能會有不同的見解、看法。
>
>  在讀完本篇以後，筆者也強烈建議大家去看看以下文章，或許會對型別、變數宣告...等觀念有更深層的看法唷！

- [[Postx1] 攻擊行為－SQL 資料隱碼攻擊 SQL injection](https://ithelp.ithome.com.tw/articles/10189201)
- [[Day20] 資料庫設計概念 - ORM](https://ithelp.ithome.com.tw/articles/10207752)