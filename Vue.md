## Vue
> Vue cli 的安装

```
npm install -g @vue/cli
```
 
>  验证安装是否正确

```
vue --version
```

> 遇到问题


```
PS C:\Users\Administrator\Desktop\github\vue-demo1> vue --version vue : 无法加载文件 E:\Node.js\node_gobal\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅
 http://go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ vue --version
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

> 解决方法
1. 以管理员身份运行此程序(失败)
1. 在Windows PowerShell(管理员)模式
使用set-ExecutionPolicy RemoteSigned
选择Y(成功)

> 通过命令行工具 创建Vue项目

```
//安装
npm install -g @vue/cli
//检查
vue --version
//创建
vue create xxx (.)
//启动
npm run sreve

```
---
### 1. 引用Vue.js
```
	<script src="js/vue.js" type="text/javascript" charset="utf-8"></script>
```
---
### 2. 插值
####  文本

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 	_**{{	}}**_	的文本插值
```
	<span>Message:{{ msg }}</span>
```
无论何时，绑定的数据对象上  _**msg**_  属性发生了改变，插值处的内容都会更新.	

_**v-once**_  你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但留心这会影响到该节点上的其它数据绑定：

```
	<span v-once>这个将不会改变: {{ msg }}</span>
```

#### 原始Html
双大括号会将数据解释为普通文本，而非 HTML 代码。	
为了输出真正的 HTML，需要使用 _**v-html**_ 指令：
```
	<p>Using mustaches: {{ rawHtml }}</p>
	<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

#### Attribute
Mustache() 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 _**v-bind**_ 指令：	
```
	<div v-bind:id="dynamicId"></div>
```

#### JavaScript
对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
```
	{{ number + 1 }}
	
	{{ ok ? 'YES' : 'NO' }}
	
	{{ message.split('').reverse().join('') }}
	
	<div v-bind:id="'list-' + id"></div>
```

有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。

```
	<!-- 这是语句，不是表达式 -->
	{{ var a = 1 }}

	<!-- 流控制也不会生效，请使用三元表达式 -->
	{{ if (ok) { return message } }}

```

```
// 数据对象
var data = { a: 1 }


// 该对象被加入到一个 Vue 实例中
var vm = new Vue ({
    data : data
})
// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3

```
除了数据属性，***Vue***  实例还暴露了一些有用的实例属性与方法。它们都有前缀 ***$***，以便与用户定义的属性区分开来。例如：

```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```

---
### 3.指令
#### 参数
##### 强制数据绑定
_**v-bind**_ 指令可以用于响应式地更新 HTML attribute：
```
	<a v-bind:href="url">...</a>
```
在这里 href 是参数，告知 v-bind 指令将该元素的 href attribute 与表达式 url 的值绑定。

另一个例子是 **_v-on_** 指令，它用于监听 DOM 事件：

```
	<a v-on:click="doSomething">...</a>
```

在这里参数是监听的事件名。
#### 修饰符
##### 绑定事件监听
**_.prevent_** 修饰符告诉 **_v-on_** 指令对于触发的事件调用 **_event.preventDefault()_**：
```
	<form v-on:submit.prevent="onSubmit">...</form>
```
Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：

#### v-bind缩写
```
	<!-- 完整语法 -->
	<a v-bind:href="url">...</a>
	
	<!-- 缩写 -->
	<a :href="url">...</a>
```

#### v-on缩写
```
	<!-- 完整语法 -->
	<a v-on:click="doSomething">...</a>
	
	<!-- 缩写 -->
	<a @click="doSomething">...</a>
```
>  条件渲染 

  - ***v-show***  显示和隐藏结点
  - ***v-if***   创建和删除结点

常用内置指令

  **v:text** : 更新元素的 textContent
  
  **v-html** : 更新元素的 innerHTML
  
  **v-if** : 如果为true, 当前标签才会输出到页面
  
  **v-else**: 如果为false, 当前标签才会输出到页面
  
  **v-show** : 通过控制display样式来控制显示/隐藏
  
  **v-for** : 遍历数组/对象
  
  **v-on** : 绑定事件监听, 一般简写为 **@**
  
  **v-bind** : 强制绑定解析表达式, 可以省略v-bind
  
  **v-model** : 双向数据绑定
  
  **ref** : 为某个元素注册一个唯一标识, vue对象通过 **$refs** 属性访问这个元素对象
  
  **v-cloak** : 使用它防止闪现表达式, 与css配合:
