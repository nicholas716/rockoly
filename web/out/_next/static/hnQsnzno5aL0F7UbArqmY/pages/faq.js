(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"9fiv":function(e,t,n){!function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?s(e):t}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m;!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(m||(m={}));var h=m,v=function e(t){var r=this,o=t.expanded,a=void 0===o?[]:o,l=t.allowMultipleExpanded,u=void 0!==l&&l,c=t.allowZeroExpanded,d=void 0!==c&&c;n(this,e),i(this,"expanded",void 0),i(this,"allowMultipleExpanded",void 0),i(this,"allowZeroExpanded",void 0),i(this,"toggleExpanded",function(e){if(r.isItemDisabled(e))return r;var t=r.isItemExpanded(e);return t?r.augment({expanded:r.expanded.filter(function(t){return t!==e})}):r.augment({expanded:r.allowMultipleExpanded?[].concat(f(r.expanded),[e]):[e]})}),i(this,"isItemDisabled",function(e){var t=r.isItemExpanded(e),n=1===r.expanded.length;return Boolean(t&&!r.allowZeroExpanded&&n)}),i(this,"isItemExpanded",function(e){return-1!==r.expanded.findIndex(function(t){return t===e})}),i(this,"getPanelAttributes",function(e){var t=r.isItemExpanded(e);return{role:r.allowMultipleExpanded?void 0:"region","aria-hidden":r.allowMultipleExpanded?!t:void 0,"aria-labelledby":r.getButtonId(e),id:r.getPanelId(e),hidden:!t||void 0}}),i(this,"getHeadingAttributes",function(e){return{role:"heading"}}),i(this,"getButtonAttributes",function(e){var t=r.isItemExpanded(e),n=r.isItemDisabled(e);return{id:r.getButtonId(e),"aria-disabled":n,"aria-expanded":t,"aria-controls":r.getPanelId(e),role:"button",tabIndex:0}}),i(this,"getPanelId",function(e){return"accordion__panel-".concat(e)}),i(this,"getButtonId",function(e){return"accordion__heading-".concat(e)}),i(this,"augment",function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}({expanded:r.expanded,allowMultipleExpanded:r.allowMultipleExpanded,allowZeroExpanded:r.allowZeroExpanded},t))}),this.expanded=a,this.allowMultipleExpanded=u,this.allowZeroExpanded=d},g=t.createContext(null),b=function(e){function r(){var e,t;n(this,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return i(s(t=p(this,(e=u(r)).call.apply(e,[this].concat(a)))),"state",new v({expanded:t.props.preExpanded,allowMultipleExpanded:t.props.allowMultipleExpanded,allowZeroExpanded:t.props.allowZeroExpanded})),i(s(t),"toggleExpanded",function(e){t.setState(function(t){return t.toggleExpanded(e)},function(){t.props.onChange&&t.props.onChange(t.state.expanded)})}),i(s(t),"isItemDisabled",function(e){return t.state.isItemDisabled(e)}),i(s(t),"isItemExpanded",function(e){return t.state.isItemExpanded(e)}),i(s(t),"getPanelAttributes",function(e){return t.state.getPanelAttributes(e)}),i(s(t),"getHeadingAttributes",function(e){return t.state.getHeadingAttributes(e)}),i(s(t),"getButtonAttributes",function(e){return t.state.getButtonAttributes(e)}),t}return l(r,e),o(r,[{key:"render",value:function(){var e=this.state,n=e.allowZeroExpanded,r=e.allowMultipleExpanded;return t.createElement(g.Provider,{value:{allowMultipleExpanded:r,allowZeroExpanded:n,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),r}(t.PureComponent);i(b,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var E=function(e){function r(){var e,t;n(this,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return i(s(t=p(this,(e=u(r)).call.apply(e,[this].concat(a)))),"renderChildren",function(e){return e?t.props.children(e):null}),t}return l(r,e),o(r,[{key:"render",value:function(){return t.createElement(g.Consumer,null,this.renderChildren)}}]),r}(t.PureComponent),y=function(e){function r(){var e,o;n(this,r);for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];return i(s(o=p(this,(e=u(r)).call.apply(e,[this].concat(c)))),"renderAccordion",function(e){var n=o.props,r=(n.preExpanded,n.allowMultipleExpanded,n.allowZeroExpanded,n.onChange,d(n,["preExpanded","allowMultipleExpanded","allowZeroExpanded","onChange"]));return t.createElement("div",a({"data-accordion-component":"Accordion"},r))}),o}return l(r,e),o(r,[{key:"render",value:function(){return t.createElement(b,{preExpanded:this.props.preExpanded,allowMultipleExpanded:this.props.allowMultipleExpanded,allowZeroExpanded:this.props.allowZeroExpanded,onChange:this.props.onChange},t.createElement(E,null,this.renderAccordion))}}]),r}(t.Component);i(y,"defaultProps",{allowMultipleExpanded:void 0,allowZeroExpanded:void 0,onChange:void 0,className:"accordion",children:void 0}),i(y,"displayName",h.Accordion);var w=0,x=w,A=t.createContext(null),I=function(e){function r(){var e,o;n(this,r);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return i(s(o=p(this,(e=u(r)).call.apply(e,[this].concat(l)))),"toggleExpanded",function(){o.props.accordionContext.toggleExpanded(o.props.uuid)}),i(s(o),"renderChildren",function(e){var n=o.props.uuid,r=e.isItemExpanded(n),i=e.isItemDisabled(n),a=e.getPanelAttributes(n),l=e.getHeadingAttributes(n),u=e.getButtonAttributes(n);return t.createElement(A.Provider,{value:{uuid:n,expanded:r,disabled:i,toggleExpanded:o.toggleExpanded,panelAttributes:a,headingAttributes:l,buttonAttributes:u},children:o.props.children})}),o}return l(r,e),o(r,[{key:"render",value:function(){return t.createElement(E,null,this.renderChildren)}}]),r}(t.Component),O=function(e){return t.createElement(E,null,function(n){return t.createElement(I,a({},e,{accordionContext:n}))})},P=function(e){function r(){var e,t;n(this,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return i(s(t=p(this,(e=u(r)).call.apply(e,[this].concat(a)))),"renderChildren",function(e){return e?t.props.children(e):null}),t}return l(r,e),o(r,[{key:"render",value:function(){return t.createElement(A.Consumer,null,this.renderChildren)}}]),r}(t.PureComponent),C=function(e){function r(){var e,t;n(this,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return i(s(t=p(this,(e=u(r)).call.apply(e,[this].concat(a)))),"instanceUuid",function(){var e=x;return x+=1,e}()),t}return l(r,e),o(r,[{key:"render",value:function(){var e=this.props,n=e.uuid,r=void 0===n?this.instanceUuid:n,o=d(e,["uuid"]);return t.createElement(O,{uuid:r},t.createElement("div",a({"data-accordion-component":"AccordionItem"},o)))}}]),r}(t.Component);function j(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}i(C,"defaultProps",{className:"accordion__item"}),i(C,"displayName",h.AccordionItem);var q={DOWN:"40",END:"35",ENTER:"13",HOME:"36",LEFT:"37",RIGHT:"39",SPACE:"32",UP:"38"},N=function(e){function r(){var e,t;n(this,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return i(s(t=p(this,(e=u(r)).call.apply(e,[this].concat(a)))),"handleKeyPress",function(e){var n=e.which.toString();if(n!==q.ENTER&&n!==q.SPACE||(e.preventDefault(),t.props.toggleExpanded()),e.target instanceof HTMLElement)switch(n){case q.HOME:e.preventDefault(),function(e){var t=(j(e)||[])[0];t&&t.focus()}(e.target);break;case q.END:e.preventDefault(),function(e){var t=j(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case q.LEFT:case q.UP:e.preventDefault(),function(e){var t=j(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case q.RIGHT:case q.DOWN:e.preventDefault(),function(e){var t=j(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}}),t}return l(r,e),o(r,[{key:"render",value:function(){var e=this.props,n=e.toggleExpanded,r=d(e,["toggleExpanded"]);return t.createElement("div",a({},r,{onClick:n,onKeyDown:this.handleKeyPress,"data-accordion-component":"AccordionItemButton"}))}}]),r}(t.PureComponent);i(N,"defaultProps",{className:"accordion__button"});var k=function(e){return t.createElement(P,null,function(n){var r=n.toggleExpanded,o=n.buttonAttributes;return t.createElement(N,a({toggleExpanded:r},e,o))})};k.displayName=h.AccordionItemButton;var _=function(e){function r(){var e,t;n(this,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return i(s(t=p(this,(e=u(r)).call.apply(e,[this].concat(a)))),"ref",void 0),i(s(t),"setRef",function(e){t.ref=e}),t}return l(r,e),o(r,[{key:"componentDidUpdate",value:function(){r.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){r.VALIDATE(this.ref)}},{key:"render",value:function(){return t.createElement("div",a({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),r}(t.PureComponent);i(_,"defaultProps",{className:"accordion__heading","aria-level":3});var M=function(e){return t.createElement(P,null,function(n){var r=n.headingAttributes;return t.createElement(_,a({},e,r))})};M.displayName=h.AccordionItemHeading;var D=function(e){function r(){var e,o;n(this,r);for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return i(s(o=p(this,(e=u(r)).call.apply(e,[this].concat(c)))),"renderChildren",function(e){var n=e.panelAttributes;return t.createElement("div",a({"data-accordion-component":"AccordionItemPanel"},o.props,n))}),o}return l(r,e),o(r,[{key:"render",value:function(){return t.createElement(P,null,this.renderChildren)}}]),r}(t.Component);i(D,"defaultProps",{className:"accordion__panel"}),i(D,"displayName",h.AccordionItemPanel);var T=function(e){function r(){var e,o;n(this,r);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return i(s(o=p(this,(e=u(r)).call.apply(e,[this].concat(l)))),"renderChildren",function(e){var n=e.expanded,r=e.disabled;return t.createElement(t.Fragment,null,o.props.children({expanded:n,disabled:r}))}),o}return l(r,e),o(r,[{key:"render",value:function(){return t.createElement(P,null,this.renderChildren)}}]),r}(t.Component);e.Accordion=y,e.AccordionItem=C,e.AccordionItemButton=k,e.AccordionItemHeading=M,e.AccordionItemPanel=D,e.AccordionItemState=T,e.resetNextUuid=function(){x=w},Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))},QZgN:function(e,t,n){"use strict";var r=n("0iUn"),o=n("sLSF"),i=n("MI3g"),a=n("a7VT"),l=n("Tit0"),u=n("q1tI"),c=n.n(u),d=n("YCn9"),s=c.a.createElement;u.Component},csvi:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),i=n("MI3g"),a=n("a7VT"),l=n("Tit0"),u=n("q1tI"),c=n.n(u),d=n("vYri"),s=n("9fiv"),p=(n("QYuT"),[{question:"Who are the chefs ?",answer:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."},{question:"How are the chefs selected ?",answer:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."},{question:"What is the \u2018Validated by the Jury\u2019 label ?",answer:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."},{question:"How do the reviews work ?",answer:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."},{question:"Who are the chefs ?",answer:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}]),f="Frequently Asked Questions",m="No Frequently Asked Questions Available",h=n("YCn9"),v=c.a.createElement,g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(a.a)(t).call(this,e))).state={faqs:p},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){try{var e=this.state.faqs;return v("section",{className:"faq-area ptb-60"},v("div",{className:"container"},v("div",{className:"section-title"},v("h2",null,v("span",{className:"dot"})," ",f)),v("div",{className:"faq-accordion"},v("ul",{className:"accordion"},v(s.Accordion,null,e.length>0?e.map(function(e,t){return v(s.AccordionItem,null,v(s.AccordionItemHeading,null,v(s.AccordionItemButton,null,e.question)),v(s.AccordionItemPanel,null,v("p",null,e.answer)))}):v("div",null,m))))))}catch(n){var t=n.message;Object(h.d)("renderError",t)}}}]),t}(u.Component),b=(n("QZgN"),c.a.createElement),E=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){try{return b(c.a.Fragment,null,b(d.a,null,b("section",{className:"cart-area ptb-60"},b("div",{className:"cart-totals"},b(g,null)))))}catch(t){var e=t.message;Object(h.d)("renderError",e)}}}]),t}(u.Component);n.d(t,"default",function(){return w});var y=c.a.createElement,w=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return y(E,null)}}]),t}(u.Component)},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){var e=n("csvi");return{page:e.default||e}}])}},[["l//U",1,0,2]]]);