## JavaScript 
### Array 对象
#### reduce()方法
将数组元素计算为一个值（从左到右）。

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

<!--function(-->
<!--total        必需, 初始值/计算结束后的返回值 -->
<!--currentValue 必需, 当前元素-->
<!--currentIndex 可选, 当前元素的索引-->
<!--arr	         可选, 当前元素所属的数组对象。-->
<!--),-->
<!--initialValue 可选, 传递给函数的初始值-->
```
#### splice()
从数组中添加或删除元素
> slice() 方法不会改变原始数组。

> 注意：这种方法会改变原始数组。

```
array.splice(index,howmany,item1,.....,itemX)

<!--index 必需。规定从何处添加/删除元素。-->
<!--该参数是开始插入和（或）删除的数组元素的下标，必须是数字。-->
<!--howmany 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。表示插入-->
<!--如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。-->
<!--item1,.....,itemX 可选。要添加到数组的新元素-->
```
#### for...of
遍历数组

```
    var arr = [1, 2, 34, 5, 7, 98]
    // for 循坏输出
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    //  for...of
    for (let ele of arr) {
        console.log(ele); //访问到的元素
    }
    // forEach
    arr.forEach((ele, index, self) => {
        console.log(ele, index, self); //访问到的元素，当前索引，数组本身
    })
    

```
#### reverse

```
    var arr = [1, 2, 3];
    console.log(arr.reverse()); // [3, 2, 1]
    console.log(arr); // [3, 2, 1]
    // 改变原数组
```

#### map

```
    var arr = [1, 2, 35, 5];
    var mappedArr = arr.map(ele => ele * 2);
    console.log(mappedArr); //[2, 4, 70, 10]
    console.log(arr); // [1, 2, 35, 5]
    //不改变原数组
```
#### 数组过滤

```
    var arr = [1, 2, 3, 6, 8];
    var res = arr.filter(item => item > 3);
    console.log(res); //[6, 8]
    //不改变原数组
```

### 栈，队列

```
    // 栈
    var stack = [1, 2, 3, 4];
    stack.push(5);
    console.log(stack); // [1, 2, 3, 4, 5]

    stack.pop();
    console.log(stack); // [1, 2, 3, 4]
    
    
    // 队列
    var queue = [1, 2, 3];
    queue.push(4, 5, 6);
    console.log(queue); // [1, 2, 3, 4, 5, 6]

    var first = queue.shift(); //移除
    console.log(first); // 1
    console.log(queue); //  [2, 3, 4, 5, 6]

    queue.unshift(10, 11, 12);
    console.log(queue); // [10, 11, 12, 2, 3, 4, 5, 6]
```
--- 

### 闭包
函数里面在定义一个函数，这样就形成了闭包
内部函数可以访问外部函数作用域的变量
如果外部函数不暴露内部函数，外部就无法访问

```
    function squareSum(a, b) {
        function square(x) {
            return x * x;
        }
        return square(a) + square(b);
    }
    console.log(squareSum(2, 3)); // 13

   <!--返回一个函数-->
    function person() {
        let name = "ls";

        function getName() {
            return name;
        }
        return getName;
    }
    let getName = person(); 
    console.log(getName);  // 
    console.log(getName()); //ls
```
--- 
### 自执行函数
函数在定义完后直接调用它自己，好处是外部访问不到，防止被篡改。且内部有自己的作用域，防止命名冲突


```
    var num1 = 10;
    (function () {
        var num1 = 20;
        console.log(num1); //  20 
    })();
    console.log(num1); // 10
```

--- 

### 回调函数

```
    function req(cb) {
        console.log("请求数据");
        cb("success");
        console.log("请求结束");
    }

    function callback(res) {
        console.log(`执行回调 ${res} `); //执行回调 success
    }
    req(callback);

    req(res => {
        console.log(`执行回调 ${res} `); //执行回调 success
    })
    // 请求数据
    // 执行回调 success
    // 请求结束
```

---

### 对象

```
    var name = "923"
    var employ = {
        name: 'ls',
        age: 12,
        sigIn: () => {
            console.log(this.name) //923
        },
        sigIn2() {
            console.log(this.name); //ls
        }
    }

    employ.sigIn(); //923
    employ.sigIn2(); //ls

    console.log(Object.keys(employ));
    // ["name", "age", "sigIn", "sigIn2"]

    for (key in employ) {
        console.log(key);
    }

    delete employ.age;
    console.log(employ);
    //{name: "ls", sigIn: ƒ, sigIn2: ƒ}
```
#### set & get 

```
    var emp = {
        firstname: 'l',
        lastname: 's',
        get fullName() {
            return this.firstname + this.lastname
        },
        set fullName(fullName) {
            let [f, l] = fullName.split(",");
            this.firstname = f;
            this.lastname = l;
        },
    }
    console.log(emp.fullName); //ls
    emp.fullName = "w,q";
    console.log(emp.fullName); //wq
    console.log(emp.firstname, emp.lastname); // w q



    function Emp2(name, position) {
        this.name = name;
        this.position = position;
    }
    
    var emp2 = new Emp2('ls', 'hd');
    
    Object.defineProperty(emp2, "info", {
        get: function () {
            return this.name + " " + this.position;
        },
        set: function (info) {
            let [name, position] = info.split(" ");
            this.name = name;
            this.position = position;
        }
    });
    
    console.log(emp2.info); //ls hd
    emp2.info = "wq qd";
    console.log(emp2.name); // wq
    console.log(emp2.position); // qd
