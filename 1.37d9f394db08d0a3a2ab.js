(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{GU7r:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var s=n("8LU1"),i=n("fXoL"),o=n("HDdC"),r=n("XNiG"),c=n("Kj3r");let a=(()=>{class e{create(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(i.Kb)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){const t=Object(s.e)(e);return new o.a(e=>{const n=this._observeElement(t).subscribe(e);return()=>{n.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const t=new r.a,n=this._mutationObserverFactory.create(e=>t.next(e));n&&n.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:n,stream:t,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:t,stream:n}=this._observedElements.get(e);t&&t.disconnect(),n.complete(),this._observedElements.delete(e)}}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(a))},e.\u0275prov=Object(i.Kb)({factory:function(){return new e(Object(i.Yb)(a))},token:e,providedIn:"root"}),e})(),h=(()=>{class e{constructor(e,t,n){this._contentObserver=e,this._elementRef=t,this._ngZone=n,this.event=new i.n,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(s.c)(e),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=Object(s.f)(e),this._subscribe()}ngAfterContentInit(){this._currentSubscription||this.disabled||this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(Object(c.a)(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription&&this._currentSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(u),i.Ob(i.l),i.Ob(i.z))},e.\u0275dir=i.Jb({type:e,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]}),e})(),d=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},providers:[a]}),e})()},bE2y:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v}));var s=n("fXoL"),i=n("207e"),o=n("3Pt+"),r=n("/KA4"),c=n("jtHE"),a=n("XNiG"),u=n("1G5W"),h=n("ofXK"),d=n("u47x");const l=["*"],b=["inputElement"],_=["nz-radio",""];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=s.Jb({type:e,selectors:[["","nz-radio-button",""]]}),e})(),m=(()=>{class e{constructor(){this.selected$=new c.a(1),this.touched$=new a.a,this.disabled$=new c.a(1),this.name$=new c.a(1)}touch(){this.touched$.next()}select(e){this.selected$.next(e)}setDisabled(e){this.disabled$.next(e)}setName(e){this.name$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Kb({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e{constructor(e,t){this.cdr=e,this.nzRadioService=t,this.value=null,this.destroy$=new a.a,this.onChange=()=>{},this.onTouched=()=>{},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null}ngOnInit(){this.nzRadioService.selected$.subscribe(e=>{this.value!==e&&(this.value=e,this.onChange(this.value))}),this.nzRadioService.touched$.subscribe(()=>{Promise.resolve().then(()=>this.onTouched())})}ngOnChanges(e){const{nzDisabled:t,nzName:n}=e;t&&this.nzRadioService.setDisabled(this.nzDisabled),n&&this.nzRadioService.setName(this.nzName)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.value=e,this.nzRadioService.select(e),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=e,this.nzRadioService.setDisabled(e),this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.h),s.Ob(m))},e.\u0275cmp=s.Ib({type:e,selectors:[["nz-radio-group"]],hostVars:8,hostBindings:function(e,t){2&e&&s.Gb("ant-radio-group",!0)("ant-radio-group-large","large"===t.nzSize)("ant-radio-group-small","small"===t.nzSize)("ant-radio-group-solid","solid"===t.nzButtonStyle)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],features:[s.zb([m,{provide:o.i,useExisting:Object(s.U)(()=>e),multi:!0}]),s.yb],ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(s.mc(),s.lc(0))},encapsulation:2,changeDetection:0}),Object(i.a)([Object(r.a)(),Object(i.b)("design:type",Object)],e.prototype,"nzDisabled",void 0),e})(),p=(()=>{class e{constructor(e,t,n,s,i){this.elementRef=e,this.cdr=t,this.focusMonitor=n,this.nzRadioService=s,this.nzRadioButtonDirective=i,this.isNgModel=!1,this.destroy$=new a.a,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=()=>{},this.onTouched=()=>{},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1}onHostClick(e){e.stopPropagation(),e.preventDefault(),this.nzDisabled||this.isChecked||(this.nzRadioService&&this.nzRadioService.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)))}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.isNgModel=!0,this.onChange=e}registerOnTouched(e){this.onTouched=e}ngOnInit(){this.nzRadioService&&(this.nzRadioService.name$.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.name=e,this.cdr.markForCheck()}),this.nzRadioService.disabled$.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.nzDisabled=e,this.cdr.markForCheck()}),this.nzRadioService.selected$.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.isChecked=this.nzValue===e,this.cdr.markForCheck()})),this.focusMonitor.monitor(this.elementRef,!0).subscribe(e=>{e||(Promise.resolve().then(()=>this.onTouched()),this.nzRadioService&&this.nzRadioService.touch())})}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}}return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.l),s.Ob(s.h),s.Ob(d.c),s.Ob(m,8),s.Ob(f,8))},e.\u0275cmp=s.Ib({type:e,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(e,t){var n;1&e&&s.Lc(b,!0),2&e&&s.uc(n=s.dc())&&(t.inputElement=n.first)},hostVars:12,hostBindings:function(e,t){1&e&&s.cc("click",(function(e){return t.onHostClick(e)})),2&e&&s.Gb("ant-radio-wrapper",!t.isRadioButton)("ant-radio-button-wrapper",t.isRadioButton)("ant-radio-wrapper-checked",t.isChecked&&!t.isRadioButton)("ant-radio-button-wrapper-checked",t.isChecked&&t.isRadioButton)("ant-radio-wrapper-disabled",t.nzDisabled&&!t.isRadioButton)("ant-radio-button-wrapper-disabled",t.nzDisabled&&t.isRadioButton)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],features:[s.zb([{provide:o.i,useExisting:Object(s.U)(()=>e),multi:!0}])],attrs:_,ngContentSelectors:l,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(e,t){1&e&&(s.mc(),s.Ub(0,"span"),s.Pb(1,"input",0,1),s.Pb(3,"span"),s.Tb(),s.Ub(4,"span"),s.lc(5),s.Tb()),2&e&&(s.Gb("ant-radio",!t.isRadioButton)("ant-radio-checked",t.isChecked&&!t.isRadioButton)("ant-radio-disabled",t.nzDisabled&&!t.isRadioButton)("ant-radio-button",t.isRadioButton)("ant-radio-button-checked",t.isChecked&&t.isRadioButton)("ant-radio-button-disabled",t.nzDisabled&&t.isRadioButton),s.Ab(1),s.Gb("ant-radio-input",!t.isRadioButton)("ant-radio-button-input",t.isRadioButton),s.nc("disabled",t.nzDisabled)("checked",t.isChecked),s.Bb("autofocus",t.nzAutoFocus?"autofocus":null)("name",t.name),s.Ab(2),s.Gb("ant-radio-inner",!t.isRadioButton)("ant-radio-button-inner",t.isRadioButton))},encapsulation:2,changeDetection:0}),Object(i.a)([Object(r.a)(),Object(i.b)("design:type",Object)],e.prototype,"nzDisabled",void 0),Object(i.a)([Object(r.a)(),Object(i.b)("design:type",Object)],e.prototype,"nzAutoFocus",void 0),e})(),v=(()=>{class e{}return e.\u0275mod=s.Mb({type:e}),e.\u0275inj=s.Lb({factory:function(t){return new(t||e)},imports:[[h.c,o.h]]}),e})()},u47x:function(e,t,n){"use strict";n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return T}));var s=n("ofXK"),i=n("fXoL"),o=n("XNiG"),r=(n("quSY"),n("LRne")),c=(n("FtGj"),n("vkgz"),n("Kj3r"),n("pLZG"),n("lJxs"),n("IzEk")),a=n("8LU1"),u=n("nLfN"),h=n("GU7r");let d=(()=>{class e{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function(e){return!!(e.offsetWidth||e.offsetHeight||"function"==typeof e.getClientRects&&e.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const t=function(e){try{return e.frameElement}catch(t){return null}}((n=e).ownerDocument&&n.ownerDocument.defaultView||window);var n;if(t){const e=t&&t.nodeName.toLowerCase();if(-1===b(t))return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&"object"===e)return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&!this.isVisible(t))return!1}let s=e.nodeName.toLowerCase(),i=b(e);if(e.hasAttribute("contenteditable"))return-1!==i;if("iframe"===s)return!1;if("audio"===s){if(!e.hasAttribute("controls"))return!1;if(this._platform.BLINK)return!0}if("video"===s){if(!e.hasAttribute("controls")&&this._platform.TRIDENT)return!1;if(this._platform.BLINK||this._platform.FIREFOX)return!0}return("object"!==s||!this._platform.BLINK&&!this._platform.WEBKIT)&&!(this._platform.WEBKIT&&this._platform.IOS&&!function(e){let t=e.nodeName.toLowerCase(),n="input"===t&&e.type;return"text"===n||"password"===n||"select"===t||"textarea"===t}(e))&&e.tabIndex>=0}isFocusable(e){return function(e){return!function(e){return function(e){return"input"==e.nodeName.toLowerCase()}(e)&&"hidden"==e.type}(e)&&(function(e){let t=e.nodeName.toLowerCase();return"input"===t||"select"===t||"button"===t||"textarea"===t}(e)||function(e){return function(e){return"a"==e.nodeName.toLowerCase()}(e)&&e.hasAttribute("href")}(e)||e.hasAttribute("contenteditable")||l(e))}(e)&&!this.isDisabled(e)&&this.isVisible(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(u.a))},e.\u0275prov=Object(i.Kb)({factory:function(){return new e(Object(i.Yb)(u.a))},token:e,providedIn:"root"}),e})();function l(e){if(!e.hasAttribute("tabindex")||void 0===e.tabIndex)return!1;let t=e.getAttribute("tabindex");return"-32768"!=t&&!(!t||isNaN(parseInt(t,10)))}function b(e){if(!l(e))return null;const t=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}class _ extends class{constructor(e,t,n,s,i=!1){this._element=e,this._checker=t,this._ngZone=n,this._document=s,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,i||this.attachAnchors()}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}destroy(){const e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.parentNode&&e.parentNode.removeChild(e)),t&&(t.removeEventListener("focus",this.endAnchorListener),t.parentNode&&t.parentNode.removeChild(t)),this._startAnchor=this._endAnchor=null}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement()))})}focusFirstTabbableElementWhenReady(){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement()))})}focusLastTabbableElementWhenReady(){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement()))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);for(let n=0;n<t.length;n++)t[n].hasAttribute("cdk-focus-"+e)?console.warn(`Found use of deprecated attribute 'cdk-focus-${e}', use 'cdkFocusRegion${e}' instead. The deprecated attribute will be removed in 8.0.0.`,t[n]):t[n].hasAttribute("cdk-focus-region-"+e)&&console.warn(`Found use of deprecated attribute 'cdk-focus-region-${e}', use 'cdkFocusRegion${e}' instead. The deprecated attribute will be removed in 8.0.0.`,t[n]);return"start"==e?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");return e?(e.hasAttribute("cdk-focus-initial")&&console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",e),Object(i.W)()&&!this._checker.isFocusable(e)&&console.warn("Element matching '[cdkFocusInitial]' is not focusable.",e),e.focus(),!0):this.focusFirstTabbableElement()}focusFirstTabbableElement(){const e=this._getRegionBoundary("start");return e&&e.focus(),!!e}focusLastTabbableElement(){const e=this._getRegionBoundary("end");return e&&e.focus(),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children||e.childNodes;for(let n=0;n<t.length;n++){let e=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(e)return e}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children||e.childNodes;for(let n=t.length-1;n>=0;n--){let e=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(e)return e}return null}_createAnchor(){const e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.asObservable().pipe(Object(c.a)(1)).subscribe(e)}}{constructor(e,t,n,s,i,o,r){super(e,t,n,s,r.defer),this._focusTrapManager=i,this._inertStrategy=o,this._focusTrapManager.register(this)}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}}const f="undefined"!=typeof Element&&!!Element.prototype.closest;function m(e,t){return e.matches?e.matches(t):e.msMatchesSelector(t)}class g{constructor(){this._listener=null}preventFocus(e){this._listener&&e._document.removeEventListener("focus",this._listener,!0),this._listener=t=>this._trapFocus(e,t),e._ngZone.runOutsideAngular(()=>{e._document.addEventListener("focus",this._listener,!0)})}allowFocus(e){this._listener&&(e._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(e,t){const n=t.target,s=e._element;s.contains(n)||null!==function(e,t){if(!(e instanceof Node))return null;let n=e;for(;null!=n&&!(n instanceof Element);)n=n.parentNode;return n&&(f?n.closest("div.cdk-overlay-pane"):function(e,t){let n=e;for(;null!=n&&!(n instanceof Element&&m(n,"div.cdk-overlay-pane"));)n=n.parentNode;return n||null}(n))}(n)||setTimeout(()=>{e.enabled&&!s.contains(e._document.activeElement)&&e.focusFirstTabbableElement()})}}class p{constructor(){this.defer=!1}}const v=new i.q("FOCUS_TRAP_INERT_STRATEGY");let w=(()=>{class e{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(t=>t!==e);let t=this._focusTrapStack;t.length&&t[t.length-1]._disable(),t.push(e),e._enable()}deregister(e){e._disable();const t=this._focusTrapStack,n=t.indexOf(e);-1!==n&&(t.splice(n,1),t.length&&t[t.length-1]._enable())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(i.Kb)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),O=(()=>{class e{constructor(e,t,n,s,i){this._checker=e,this._ngZone=t,this._focusTrapManager=n,this._document=s,this._inertStrategy=i||new g}create(e,t=new p){let n;return"boolean"==typeof t?(n=new p,n.defer=t):n=t,new _(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(d),i.Yb(i.z),i.Yb(w),i.Yb(s.d),i.Yb(v,8))},e.\u0275prov=Object(i.Kb)({factory:function(){return new e(Object(i.Yb)(d),Object(i.Yb)(i.z),Object(i.Yb)(w),Object(i.Yb)(s.d),Object(i.Yb)(v,8))},token:e,providedIn:"root"}),e})();const k=new i.q("cdk-focus-monitor-default-options"),y=Object(u.e)({passive:!0,capture:!0});let T=(()=>{class e{constructor(e,t,n,s){this._ngZone=e,this._platform=t,this._origin=null,this._windowFocused=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._documentKeydownListener=()=>{this._lastTouchTarget=null,this._setOriginForCurrentEventQueue("keyboard")},this._documentMousedownListener=e=>{if(!this._lastTouchTarget){const t=function(e){return 0===e.buttons}(e)?"keyboard":"mouse";this._setOriginForCurrentEventQueue(t)}},this._documentTouchstartListener=e=>{null!=this._touchTimeoutId&&clearTimeout(this._touchTimeoutId),this._lastTouchTarget=E(e),this._touchTimeoutId=setTimeout(()=>this._lastTouchTarget=null,650)},this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)},this._rootNodeFocusAndBlurListener=e=>{const t=E(e),n="focus"===e.type?this._onFocus:this._onBlur;for(let s=t;s;s=s.parentElement)n.call(this,e,s)},this._document=n,this._detectionMode=(null==s?void 0:s.detectionMode)||0}monitor(e,t=!1){if(!this._platform.isBrowser)return Object(r.a)(null);const n=Object(a.e)(e),s=Object(u.c)(n)||this._getDocument(),i=this._elementInfo.get(n);if(i)return t&&(i.checkChildren=!0),i.subject.asObservable();const c={checkChildren:t,subject:new o.a,rootNode:s};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject.asObservable()}stopMonitoring(e){const t=Object(a.e)(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){const s=Object(a.e)(e);this._setOriginForCurrentEventQueue(t),"function"==typeof s.focus&&s.focus(n)}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_toggleClass(e,t,n){n?e.classList.add(t):e.classList.remove(t)}_getFocusOrigin(e){return this._origin?this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:this._wasCausedByTouch(e)?"touch":"program"}_setClasses(e,t){this._toggleClass(e,"cdk-focused",!!t),this._toggleClass(e,"cdk-touch-focused","touch"===t),this._toggleClass(e,"cdk-keyboard-focused","keyboard"===t),this._toggleClass(e,"cdk-mouse-focused","mouse"===t),this._toggleClass(e,"cdk-program-focused","program"===t)}_setOriginForCurrentEventQueue(e){this._ngZone.runOutsideAngular(()=>{this._origin=e,0===this._detectionMode&&(this._originTimeoutId=setTimeout(()=>this._origin=null,1))})}_wasCausedByTouch(e){const t=E(e);return this._lastTouchTarget instanceof Node&&t instanceof Node&&(t===this._lastTouchTarget||t.contains(this._lastTouchTarget))}_onFocus(e,t){const n=this._elementInfo.get(t);if(!n||!n.checkChildren&&t!==E(e))return;const s=this._getFocusOrigin(e);this._setClasses(t,s),this._emitOrigin(n.subject,s),this._lastFocusOrigin=s}_onBlur(e,t){const n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n.subject,null))}_emitOrigin(e,t){this._ngZone.run(()=>e.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,y),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,y)}),this._rootNodeFocusListenerCount.set(t,n+1),1==++this._monitoredElementCount&&this._ngZone.runOutsideAngular(()=>{const e=this._getDocument(),t=this._getWindow();e.addEventListener("keydown",this._documentKeydownListener,y),e.addEventListener("mousedown",this._documentMousedownListener,y),e.addEventListener("touchstart",this._documentTouchstartListener,y),t.addEventListener("focus",this._windowFocusListener)})}_removeGlobalListeners(e){const t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){const e=this._rootNodeFocusListenerCount.get(t);e>1?this._rootNodeFocusListenerCount.set(t,e-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,y),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,y),this._rootNodeFocusListenerCount.delete(t))}if(!--this._monitoredElementCount){const e=this._getDocument(),t=this._getWindow();e.removeEventListener("keydown",this._documentKeydownListener,y),e.removeEventListener("mousedown",this._documentMousedownListener,y),e.removeEventListener("touchstart",this._documentTouchstartListener,y),t.removeEventListener("focus",this._windowFocusListener),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._touchTimeoutId),clearTimeout(this._originTimeoutId)}}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(i.z),i.Yb(u.a),i.Yb(s.d,8),i.Yb(k,8))},e.\u0275prov=Object(i.Kb)({factory:function(){return new e(Object(i.Yb)(i.z),Object(i.Yb)(u.a),Object(i.Yb)(s.d,8),Object(i.Yb)(k,8))},token:e,providedIn:"root"}),e})();function E(e){return e.composedPath?e.composedPath()[0]:e.target}let C=(()=>{class e{constructor(e,t){this._platform=e,this._document=t}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,s=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(e),s){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove("cdk-high-contrast-active"),e.remove("cdk-high-contrast-black-on-white"),e.remove("cdk-high-contrast-white-on-black");const t=this.getHighContrastMode();1===t?(e.add("cdk-high-contrast-active"),e.add("cdk-high-contrast-black-on-white")):2===t&&(e.add("cdk-high-contrast-active"),e.add("cdk-high-contrast-white-on-black"))}}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(u.a),i.Yb(s.d))},e.\u0275prov=Object(i.Kb)({factory:function(){return new e(Object(i.Yb)(u.a),Object(i.Yb)(s.d))},token:e,providedIn:"root"}),e})(),L=(()=>{class e{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)(i.Yb(C))},imports:[[u.b,h.c]]}),e})()}}]);