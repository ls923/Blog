## Symbol

### 概述
Symbol,表示独一无二的值，是JavaScript语言的第七种数据类型。

Symbol值通过Symbol函数生成，不能使用new命令
```
let s= Symbol();

typeof s //symbol

// 创建Symbol添加的描述
    let s1 = Symbol("foo");
    let s2 = Symbol("foo");
    console.log(s1 == s2); // false
```
> Symbol函数前不能使用new命令