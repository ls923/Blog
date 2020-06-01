### 常用的 CSS 单位
> #### px 
> #### em 
> #### rem 
> #### vh/vw 

---
### FlexBox

#### Flex Container

##### flex-direction
> flex-direction 定义 flex items 的排序方向

```
<!--default : row-->

flex-direction: row; 
<!--行排列(横向)-->
flex-direction: row-reverse;
<!--倒序-->
```
> main-axis (主轴) 是 **row**

> cross-axis (交叉轴) 是 **column**

```
flex-direction: column;
<!--列排列(竖向)-->
flex-direction: column-reverse;
<!--倒序-->

```
> main-axis (主轴) 是 **column**

> cross-axis (交叉轴) 是 **row**


##### justify-content & align-items
> justify-content 设定主轴的排序方向

> align-items 设定交叉轴的排序方向

```
justify-content: center;
<!--沿 主轴 ,置中对齐 -->
align-items: center;
<!--沿 交叉轴 ,置中对齐 -->

<!--垂直居中对齐-->

```
> flex-start , flex-end

```
justify-content: flex-start;
<!--起始方向 -->
align-items: flex-end;
<!--结束方向 -->

```
##### flex-wrap
> 设定 会不会分行

```
flex-wrap: wrap;

```
##### flex-flow
> flex-direction + flex-wrap 的缩写

```
flex-flow: row wrap;
<!--等价于-->
flex-direction: row;
flex-wrap: wrap;
```
##### align-content
> 当 flex-wrap 设定为 wrap 且flex items 多于 一行时才生效

> 用于设定 多于一行时 行和行之间的对齐方式

```
align-content: center;
```
#### Flex items
##### order
> 设定flex item 排序方式

```
<!--default : 0-->
<!--由小至大排序-->
order: 1;
```
##### align-self
> 覆写 flex container 的 align-items 设定

##### flex-basis
> 设定 flex-item 的主轴方向的大小

> 设定 了flex-basis 原有的高度/宽度设定就会失效

##### flex-grow
> 当 flex container 主轴方向 有剩余空间的时候
flex item 沿主轴方向扩大

```
.A{
flex-grow:2;<!--占有剩余空间的2份 2/6-->
}
.B{
flex-grow:3;<!--占有剩余空间的3份 3/6-->
}
.C{
flex-grow:1;<!--占有剩余空间的1份 1/6-->
}
.D{
flex-grow:0;<!--保持原大小不变-->
}
```
##### flex-shrink
> 和flex-grow 相反 当 flex item 主轴方向大小总合 超过 flex container 的时候 
flex item 沿主轴方向缩小

```
<!--若超出60px-->
.A{
flex-shrink:2;<!--分担被缩小的2份 缩小 20px-->
}
.B{
flex-shrink:3;<!--分担被缩小的3份 缩小 30px-->
}
.C{
flex-shrink:1;<!--分担被缩小的1份 缩小 10px-->
}
.D{
flex-shrink:0;<!--保持原大小不变-->
}
```
##### flex
> flex-grow , flex-shrink , flex-basis 组合的缩写

```
.A{
flex:1 1 auto;
<!--flex-grow 1 || flex-shrink 1 || flex-basis auto-->
}

```

---

### HTML 上下左右 置中对齐的三种方法
#### display: inline / inline-block
> 将父元素(容器) 设定 **text**-**align** : **center** 就可以左右置中

#### display: block
> 将元素本身的 **margin**-**left** & **margin**-**right** 设定为 **auto** 

#### position absolute
 >
 
 ```
 .item{
 <!--元素此时左上方 对其画面的中心点-->
    position:absolute; 
    top:50%;
    left:50%;
<!--通过 transform 属性向左和向上偏移一半距离-->
    transform : translateX(-50%) translateY(-50%)
<!--此时元素上下左右居中-->
    
 }
 
 ```
 #### flexbox
 justify-content:center
 
 align-items:center
 
 #### display:table
 > 
 
 ```
 
 ```
 
 
 
 ---
###  Grid 布局
#### Grid容器

##### 定义 **Grid** 容器

```
<!--表示 row (5行100px) , column (5列100px)-->
grid-template-rows: 100px 100px 100px 100px 100px;
  grid-template-columns: [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px;
```

##### 定义 元素 位置
```
grid-row: 1/2;
grid-column: 1/4;
  
<!--等同于-->
  
grid-area: 1 1 2 4;

grid-column: 2 / span 3; 
<!--span 延伸-->
```
##### Grid line

```
  grid-template-columns: [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px;
```
##### Grid area

```
grid-template-areas:
    "name . . . ."
    "inputname inputname inputname inputname inputname"
    "content . . . ."
    "contents contents contents contents contents"
    ". . button . .";
    
    
```
##### repeat
```
 grid-template-columns: repeat(5, 1fr);
```



---

### Block & Inline & Inline-Block
#### Block
> block 元素 独占一行 左右不允许有其他元素 与它并排 可设定 width & height

#### Inline
> inline 元素 不会独占一行  ,左右可以与其他的inline元素并排 
width & height 设定对 inline 元素无效

#### Inline-Block
> inline-block 元素 即可 设定 width & height ,又可以与 其他 元素并排

#### 设定左右对齐

```
<!--Block-->
margin: 0 auto;
<!--margin-left:auto;-->
<!--margin-right:auto;-->

<!--Inline & Inline-Block-->
text-align:center;

```

---
### CSS Position

#### static 
> 所有元素 默认值 

static 会跟随 HTML 排版的流程(flow)移动

>  对于 **top** **left** **right** **bottom** 设定值不会生效


#### absolute
> 绝对定位 设定 top letf right bottom 值来对元素进行定位 根据父类定位

```
.div{
position:absolute;
left:50px; <!--将元素定位到 '与左边相距 50px'-->
bottom:50px; <!--将元素定位到 '与下边相距 50px'-->
}
```
absolute **不**会跟随 HTML 排版的流程(flow)移动

> 若 absolute 元素所在容器是有 scrollbar(卷轴) 则absolute元素会随**卷动**而移动

> 若 absolute 元素中再包含一个 absolute 元素,
则里面的元素会根据**外面**那层的 absolute 元素去定位


#### relative
> 相对定位 相对自己去一定
相对 static 多了 top left right bottom 的设定,且能够让 absolute 子元素根据它来定位(absolute 元素会 无视 static 元素)

#### fixed
> 与 absolute 相似 ,区别是 会固定在固定位置,即使滚动页面 也会一直保持在那个位置

> 设定 top,left,right,bottom时,根据 body 定位.


#### sticky
> sticky 元素 会在滚动页面贴到顶部的时候,固定在顶部

---

### CSS Box Model 盒子模型

#### box-sizing
> 默认值 = content-box

> 设定 box-sizing:border-box;

> 在设定 包括 padding / border 的 元素宽度时十分有用


#### Content

#### Padding

#### Border

#### Margin

**margin** 设定 只对于 **inline** 元素的左右方向有效

> inline 属性不会影响**垂直**方向的版面布局

**margin** **collapse** 边距重叠

即 当页面有两个 block 元素,上面的有 margin-bottom 的设定,下面的有 margin-top 的设定 时, **会将两个 margin 距离重叠** ,**保留距离较大的尺寸**


---