>   [v-cloak] { display: none }  

#### 自定义指令

1. 注册全局指令
 
```
Vue.directive('my-directive', function(el, binding){
    el.innerHTML = binding.value.toupperCase()
  })
```

2. 注册局部指令
 
```
directives : {
    'my-directive' : {
        bind (el, binding) {
          el.innerHTML = binding.value.toupperCase()
        }
    }
  }
```

3. 使用指令
 
```
v-my-directive='xxx'
```


```
<div id="test">
  <p v-upper-text="msg"></p>
  <p v-lower-text="msg"></p>
</div>

<div id="test2">
  <p v-upper-text="msg"></p>
  <p v-lower-text="msg"></p>
</div>
```


```
 // 注册一个全局指令
  // el: 指令所在的标签对象
  // binding: 包含指令相关数据的容器对象
  Vue.directive('upper-text', function (el, binding) {
    console.log(el, binding)
    el.textContent = binding.value.toUpperCase()
  })
  new Vue({
    el: '#test',
    data: {
      msg: "I Like You"
    },
    // 注册局部指令:只在当前 vm 管理范围内有效
    directives: {
      'lower-text'(el, binding) {
        console.log(el, binding)
        el.textContent = binding.value.toLowerCase()
      }
    }
  })
  
  new Vue({
    el: '#test2',
    data: {
      msg: "I Like You Too"
    }
  })
  
```

---

### 4.计算属性&监视

> #### **computed** //计算属性

什么时候执行?
- //初始化 显示 
- //相关的data属性数据发生改变

```
 computed: {
        fullNameComputed() { // 属性的get()
          console.log('fullNameComputed()')
          return this.firstName + '-' + this.lastName
        },
```


> #### **watch** //监视

```
watch: { 
        // 配置监视firstName
        firstName: function (value) { // 相当于属性的set
          console.log('watch firstName', value)
          // 更新fullNameWatch
          this.fullNameWatch = value + '-' + this.lastName
        }
      }
    })
    
    
// 写在实例外面的监视    
// 监视lastName
vm.$watch('lastName', function (value) {
    console.log('$watch lastName', value)
    // 更新fullNameWatch
    this.fullNameWatch = this.firstName + '-' + value
})
```
> #### **set&get** //

- 计算属性存在缓存 ，多次读取只执行一次getter计算


回调函数 
- 1.你定义的 ，2.你没有调用，3.但最终它执行了
- 1.什么时候调用? , 2. 用来做什么
```
fullNameSetGet: {
          // 当获取当前属性值时自动调用, 将返回值(根据相关的其它属性数据)作为属性值
          get() {
          // 1.你定义的 ，2.你没有调用，3.但最终它执行了
          // 1什么时候调用?,2
          //回调函数 当需要读取当前属性值时回调，根据计算并返回当前属性的值
            console.log('fullNameSetGet get()', this)
            return this.firstName + '-' + this.lastName
          },
          // 当属性值发生了改变时自动调用, 监视当前属性值变化, 同步更新相关的其它属性值
          set(value) {//回调函数 当属性值发生改变时回调，更新相关的属性数据
          //fullNameSetGet的最新value值  
            console.log('fullNameSetGet set()')
            // 更新firstName和lastName
            const names = value.split('-')
            this.firstName = names[0]
            this.lastName = names[1]
          }
```


```
 <div id="demo">
    姓: <input type="text" placeholder="First Name" v-model="firstName"><br>
    名: <input type="text" placeholder="Last Name" v-model="lastName"><br>
    <!--fullName1是根据fistName和lastName计算产生-->
    姓名1(单向): <input type="text" placeholder="Full Name1" v-model="fullNameComputed"><br>
    姓名2(单向): <input type="text" placeholder="Full Name2" v-model="fullNameWatch"><br>
    姓名3(双向): <input type="text" placeholder="Full Name3" v-model="fullNameSetGet"><br>
    <p>{{fullNameComputed}}</p>
  </div>
```


---

### 5. style & class 绑定

1. class绑定: :class='xxx'
- xxx是字符串
- xxx是对象
- xxx是数组
  
2. style绑定: :style="{ color: activeColor, fontSize: fontSize + 'px' }"
 
