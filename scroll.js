class betterScroll {
    //需要传入速度
    constructor(timer) {
        this.timer = timer || 10;
        this.top = document.body.scrollTop || document.documentElement.scrollTop;
    }
    //移动功能函数
    goTop(top) {
        window.scrollTo(0, top)
    }
    //去相应位置
    toTop(wantTop) {
        wantTop = wantTop || 0
        let i = 0;
        if(wantTop > this.top) {
            window.timers = setInterval(() => {
                    this.top += (++i);
                    this.goTop(this.top);
                    if (wantTop <= this.top) this.clear()
            }, this.timer)
        }
        else {
            window.timers = setInterval(() => {
                    this.top -= (++i);
                    this.goTop(this.top);
                    if (wantTop >= this.top) this.clear()
            }, this.timer)
        }
        
    }
    //测试scrool的高度
    getScroll() {
        window.addEventListener('scroll', () => { this.getHeight() }, false)
    }
    //读取测试高度
    getHeight() {
        console.log(document.body.scrollTop || document.documentElement.scrollTop)
    }
    //读取当前高度
    getNowTop() {
        console.log(this.top)
    }
    //清除事件
    clear() {
        clearInterval(window.timers);
        window.timers = null;
    }
}