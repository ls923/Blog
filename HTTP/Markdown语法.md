#Markdown 语法

### 1.1 标题

效果如下

# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

### 1.2 内联 HTML 语法 & MD 语法

```html
可使用&nbsp;<b>HTML</b>&nbsp;<i>标签</i>

<a href="http://www.baidu.com">Baidu</a>
```

`效果如下`

可使用&nbsp;<b>HTML</b>&nbsp;<i>标签</i>
<a href="http://www.baidu.com">Baidu</a>

**加粗**
_倾斜_
**_加粗倾斜_**
~~删除线~~

```
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

### 1.3 缩进，对齐方式

&emsp;全角
&ensp;半角
&nbsp;半角之半角

<center>中心对齐</center>
<p align="left">左对齐</p>

### 1.4 特殊字符自动转义

&lt;
&amp;

### 引用

```
> 这是引用
> > 引用中的引用
> > > 哈！
```

`效果如下`

> 这是引用
>
> > 引用中的引用
> >
> > > 哈！

#### 图片 & 超链接

<img src="https://ls923-1301420650.cos.ap-guangzhou.myqcloud.com/me.jpg" width="100" align="middle"/>

![blockchain](https://ls923-1301420650.cos.ap-guangzhou.myqcloud.com/me.jpg "me")

[简书](http://jianshu.com "good！")
[百度](http://baidu.com)

### 列表

使用 `-` `+` `*` 都可以

- [x]
- [ ]

* 加号

- 星号

* 减号

#### 有序列表

1. content
2. content
3. content

- One
  - Two
    - Three

### 表格

| head    | head    | head    |
| ------- | ------- | ------- |
| content | content | content |

### 代码

`~`

```
    code...
```

### 流程图

````flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```
````