- 其中activeColor/fontSize是data属性

---
### 6.列表渲染
#### 用 v-for 把一个数组对应为一组元素
>  **v-for** 指令基于一个数组来渲染一个列表。

>  **v-for** 指令需要使用 **item in items**  形式的特殊语法，其中 **items** 是**源数据数组**，而 **item** 则是**被迭代的数组元素的别名**。
    
> 在 **v-for** 块中，我们可以访问所有父作用域的属性(data中的属性)。

> **v-for** 还支持一个可选的**第二个参数**，即**当前项的索引**。

> 可以用 **of** 替代 **in** 作为分隔符


```
<div v-for="item of items"></div>
```

#### 在 v-for 里使用对象

>  第二个的参数为 property 名称 (也就是键名),还可以用第三个参数作为索引：


```
<!--value: 对象的属性 || name:键名 || index:索引-->
<div v-for="(value, name, index) in object">
    
  {{ index }}. {{ name }}: {{ value }}
</div>
```
#### 数组更新检测
##### 变异方法 (mutation method)

Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

##### 替换数组
变异方法，顾名思义，会改变调用了这些方法的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如 filter()、concat() 和 slice()。它们不会改变原始数组，而总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组

```
 <div id="demo">
        <h2>v-for 数组</h2>
        <ul>
        <!--p: 数组元素的别名 || index: 当前项的索引-->
            <li v-for="(p,index) in persons" :key="index">
                {{index}}---{{p.name}}---{{p.age}}
                ---<button @click="deletep(index)">del</button>
                ---<button @click="updatep(index,{ name:'CAt', age:21})">Update</button>
            </li>
        </ul>
        <h2>v-for 对象</h2>
        <ul>
            <li v-for="(value,key) in persons[1]" :key="key">
                {{value}}---{{key}}
            </li>
        </ul>
        <h2>排序</h2>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="(p,index) in filterPersons" :key="index">
                {{index}}---{{p.name}}---{{p.age}}
            </li>
        </ul>
        <button @click="setOrderType(1)">升序</button>
        <button @click="setOrderType(2)">降序</button>
        <button @click="setOrderType(0)">原顺序</button>
    </div>
```


```
<script type="text/javascript">
    // Vue 本身只监视了persons的改变,没有监视数字内部数据的改变
    // Vue重写了数组中的一系列改变数组内部数据的方法( 先调用原生, 再更新界面)
    new Vue({
        el: '#demo',
        data: {
            searchName: '',
            orderType: 0, //0 : 原本 , 1 : 升序, 2 : 降序
            persons: [
                { name: 'Tom', age: 18 },
                { name: 'Jack', age: 17 },
                { name: 'Bob', age: 19 },
                { name: 'Mary', age: 16 },
                { name: 'Alice', age: 21 },
                { name: 'Coo', age: 5 }
            ]
        },
        computed: {
            filterPersons: function () {
                // 取出相关的数据
                const { searchName, persons, orderType } = this;
                // 最终要显示的数组
                let finPersons;
                // 对persons进行过滤
                finPersons = persons.filter(p => p.name.indexOf(searchName) >= 0)
                // 排序
                if (orderType != 0) {
                    finPersons.sort(function (p1, p2) {
                        if (orderType == 1) {
                            // 升序
                            return p1.age - p2.age
                        } else if (orderType == 2) {
                            // 降序
                            return p2.age - p1.age
                        }
                    })
                }
                return finPersons;
            }
        },
        methods: {
            deletep(index) {
                this.persons.splice(index, 1);
            },
            updatep(index, newP) {
                //并没有改变persons本身,数组内部发生了变化,但并没有调用变异方法,vue不会更新界面
                // this.persons[index] = newP;
                this.persons.splice(index, 1, newP)
            },
            setOrderType(orderType) {
                this.orderType = orderType;
            }
        }
    })
</script>
```

---
### 7.事件处理

1. 绑定监听:


 v-on:xxx="fun"

 @xxx="fun"

 @xxx="fun(参数)"

> 默认事件形参: event
> 隐含属性对象: $event

2. 事件修饰符:
 

**.prevent** : 阻止事件的默认行为 event.preventDefault()

**.stop** : 停止事件冒泡 event.stopPropagation()

3. 按键修饰符

**.keycode** : 操作的是某个keycode值的健

**.enter** : 操作的是enter键

