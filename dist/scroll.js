var _createClass=function(){function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}();function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var betterScroll=function(){function o(t,e){_classCallCheck(this,o),this.timer=e.speed||10,this.top=document.body.scrollTop||document.documentElement.scrollTop,t===window?this.el=window:"."===t.charAt(0)?this.el=document.getElementsByClassName(t.substr(1))[0]:this.el=document.getElementById(t.substr(1)),this.demo=null,this.swichs=!0,this.pre=[]}return _createClass(o,[{key:"goTop",value:function(t,e){if(this.demo===this.elOrwind())return e&&e(),void this.clear();this.demo=this.elOrwind(),this.el.scrollTo(0,t)}},{key:"toTop",value:function(t,e){var o=this;t=t||0;var n=0,i=this.elOrwind();if(Math.abs(t-i)<=20)return this.goTop(t),this.swichs=!0,void(e&&e());i<t?(t-=20,window.timers=setInterval(function(){if(i+=19<n?n:++n,t<=i)return o.clear(),o.goTop(t+20),void(e&&e());o.goTop(i,e)},this.timer)):t<i?(t+=20,window.timers=setInterval(function(){if((i-=19<n?n:++n)<=t)return o.clear(),o.goTop(t-20),void(e&&e());o.goTop(i)},this.timer)):(this.swichs=!0,e&&e())}},{key:"elOrwind",value:function(){return this.el===window?document.body.scrollTop||document.documentElement.scrollTop:this.el.scrollTop}},{key:"clear",value:function(){this.swichs=!0,this.demo=null,clearInterval(window.timers),window.timers=null}}]),o}(),wantScroll=function(t){function o(t,e){return _classCallCheck(this,o),_possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,e))}return _inherits(o,betterScroll),_createClass(o,[{key:"wantTo",value:function(t,e){this.swichs&&(this.swichs=!1,"top"===t?this.toTop(0,e):"bottom"===t?this.toTop(1/0,e):this.toTop(t,e),this.pre.push(this.getHeight()))}},{key:"getNewTop",value:function(){return this.top}},{key:"getHeight",value:function(){return this.elOrwind()}},{key:"getScroll",value:function(){var t=this;this.el.addEventListener("scroll",function(){t.getHeight()},!1)}},{key:"wantToback",value:function(){if(0!==this.pre.length){var t=this.pre.pop();this.wantTo(t)}}},{key:"wantToNew",value:function(){this.wantTo(this.getNewTop())}},{key:"clearHistory",value:function(){this.pre.length=0}}]),o}();