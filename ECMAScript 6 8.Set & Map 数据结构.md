## Set & Map 数据结构
###  Set
类似数组,但是成员都是唯一的,没有重复的值

**Set** 本身是一个构造函数，用来生成 Set 数据结构。

```
    const s = new Set();
    console.log(s.size); //0

    const s2 = new Set(["a", "b"])
    console.log(s2.size); //2

    const s3 = new Set(['a', 'b', 'a', 'b'])
    console.log(s3.size); //2

    const ary = [...s3]
    console.log(ary); // ["a", "b"]
```

#### 实例方法
- Set.prototype.**add**(value)：添加某个值，返回 Set 结构本身
- Set.prototype.**delete**(value)：删除某个值，返回一个布尔值，表示删除是否成功
- Set.prototype.**has**(value)：返回一个布尔值，表示该值是否为Set的成员
- Set.prototype.**clear**()：清除所有成员，没有返回值


```
    const s = new Set();
    //add()
    s.add('a').add('b')
    console.log(s.size); //2

    // delete()
    let r1 = s.delete('a')
    console.log(r1); // true
    // 删除一个不存在的值，返回false
    let r2 = s.delete('c')
    console.log(r2); //false 
    console.log(s.size); //1

    // has()
    let r3 = s.has('b');
    console.log(r3); //true
    let r4 = s.has('c');
    console.log(r4); //flase

    // clear()
    s.clear();
    console.log(s.size); //0
```

#### 遍历

```
  const s = new Set(['a', 'b', 'c']);
    s.forEach(value => {
        console.log(value);
    })
```
--- 
### Map

```
    var map = new Map();
    var objKey = { key: 2 };
    
    //set
    map.set(1, "v1");
    map.set(objKey, "v2");
    map.set("key 3", "v3");
    console.log(map); //Map(3) {1 => "v1", {…} => "v2", "key 3" => "v3"}
    //get
    console.log(map.get(1)); // v1
    console.log(map.get(objKey)); // v2
    console.log(map.get("key 3")); // v3
    
    //has
    console.log(map.has("key 3")); //true
    
    //forEach遍历
    map.forEach((value, key) => {
      console.log(key, value);
    });
    // 1 "v1"
    //{key: 2} "v2"
    //key 3 v3
    
    
    // 迭代器遍历
    var iterator = map.entries();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    // {value: Array(2), done: false}
    // {value: Array(2), done: false}
    // {value: Array(2), done: false}
    // {value: undefined, done: true}

    // for...of 遍历
    for (let [key, value] of map) {
      console.log(key, value);
    }
    // 1 "v1"
    //{key: 2} "v2"
    //key 3 v3

    //删除key为1的元素
    map.delete(1);
    console.log(map);
    //Map(2) {{…} => "v2", "key 3" => "v3"}
```
