### ID selector

```
<div id="the-id-selector">Coding</div>
```

> *id* 是 **唯一** 的

- 命名规则：第一个字一定是英文字母(大小写皆可)

```
#the-id-selector{
    font-size:24px;
}
```
---
### Class Selector

- 命名规则：第一个字一定是英文字母(大小写皆可)
- 可以拥有多个class
```
<div class="my-class bg-blue">Coding</div>
```

```
.my-class{
    font-size:24px;
}

.bg-blue{
    background-color:blue;
}
```
---
### Tag Selector

```
<h1 class="container"></h1>
<!--该class不生效-->

<div class="container">Coding</div>
```

> 若标签选择器后面加 class/id 选择器,则该 class/id **只能** 套用到 该标签上

```
h1 {
    font-size:24px;
}

div.container {
    background-color:blue;
}
```
---
### 运用符号
#### 运用空格

```
<div class="container">
    <div>
        <div></div>
    </div>
    <div></div>
</div>
    
```

> 选取  拥有 .container 这个 class 的 HTML 元素 里面的 所有 div (并不包括 container 本身)

```
div {
    padding: 0;
    margin: 0;
}

.container div {
    background-color: #000;
}
```

#### 运用 '**>**' 符号

```
<div class="container">
    <div>       <!--被选取-->
        <div>       <!--未被选取-->
        </div>
    </div>
    <div>       <!--被选取-->
    </div>     
</div>
```

> 选取 拥有 container 这个 class 的 HTML 元素 里面的 **第一层** 的所有 div

```
div {
    padding: 0;
    margin: 0;
}

.container>div {
    background-color: #000;
}
```

#### 运用 '+' 符号

```
<div class="container">
    <div>       
    </div>
</div>
<div></div> <!--被选取-->

<div class="container">
    <div>       
    </div>
</div>
<br>
<div></div> <!--未被选取-->
```

> 选取拥有 container 这个 class 的 HTML 元素,
与它身处同一层紧接着的 div


> 若无紧接着的 div 元素 ，则 不会选择任何元素

```
div {
    padding: 0;
    margin: 0;
}

.container+div {
    background-color: #000;
}
```

#### 运用 '~' 符号

```
<div class="container">
    <div>       
    </div>
</div>
<br>
<div></div> <!--被选取-->
<hr>
<div></div> <!--被选取-->
```

> 选取拥有 container 这个 class 的 HTML 元素,
与它身处同一层后面所有的 div

```
div {
    padding: 0;
    margin: 0;
}

.container ~ div {
    background-color: #000;
}
```

####  运用 '*' 符号
```
<div class="container"><div>

<br>    <!--被选取-->
<div></div> <!--被选取-->
<hr>    <!--被选取-->
<div></div> <!--被选取-->
```

> 选取 所有 的 元素

```
div {
    padding: 0;
    margin: 0;
}

。container ~ `*{
     background-color: #000;
}
```
---
### Attribute Selector(属性选择器)

```
<a href="url1" title="A"></a>
<a href="url2" title="B"></a>
<a href="url3" title="C"></a>
```

> 选取 所有 的 元素

```
a{
    displa: block;
}

a[href="url1"]{
    font-size:21px;
}

a[href^="https"]{
    font-size:21px;
}
<!--选择以 https 开头的 值-->

a[href$="https"]{
    font-size:21px;
}
<!--选择以 https 结尾的 值-->

a[href*="https"]{
    font-size:21px;
}
<!--选择以 https 为关键字的 值-->
```
---
### Pseude Classes(伪类)

```
<a href="url1" title="A"></a>

```

```
a{
    displa: block;
}

a:visited{
    color:red;
}

.container:nth-child(2){
    font-size:21px;
}

```