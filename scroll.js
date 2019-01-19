class betterScroll {
    /**
     * 
     * @param {*} el    滚动容器 
     * @param {*} obj   配置参数
     */
    constructor(el, obj) {
        this.timer = obj.speed || 10;
        this.top = document.body.scrollTop || document.documentElement.scrollTop;
        if (el === window) this.el = window;
        else if (el.charAt(0) === '.') {
            this.el = document.getElementsByClassName(el.substr(1))[0];
        }
        else {
            this.el = document.getElementById(el.substr(1));
        }
        this.demo = null;
    }
    wantTo() {

    }
    //移动功能函数
    goTop(top) {
        if(this.demo === this.elOrwind()) {
            //控制随意输入 超出范围内部
            this.clear()
            return
        }
        console.log(this.elOrwind())
        this.demo = this.elOrwind()
        this.el.scrollTo(0, top)
    }
    //去相应位置
    toTop(wantTop) {
        wantTop = wantTop || 0
        let i = 0;
        /**
         * @param {number} wantTop 当未选择 默认到顶部
         * @param {number} i  滚动过程中 逐渐加速运动
         * @param {number} nowTops 当前滚动条位置 判断向上或者向下
         */
        //当前滚动条位置
        let nowTops = this.elOrwind();
        //移动位置过小 直接移动 中断
        if (Math.abs(wantTop - nowTops) <= 20) {
            this.goTop(wantTop)
            return
        }
        //向下
        if (wantTop > nowTops) {
            //增加或者减少20的原因: 使最后一帧 精确到想去的位置
            wantTop -= 20
            window.timers = setInterval(() => {
                nowTops += i > 19 ? i : ++i;
                if (wantTop <= nowTops) {
                    this.clear()
                    this.goTop(wantTop+20)
                    return
                }
                this.goTop(nowTops);
            }, this.timer)
        }
        //向上
        else if (wantTop < nowTops) {
            //增加或者减少20的原因: 使最后一帧 精确到想去的位置
            wantTop = wantTop + 20
            window.timers = setInterval(() => {
                nowTops -= i > 19 ? i : ++i;
                console.log(i)
                if (wantTop >= nowTops) {
                    this.clear()
                    this.goTop(wantTop - 20)
                    return
                }
                this.goTop(nowTops);
            }, this.timer)
        }
        else { }
    }
    //测试scrool的高度
    getScroll() {
        this.el.addEventListener('scroll', () => { this.getHeight() }, false)
    }
    //读取测试高度
    getHeight() {
        // console.log(this.elOrwind())
    }
    //读取实例时的高度
    getNewTop() {
        console.log(this.top)
    }
    //获取节点或window对象当前scroll高度
    elOrwind() {
        return this.el === window ?
            document.body.scrollTop || document.documentElement.scrollTop :
            this.el.scrollTop
    }
    //清除事件 释放内存
    clear() {
        this.demo = null;
        clearInterval(window.timers);
        window.timers = null;
    }
}