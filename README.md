# *wantScroll*

> npm install wantscroll --save-dev

>滚动条前往任意位置( 容器空间内 )
>支持window对象 或者节点中的滚动

```
//构造函数中需要参数速度(Number)
let wantscroll = new wantScroll(
    el,{          //window对象
        speed: 10 //速度
    }
)
```

+ 测试 滚动读取scroll值
- getHeight

+前往位置scroll位置(Number,fn) 接收一个数字 和 回调函数
-wantTo(100,fn)    默认回到顶部

+上一次记录数组(Array)
-pre

+返回到上一次滚动位置
-wantToback

+清空历史记录
-clearHistory

+读取 记忆 实例时高度
-getNewTop

+回到实例时位置
-wantToNew



