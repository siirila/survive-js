webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),i=n(31),u=r(i),c=n(170),l=r(c);u.default.render(a.default.createElement(l.default,null),document.getElementById("app"))},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=n(171),s=r(f),d=n(176),p=r(d),v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNote=function(){n.setState({notes:n.state.notes.concat([{id:s.default.v4(),task:"New task"}])})},n.deleteNote=function(e,t){t.stopPropagation(),console.log("The id being deleted is "+e),n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.activateNoteEdit=function(e){n.setState({notes:n.state.notes.map(function(t){return t.id===e&&(t.editing=!0),t})})},n.editNote=function(e,t){n.setState({notes:n.state.notes.map(function(n){return n.id===e&&(n.editing=!1,n.task=t),n})})},n.addNote=n.addNote.bind(n),n.state={notes:[{id:s.default.v4(),task:"Learn React"},{id:s.default.v4(),task:"Do laundry"}]},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state.notes;return l.default.createElement("div",null,l.default.createElement("button",{onClick:this.addNote},"+"),l.default.createElement(p.default,{notes:e,onNoteClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))}}]),t}(l.default.Component);t.default=v},171:function(e,t,n){var r=n(172),o=n(175),a=o;a.v1=r,a.v4=o,e.exports=a},172:function(e,t,n){function r(e,t,n){var r=t&&n||0,o=t||[];e=e||{};var i=void 0!==e.clockseq?e.clockseq:c,s=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:f+1,p=s-l+(d-f)/1e4;if(p<0&&void 0===e.clockseq&&(i=i+1&16383),(p<0||s>l)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=s,f=d,c=i,s+=122192928e5;var v=(1e4*(268435455&s)+d)%4294967296;o[r++]=v>>>24&255,o[r++]=v>>>16&255,o[r++]=v>>>8&255,o[r++]=255&v;var y=s/4294967296*1e4&268435455;o[r++]=y>>>8&255,o[r++]=255&y,o[r++]=y>>>24&15|16,o[r++]=y>>>16&255,o[r++]=i>>>8|128,o[r++]=255&i;for(var b=e.node||u,h=0;h<6;++h)o[r+h]=b[h];return t?t:a(o)}var o=n(173),a=n(174),i=o(),u=[1|i[0],i[1],i[2],i[3],i[4],i[5]],c=16383&(i[6]<<8|i[7]),l=0,f=0;e.exports=r},173:function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var a=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}e.exports=n}).call(t,function(){return this}())},174:function(e,t){function n(e,t){var n=t||0,o=r;return o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]}for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);e.exports=n},175:function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var i=e.random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var u=0;u<16;++u)t[r+u]=i[u];return t||a(i)}var o=n(173),a=n(174);e.exports=r},176:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),i=n(177),u=r(i),c=n(178),l=r(c);t.default=function(e){var t=e.notes,n=e.onNoteClick,r=void 0===n?function(){}:n,o=e.onEdit,i=void 0===o?function(){}:o,c=e.onDelete,f=void 0===c?function(){}:c;return a.default.createElement("ul",null,t.map(function(e){var t=e.id,n=e.editing,o=e.task;return a.default.createElement("li",{key:t},a.default.createElement(u.default,{onClick:r.bind(null,t)},a.default.createElement(l.default,{editing:n,value:o,onEdit:i.bind(null,t)}),a.default.createElement("button",{onClick:f.bind(null,t)},"x")))}))}},177:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=r(a);t.default=function(e){var t=e.children,n=o(e,["children"]);return i.default.createElement("div",n,t)}},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(1),s=r(f);t.default=function(e){var t=e.editing,n=e.value,r=e.onEdit,o=u(e,["editing","value","onEdit"]);return t?s.default.createElement(d,l({value:n,onEdit:r},o)):s.default.createElement("span",o,n)};var d=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&r.props.onEdit(t)},i=n,a(r,i)}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=(e.onEdit,u(e,["value","onEdit"]));return s.default.createElement("input",l({type:"text",autoFocus:!0,defaultValue:t,onBlur:this.finishEdit,onKeyPress:this.checkEnter},n))}}]),t}(s.default.Component)}});
//# sourceMappingURL=app.26888fa99a72a10b4ddf.js.map