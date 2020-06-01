## 面向对象

### Class
ES5 生成实例对象的方法是通过构造函数

```
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    const p = new Point(1, 2);
    console.log(p.toString()); // (1,2)
```

**ES6 class 改写**
```
  class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
    let p = new Point(2, 3);
    console.log(p.toString());//(2, 3)
```

#### 构造函数的缺点
> 同一个构造函数的对象实例之间无法共享属性或方法。

#### 原型对象的作用
就是定义所有对象实例所共享的属性和方法。

#### prototype
对于构造函数来说，它是一个属性;对于对象实例来说，它是一个原型对象

#### 原型链（prototype chains）
对象的属性和方法，有可能是定义在自身，也有可能是定义在它的原型对象。
原型对象也有自己的原型，这就形成了一条原型链(prototype chain)

所有对象的原型顶端都是 **Object.prototype** ,Object.prototype对象也有自己的原型对象 =? 没有任何属性和方法的 **null** 对象,
null对象没有自己的原型

特点:
- 读取对象的某个属性是,JS引擎先寻找对象本身的属性,如果找不到,就去他的原型找,直到最顶层的Object.prototype还是找不到,则返回 undefined 
- 如果对象自身和它的原型,都定义了一个同名的属性,优先读取对象自身的属性, 这叫 **覆盖** (overiding)
- 一级级向上在原型链寻找某个属性，对性能是有影响的。所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

#### constructor 属性
prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。
- 分辨原型对象到底属于哪个构造函数

```
function A() {};
    var a = new A();
    console.log(a.constructor === A) //true
    console.log(a.constructor === Array) //false
    <!--使用constructor属性，确定实例对象a的构造函数是A，而不是Array。-->
```
- 从实例新建另一个实例
- 
```
 function A() {};
    var a = new A();
    var b = new a.constructor();
    console.log(b instanceof A); //true

```

#### instanceof运算符

instanceof运算符返回一个布尔值，表示指定对象是否为某个构造函数的实例。

因为instanceof对整个原型链上的对象都有效，所以同一个实例对象，可能会对多个构造函数都返回true。

instanceof对象只能用于复杂数据类型（数组，对象等），不能用于简单数据类型（布尔值，数字，字符串等）

null和undefined都不是对象，所以instanceof 总是返回false。


#### 静态方法
