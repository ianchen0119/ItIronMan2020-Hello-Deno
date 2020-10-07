![Node.js之父新專案Deno 1.0正式亮相| iThome](https://s4.itho.me/sites/default/files/styles/picture_size_large/public/field/image/v1_wide.jpg?itok=aqrO_0jM)

# 強型闖入DenoLand[21] - Testing and Related Tools(2)

本篇會延續前一篇把尚未介紹的工具補上：

- Documentation Generator
- Dependency Inspector
- Linter

## 文件產生器

Deno 提供了一個十分酷炫的功能： 文件產生器！！

舉個例子，我們創建一個 `add.ts` 的文件：

```typescript
/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
export function add(x: number, y: number): number {
  return x + y;
}
```

讓我們進一步觀察程式碼的註解區：

```typescript
/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
```

我們在這邊看到優良的註解示範，使用 `@param {type} variable` 和 `@returns {type} Sum of x and y` 將變數和函式的定義交代的非常清楚。

這麼做的好處是，即使今天開發的是 JavaScript 應用， VS Code 也能讀懂你的程式碼。

> 如果讀者想要看更多關於如何撰寫好的 JS 註解的文件，可以參考本日延伸閱讀的第一個連結。

接著，我們來看看 Deno doc 要如何使用：

```shell
deno doc add.ts
```

Output:

```typescript
function add(x: number, y: number): number
  Adds x and y. @param {number} x @param {number} y @returns {number} Sum of x and y
```

### 輸出成 JSON 格式

使用 `--json` 旗標可以讓 Deno doc 以 JSON 格式輸出：

```
deno doc --json add.ts
```

Output:

```json
[
  {
    "kind": "function",
    "name": "add",
    "location": {
      "filename": "file:///Users/ianchen/Desktop/ItIronMan2020-Hello-Deno/Example/doc.ts",
      "line": 7,
      "col": 0
    },
    "jsDoc": "Adds x and y.\n@param {number} x\n@param {number} y\n@returns {number} Sum of x and y",
    "functionDef": {
      "params": [
        {
          "kind": "identifier",
          "name": "x",
          "optional": false,
          "tsType": {
            "repr": "number",
            "kind": "keyword",
            "keyword": "number"
          }
        },
        {
          "kind": "identifier",
          "name": "y",
          "optional": false,
          "tsType": {
            "repr": "number",
            "kind": "keyword",
            "keyword": "number"
          }
        }
      ],
      "returnType": {
        "repr": "number",
        "kind": "keyword",
        "keyword": "number"
      },
      "isAsync": false,
      "isGenerator": false,
      "typeParams": []
    }
  }
]% 
```

## Dependency Inspector

筆者幫它取名為： `依賴檢查器`。

我們可以使用它來查看開發者的程式碼使用了多少本地、外部中合法的 ES 模組：

```
deno info [URL]
```

以官網提供的依賴模組 File Server 為例：

```
deno info https://deno.land/std@0.67.0/http/file_server.ts
```

Output:

```
deno info https://deno.land/std@0.67.0/http/file_server.ts
Download https://deno.land/std@0.67.0/http/file_server.ts
...
local: /home/deno/.cache/deno/deps/https/deno.land/f57792e36f2dbf28b14a75e2372a479c6392780d4712d76698d5031f943c0020
type: TypeScript
compiled: /home/deno/.cache/deno/gen/https/deno.land/f57792e36f2dbf28b14a75e2372a479c6392780d4712d76698d5031f943c0020.js
deps: 23 unique (total 139.89KB)
https://deno.land/std@0.67.0/http/file_server.ts (10.49KB)
├─┬ https://deno.land/std@0.67.0/path/mod.ts (717B)
│ ├── https://deno.land/std@0.67.0/path/_constants.ts (2.35KB)
│ ├─┬ https://deno.land/std@0.67.0/path/win32.ts (27.36KB)
│ │ ├── https://deno.land/std@0.67.0/path/_interface.ts (657B)
│ │ ├── https://deno.land/std@0.67.0/path/_constants.ts *
│ │ ├─┬ https://deno.land/std@0.67.0/path/_util.ts (3.3KB)
│ │ │ ├── https://deno.land/std@0.67.0/path/_interface.ts *
│ │ │ └── https://deno.land/std@0.67.0/path/_constants.ts *
│ │ └── https://deno.land/std@0.67.0/_util/assert.ts (405B)
│ ├─┬ https://deno.land/std@0.67.0/path/posix.ts (12.67KB)
│ │ ├── https://deno.land/std@0.67.0/path/_interface.ts *
│ │ ├── https://deno.land/std@0.67.0/path/_constants.ts *
│ │ └── https://deno.land/std@0.67.0/path/_util.ts *
│ ├─┬ https://deno.land/std@0.67.0/path/common.ts (1.14KB)
│ │ └─┬ https://deno.land/std@0.67.0/path/separator.ts (264B)
│ │   └── https://deno.land/std@0.67.0/path/_constants.ts *
│ ├── https://deno.land/std@0.67.0/path/separator.ts *
│ ├── https://deno.land/std@0.67.0/path/_interface.ts *
│ └─┬ https://deno.land/std@0.67.0/path/glob.ts (8.12KB)
│   ├── https://deno.land/std@0.67.0/path/_constants.ts *
│   ├── https://deno.land/std@0.67.0/path/mod.ts *
│   └── https://deno.land/std@0.67.0/path/separator.ts *
├─┬ https://deno.land/std@0.67.0/http/server.ts (10.23KB)
│ ├── https://deno.land/std@0.67.0/encoding/utf8.ts (433B)
│ ├─┬ https://deno.land/std@0.67.0/io/bufio.ts (21.15KB)
│ │ ├── https://deno.land/std@0.67.0/bytes/mod.ts (4.34KB)
│ │ └── https://deno.land/std@0.67.0/_util/assert.ts *
│ ├── https://deno.land/std@0.67.0/_util/assert.ts *
│ ├─┬ https://deno.land/std@0.67.0/async/mod.ts (202B)
│ │ ├── https://deno.land/std@0.67.0/async/deferred.ts (1.03KB)
│ │ ├── https://deno.land/std@0.67.0/async/delay.ts (279B)
│ │ ├─┬ https://deno.land/std@0.67.0/async/mux_async_iterator.ts (1.98KB)
│ │ │ └── https://deno.land/std@0.67.0/async/deferred.ts *
│ │ └── https://deno.land/std@0.67.0/async/pool.ts (1.58KB)
│ └─┬ https://deno.land/std@0.67.0/http/_io.ts (11.25KB)
│   ├── https://deno.land/std@0.67.0/io/bufio.ts *
│   ├─┬ https://deno.land/std@0.67.0/textproto/mod.ts (4.52KB)
│   │ ├── https://deno.land/std@0.67.0/io/bufio.ts *
│   │ ├── https://deno.land/std@0.67.0/bytes/mod.ts *
│   │ └── https://deno.land/std@0.67.0/encoding/utf8.ts *
│   ├── https://deno.land/std@0.67.0/_util/assert.ts *
│   ├── https://deno.land/std@0.67.0/encoding/utf8.ts *
│   ├── https://deno.land/std@0.67.0/http/server.ts *
│   └── https://deno.land/std@0.67.0/http/http_status.ts (5.93KB)
├─┬ https://deno.land/std@0.67.0/flags/mod.ts (9.54KB)
│ └── https://deno.land/std@0.67.0/_util/assert.ts *
└── https://deno.land/std@0.67.0/_util/assert.ts *
```

### 利用依賴檢查器查看快取資訊

此外，我們可以利用 deno info 查看本地快取的位置：

```
deno info
```

Output:

```
DENO_DIR location: "/Users/deno/Library/Caches/deno"
Remote modules cache: "/Users/deno/Library/Caches/deno/deps"
TypeScript compiler cache: "/Users/deno/Library/Caches/deno/gen"
```

## 程式碼檢查器

如果讀者原本就有使用主流前端框架開發的經驗，對 ESLint 肯定不陌生（嗎？）。

Deno 內建了程式碼檢查器，可以用於檢查使用者的 TypeScript 和 JavaScript 程式碼是否符合規範。

```
# lint all JS/TS files in the current directory and subdirectories
deno lint --unstable
# lint specific files
deno lint --unstable myfile1.ts myfile2.ts
# print result as JSON
deno lint --unstable --json
# read from stdin
cat file.ts | deno lint --unstable -
# get more details
deno lint --help
```

> 注意： 該功能還不是很穩定，所以在使用時一樣要加上 `--unstable` 唷！

### 忽略指令

我們可以使用忽略指令來跳過不想被檢查的檔案：

```typescript
// deno-lint-ignore-file

function foo(): any {
  // ...
}
```

`// deno-lint-ignore-file` 可以選擇放在文件的最頂端或是第一次宣告的前方。

此外，我們也可以讓忽略指令用來跳過特定的規則的檢查：

```typescript
// deno-lint-ignore no-explicit-any
function foo(): any {
  // ...
}

// deno-lint-ignore no-explicit-any explicit-function-return-type
function bar(a: any) {
  // ...
}
```

最後， Deno 還特別兼容了 ESLint 的指令：

```typescript
// eslint-disable-next-line no-empty
while (true) {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function bar(a: any) {
  // ...
}
```

> 需要注意的是：與 `// deno-lint-ignore` 一樣，使用時需要指定被忽略的規則名稱唷！

至於詳細的規則有：

- `adjacent-overload-signatures`
- `ban-ts-comment`
- `ban-types`
- `ban-untagged-ignore`
- `constructor-super`
- `for-direction`
- `getter-return`
- `no-array-constructor`
- `no-async-promise-executor`
- `no-case-declarations`
- `no-class-assign`
- `no-compare-neg-zero`
- `no-cond-assign`
- `no-constant-condition`
- `no-control-regex`
- `no-debugger`
- `no-delete-var`
- `no-dupe-args`
- `no-dupe-class-members`
- `no-dupe-else-if`
- `no-dupe-keys`
- `no-duplicate-case`
- `no-empty`
- `no-empty-character-class`
- `no-empty-interface`
- `no-empty-pattern`
- `no-ex-assign`
- `no-explicit-any`
- `no-extra-boolean-cast`
- `no-extra-non-null-assertion`
- `no-extra-semi`
- `no-fallthrough`
- `no-func-assign`
- `no-global-assign`
- `no-import-assign`
- `no-inferrable-types`
- `no-inner-declarations`
- `no-invalid-regexp`
- `no-irregular-whitespace`
- `no-misused-new`
- `no-mixed-spaces-and-tabs`
- `no-namespace`
- `no-new-symbol`
- `no-obj-calls`
- `no-octal`
- `no-prototype-builtins`
- `no-redeclare`
- `no-regex-spaces`
- `no-self-assign`
- `no-setter-return`
- `no-shadow-restricted-names`
- `no-this-alias`
- `no-this-before-super`
- `no-undef`
- `no-unreachable`
- `no-unsafe-finally`
- `no-unsafe-negation`
- `no-unused-labels`
- `no-with`
- `prefer-as-const`
- `prefer-namespace-keyword`
- `require-yield`
- `triple-slash-reference`
- `use-isnan`
- `valid-typeof`

## 題外話

在完成第22天的同時，筆者也發現了一個好物與大家分享（放在今天的延伸閱讀）。

預計在明天介紹完 test 後，我會針對 compiler API 把玩並介紹一下。

我想，該系列的篇數應該會來到 35 ~ 40 篇吧 Q_Q

此外，如果有人有興趣一起弄一份繁體中文的 Deno 手冊，可以私訊筆者看看能不能一起做好這個項目 XDD

## 延伸閱讀

> 同樣的事情在不同人眼中可能會有不同的見解、看法。
>
> 在讀完本篇以後，筆者也強烈建議大家去看看以下文章，或許會對型別、變數宣告...等觀念有更深層的看法唷！

- [建立 JavaScript IntelliSense 的 JSDoc 註解](https://docs.microsoft.com/zh-tw/visualstudio/ide/create-jsdoc-comments-for-javascript-intellisense?view=vs-2015&viewFallbackFrom=vs-2019)
- [Deno Manual](https://deno.land/manual@v1.4.4/tools)
- [Deno 簡體中文手冊](https://nugine.github.io/deno-manual-cn/)