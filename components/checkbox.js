!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI_checkbox=e():t.BalmUI_checkbox=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="Xi/Z")}({PE4B:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===i}(t)}(t)};var i="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function a(t,e,n){return t.concat(e).map((function(t){return o(t,n)}))}function c(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function s(t,e,n){var r={};return n.isMergeableObject(t)&&c(t).forEach((function(e){r[e]=o(t[e],n)})),c(e).forEach((function(i){n.isMergeableObject(e[i])&&t[i]?r[i]=function(t,e){if(!e.customMerge)return u;var n=e.customMerge(t);return"function"===typeof n?n:u}(i,n)(t[i],e[i],n):r[i]=o(e[i],n)})),r}function u(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r;var i=Array.isArray(e);return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):s(t,e,n):o(e,n)}u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return u(t,n,e)}),{})};var d=u;t.exports=d},"Xi/Z":function(t,e,n){"use strict";n.r(e);var r=n("kUbF"),i=n("PE4B"),o=n.n(i),a=/(?:^\[object\s(.*?)\]$)/,c=function(t){return Object.prototype.toString.call(t).replace(a,"$1").toLowerCase()},s=function(t){var e=t.componentProps,n=t.propName,r=t.props,i=e[n].default,a=r[n];"object"!==c(i)?e[n].default=a:e[n].default=o()(i,a)},u=function(t){var e=t.componentMixins,n=t.propName,r=t.props;if(e.length)for(var i=e.length;i--;)if(void 0!==e[i].props[n]){s({componentProps:e[i].props,propName:n,props:r});break}},d=function(t,e){Object.keys(e).forEach((function(n){t.props?void 0===t.props[n]?u({componentMixins:t.mixins,propName:n,props:e}):s({componentProps:t.props,propName:n,props:e}):u({componentMixins:t.mixins,propName:n,props:e})}))},l=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};d(t,n),e.component(t.name,t)}};return Object(r.a)(e),e},f=n("zOht"),p={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function _(t){return Boolean(t.document)&&"function"===typeof t.document.createElement}function h(t,e){if(_(t)&&e in p){var n=t.document.createElement("div"),r=p[e],i=r.standard,o=r.prefixed;return r.cssProperty in n.style?i:o}return e}var m,v=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),y=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,f.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new v({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"===typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}();function b(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===m||e){var n=!1;try{t.document.addEventListener("test",(function(){}),{get passive(){return n=!0}})}catch(r){}m=n}return!!m&&{passive:!0}}function E(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var C,A={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},g={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},T={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var I=["touchstart","pointerdown","mousedown","keydown"],S=["touchend","pointerup","mouseup","contextmenu"],O=[],N=function(t){function e(n){var r=t.call(this,f.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return f.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var r=e.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,i=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(r),t.adapter_.removeClass(i),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(I.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):S.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;I.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),S.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&O.length>0&&O.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(O.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){O=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,i=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,c=o.FG_ACTIVATION,s=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",d="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),f=l.startPoint,p=l.endPoint;u=f.x+"px, "+f.y+"px",d=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(r,u),this.adapter_.updateCssVariable(i,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(c),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),s)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var r,i,o=e.x,a=e.y,c=o+n.left,s=a+n.top;if("touchstart"===t.type){var u=t;r=u.changedTouches[0].pageX-c,i=u.changedTouches[0].pageY-s}else{var d=t;r=d.pageX-c,i=d.pageY-s}return{x:r,y:i}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,i=r.hasDeactivationUXRun,o=r.isActivated;(i||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(n)}),T.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=f.__assign({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,i=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},e}(v),D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return f.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var r=new e(t);return void 0!==n.isUnbounded&&(r.unbounded=n.isUnbounded),r},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var n=t.CSS,r=C;if("boolean"===typeof C&&!e)return C;if(!(n&&"function"===typeof n.supports))return!1;var i=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=!(!i&&!o)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var r=t.getComputedStyle(n),i=null!==r&&"solid"===r.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),i}(t),e||(C=r),r}(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,b())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,b())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return E(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,b())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,b())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new N(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(y),k={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},w={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},R={ANIM_END_LATCH_MS:250},x=function(t){function e(n){var r=t.call(this,f.__assign({},e.defaultAdapter,n))||this;return r.currentCheckState_=w.TRANSITION_STATE_INIT,r.currentAnimationClass_="",r.animEndLatchTimer_=0,r.enableAnimationEndHandler_=!1,r}return f.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(k.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(k.DISABLED):this.adapter_.removeClass(k.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){t.adapter_.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1}),R.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();if(t!==e){this.updateAriaChecked_();var n=w.TRANSITION_STATE_UNCHECKED,r=k.SELECTED;e===n?this.adapter_.removeClass(r):this.adapter_.addClass(r),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},e.prototype.determineCheckState_=function(){var t=w.TRANSITION_STATE_INDETERMINATE,e=w.TRANSITION_STATE_CHECKED,n=w.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?t:this.adapter_.isChecked()?e:n},e.prototype.getTransitionAnimationClass_=function(t,n){var r=w.TRANSITION_STATE_INIT,i=w.TRANSITION_STATE_CHECKED,o=w.TRANSITION_STATE_UNCHECKED,a=e.cssClasses,c=a.ANIM_UNCHECKED_CHECKED,s=a.ANIM_UNCHECKED_INDETERMINATE,u=a.ANIM_CHECKED_UNCHECKED,d=a.ANIM_CHECKED_INDETERMINATE,l=a.ANIM_INDETERMINATE_CHECKED,f=a.ANIM_INDETERMINATE_UNCHECKED;switch(t){case r:return n===o?"":n===i?l:f;case o:return n===i?c:s;case i:return n===o?u:d;default:return n===i?l:f}},e.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(w.ARIA_CHECKED_ATTR,w.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(w.ARIA_CHECKED_ATTR)},e}(v),H=["checked","indeterminate"],P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return f.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(t){this.nativeControl_.indeterminate=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange_=function(){return t.foundation_.handleChange()},this.handleAnimationEnd_=function(){return t.foundation_.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen(h(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},e.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten(h(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new x({addClass:function(e){return t.root_.classList.add(e)},forceLayout:function(){return t.root_.offsetWidth},hasNativeControl:function(){return!!t.nativeControl_},isAttachedToDOM:function(){return Boolean(t.root_.parentNode)},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(e){return t.root_.classList.remove(e)},removeNativeControlAttr:function(e){return t.nativeControl_.removeAttribute(e)},setNativeControlAttr:function(e,n){return t.nativeControl_.setAttribute(e,n)},setNativeControlDisabled:function(e){return t.nativeControl_.disabled=e}})},e.prototype.createRipple_=function(){var t=this,e=f.__assign({},D.createAdapter(this),{deregisterInteractionHandler:function(e,n){return t.nativeControl_.removeEventListener(e,n,b())},isSurfaceActive:function(){return E(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,n){return t.nativeControl_.addEventListener(e,n,b())}});return new D(this.root_,new N(e))},e.prototype.installPropertyChangeHooks_=function(){var t=this,e=this.nativeControl_,n=Object.getPrototypeOf(e);H.forEach((function(r){var i=Object.getOwnPropertyDescriptor(n,r);if(M(i)){var o=i.get,a={configurable:i.configurable,enumerable:i.enumerable,get:o,set:function(n){i.set.call(e,n),t.foundation_.handleChange()}};Object.defineProperty(e,r,a)}}))},e.prototype.uninstallPropertyChangeHooks_=function(){var t=this.nativeControl_,e=Object.getPrototypeOf(t);H.forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);M(r)&&Object.defineProperty(t,n,r)}))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var t=x.strings.NATIVE_CONTROL_SELECTOR,e=this.root_.querySelector(t);if(!e)throw new Error("Checkbox component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),e}(y);function M(t){return!!t&&"function"===typeof t.set}var j={props:{attrs:Object}},V={CHANGE:"change"};var L=function(t,e,n,r,i,o,a,c){var s,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var d=u.render;u.render=function(t,e){return s.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:u}}({name:"ui-checkbox",mixins:[j],model:{prop:"model",event:V.CHANGE},props:{model:{type:[Boolean,Array],default:!1},indeterminate:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:String,name:String,value:[String,Number],cssOnly:{type:Boolean,default:!1}},data:function(){return{$checkbox:null,checkedValue:this.model}},computed:{className:function(){return{"mdc-checkbox":!0,"mdc-checkbox--disabled":this.disabled}}},watch:{model:function(t){this.checkedValue=t},indeterminate:function(t){this.$checkbox.indeterminate=t===this.$checkbox.indeterminate?!t:t}},mounted:function(){var t=this;this.cssOnly||(this.$checkbox=new P(this.$el),this.$checkbox.indeterminate=this.indeterminate,this.$nextTick((function(){t.$parent.$formField&&(t.$parent.$formField.input=t.$checkbox)})))},methods:{handleChange:function(t){var e="array"===c(this.checkedValue)?Object.assign([],this.checkedValue):this.checkedValue;this.$emit(V.CHANGE,e)}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.checkedValue,expression:"checkedValue"}],staticClass:"mdc-checkbox__native-control",attrs:{id:t.id,type:"checkbox",name:t.name,disabled:t.disabled},domProps:{value:t.value,checked:Array.isArray(t.checkedValue)?t._i(t.checkedValue,t.value)>-1:t.checkedValue},on:{change:[function(e){var n=t.checkedValue,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t.value,a=t._i(n,o);r.checked?a<0&&(t.checkedValue=n.concat([o])):a>-1&&(t.checkedValue=n.slice(0,a).concat(n.slice(a+1)))}else t.checkedValue=i},t.handleChange]}},"input",t.attrs,!1)),t._v(" "),n("div",{staticClass:"mdc-checkbox__background"},[n("svg",{staticClass:"mdc-checkbox__checkmark",attrs:{viewBox:"0 0 24 24"}},[n("path",{staticClass:"mdc-checkbox__checkmark-path",attrs:{fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}})]),t._v(" "),n("div",{staticClass:"mdc-checkbox__mixedmark"})])])}),[],!1,null,null,null).exports;e.default=l(L)},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},zOht:function(t,e,n){(function(n){var r,i,o,a,c,s,u,d,l,f,p,_,h,m,v,y,b,E,C,A,g;!function(T){var I="object"===typeof n?n:"object"===typeof self?self:"object"===typeof this?this:{};function S(t,e){return t!==I&&("function"===typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(n,r){return t[n]=e?e(n,r):r}}void 0===(r=function(t){!function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};i=function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},c=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},s=function(t,e){return function(n,r){e(n,r,t)}},u=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function c(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){t.done?i(t.value):new n((function(e){e(t.value)})).then(a,c)}s((r=r.apply(t,e||[])).next())}))},l=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},f=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},p=function(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},_=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},h=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t},m=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r},v=function(t){return this instanceof v?(this.v=t,this):new v(t)},y=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){i[t]&&(r[t]=function(e){return new Promise((function(n,r){o.push([t,e,n,r])>1||c(t,e)}))})}function c(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(s,u):d(o[0][2],n)}catch(r){d(o[0][3],r)}var n}function s(t){c("next",t)}function u(t){c("throw",t)}function d(t,e){t(e),o.shift(),o.length&&c(o[0][0],o[0][1])}},b=function(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}},E=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,i){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,i,(e=t[n](e)).done,e.value)}))}}},C=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},A=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},g=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",i),t("__assign",o),t("__rest",a),t("__decorate",c),t("__param",s),t("__metadata",u),t("__awaiter",d),t("__generator",l),t("__exportStar",f),t("__values",p),t("__read",_),t("__spread",h),t("__spreadArrays",m),t("__await",v),t("__asyncGenerator",y),t("__asyncDelegator",b),t("__asyncValues",E),t("__makeTemplateObject",C),t("__importStar",A),t("__importDefault",g)}(S(I,S(t)))}.apply(e,[e]))||(t.exports=r)}()}).call(this,n("yLpj"))}})}));