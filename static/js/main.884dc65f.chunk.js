(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,i){},14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var n=i(7),a=i.n(n),s=i(8),r=i(2),c=i(3),o=i(5),l=i(4),u=i(1),m=i.n(u),p=(i(13),i(14),i(0)),f=function(t){Object(o.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={scrollPosition:0},t.listRef=m.a.createRef(),t.calculateOffset=function(e){var i=t.props,n=i.step,a=i.frameSize,s=i.itemWidth,r=i.infinite,c=i.images,o=t.state.scrollPosition,l=-(c.length*s-a*s),u=n*s,m="prev"===e?u:-u,p=o+m;if(r){if(0===o&&"prev"===e)return m=l;if(o===l&&"next"===e)return m=-l}return p>0&&(m-=p),p<l&&(m-=p-l),m},t.setScrollPosition=function(e){t.setState((function(i){var n=t.calculateOffset(e);return{scrollPosition:i.scrollPosition+n}}))},t.isScrollImpossible=function(e){return 0===t.calculateOffset(e)},t.applyListAnimation=function(){var e=t.state.scrollPosition,i=t.props.animationDuration;t.listRef.current&&t.listRef.current.animate([{transform:"translateX(".concat(e,"px)")}],{duration:i,easing:"ease-in-out",fill:"forwards"})},t}return Object(c.a)(i,[{key:"render",value:function(){var t=this,e=this.props,i=e.images,n=e.itemWidth,a=e.frameSize,s=n*a;return this.applyListAnimation(),Object(p.jsx)("div",{className:"carousel",children:Object(p.jsxs)("div",{className:"carousel__list-container",style:{width:"".concat(s,"px")},children:[Object(p.jsx)("ul",{id:"list",ref:this.listRef,className:"carousel__list",children:i.map((function(t,e){return Object(p.jsx)("li",{children:Object(p.jsx)("img",{src:t,alt:e.toString(),className:"image",style:{width:"".concat(n,"px")}})},e.toString())}))}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{className:"button",type:"button",onClick:function(){t.setScrollPosition("prev")},disabled:this.isScrollImpossible("prev"),children:"Prev"}),Object(p.jsx)("button",{className:"button",type:"button",onClick:function(){t.setScrollPosition("next")},disabled:this.isScrollImpossible("next"),children:"Next"})]})]})})}}]),i}(m.a.Component),h=f,j=function(t){Object(o.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],frameSize:3,itemWidth:130,animationDuration:1e3,step:3,infinite:!1},t.setFrameSize=function(e){var i=+e.currentTarget.value;t.setState({frameSize:i})},t.setItemWidth=function(e){var i=+e.currentTarget.value;t.setState({itemWidth:i})},t.setAnimationDuration=function(e){var i=+e.currentTarget.value;t.setState({animationDuration:i})},t.setStepSize=function(e){var i=+e.currentTarget.value;t.setState({step:i})},t.toggleInfinite=function(){t.setState((function(t){return{infinite:!t.infinite}}))},t}return Object(c.a)(i,[{key:"render",value:function(){var t=this.state,e=t.images,i=t.itemWidth,n=t.frameSize,a=t.animationDuration,r=t.step,c=t.infinite;return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("h1",{children:"Carousel with ".concat(e.length," images")}),Object(p.jsx)(h,Object(s.a)({},this.state)),Object(p.jsxs)("div",{children:["Item width:"," ",Object(p.jsx)("input",{type:"number",value:i,onChange:this.setItemWidth,min:100,max:200})]}),Object(p.jsxs)("div",{children:["Number of images displayed:"," ",Object(p.jsx)("input",{type:"number",value:n,onChange:this.setFrameSize,min:0,max:5})]}),Object(p.jsxs)("div",{children:["Step size:"," ",Object(p.jsx)("input",{type:"number",value:r,onChange:this.setStepSize,min:1,max:5})]}),Object(p.jsxs)("div",{children:["Animation duration:"," ",Object(p.jsx)("input",{type:"number",value:a,onChange:this.setAnimationDuration,min:500,max:5e3,step:100})]}),Object(p.jsxs)("div",{children:["Infinite:"," ",Object(p.jsx)("button",{type:"button",className:"button",onClick:this.toggleInfinite,children:c?"Turn off":"Turn on"})]})]})})}}]),i}(m.a.Component),b=j;a.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.884dc65f.chunk.js.map