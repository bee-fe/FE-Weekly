---
title: Flex速查手册
date: 2018-11-12
tags: css
author: Tony Gao
---
![flex][1]

## **1. Flex容器属性**

>+ **`flex-direction`** 控制Flex项目在`Main-Axis`上的排列方向。
    + `row` ：沿着`Main-Axis`**从左向右，水平排列**。(另`row-reverse` )
    + `column` ：沿着`Cross-Axis`从**上到下垂直排列**。(另`column-reverse`)
+ **`flex-wrap`** 换行。
    + `wrap` ：Flex项目在Flex容器内**换行**排列
    + `nowrap` ：Flex项目在Flex容器内**不换行**排列。
    + wrap-reverse
+ **`flex-flow`**: `flex-direction` + `flex-wrap`
+ **`justify-content`** 控制Flex项目在`Main-Axis`上的对齐方式。
    + `flex-start` : 所有Flex项目靠Main-Axis开始边缘（**左对齐**）。
    + `flex-end` ： ~~~~~~~~~~~~~~~~~~~~~~~~结束边缘（**右对齐**）。
    + `center` ： 让所有Flex项目排~~~~~~~~~~中间（**居中对齐**）。
    + `space-between` ： 让除了第一个和最一个Flex项目的两者间间距相同（**两端对齐**）。
    + `space-around` ： 让每个Flex项目**具有相同的空间。**
+ **`align-items`** 控制Flex项目在`Cross-Axis`上的对齐方式。
    + `stretch` : 让所有的Flex项目高度和Flex容器高度一样。
    + `flex-start`
    + `flex-end`
    + `center`: 所有Flex项目在Cross-Axis上沿着他们自己的**基线对齐**。
    + `baseline`
+ **`align-content`** 用于多行的Flex容器。
    + `flex-start || flex-end || center || stretch`。

## **2. Flex项目属性**

> + **`flex-grow`** 默认为 `0` 有额外空间保持自身宽度； `1`: 有额外空间会撑开（*grow*了）。
+ **`flex-shrink`** 默认为 `1` ,  没有额外空间保持自身宽度; `0`: 维持**被压缩平均**的宽度。
+ **`flex-basis`** 可以指定Flex项目的初始大小。也就是 `flex-grow` 和 `flex-shrink` 属性调整它的大小以适应Flex容器之前。默认为 `auto`。
+ **`flex`** （**速记**)  =>  ` flex-grow` 第一，然后是 `flex-shrink`，最后是 `flex-basis`。缩写成`GSB`。
    + 默认： `flex: 0 1 auto;`
    +  `flex: none` => `flex: 0 0 auto;` , 宽度被自动计算，不过弹性项目**始终**不会伸展或者收缩。
    + **相对flex项目**`flex: auto` => `flex: 1 1 auto` , 宽度被自动计算，不过**如果有必要**，**会**伸展或者收缩以适应整个可用宽度。
    + **绝对flex项目**`flex: "positive number"` => `flex: “正数” 1 0` 。
        + 将弹性项目的初始宽度设置为零，伸展项目以填满可用空间，并且最后只要有可能就收缩项目。
        + 当**有多个弹性项目**，并且其初始宽度 flex-basis 被设置为基于零的任何值时，弹性项目的宽度被根据 flex-grow 值的**比例**来计算。
+ **`align-self`** 改变**一个**弹性项目沿着侧轴的位置, 不影响相邻的弹性项目。
    + `auto || flex-start || flex-end || center || baseline || stretch`。
  + **`order`** ，Flex项目会根据order值**从底到高**重新排序。

## **3. Auto-margin 对齐**

> 当在Flex项目上使用 `margin: auto` 时，值为`auto` 的方向（左、右或者二者都是）会占据所有剩余空间。

## **4. FFC (flex formatting context)**

> Flexbox 布局新定义了格式化上下文，类似 BFC（block formatting context）。除了布局和一些细节不同以外的一切规则都和 BFC 是相同的。

### **与BFC的细微区别**
+ `vertical-align`、`float` 和 `clear`对`Flexbox`中的子元素是没有效果的。
+ Flexbox 下的子元素不会继承父级容器的宽

### **flex item（flex项目）**
CSS解析器会把子元素外部装进一个看不见的盒子里，我们通过排列这些盒子来达到排序、布局、 伸缩的目的。

子元素中包括了 标签节点 以及 文本节点。标签节点很容易理解，需要注意的是文本节点。

默认情况下，`flex` 会将 **连续的文本节点** 装进 flex-item 之中，使文本可以和标签节点一起排序和定位。

空格也是文本节点，所以 white-space 会影响Flexbox 中的布局：
![此处输入图片的描述][2]

## **5. flex-item-size 如何计算的**

> `item-size`（尺寸）为主轴方向`上item`的 `content` 再加上自身的`margin`、 `border` 和 `padding` 就是这个 item 的尺寸。

规则：
### *1. 子元素没有内容和默认固定宽高*
`flex-basis` > `width[height]: 非auto`;

### *2. 元素存在默认宽高*
如果子元素有默认固定宽高、并且设置了 `flex-basis`，那么它的 `content` 取 `flex-basis` 和 `固定宽高`中较大的, 且以**固定宽高**为**下限**。

### *3.元素存在 min-width[height] 或者 max-width[height]*
如果子元素有min-width[min-height] 的限制，那么content取 `flex-basis` 和 `min-width[min-height]` 中较大的，且以**`min-width`**值为**下限**。

如果 min-width[min-height] 的值已经**超出了容器的尺寸**，那么即使设置了 `flex-shrink`, CSS解析器也不会用这个item的 content shrink，而是坚持保留它的`min-width[min-height]`。

反之，如果设置了 `max-width[height]` 的值，那么设置 `flex-basis` 无法超过这个值，对于`flex-grow` 也仅仅只会增长到 `max-width[height]` 这个上限。

### *4. width[height]: auto; 优先级等于 flex-basis。*
**两者谁大取谁**




参考：

1. [flex-cheatsheet][3]
1. [understanding-flexbox-everything-you-need-to-know][4]
1. [flexbox-layout-and-calculation][5]


> 思维流图。

![Flex1][6]


  [1]: https://www.w3cplus.com/sites/default/files/blogs/2017/1703/flexbox1.png
  [2]: https://www.w3cplus.com/sites/default/files/blogs/2017/1703/flexbox3.png
  [3]: https://yoksel.github.io/flex-cheatsheet/#display
  [4]: https://www.w3cplus.com/css3/understanding-flexbox-everything-you-need-to-know.html
  [5]: https://www.w3cplus.com/css3/flexbox-layout-and-calculation.html?from=groupmessage
  [6]: http://static.zybuluo.com/gao1994/sr8vhlxwou6jg36pk55jjwvi/flexboxsheet.png