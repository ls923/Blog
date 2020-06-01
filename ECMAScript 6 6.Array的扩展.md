### 数组的扩展
#### 扩展运算符
讲一个数组转为用逗号分隔的参数序列

```
    let ary = [1, 2, 3, 4];
    console.log(...ary); //1 2 3 4
    
```
用于函数调用

```
    var a = [1, 2, 3];
    const n1 = 4,
        n2 = 5;
    function push(array, ...args) //rest参数 将多余的参数放入数组中
    {
        console.log(args); //[4,5]
        array.push(...args); //4 ,5 //扩展运算符,将数组变为参数序列
        return array //[1,2,3,4,5]
    }
    console.log(push(a, n1, n2));


    function add(x, y) {
        console.log(x);
        console.log(y);

        return x + y;
    }
    const numbers = [44, 11];
    console.log(add(...numbers)); //55
```

扩展运算符可运用于数组合并

```
    let ary1 = [1, 2, 3]
    let ary2 = [4, 6, 7]
    let ary3 = [...ary1, ...ary2]
    console.log(ary3); //[1, 2, 3, 4, 6, 7]
```
将伪数组转换成为真正的数组

```
    var oDIvs = document.getElementsByTagName("div");
    console.log(oDIvs);
    var ary = [...oDIvs];
    console.log(ary);
```
#### Array.from()
将伪数组转换为真数组
```
    var arry = {
        "0": "1",
        "1": "2",
        "2": "3",
        "length": 3
    }
    var ary = Array.from(arry)
    console.log(ary); //["1", "2", "3"]
    
   <!--第二个参数用来对每个元素进行处理,将处理后的值放入返回的数组-->
    var ary = Array.from(arry, (item) => {
        return item * 2
    })
    console.log(ary); //[2, 4, 6]
```
#### Array.find() & findIndex()
找出第一个符合条件的数组成员,如果没有则返回 undefined

```
    var arry = [{
        id: 1,
        name: '2'
    }, {
        id: 2,
        name: '3'
    }]
    let target = arry.find((item) => item.id == 2)
    console.log(target); //{id: 2, name: "3"}
    
    
    let target = arry.findIndex((item) => item.id == 1)
    console.log(target); //0    
    
```
#### entries()，keys() 和 values()
keys()是对键名的遍历

values()是对键值的遍历

entries()是对键值对的遍历。

#### includes()
Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，

```
    let ary = [1, 2, 3, 5, 6]
    let a = ary.includes(2);
    let b = ary.includes(7);
    console.log(a, b);//true false
```