```

#### 原型 (prototype)


```
    function Em(name, position) {
        this.name = name;
        this.position = position;
        this.sigIn = function () {
            console.log(this.name);
        };
    }

    var em1 = new Em("ls", "qd");
    var em2 = new Em("ss", "hd");

    console.log(em1); // Em {name: "ls", position: "qd", sigIn: ƒ}
    console.log(em2); // Em {name: "ss", position: "hd", sigIn: ƒ}

    console.log(Em.prototype);

    Em.prototype.age = 20;
    console.log(em1.age); // 20 
    console.log(em2.age); // 20 

    Em.prototype.printInfo = function () {
        console.log(this.name, this.age, this.position)
    }
    em1.printInfo(); // ls 20 qd
    em2.printInfo(); // ss 20 hd

    console.log(em1.__proto__); // {age: 20, printInfo: ƒ, constructor: ƒ}
    console.log(Em.prototype); // {age: 20, printInfo: ƒ, constructor: ƒ}
    console.log(em1.__proto__ === Em.prototype); //true
    console.log(Object.getPrototypeOf(em2)); // {age: 20, printInfo: ƒ, constructor: ƒ}

```

#### objcet.create()

```
    function Em(name, position) {
        this.name = name;
        this.position = position;
        this.sigIn = function () {
            console.log(this.name);
        };
    }

    var em1 = new Em("ls", "qd");

    console.log(em1);
    for (key in em1) {
        console.log(key);
    }
    // name position sigIn printInfo
    var mag = Object.create(em1);
    console.log(mag); // Em{}
    for (key in mag) {
        console.log(key);
    }
    // name position sigIn printInfo


    console.log(mag.name); //ls
    mag.name = "ww";
    mag.position = "xs";
    console.log(mag); // {name: "ww", position: "xs"}
    mag.sigIn(); //ww this->mag
    console.log(Object.getOwnPropertyNames(mag)); //  ["name", "position"]
```

#### 原型链

```
    var protoOfMag = Object.getPrototypeOf(mag);
    console.log(protoOfMag); // Em {name: "ls", position: "qd", sigIn: ƒ}  => em1
    var protoOfEm = Object.getPrototypeOf(protoOfMag);
    console.log(protoOfEm); // {age: 20, printInfo: ƒ, constructor: ƒ} =>em1 构造函数的prototype
    var protoOfEmp = Object.getPrototypeOf(protoOfEm);
    console.log(protoOfEmp); // Object 构造函数
    var protoOfObj = Object.getPrototypeOf(protoOfEmp);
    console.log(protoOfObj); // null
```
#### 修改原型指向

```
<!--var mag = Object.create(em1);-->
//mag 继承 Em 原型的属性 name position sigIn printInfo
<!--    mag.name = "ww";-->
<!--    mag.position = "xs";-->
    
function Mag2() {}
    Mag2.prototype.department = "jsb";
    Object.setPrototypeOf(mag, Mag2.prototype); // 修改 mag 的原型指向
    console.log(mag.department); //jsb
    console.log(Object.getPrototypeOf(mag)); //{department: "jsb", constructor: ƒ}
    // console.log(mag.sigIn()); //报错
    for (key in mag) {
        console.log(key);
    }
    // name , position (非继承属性，是本身就定义的),department
```

#### Spread 操作符 (ES6)

```
    var post = {
        id: 1,
        title: 'title1',
        content: 'content1',
    };
    console.log(post); // {id: 1, title: "title1", content: "content1"}
    var postClone = {
        ...post
    };
    console.log(postClone); // {id: 1, title: "title1", content: "content1"}
    console.log(post === postClone); // false

    var post2 = {
        ...post,
        author: 'ls',
    }
    console.log(post2); // {id: 1, title: "title1", content: "content1", author: "ls"}


    var arr = [1, 2, 3];
    var arrClone = [...arr];
    console.log(arrClone); // [1, 2, 3]
    var arr2 = [...arr, 5, 6] // [1, 2, 3, 5, 6]
    console.log(arr2);

    
    function savePoint(id, title, content) {
        console.log("SAVING..", id, title, content);
    }

    savePoint(...[2, 'title2', 'content2'])
    // SAVING.. 2 title2 content2
```
#### 值传递 & 引用传递


```
    // 数组
    function byReference(arr) {
      arr[0] = 5;
    }
    var array = [1, 2, 3];
    byReference(array);
    console.log(array); // [5,2,3]

    // 对象
    function byReferenceObj(obj) {
      obj.title = "t1";
    }
    var post = { id: 1, title: "t33" };
    byReferenceObj(post);
    console.log(post); // {id: 1, title: "t1"}

    // 字符串
    function byReferenceStr(str) {
      str = "abc";
    }
    var testStr = "test";
    byReferenceStr(testStr);
    console.log(testStr); // test

    // number
    function byValue(num) {
      num = 10;
      console.log(num);
    }
    var testNum = 1;
    byValue(testNum);
    console.log(testNum);
```
---

### 异常

```
    try {
      var emp = undefined;
      //   console.log(emp.name);
    } catch (err) {
      console.log(err); //TypeError: Cannot read property 'name' of undefined at demo5.html:527
      console.error("错误已处理");
    } finally {
      console.log("总会执行");
    }
    console.log("continue");
```
