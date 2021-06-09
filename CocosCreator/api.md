### Cocos Creator 动作(Action)系统

**动作** 指的是 **节点的位移，旋转和缩放**

```
cc.moveBy = function (duration, deltaPos, deltaY) {
    return new cc.MoveBy(duration, deltaPos, deltaY);
};
```
#### moveBy()
方法 moveBy 一共可以传入三个参数.

第三个参数是 Number 类型的 Y 坐标;

第二个参数是可以传入两种类型的，第一种是 Number 类型，第二种才是 Vec2 类型.
如果我们在这里传入的是 Number 类型，那么默认这个参数就是 X 坐标，此时就要填第三个参数，为 Y 坐标。

第二个参数传入使用 cc.v2 方法构建的 Vec2 类型对象，这个类型表示的是一个坐标，即有 X 坐标也有 Y 坐标，因此不需要再传入第三个参数！

传入的 X、Y 坐标都是相对于节点当前的坐标位置，而不是整个坐标系的绝对坐标。

- instanceof 实例
#### ActionInterval 类型
ActionInterval 对象在Cocos中表示时间间隔动作的类，这种动作在一定时间内完成。
- easing

ActionInterval类下的一个方法 类似 css 中 transition 

#### update
**update** 在场景加载后就会每帧调用一次
**onload** 方法会在场景加载后

???
#### 生命周期