```
<div id="example">

  <h2>1. 绑定监听</h2>
  <button @click="test1">test1</button>
  <button @click="test2('abc')">test2</button>
  <button @click="test3('abcd', $event)">test3</button>

  <h2>2. 事件修饰符</h2>
  <a href="http://www.baidu.com" @click.prevent="test4">百度一下</a>
  <div style="width: 200px;height: 200px;background: red" @click="test5">
    <div style="width: 100px;height: 100px;background: blue" @click.stop="test6"></div>
  </div>

  <h2>3. 按键修饰符</h2>
  <!--keyCode == 13 (Enter 键)-->
  <input type="text" @keyup.13="test7">
  <input type="text" @keyup.enter="test7">

</div>
```
---

### 8.表单数据自动收集

***v-model*** 指令在表单 ***<input>、<textarea>*** 及 ***<select>*** 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

> ***v-model*** 会忽略所有表单元素的 *value*、*checked*、*selected* *attribute* 的初始值而总是将 ***Vue*** 实例的数据作为数据来源。你应该通过 *JavaScript* 在组件的 *data* 选项中声明初始值。

- **复选框**
    1. 单个复选框，绑定到布尔值：

```
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

---
### 9.生命周期

```
graph LR
初始化显示-->更新显示 

```
```
graph LR
更新显示-->死亡 

```

初始化显示

更新显示

死亡
- 常用的生命周期方法

>  **created()/mounted():**
发送ajax请求, 启动定时器等异步任务


>  **beforeDestory()**: 做收尾工作, 如: 清除定时器


```
   var vm = new Vue({
        el: "#box1",
        data: data,

        beforeCreate: function () {
            console.log("beforeCreate");
        },
        created: function () {
            console.log('a is ' + this.a);
            console.log("created");
        },
        beforeMount: function () {
            console.log("beforeMount");
        },
        mounted: function () {
            console.log("mounted");
        },

        beforeUpdate: function () {
            console.log("beforeUpdate");
        },
        updated: function () {
            console.log("updated");
        },
    });
```
---

### 10.过渡 & 动画

1. 操作 css 的 **transition** / **animation**
2. vue 会给目标元素 添加 / 移除 特定的 class
3. 过渡的相关类名

**v-enter**：

> 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

**v-enter-active**：

> 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

**v-enter-to**：

> 2.1.8 版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

**v-leave**：

> 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

**v-leave-active**：

> 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

**v-leave-to**：

> 2.1.8 版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

>  模板的理解:
> - 动态的html页面
> - 包含了一些JS语法代码
> - 大括号表达式
> - 指令(以v-开头的自定义标签属性)
   
>  双大括号表达式:
> - 语法: {{exp}} 或 {{{exp}}}
> - 功能: 向页面输出数据
> - 可以调用对象的方法


---

### 11.过滤器

功能: 对要显示的数据进行特定格式化后再显示

注意: 并没有改变原本的数据, 可是产生新的对应的数据


##### 定义过滤器

```
Vue.filter(filterName, function(value[,arg1,arg2,...]){
      // 进行一定的数据处理
      return newValue
    })
```
##### 使用过滤器
       
```
<div>{{myData | filterName}}</div>
       <div>{{myData | filterName(arg)}}</div>
```

```
<!--需求: 对当前时间进行指定格式显示-->
  <div id="test">
    <h2>显示格式化的日期时间</h2>
    <p>{{time}}</p>
    <p>最完整的: {{time | dateString}}</p>
    <p>年月日: {{time | dateString('YYYY-MM-DD')}}</p>
  </div>
```

```
<script>
  // 定义过滤器
  Vue.filter('dateString', function (value, format='YYYY-MM-DD HH:mm:ss') {

    return moment(value).format(format);
  })

  new Vue({
    el: '#test',
    data: {
      time: new Date()
    },
    mounted () {
      setInterval(() => {
        this.time = new Date()
      }, 1000)
    }
  })
