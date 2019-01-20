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
        this.demo = null;   //主要对比是否已经到达极限值 中断事件的执行
        this.swichs = true; //设置开关 禁止 在滚动事件中开启另一个事件
        this.pre = [];      //上一次滚动位置

    }
    //移动功能函数
    goTop(top,callBack) {
        if (this.demo === this.elOrwind()) {
            //控制随意输入 超出范围内部
            callBack ? callBack() : ''
            this.clear()
            return
        }
        // console.log(this.elOrwind())
        this.demo = this.elOrwind()
        this.el.scrollTo(0, top)
    }
    //去相应位置
    toTop(wantTop, callBack) {
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
            this.swichs = true;
            callBack ? callBack() : ''
            return
        }
        //向下
        if (wantTop > nowTops) {
            console.log('55555555555')
            //增加或者减少20的原因: 使最后一帧 精确到想去的位置
            wantTop = wantTop - 20
            window.timers = setInterval(() => {
                nowTops += i > 19 ? i : ++i;
                if (wantTop <= nowTops) {
                    this.clear()
                    this.goTop(wantTop + 20)
                    callBack ? callBack() : '';
                    return
                }
                this.goTop(nowTops,callBack);

            }, this.timer)
        }
        //向上
        else if (wantTop < nowTops) {
            //增加或者减少20的原因: 使最后一帧 精确到想去的位置
            wantTop = wantTop + 20
            window.timers = setInterval(() => {
                nowTops -= i > 19 ? i : ++i;
                // console.log(i)
                if (wantTop >= nowTops) {
                    this.clear()
                    this.goTop(wantTop - 20)
                    callBack ? callBack() : ''
                    return
                }
                this.goTop(nowTops);
            }, this.timer)
        }
        else { this.swichs = true; callBack ? callBack() : '' }
    }
    elOrwind() {
        return this.el === window ?
            document.body.scrollTop || document.documentElement.scrollTop :
            this.el.scrollTop
    }
    //清除事件 释放内存
    clear() {
        this.swichs = true;
        this.demo = null;
        clearInterval(window.timers);
        window.timers = null;
    }
}



class wantScroll extends betterScroll {
    constructor(el, obj) {
        super(el, obj)
    }
    //想去的位置
    wantTo(wantTop, callBack) {
        if (!this.swichs) return
        this.swichs = false;
        if (wantTop === 'top') { this.toTop(0, callBack); this.pre.push(this.getHeight()); }
        else if (wantTop === 'bottom') { this.toTop(Infinity, callBack); this.pre.push(this.getHeight()); }
        else { this.toTop(wantTop, callBack); this.pre.push(this.getHeight()) }
    }
    //读取实例时的高度
    getNewTop() {
        return this.top
    }
    //读取当前高度
    getHeight() {
        return this.elOrwind()
    }
    //滚动时 测试scrool的高度
    getScroll() {
        this.el.addEventListener('scroll', () => { this.getHeight() }, false)
    }
    //返回到上一次历史滚动位置
    wantToback() {
        // console.log(this.pre)
        if (this.pre.length === 0) return
        console.log(this.pre)
        let ice = this.pre.pop()
        console.log(this.pre)

        this.wantTo(ice)
    }
    //返回实例时的位置
    wantToNew() {
        this.wantTo(this.getNewTop())
    }
    //清空历史记录
    clearHistory() {
        this.pre.length = 0;
    }
}