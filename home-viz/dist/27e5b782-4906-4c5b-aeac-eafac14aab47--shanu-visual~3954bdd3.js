var __NR_MODULES="object"==typeof __NR_MODULES?__NR_MODULES:{};__NR_MODULES["27e5b782-4906-4c5b-aeac-eafac14aab47--shanu-visual"]=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://cli-assets.service.datanerd.us/artifact-index-production/27e5b782-4906-4c5b-aeac-eafac14aab47/det/";var r={__publicPath:function(e){n.p=e},__factory:function(t,n){const r=function(t,n,r,o){var u={};function c(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}return u[t]={i:t,l:!0,exports:n},u[r]={i:r,l:!0,exports:o},c.m=e,c.c=u,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://cli-assets.service.datanerd.us/artifact-index-production/27e5b782-4906-4c5b-aeac-eafac14aab47/det/",c}("Xznc",t,"evsE",n);return r("s4k2")}};return r}({Xznc:function(e,t){e.exports=function(){throw new Error('Could not initialize "nr1"')}()},evsE:function(e,t){e.exports=function(){throw new Error('Could not initialize "__nr1-internal__"')}()},s4k2:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.r(t),n.d(t,"default",(function(){return b}));var u=n("Xznc"),c=n("evsE").injectedPackages.react,a=c.__esModule?c.default:c,i=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.createElement(u.LineChart,{accountId:4043696,query:"SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzY5NnxJTkZSQXxOQXw4MTAzODA1NTgxNDQ4OTYxMTM2' TIMESERIES auto",fullWidth:!0})},t}(a.Component),l=n("evsE").injectedPackages.react,f=l.__esModule?l.default:l,s=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return f.createElement(u.AreaChart,{accountId:4043696,query:"SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzY5NnxJTkZSQXxOQXw4MTAzODA1NTgxNDQ4OTYxMTM2' TIMESERIES auto",fullWidth:!0})},t}(f.Component),p=n("evsE").injectedPackages.react,d=p.__esModule?p.default:p,y=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return d.createElement(u.PieChart,{accountId:4043696,query:"SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDA0MzY5NnxJTkZSQXxOQXw4MTAzODA1NTgxNDQ4OTYxMTM2' ORDER BY cpuPercent asc LIMIT 100",fullWidth:!0})},t}(d.Component),_=n("evsE").injectedPackages.react,E=_.__esModule?_.default:_,b=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return E.createElement("div",null,E.createElement("h1",null,"Line Chart"),E.createElement(i,null),E.createElement("h1",null,"Area Chart"),E.createElement(s,null),E.createElement("h1",null,"Pie Chart"),E.createElement(y,null))},t}(E.Component)}});
//# sourceMappingURL=https://cli-assets.service.datanerd.us/artifact-index-production/27e5b782-4906-4c5b-aeac-eafac14aab47/det/27e5b782-4906-4c5b-aeac-eafac14aab47--shanu-visual~3954bdd3.js.map