</script>
```

---
### 9.组件 
- 可复用的Vue实例。
- 组件也可以复用，且每个组件数据是封闭在内部的，相互不影响。
- *props* 定义一个属性 ，在模板内 可对此属性进行 应用 和 渲染。
- *component* 函数第一个参数是组件的名称，第二个参数是以对象的形式 描述 一个组件。
> 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 ***data、computed、watch、methods*** 以及生命周期钩子等。仅有的例外是像 *el* 这样根实例特有的选项。
- 一个组件的模板必须具备一个根节点
- 使用 this.$emit('clicknow-component', this.count)  定义一个触发事件,第一个参数是 事件的名称,第二个参数是可携带的参数。在组件的父级 可以 通过事件绑定的方式去 接收到 **emit** 函数所触发的事件 
- 在模板内 可通过 ***<slot></slot>*** 标签声明一个组件的插槽 ，通过插槽可以插入任意的Html内容及标签
```
<div>
    <button-counter title="Title1 :" @clicknow-component="clicknow"> 
    <!--应用 title 属性 -->
    <h4>this is a slot</h4>
    </button-counter>
    <button-counter title="Title2 :"></button-counter>
</div>
```
```
Vue.component('button-counter', {
        props: ['title'], //声明 title 属性
        data: function () {
            return { count: 0 }
        },
        template: '<div><h2>this is a Button</h2><button v-on:click="clickfun">{{title}}You clicked me {{ count }} times.</button><slot></slot></div>',
        methods: {
            clickfun: function () {
                this.count++;
                this.$emit('clicknow-component', this.count);
            }
        }
    })
```
```
var vm = new Vue({
        el: "#box1",
        data: data,
        methods: {
            submit: function () {
                this.message;
                console.log(this.message);
            },
            clicknow: function (e) {
                console.log(e);
            }
        }
```
---
### 10.Render函数
 **render** 函数即渲染函数，它是个函数，它的参数也是个函数——即 **createElement**，
##### 1. render 函数的返回值 ( VNode )

> VNode ( 虚拟节点 ),也就是要 渲染的节点

##### 2. render 函数的参数（createElement）

> createElement 是 render 函数 的参数，它本身也是个函数，并且有三个参数。

##### 3. createElement 函数的返回值（VNode）

> createElement 函数的返回值是 VNode（即：虚拟节点）。

##### 4. createElement 函数的参数（三个）

> 一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。类型：{String | Object | Function}。必需。


> 一个包含模板相关属性的数据对象你可以在 template 中使用这些特性。类型：{Object}。可选。


> 子虚拟节点 (VNodes)，由 createElement() 构建而成，也可以使用字符串来生成“文本虚拟节点”。类型：{String | Array}。可选。


---
### 11.MVVM 
- model : 模型,数据对象(data)
- view : 视图，模板页面
- viewmodel : 视图模型(Vue的实例)
---
### 自定义事件

适用于 父子组件 
```

// 触发自定义事件
      this.$emit("AddTodo", todo);
```

非父子组件 可用 pubsub-js
订阅 & 发布 消息


```
// 订阅消息
PubSub.subscribe("delTodo", (msg, index) => {
      this.delTodo(index);
    });
```


```
deleteTodo() {
      const { todo, index } = this;
      console.log(todo.title);
      // delTodo(index);
      // 发布消息
      PubSub.publish("delTodo", index);
    }
```
---
### 组件间通信 slot (插槽)
用于 父组件向子组件传递 '标签数据'

> 子组件

```
<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" v-model="isSelected" /> -->
      <slot name="checkAll"></slot>
    </label>
    <span>
      <!-- <span>已完成{{ completeSize }}</span>/ 全部{{ todos.length }} -->
      <slot name="count"></slot>
    </span>
    <!-- <button class="btn btn-danger" @click="delComplete" v-show="completeSize">
      清除已完成任务
    </button> -->
    <slot name="delete"></slot>
  </div>
</template>
```

> 父组件

```
<Footer>
    <input type="checkbox" v-model="isSelected" slot="checkAll" />
</Footer>
```
---
### Ajax 请求
#### vue-resource

#### axios


---
### Vue-router
**SPA** (single page application) 单页面应用

```
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];


// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
});

export default router;

```

```
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由
// 从而让整个应用都有路由功能

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

```

#### 嵌套路由

在 路由参数 中使用 **children** 配置

```
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```
基于上面的配置，当你访问 /user/foo 时，User 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：
```
<!--默认渲染-->

const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },

        // ...其他子路由
      ]
    }
  ]
})
```
#### 缓存路由组件
 正常情况 一个路由组件 在切换时 会被销毁,再次切换回来时重新创建

使用 keep-alive 标签
```
   <keep-alive>
        <router-view />
    </keep-alive>
