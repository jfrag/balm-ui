!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["BalmUI_top-app-bar"]=e():t["BalmUI_top-app-bar"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="RXET")}({PE4B:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===i}(t)}(t)};var i="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function a(t,e,n){return t.concat(e).map((function(t){return o(t,n)}))}function s(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function c(t,e,n){var r={};return n.isMergeableObject(t)&&s(t).forEach((function(e){r[e]=o(t[e],n)})),s(e).forEach((function(i){n.isMergeableObject(e[i])&&t[i]?r[i]=function(t,e){if(!e.customMerge)return u;var n=e.customMerge(t);return"function"===typeof n?n:u}(i,n)(t[i],e[i],n):r[i]=o(e[i],n)})),r}function u(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r;var i=Array.isArray(e);return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):c(t,e,n):o(e,n)}u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return u(t,n,e)}),{})};var l=u;t.exports=l},RXET:function(t,e,n){"use strict";n.r(e);var r,i=n("kUbF"),o=n("PE4B"),a=n.n(o),s=/(?:^\[object\s(.*?)\]$)/,c=function(t){return Object.prototype.toString.call(t).replace(s,"$1").toLowerCase()},u=function(t){var e=t.componentProps,n=t.propName,r=t.props,i=e[n].default,o=r[n];"object"!==c(i)?e[n].default=o:e[n].default=a()(i,o)},l=function(t){var e=t.componentMixins,n=t.propName,r=t.props;if(e.length)for(var i=e.length;i--;)if(void 0!==e[i].props[n]){u({componentProps:e[i].props,propName:n,props:r});break}},d=function(t,e){Object.keys(e).forEach((function(n){t.props?void 0===t.props[n]?l({componentMixins:t.mixins,propName:n,props:e}):u({componentProps:t.props,propName:n,props:e}):l({componentMixins:t.mixins,propName:n,props:e})}))},p=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};d(t,n),e.component(t.name,t)}};return Object(i.a)(e),e},f=n("zOht"),_=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),h=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,f.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new _({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"===typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}();function v(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===r||e){var n=!1;try{t.document.addEventListener("test",(function(){}),{get passive(){return n=!0}})}catch(i){}r=n}return!!r&&{passive:!0}}function m(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var y,g={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},b={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},S={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var A=["touchstart","pointerdown","mousedown","keydown"],T=["touchend","pointerup","mouseup","contextmenu"],E=[],C=function(t){function e(n){var r=t.call(this,f.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return f.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return S},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var r=e.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,i=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(r),t.adapter_.removeClass(i),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(A.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):T.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;A.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),T.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&E.length>0&&E.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(E.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){E=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,i=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),p=d.startPoint,f=d.endPoint;u=p.x+"px, "+p.y+"px",l=f.x+"px, "+f.y+"px"}this.adapter_.updateCssVariable(r,u),this.adapter_.updateCssVariable(i,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var r,i,o=e.x,a=e.y,s=o+n.left,c=a+n.top;if("touchstart"===t.type){var u=t;r=u.changedTouches[0].pageX-s,i=u.changedTouches[0].pageY-c}else{var l=t;r=l.pageX-s,i=l.pageY-c}return{x:r,y:i}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,i=r.hasDeactivationUXRun,o=r.isActivated;(i||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(n)}),S.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=f.__assign({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,i=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},e}(_),O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return f.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var r=new e(t);return void 0!==n.isUnbounded&&(r.unbounded=n.isUnbounded),r},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var n=t.CSS,r=y;if("boolean"===typeof y&&!e)return y;if(!(n&&"function"===typeof n.supports))return!1;var i=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=!(!i&&!o)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var r=t.getComputedStyle(n),i=null!==r&&"solid"===r.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),i}(t),e||(y=r),r}(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,v())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,v())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return m(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,v())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,v())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new C(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(h),w={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},I={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},R={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},D=function(t){function e(n){return t.call(this,f.__assign({},e.defaultAdapter,n))||this}return f.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},e}(_),L=0,P=function(t){function e(e){var n=t.call(this,e)||this;return n.wasDocked_=!0,n.isDockedShowing_=!0,n.currentAppBarOffsetTop_=0,n.isCurrentlyBeingResized_=!1,n.resizeThrottleId_=L,n.resizeDebounceId_=L,n.lastScrollPosition_=n.adapter_.getViewportScrollY(),n.topAppBarHeight_=n.adapter_.getTopAppBarHeight(),n}return f.__extends(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter_.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=L,t.throttledResizeHandler_()}),I.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=L}),I.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,r=e&&n;if(r)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return r},e.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-I.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},e}(D),N=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled_=!1,e}return f.__extends(e,t),e.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(w.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(w.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},e}(P),H=function(t){function e(e){var n=t.call(this,e)||this;return n.isCollapsed_=!1,n.isAlwaysCollapsed_=!1,n}return f.__extends(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(w.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter_.hasClass(w.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},e.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},e.prototype.uncollapse_=function(){this.adapter_.removeClass(w.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},e.prototype.collapse_=function(){this.adapter_.addClass(w.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},e}(D),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return O.attachTo(t)}),this.navIcon_=this.root_.querySelector(R.NAVIGATION_ICON_SELECTOR);var e=[].slice.call(this.root_.querySelectorAll(R.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map((function(e){var n=t(e);return n.unbounded=!0,n})),this.scrollTarget_=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation_.handleNavigationClick.bind(this.foundation_),this.handleWindowResize_=this.foundation_.handleWindowResize.bind(this.foundation_),this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(w.FIXED_CLASS);this.root_.classList.contains(w.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},e.prototype.destroy=function(){this.iconRipples_.forEach((function(t){return t.destroy()})),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var e=this.root_.classList.contains(w.FIXED_CLASS);this.root_.classList.contains(w.SHORT_CLASS)||e||window.removeEventListener("resize",this.handleWindowResize_),t.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},e.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root_.classList.contains(e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setStyle:function(e,n){return t.root_.style.setProperty(e,n)},getTopAppBarHeight:function(){return t.root_.clientHeight},notifyNavigationIconClicked:function(){return t.emit(R.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var e=t.scrollTarget_,n=t.scrollTarget_;return void 0!==e.pageYOffset?e.pageYOffset:n.scrollTop},getTotalActionItems:function(){return t.root_.querySelectorAll(R.ACTION_ITEM_SELECTOR).length}};return this.root_.classList.contains(w.SHORT_CLASS)?new H(e):this.root_.classList.contains(w.FIXED_CLASS)?new N(e):new P(e)},e}(h),B={ADJUST:{DEFAULT:"mdc-top-app-bar--fixed-adjust",PROMINENT:"mdc-top-app-bar--prominent-fixed-adjust",DENSE:"mdc-top-app-bar--dense-fixed-adjust",DENSE_PROMINENT:"mdc-top-app-bar--dense-prominent-fixed-adjust",SHORT:"mdc-top-app-bar--short-fixed-adjust"},EVENT:{NAV:"nav",CLOSE:"close"},SLOT_CLASS:{icon:"material-icons",item:"mdc-top-app-bar__action-item mdc-icon-button"}};var j=function(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}({name:"ui-top-app-bar",props:{contentSelector:{type:String,required:!0},navId:String,navIcon:{type:String,default:"menu"},title:{type:String,default:""},fixed:{type:Boolean,default:!1},prominent:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},short:{type:Boolean,default:!1},alwaysClosed:{type:Boolean,default:!1}},data:function(){return{UI_TOP_APP_BAR:B,$topAppBar:null,contentElement:null}},computed:{className:function(){return{"mdc-top-app-bar":!0,"mdc-top-app-bar--fixed":this.fixed,"mdc-top-app-bar--prominent":this.prominent,"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--short":this.short,"mdc-top-app-bar--short-collapsed":this.alwaysClosed}}},watch:{fixed:function(){this.reset()},prominent:function(t){this.reset(),this.contentElement.classList.toggle(B.ADJUST.PROMINENT),this.updateDenseProminentFixedAdjust()},dense:function(t){this.reset(),this.contentElement.classList.toggle(B.ADJUST.DENSE),this.updateDenseProminentFixedAdjust()},short:function(t){this.reset(),this.contentElement.classList.toggle(B.ADJUST.SHORT)},alwaysClosed:function(){this.reset()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$nextTick((function(){t.createFixedAdjustElement(),t.$topAppBar=new x(t.$el)}))},reset:function(){this.$topAppBar.destroy(),this.init()},createFixedAdjustElement:function(){this.contentSelector&&(this.contentElement=document.querySelector(this.contentSelector),this.contentElement.classList.contains(B.ADJUST.DEFAULT)||this.contentElement.classList.add(B.ADJUST.DEFAULT),this.short?this.contentElement.classList.add(B.ADJUST.SHORT):(this.prominent&&this.contentElement.classList.add(B.ADJUST.PROMINENT),this.dense&&this.contentElement.classList.add(B.ADJUST.DENSE),this.dense&&this.prominent&&this.contentElement.classList.add(B.ADJUST.DENSE_PROMINENT)))},updateDenseProminentFixedAdjust:function(){this.dense&&this.prominent?this.contentElement.classList.add(B.ADJUST.DENSE_PROMINENT):this.contentElement.classList.remove(B.ADJUST.DENSE_PROMINENT)},handleClick:function(){this.$emit(this.navIcon===B.EVENT.CLOSE?B.EVENT.CLOSE:B.EVENT.NAV)}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:t.className},[n("div",{staticClass:"mdc-top-app-bar__row"},[n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[n("button",{class:[t.UI_TOP_APP_BAR.SLOT_CLASS.icon,"mdc-top-app-bar__navigation-icon","mdc-icon-button"],attrs:{id:t.navIcon===t.UI_TOP_APP_BAR.EVENT.CLOSE?null:t.navId},on:{click:t.handleClick}},[t._t("nav-icon",[t._v(t._s(t.navIcon))])],2),t._v(" "),n("span",{staticClass:"mdc-top-app-bar__title"},[t._t("default",[t._v(t._s(t.title))])],2)]),t._v(" "),n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[t._t("toolbar",null,{iconClass:t.UI_TOP_APP_BAR.SLOT_CLASS.icon,itemClass:t.UI_TOP_APP_BAR.SLOT_CLASS.item})],2)])])}),[],!1,null,null,null).exports;e.default=p(j)},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},zOht:function(t,e,n){(function(n){var r,i,o,a,s,c,u,l,d,p,f,_,h,v,m,y,g,b,S,A,T;!function(E){var C="object"===typeof n?n:"object"===typeof self?self:"object"===typeof this?this:{};function O(t,e){return t!==C&&("function"===typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(n,r){return t[n]=e?e(n,r):r}}void 0===(r=function(t){!function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};i=function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},s=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=function(t,e){return function(n,r){e(n,r,t)}},u=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n((function(e){e(t.value)})).then(a,s)}c((r=r.apply(t,e||[])).next())}))},d=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},p=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},f=function(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},_=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},h=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t},v=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r},m=function(t){return this instanceof m?(this.v=t,this):new m(t)},y=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){i[t]&&(r[t]=function(e){return new Promise((function(n,r){o.push([t,e,n,r])>1||s(t,e)}))})}function s(t,e){try{(n=i[t](e)).value instanceof m?Promise.resolve(n.value.v).then(c,u):l(o[0][2],n)}catch(r){l(o[0][3],r)}var n}function c(t){s("next",t)}function u(t){s("throw",t)}function l(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}},g=function(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:m(t[r](e)),done:"return"===r}:i?i(e):e}:i}},b=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=f(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,i){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,i,(e=t[n](e)).done,e.value)}))}}},S=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},A=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},T=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",i),t("__assign",o),t("__rest",a),t("__decorate",s),t("__param",c),t("__metadata",u),t("__awaiter",l),t("__generator",d),t("__exportStar",p),t("__values",f),t("__read",_),t("__spread",h),t("__spreadArrays",v),t("__await",m),t("__asyncGenerator",y),t("__asyncDelegator",g),t("__asyncValues",b),t("__makeTemplateObject",S),t("__importStar",A),t("__importDefault",T)}(O(C,O(t)))}.apply(e,[e]))||(t.exports=r)}()}).call(this,n("yLpj"))}})}));