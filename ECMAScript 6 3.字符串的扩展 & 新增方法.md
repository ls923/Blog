## 字符串的扩展
### 1.字符的 Unicode 表示法

允许采用 **\uxxxx** 形式表示一个字符，其中 **xxxx** 表示字符的 Unicode 码点。
```
"\u0061"
// "a"
```

ES6 只要将码点放入大括号，就能正确解读该字符。
```
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```
---
### 2.字符串的遍历器接口
> for...of

```
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"

let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}
// "𠮷"
```
---
### 3.模板字符串
传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）
```
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```
ES6 引入了模板字符串解决这个问题。
```
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

<!--模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。-->
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

<!--如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。-->
let greeting = `\`Yo\` World!`;
// 输出 `Yo` World!

<!--如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。-->
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

<!--模板字符串中嵌入变量，需要将变量名写在${}之中。-->
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      // 传统写法为
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'
      `User ${user.name} is not authorized to do ${action}.`);
  }
}

<!--大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。-->
let x = 1;
let y = 2;
console.log(`${x} + ${y} = ${x + y}`)
// "1 + 2 = 3"

console.log(`${x} + ${y * 2} = ${x + y * 2}`)
// "1 + 4 = 5"

let obj = {
    x: 1,
    y: 2
};
console.log(`${obj.x + obj.y}`)
// "3"

function fn() {
  return "Hello World";
}

`foo ${fn()} bar`
// foo Hello World bar

<!--模板字符串甚至还能嵌套-->
    const tmpl = addrs => `
    <table>
        ${addrs.map(addr => `
        <tr>
            <td>${addr.first}</td>
        </tr>
        <tr>
            <td>${addr.last}</td>
        </tr>
        `).join('')}
    </table>
    `;
    const data = [{
            first: '<Jane>',
            last: 'Bond'
        },
        {
            first: 'Lars',
            last: '<Croft>'
        },
    ];

    console.log(tmpl(data));
```

### 4.实例方法
#### includes(),startsWith(),endsWidth()
- includes() :返回布尔值,表示是否找到了参数字符串
- startsWith():返回布尔值,表示参数字符串是否在原字符串的头部
- endsWith():返回布尔值,表示参数字符串是否在原字符串的尾部

```
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

<!--支持第二个参数，表示开始搜索的位置-->
let s = 'Hello world!';
    console.log(s.startsWith('world', 6)) // true
    // 从 第6位开始参数字符串是否在原字符串头部
    console.log(s.endsWith('orld!', 12)) // true
    //  从第12位向前看参数字符串是否在原字符串结尾
    console.log(s.includes('Hello', 6)) // false
    // 从 第6位向后看是否包含参数字符串

```
#### repeat()
repeat()返回一个新字符串,表示将原字符重复n次


```
    'x'.repeat(3) // "xxx"
    'hello'.repeat(2) // "hellohello"
    'na'.repeat(0) // "" 

    // 参数如果是小数，会被取整。
    'na'.repeat(2.9) // "nana"

    // 如果repeat的参数是负数或者Infinity，会报错。
    'na'.repeat(Infinity)
    // RangeError
    'na'.repeat(-1)
    // RangeError

    // 如果参数是 0 到-1 之间的小数，则等同于 0
    'na'.repeat(-0.9) // ""

    // 参数NaN等同于 0。
    'na'.repeat(NaN) // ""

    // 如果repeat的参数是字符串， 则会先转换成数字。
    'na'.repeat('na') // ""
    'na'.repeat('3') // "nanana"
```
#### padStart()，padEnd()
如果某个字符串不够指定长度，会在头部或尾部补全。**padStart()** 用于头部补全，**padEnd()** 用于尾部补全。


```

<!--第一个参数 是字符串补全生效的最大长度,第二个参数 是用来补全的字符串-->

'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

<!--如果原字符串的长度,大于或等于最大长度,则补全不生效,返回原字符串-->
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

<!--如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串-->
'abc'.padStart(10, '0123456789')
// '0123456abc'

<!--如果省略第二个参数，默认使用空格补全长度。-->
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '


```
#### trimStart()，trimEnd()
**trimStart()** 和 **trimEnd()** 这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。**它们返回的都是新字符串，不会修改原始字符串**。

```
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```
