(this["webpackJsonphex-opacity"]=this["webpackJsonphex-opacity"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),o=(a(11),a(2)),s=a(5),i=(a(13),function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(s.a)({mode:"onChange"}),i=l.register,p=l.handleSubmit;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"App-title"},"Hexadecimal color code for opacity"),n.a.createElement("form",{onSubmit:p((function(e){try{var t=e.transparency;-1!==t.indexOf("rgba")?c(function(e){var t=100,a=e.replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),r=(a&&a[4]||"").trim();return""!==r&&(t=r),(a?(256|a[1]).toString(16).slice(1)+(256|a[2]).toString(16).slice(1)+(256|a[3]).toString(16).slice(1):e)+(t=(255*t|256).toString(16).slice(1).toUpperCase())}(t)):c((a=t,Math.round(a/100*255).toString(16).padStart(2,"0").toUpperCase()))}catch(r){console.error("error=>",r)}var a}))},n.a.createElement("input",{className:"App-input",placeholder:"Between 0 - 100 or rgba(0, 0, 0, 0.80) or rgba(0, 0, 0, .80)",name:"transparency",type:"text",ref:i({required:!0})}),n.a.createElement("button",{className:"App-button",type:"submit"},n.a.createElement("strong",null,"Convert"))),a&&n.a.createElement("div",{className:"App-value"},n.a.createElement("div",{className:"App-text"},a),n.a.createElement("div",{className:"App-text"},2===a.length&&n.a.createElement("small",null,"Example: #000000",a," || #ffffff",a," || #ff0050",a)))))});l.a.render(n.a.createElement(i,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.2fbdcccf.chunk.js.map