### 函数参数的默认值
#### 基本用法
ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
```
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

<!--使用参数默认值时，函数不能有同名参数。-->
// 不报错
function foo(x, x, y) {
  // ...
}

// 报错
function foo(x, x, y = 1) {
  // ...
}

<!--参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。-->
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101
```

#### 箭头函数
使用 (=>) 定义函数

```
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};


<!--如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分-->
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};


<!--如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回-->
var sum = (num1, num2) => { return num1 + num2; }


<!--由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。-->
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```

箭头函数不绑定this关键字，箭头函数中的this，指向的是**函数定义位置的上下文this**

```
 function fn() {
        let name = "ss"
        console.log(this.name);
        return () => {
            console.log(this.name);
        } //指向 定义位置的 this (fn函数的this)
    }
    const resFn = fn.call(obj)
    resFn();
    
    
    
    var age = 100;
    var obj = {
        name: "tom",
        say: () => {
            console.log(this.age);
            // obj 定义在 window 中，this指向 window
        }
    }
    obj.say(); // 100
```
#### 剩余参数
剩余参数语法允许我们将一个不定数量的参数表示为一个数组

```

    const sum = (...args) => {
        let total = 0;
        args.forEach(item => {
            total += item
        })
        return total
    };

    console.log(sum(10, 20)); //30
    console.log(sum(10, 20, 30));  //60
    
    
    
    var post = {
      id: 1,
      title: "t1",
      content: "c1",
    };
    var { id, title } = post;
    console.log(id, title); // 1 "t1"

    var { id, title: headline } = post;
    console.log(id, headline); // 1 "t1"

    var { id, title, comments = "no comments" } = post;
    console.log(comments); // no comments

    var [a, b = 2] = [1];
    console.log(a, b); // 1 2

    var post2 = {
      id: 2,
      title: "t2",
      content: "c2",
      comments: [
        {
          userId: 1,
          comment: "cm1",
        },
        {
          userId: 2,
          comment: "cm2",
        },
        {
          userId: 3,
          comment: "cm3",
        },
      ],
    };
    var {
      comments: [, { comment }],
    } = post2;
    console.log(comment); // cm2

    function getID(idKey, obj) {
      let { [idKey]: id } = obj;
      return id;
    }
    console.log(
      getID("userId", {
        userId: 3,
      })
    ); // 3

    var { comments, ...rest } = post2;
    console.log(rest); // {id: 2, title: "t2", content: "c2"}
    function savePostObj({ id, title, content, ...rest }) {
      console.log(id, title, content); // 4 "t34" "cc2"

      console.log(rest); //{author: "ls923"}
    }
    savePostObj({ id: 4, title: "t34", content: "cc2", author: "ls923" });
```

#### **call(),apply(),bind()**
```
 var name = 'tom',
        age = 11;
    var obj = {
        name: 'jack',
        objAge: this.age,
        myFn: function () {
            console.log(`${this.name} , ${this.age}`);
        }
    }
    console.log(obj.objAge); // 11
    obj.myFn(); //jack , undefined
    // this 指向 obj



    var fav = "rose";
    function shows() {
        console.log(this.fav);
    }
    shows(); //rose
    // this 指向 window



    var name = 'tom2',
        age = 12;
    var obj = {
        name: 'jack2',
        objAge: this.age,
        myFn: function () {
            console.log(`${this.name} , ${this.age}`);
        }
    }
    var db = {
        name: 'mark',
        age: 19
    }

    obj.myFn.call(db); //mark , 19
    obj.myFn.apply(db); //mark , 19
    obj.myFn.bind(db)(); //mark , 19
    // bind 返回 一个新的函数，必须调用它才会被执行




    var name = 'tom3',
        age = 13;
    var obj = {
        name: 'jack3',
        objAge: this.age,
        myFn: function (fm, t) {
            console.log(this.name, this.age, fm, t);
        }
    }
    var db = {
        name: 'mark',
        age: 19
    }
    obj.myFn.call(db, 'cd', 'sh'); //mark 19 cd sh
    obj.myFn.apply(db, ['cd', 'sh']); //mark 19 cd sh
    obj.myFn.bind(db, 'cd', 'sh')(); //mark 19 cd sh
    obj.myFn.bind(db, ['cd', 'sh'])(); //mark 19  ["cd", "sh"] undefined
    // call，bind 的参数直接放，apply所有参数必须放在一个数组里面传进去
```

