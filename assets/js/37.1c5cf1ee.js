(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{312:function(t,i,a){"use strict";a.r(i);var n=a(14),s=Object(n.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h4",{attrs:{id:"动画框架实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画框架实现原理"}},[this._v("#")]),this._v(" 动画框架实现原理")]),this._v(" "),t("p",[this._v("Animation框架定义了透明度，旋转，缩放和位移几种常见的动画，而且控制的是整个View，实现原理是每次绘制视图时View所在的ViewGroup中的drawChild函数获取该View的Animation的Transformation值，然后调用canvas.concat(transformToApply.getMatrix())，通过矩阵运算完成动画帧，如果动画没有完成，继续调用invalidate()函数，启动下次绘制来驱动动画，动画过程中的帧之间间隙时间是绘制函数所消耗的时间，可能会导致动画消耗比较多的CPU资源，最重要的是，动画改变的只是显示，并不能相应事件。")])])}),[],!1,null,null,null);i.default=s.exports}}]);