class betterScroll {
    //需要传入速度
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
        console.log(this.el)
    }
    //移动功能函数
    goTop(top) {
        this.el.scrollTo(0, top)
    }
    //去相应位置
    toTop(wantTop) {
        wantTop = wantTop || 0
        let i = 0;
        let nowTops = this.elOrwind();
        if (wantTop > nowTops) {
            window.timers = setInterval(() => {
                nowTops += i>20? i : ++i;
                this.goTop(nowTops);
                if (wantTop <= nowTops) this.clear()
            }, this.timer)
        }
        else if (wantTop < nowTops) {
            window.timers = setInterval(() => {
                nowTops -= (++i);
                this.goTop(nowTops);
                if (wantTop >= nowTops) this.clear()
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
        console.log(document.body.scrollTop || document.documentElement.scrollTop)
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
    //清除事件
    clear() {
        clearInterval(window.timers);
        window.timers = null;
    }
}