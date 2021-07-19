### ES6  
ES6 泛指JavaScript 语言的下一个版本

##### Babel 转码器

可将ES6 代码转为 ES5 代码

---

## let 和 const 命令

### 1. let 命令 
#### 基本用法

声明变量， 用法类似 **var**，但是所声明的变量，只在 **let** 命令所在的代码块内有效。

```
{
  let a = 10;
  var b = 1;
}
console.log(b); // 1
console.log(a); // ReferenceError: a is not defined.
```
> for 循坏的计数器 ，很适合使用 **let** 命令

##### 使用 **var** 声明
```
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
变量 **i** 是 **var** 声明的，在全局范围有效，每次循坏都会改变 **i** 的值。 **console.log(i)** 指向的是全局的 **i** ，即数组 **a** 的成员里面的 **i** ，指向的都是 同一个 **i** ，运行结束后 **i = 10**， 因此 **a[6]**  输出 10

##### 使用 **let** 声明

```
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

变量 **i** 是 **let** 声明的，当前的 **i** 只在本轮循环有效，所以每一次循环的 **i** 其实都是一个新的变量，所以最后输出的是 **6** 。

- > 如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？ 

- > JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

**for** 循环还有一个特别之处，就是**设置循环变量的那部分**是一个父作用域，而**循环体内部**是一个单独的子作用域。

```
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// 输出三次
// abc
// abc
// abc
```
---
#### 不存在变量提升
变量提升 ，即变量可以在声明之前使用，值为 **undefined** 

```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

##### ReferenceError和TypeError

> **ReferenceError** 就是在作用域中找不到

> **TypeError** 是在作用域中找到了但是 做了它不可能做的事情。

---
#### 暂时性死区

只要块级作用域内存在 **let** 命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
存在全局变量 **tmp** ，但是块级作用域内 **let**  又声明了一个局部变量 **tmp**，导致后者绑定这个块级作用域，所以在 **let** 声明变量前，对 **tmp** 赋值会报错。

---
#### 不允许重复声明
let不允许在相同作用域内，重复声明同一个变量。

```
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

function func(arg) {
  let arg;
}
func() // 报错

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错
```
---
### 2.块级作用域
**let** 实际上为 JavaScript 新增了块级作用域。

```
function f1() {
        let n = 5;
        if (true) {
            let n = 10;
            console.log("inner n ", n) // 10
        }
        console.log("outer n ", n); // 5
    }
    f1()
```

#### 块级作用域与函数声明
> ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。


```
// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}
```
上面两种函数声明，根据 ES5 的规定都是非法的。

但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错。

ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在**块级作用域之外**不可引用。


> ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

> 函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。

---

### 3.const命令
#### 基本用法

const声明一个只读的常量。一旦声明，常量的值就不能改变。
```
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```
且一旦声明变量就必须初始化,不能留到以后赋值

```
const foo;
// SyntaxError: Missing initializer in const declaration
```
const的作用域与let命令相同：只在声明所在的**块级作用域内有效**。

```
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
```

const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

```
if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;
}
```

const声明的常量，也与let一样不可重复声明。

```
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;
```

const 实际上并不是变量的值不得改动,而是变量指向的那个内存地址所保存的数据不能改动.


- 对于(数值、字符串、布尔值),只保存在变量指向的那个内存地址,因此等同于常量

- 对于对象和数组,变量指向的内存地址,保存的只是一个指向实际数据的指针,const只能保证这个指针是固定的（即总是指向另一个固定的地址）


```
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only


const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错

```
---

### 4.顶层对象的属性

顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。

ES5 之中，顶层对象的属性与全局变量是等价的。


```
window.a = 1;
a // 1

a = 2;
window.a // 2
```
这样的设计带来了几个很大的问题
1. 首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）
2. 其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）
3. 最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。
4. 另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

ES6 为了改变这一点，一方面规定
，为了保持兼容性
1. var命令和function命令声明的全局变量，依旧是顶层对象的属性
2. 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
3. 也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。



```
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```

---
### 5.globalThis对象

> 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

- 全局环境中，**this** 会返回顶层对象。但是，Node 模块和 ES6 模块中，**this** 返回的是当前模块。
- 函数里面的 **this**，如果函数不是作为对象的方法运行，而是单纯作为函数运行，**this**会指向顶层对象。但是，严格模式下，这时 **this** 会返回 **undefined**。
- 不管是严格模式，还是普通模式，**new Function('return this')()**，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。