!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react/addons"));else if("function"==typeof define&&define.amd)define(["react/addons"],t);else{var r=t("object"==typeof exports?require("react/addons"):e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){r(1),e.exports.RatingWidget=r(7),e.exports.RatingStep=r(3)},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{})},function(e,t,r){t=e.exports=r(5)(),t.push([e.id,".rating-widget{display:inline-block;cursor:pointer}.rating-widget--disabled{cursor:default}.rating-widget__step{position:relative;display:inline-block;margin-right:2px;font-size:16px;width:16px;height:16px;line-height:16px}.rating-widget__step:before,.rating-widget__step:after{position:absolute;left:0;top:0;overflow:hidden;content:'\\2605'}.rating-widget__step:before{color:#FA9E49;z-index:10;width:0}.rating-widget__step:after{color:#9F9F9F;z-index:5}.rating-widget__step--hover:before{color:#2354ac}.rating-widget__step--whole:before{width:100%}.rating-widget__step--half:before{width:50%}",""])},function(e,t,r){var n=r(6),i=n.createClass({displayName:"RatingStep",propTypes:{type:n.PropTypes.oneOf(["whole","half","empty"])},getDefaultProps:function(){return{type:"empty"}},render:function(){var e={"rating-widget__step":!0};return e["rating-widget__step--"+this.props.type]=!0,n.createElement("span",{className:n.addons.classSet(e)})}});e.exports=i},function(e){function t(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=p[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(i(n.parts[s],t))}else{for(var a=[],s=0;s<n.parts.length;s++)a.push(i(n.parts[s],t));p[n.id]={id:n.id,refs:1,parts:a}}}}function r(e){for(var t=[],r={},n=0;n<e.length;n++){var i=e[n],o=i[0],s=i[1],a=i[2],p=i[3],d={css:s,media:a,sourceMap:p};r[o]?r[o].parts.push(d):t.push(r[o]={id:o,parts:[d]})}return t}function n(){var e=document.createElement("style"),t=u();return e.type="text/css",t.appendChild(e),e}function i(e,t){var r,i,o;if(t.singleton){var p=c++;r=l||(l=n()),i=s.bind(null,r,p,!1),o=s.bind(null,r,p,!0)}else r=n(),i=a.bind(null,r),o=function(){r.parentNode.removeChild(r)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function o(e,t,r){var n=["/** >>"+t+" **/","/** "+t+"<< **/"],i=e.lastIndexOf(n[0]),o=r?n[0]+r+n[1]:"";if(e.lastIndexOf(n[0])>=0){var s=e.lastIndexOf(n[1])+n[1].length;return e.slice(0,i)+o+e.slice(s)}return e+o}function s(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=o(e.styleSheet.cssText,t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function a(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(i&&"function"==typeof btoa)try{r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(i))+" */",r='@import url("data:stylesheet/css;base64,'+btoa(r)+'")'}catch(o){}if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=d(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),u=d(function(){return document.head||document.getElementsByTagName("head")[0]}),l=null,c=0;e.exports=function(e,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=f());var i=r(e);return t(i,n),function(e){for(var o=[],s=0;s<i.length;s++){var a=i[s],d=p[a.id];d.refs--,o.push(d)}if(e){var f=r(e);t(f,n)}for(var s=0;s<o.length;s++){var d=o[s];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete p[d.id]}}}}},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];e.push(r[2]?"@media "+r[2]+"{"+r[1]+"}":r[1])}return e.join("")},e}},function(t){t.exports=e},function(e,t,r){var n=r(6),i=r(3),o=n.createClass({displayName:"RatingWidget",propTypes:{size:n.PropTypes.number},getDefaultProps:function(){return{size:5}},getInitialState:function(){return{rating:0}},handleClick:function(){var e=Math.random()*this.props.size+1;this.setState({rating:e})},render:function(){var e=this.renderRatingSteps();return n.createElement("div",{className:"rating-widget",onClick:this.handleClick},e)},renderRatingSteps:function(){for(var e,t=[],r=this.state.rating,o=Math.round(r),s=Math.ceil(r),a=1;a<=this.props.size;++a)e="empty",r>=a?e="whole":o==a&&o==s&&(e="half"),t.push(n.createElement(i,{type:e}));return t}});e.exports=o}])});