```

#### 向路由组件传递数据

#### 源码分析 (准备)

	1.[].slice.call(lis): 将伪数组转换为真数组
	2.node.nodeType: 得到节点类型
	3.Object.defineProperty(obj, propertyName, {}): 给对象添加/修改属性(指定描述符)
		configurable: true/false  是否可以重新define
		enumerable: true/false 是否可以枚举(for..in / keys())
		value: 指定初始值
		writable: true/false value是否可以修改存取(访问)描述符
		get: 函数, 用来得到当前属性值
		set: 函数, 用来监视当前属性值的变化
  	4.Object.keys(obj): 得到对象自身可枚举的属性名的数组
  	5.DocumentFragment: 文档碎片(高效批量更新多个节点)
  	6.obj.hasOwnProperty(prop): 判断prop是否是obj自身的属性

#### Object.defineProperty()
[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

### Vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

这个状态自管理应用包含以下几个部分：

**state**，驱动应用的数据源；

**view**，以声明方式将 state 映射到视图；

**actions**，响应在 view 上的用户输入导致的状态变化。

以下是一个表示“单向数据流”理念的简单示意：
![image](https://vuex.vuejs.org/flow.png)


![image](https://vuex.vuejs.org/vuex.png)
#### state 
1. vuex 管理的状态对象
2. 唯一的 

```
const state = {
    xxx:initValue
}
```


#### mutations
1. 包含多个直接更新 state 的方法(回调函数) 的对象
2. 谁来触发 : action 中的 commit (mutations 名称)
3. 只能包含同步的代码,不能写异步代码


```
const mutations ={
    yyy(state,data){
        //更新 state 的某个属性
    }
}

```
#### actions
1. 包含多个事件回调函数的对象
2. 通过执行 :commit() 来触发 mutation 的调用,间接更新 state
3. 谁来触发 : 组件中 : $store.dispatch('action 名称') //'zzz'
4. 可以包含异步代码(定时器 ,ajax)

```
const actions ={
    zzz({commit,state},data1){
        commit('yyy',data2)
    }
}
```

![image](https://vuex.vuejs.org/vuex.png)
#### getters
1. 包含多个计算属性(get) 的对象
2. 谁来读取: 组件中 :$store.getters.xxx
```
const getters ={
    mmm(state){
        return ...
        }
    }
```

##### 向外暴露 store 对象
```
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

```
##### 映射 store
```
import store from './store'
new Vue({
    store
})
```

```
<template>
  <el-container>
    <el-header>
      <el-menu :default-active="this.$route.path" router mode="horizontal">
        <!-- <el-menu-item
          v-for="(item,i) in navList"
          :key="i"
          :index="item.name"
          v-show="!item.second"
        >{{item.navItem}}</el-menu-item>


        <el-submenu v-for="(item,i) in navList" :key="i" v-show="item.second" :index="item.name">
          <template slot="title">{{item.navItem}}</template>
          <el-menu-item v-for="(sec,j) in item.second" :key="j" :index="sec.name">{{sec.navItem}}</el-menu-item>
        </el-submenu>-->
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
        <!-- <el-menu-item index="/demo">demo</el-menu-item> -->
        <el-submenu index="/demo">
          <template slot="title">Demo</template>
          <el-menu-item index="/demo/demo1">Demo1</el-menu-item>
          <el-menu-item index="/demo/demo2">Demo2</el-menu-item>
          <el-menu-item index="/demo/demo3">Demo3</el-menu-item>
          <el-submenu index="/demo/demo">
            <template slot="title">Demo-</template>
            <el-menu-item index="/demo/demo4">Demo4</el-menu-item>
            <el-menu-item index="/demo/demo5">Demo5</el-menu-item>
            <el-menu-item index="/demo/demo6">Demo6</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { name: "/", navItem: "Home" },
        { name: "/about", navItem: "About" },
        {
          name: "/demo",
          navItem: "Demo",
          second: [
            { name: "/demo/demo1", navItem: "Demo1" },
            { name: "/demo/demo2", navItem: "Demo2" },
            { name: "/demo/demo3", navItem: "Demo3" },
            { name: "/demo/demo4", navItem: "Demo4" },
            { name: "/demo/demo5", navItem: "Demo5" }
          ]
        }
      ]
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

```



