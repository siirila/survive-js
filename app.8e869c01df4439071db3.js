webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),u=n(31),i=r(u),l=n(170),c=r(l);i.default.render(a.default.createElement(c.default,null),document.getElementById("app"))},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(171),s=r(f),d=n(176),v=r(d),p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNote=function(){n.setState({notes:n.state.notes.concat([{id:s.default.v4(),task:"New task"}])})},n.deleteNote=function(e,t){t.stopPropagation(),console.log("The id being deleted is "+e),n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.addNote=n.addNote.bind(n),n.state={notes:[{id:s.default.v4(),task:"Learn React"},{id:s.default.v4(),task:"Do laundry"}]},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state.notes;return c.default.createElement("div",null,c.default.createElement("button",{onClick:this.addNote},"+"),c.default.createElement(v.default,{notes:e,onDelete:this.deleteNote}))}}]),t}(c.default.Component);t.default=p},171:function(e,t,n){var r=n(172),o=n(175),a=o;a.v1=r,a.v4=o,e.exports=a},172:function(e,t,n){function r(e,t,n){var r=t&&n||0,o=t||[];e=e||{};var u=void 0!==e.clockseq?e.clockseq:l,s=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:f+1,v=s-c+(d-f)/1e4;if(v<0&&void 0===e.clockseq&&(u=u+1&16383),(v<0||s>c)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=s,f=d,l=u,s+=122192928e5;var p=(1e4*(268435455&s)+d)%4294967296;o[r++]=p>>>24&255,o[r++]=p>>>16&255,o[r++]=p>>>8&255,o[r++]=255&p;var y=s/4294967296*1e4&268435455;o[r++]=y>>>8&255,o[r++]=255&y,o[r++]=y>>>24&15|16,o[r++]=y>>>16&255,o[r++]=u>>>8|128,o[r++]=255&u;for(var m=e.node||i,b=0;b<6;++b)o[r+b]=m[b];return t?t:a(o)}var o=n(173),a=n(174),u=o(),i=[1|u[0],u[1],u[2],u[3],u[4],u[5]],l=16383&(u[6]<<8|u[7]),c=0,f=0;e.exports=r},173:function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var a=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}e.exports=n}).call(t,function(){return this}())},174:function(e,t){function n(e,t){var n=t||0,o=r;return o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]}for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);e.exports=n},175:function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var u=e.random||(e.rng||o)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t)for(var i=0;i<16;++i)t[r+i]=u[i];return t||a(u)}var o=n(173),a=n(174);e.exports=r},176:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(171),i=(r(u),n(177)),l=r(i);t.default=function(e){var t=e.notes,n=e.onDelete,r=void 0===n?function(){}:n;return a.default.createElement("ul",null,t.map(function(e){var t=e.id,n=e.task;return a.default.createElement("li",{key:t},a.default.createElement(l.default,{id:t,onDelete:r,task:n}))}))}},177:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=function(e){var t=e.task,n=e.onDelete,r=e.id,o=function(e){n(r,e)};return a.default.createElement("div",null,a.default.createElement("span",null,t),a.default.createElement("button",{onClick:o},"x"))}}});
//# sourceMappingURL=app.8e869c01df4439071db3.js.map