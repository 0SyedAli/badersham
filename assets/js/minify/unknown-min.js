!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function t(e){return e}function r(){return"undefined"!=typeof window}function n(){return B||r()&&(B=window.gsap)&&B.registerPlugin&&B}function o(e){return!!~H.indexOf(e)}function i(e,t){return~ce.indexOf(e)&&ce[ce.indexOf(e)+1][t]}function s(e,t){var r=t.s,n=t.sc,s=ue.indexOf(e),a=n===Le.sc?1:2;return~s||(s=ue.push(e)-1),ue[s+a]||(ue[s+a]=i(e,r)||(o(e)?n:function(t){return arguments.length?e[r]=t:e[r]}))}function a(e){return i(e,"getBoundingClientRect")||(o(e)?function(){return rt.width=N.innerWidth,rt.height=N.innerHeight,rt}:function(){return Re(e)})}function l(e,t){var r=t.s,n=t.d2,s=t.d,l=t.a;return(r="scroll"+n)&&(l=i(e,r))?l()-a(e)()[s]:o(e)?Math.max(W[r],D[r])-(N["inner"+n]||W["client"+n]||D["client"+n]):e[r]-e["offset"+n]}function c(e,t){for(var r=0;r<te.length;r+=3)t&&!~t.indexOf(te[r+1])||e(te[r],te[r+1],te[r+2])}function u(e){return"string"==typeof e}function f(e){return"function"==typeof e}function d(e){return"number"==typeof e}function p(e){return"object"==typeof e}function h(e){return f(e)&&e()}function g(e,t){return function(){var r=h(e),n=h(t);return function(){h(r),h(n)}}}function v(e){return N.getComputedStyle(e)}function m(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function x(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function y(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function b(e,t,r,n){return r.split(",").forEach(function(r){return e(t,r,n)})}function w(e,t,r){return e.addEventListener(t,r,{passive:!0})}function k(e,t,r){return e.removeEventListener(t,r)}function C(e,t){if(u(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in Ne?Ne[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function O(e,t,r,n,s,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,h=F.createElement("div"),g=o(r)||"fixed"===i(r,"pinType"),v=-1!==e.indexOf("scroller"),m=g?D:r,x=-1!==e.indexOf("start"),y=x?c:u,b="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(v&&g?"fixed;":"absolute;"),!v&&g||(b+=(n===Le?ye:be)+":"+(a+parseFloat(d))+"px;"),l&&(b+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),h._isStart=x,h.setAttribute("class","gsap-marker-"+e),h.style.cssText=b,h.innerText=t||0===t?e+"-"+t:e,m.children[0]?m.insertBefore(h,m.children[0]):m.appendChild(h),h._offset=h["offset"+n.op.d2],Fe(h,0,n,x),h}function T(){return X=X||j(Je)}function M(){X||(X=j(Je),pe||Xe("scrollStart"),pe=fe())}function S(){return!$&&!oe&&!F.fullscreenElement&&q.restart(!0)}function E(e){var t,r=B.ticker.frame,n=[],o=0;if(ae!==r||le){for(Ue();o<je.length;o+=4)(t=N.matchMedia(je[o]).matches)!==je[o+3]&&((je[o+3]=t)?n.push(o):Ue(1,je[o])||f(je[o+2])&&je[o+2]());for(Ve(),o=0;o<n.length;o++)t=n[o],se=je[t],je[t+2]=je[t+1](e);se=0,I&&Ze(0,1),ae=r,Xe("matchMedia")}}function P(){return k(ot,"scrollEnd",P)||Ze(!0)}function _(e,t,r,n){if(e.parentNode!==t){for(var o,i=Ke.length,s=t.style,a=e.style;i--;)s[o=Ke[i]]=r[o];s.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(s.display="inline-block"),a[be]=a[ye]="auto",s.overflow="visible",s.boxSizing="border-box",s[we]=x(e,Ae)+ze,s[ke]=x(e,Le)+ze,s[Se]=a[Ee]=a.top=a[xe]="0",tt(n),a[we]=a.maxWidth=r[we],a[ke]=a.maxHeight=r[ke],a[Se]=r[Se],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function z(e){for(var t=Qe.length,r=e.style,n=[],o=0;o<t;o++)n.push(Qe[o],r[Qe[o]]);return n.t=e,n}function A(e,t,r,n,o,i,s,a,l,c,p,h){if(f(e)&&(e=e(a)),u(e)&&"max"===e.substr(0,3)&&(e=h+("="===e.charAt(4)?C("0"+e.substr(3),r):0)),d(e))s&&Fe(s,r,n,!0);else{f(t)&&(t=t(a));var g,m,x,y=Y(t)[0]||D,b=Re(y)||{},w=e.split(" ");b&&(b.left||b.top)||"none"!==v(y).display||(x=y.style.display,y.style.display="block",b=Re(y),x?y.style.display=x:y.style.removeProperty("display")),g=C(w[0],b[n.d]),m=C(w[1]||"0",r),e=b[n.p]-l[n.p]-c+g+o-m,s&&Fe(s,m,n,r-m<20||s._isStart&&20<m),r-=r-m}if(i){var k=e+r,O=i._isStart;h="scroll"+n.d2,Fe(i,k,n,O&&20<k||!O&&(p?Math.max(D[h],W[h]):i.parentNode[h])<=k+1),p&&(l=Re(s),p&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+ze))}return Math.round(e)}function L(e,t,r,n){if(e.parentNode!==t){var o,i,s=e.style;if(t===D){for(o in e._stOrig=s.cssText,i=v(e))+o||nt.test(o)||!i[o]||"string"!=typeof s[o]||"0"===o||(s[o]=i[o]);s.top=r,s.left=n}else s.cssText=e._stOrig;B.core.getCache(e).uncache=1,t.appendChild(e)}}function R(e,t){function r(t,s,l,c,u){var f=r.tween,d=s.onComplete;return f&&f.kill(),n=Math.round(l),s[a]=t,(s.modifiers={})[a]=function(e){return(e=Math.round(i()))!==n&&e!==o&&2<Math.abs(e-n)?(f.kill(),r.tween=0):e=l+c*f.ratio+u*f.ratio*f.ratio,o=n,n=Math.round(e)},s.onComplete=function(){r.tween=0,d&&d.call(f)},f=r.tween=B.to(e,s)}var n,o,i=s(e,t),a="_scroll"+t.p2;return e[a]=i,e.addEventListener("mousewheel",function(){return r.tween&&r.tween.kill()&&(r.tween=0)}),r}var B,I,N,F,W,D,H,q,j,X,Y,V,U,Z,$,G,J,K,Q,ee,te,re,ne,oe,ie,se,ae,le=1,ce=[],ue=[],fe=Date.now,de=fe(),pe=0,he=1,ge=Math.abs,ve="scrollLeft",me="scrollTop",xe="left",ye="right",be="bottom",we="width",ke="height",Ce="Right",Oe="Left",Te="Top",Me="Bottom",Se="padding",Ee="margin",Pe="Width",_e="Height",ze="px",Ae={s:ve,p:xe,p2:Oe,os:ye,os2:Ce,d:we,d2:Pe,a:"x",sc:function(e){return arguments.length?N.scrollTo(e,Le.sc()):N.pageXOffset||F[ve]||W[ve]||D[ve]||0}},Le={s:me,p:"top",p2:Te,os:be,os2:Me,d:ke,d2:_e,a:"y",op:Ae,sc:function(e){return arguments.length?N.scrollTo(Ae.sc(),e):N.pageYOffset||F[me]||W[me]||D[me]||0}},Re=function(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==v(e)[J]&&B.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},Be={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ie={toggleActions:"play",anticipatePin:0},Ne={top:0,left:0,center:.5,bottom:1,right:1},Fe=function(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],s=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+Pe]=1,o["border"+s+Pe]=0,o[r.p]=t+"px",B.set(e,o)},We=[],De={},He={},qe=[],je=[],Xe=function(e){return He[e]&&He[e].map(function(e){return e()})||qe},Ye=[],Ve=function(e){for(var t=0;t<Ye.length;t+=4)e&&Ye[t+3]!==e||(Ye[t].style.cssText=Ye[t+1],Ye[t+2].uncache=1)},Ue=function(e,t){var r;for(K=0;K<We.length;K++)r=We[K],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));Ve(t),t||Xe("revert")},Ze=function(e,t){if(!pe||e){var r=Xe("refreshInit");for(re&&ot.sort(),t||Ue(),K=0;K<We.length;K++)We[K].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),K=We.length;K--;)We[K].scroll.rec=0;q.pause(),Xe("refresh")}else w(ot,"scrollEnd",P)},$e=0,Ge=1,Je=function(){var e=We.length,t=fe(),r=50<=t-de,n=e&&We[0].scroll();if(Ge=n<$e?-1:1,$e=n,r&&(pe&&!G&&200<t-pe&&(pe=0,Xe("scrollEnd")),U=de,de=t),Ge<0){for(K=e;K--;)We[K]&&We[K].update(0,r);Ge=1}else for(K=0;K<e;K++)We[K]&&We[K].update(0,r);X=0},Ke=[xe,"top",be,ye,Ee+Me,Ee+Ce,Ee+Te,Ee+Oe,"display","flexShrink","float","zIndex"],Qe=Ke.concat([we,ke,"boxSizing","max"+Pe,"max"+_e,"position",Ee,Se,Se+Te,Se+Ce,Se+Me,Se+Oe]),et=/([A-Z])/g,tt=function(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||B.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(et,"-$1").toLowerCase())}},rt={left:0,top:0},nt=/(?:webkit|moz|length|cssText|inset)/i;Ae.op=Le;var ot=(it.prototype.init=function(e,r){if(this.progress=this.start=0,this.vars&&this.kill(1),he){var n,c,h,g,b,T,E,I,H,q,j,X,Z,J,Q,ee,te,oe,ae,ue,de,ve,me,xe,ye,be,_e,Ne,Fe,He,qe,je,Xe,Ye,Ve,Ue,Ze,$e=(e=m(u(e)||d(e)||e.nodeType?{trigger:e}:e,Ie)).horizontal?Ae:Le,Je=e.onUpdate,Ke=e.toggleClass,Qe=e.id,et=e.onToggle,nt=e.onRefresh,ot=e.scrub,st=e.trigger,at=e.pin,lt=e.pinSpacing,ct=e.invalidateOnRefresh,ut=e.anticipatePin,ft=e.onScrubComplete,dt=e.onSnapComplete,pt=e.once,ht=e.snap,gt=e.pinReparent,vt=!ot&&0!==ot,mt=Y(e.scroller||N)[0],xt=B.core.getCache(mt),yt=o(mt),bt="pinType"in e?"fixed"===e.pinType:yt||"fixed"===i(mt,"pinType"),wt=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],kt=vt&&e.toggleActions.split(" "),Ct="markers"in e?e.markers:Ie.markers,Ot=yt?0:parseFloat(v(mt)["border"+$e.p2+Pe])||0,Tt=this,Mt=e.onRefreshInit&&function(){return e.onRefreshInit(Tt)},St=function(e,t,r){var n=r.d,o=r.d2,s=r.a;return(s=i(e,"getBoundingClientRect"))?function(){return s()[n]}:function(){return(t?N["inner"+o]:e["client"+o])||0}}(mt,yt,$e),Et=function(e,t){return!t||~ce.indexOf(e)?a(e):function(){return rt}}(mt,yt);Tt.media=se,ut*=45,We.push(Tt),Tt.scroller=mt,Tt.scroll=s(mt,$e),b=Tt.scroll(),Tt.vars=e,r=r||e.animation,"refreshPriority"in e&&(re=1),xt.tweenScroll=xt.tweenScroll||{top:R(mt,Le),left:R(mt,Ae)},Tt.tweenTo=n=xt.tweenScroll[$e.p],r&&(r.vars.lazy=!1,r._initted||!1!==r.vars.immediateRender&&!1!==e.immediateRender&&r.render(0,!0,!0),Tt.animation=r.pause(),r.scrollTrigger=Tt,(je=d(ot)&&ot)&&(qe=B.to(r,{ease:"power3",duration:je,onComplete:function(){return ft&&ft(Tt)}})),Fe=0,Qe=Qe||r.vars.id),ht&&(p(ht)||(ht={snapTo:ht}),"scrollBehavior"in D.style&&B.set(yt?[D,W]:mt,{scrollBehavior:"auto"}),h=f(ht.snapTo)?ht.snapTo:"labels"===ht.snapTo?function(e){return function(t){return B.utils.snap(y(e),t)}}(r):"labelsDirectional"===ht.snapTo?function(e){return function(t,r){var n,o=y(e);if(o.sort(function(e,t){return e-t}),0<r.direction){for(n=0;n<o.length;n++)if(o[n]>=t)return o[n];return o.pop()}for(n=o.length;n--;)if(o[n]<=t)return o[n];return o[0]}}(r):B.utils.snap(ht.snapTo),Xe=p(Xe=ht.duration||{min:.1,max:2})?V(Xe.min,Xe.max):V(Xe,Xe),Ye=B.delayedCall(ht.delay||je/2||.1,function(){if(Math.abs(Tt.getVelocity())<10&&!G){var e=r&&!vt?r.totalProgress():Tt.progress,t=(e-He)/(fe()-U)*1e3||0,o=ge(t/2)*t/.185,i=e+o,s=V(0,1,h(i,Tt)),a=Tt.scroll(),l=Math.round(E+s*J),c=n.tween;if(a<=I&&E<=a&&l!==a){if(c&&!c._initted&&c.data<=Math.abs(l-a))return;n(l,{duration:Xe(ge(.185*Math.max(ge(i-e),ge(s-e))/t/.05||0)),ease:ht.ease||"power3",data:Math.abs(l-a),onComplete:function(){Fe=He=r&&!vt?r.totalProgress():Tt.progress,dt&&dt(Tt)}},a,o*J,l-a-o*J)}}else Tt.isActive&&Ye.restart(!0)}).pause()),Qe&&(De[Qe]=Tt),st=Tt.trigger=Y(st||at)[0],at=!0===at?st:Y(at)[0],u(Ke)&&(Ke={targets:st,className:Ke}),at&&(!1===lt||lt===Ee||(lt=!(!lt&&"flex"===v(at.parentNode).display)&&Se),Tt.pin=at,!1!==e.force3D&&B.set(at,{force3D:!0}),(c=B.core.getCache(at)).spacer?Q=c.pinState:(c.spacer=oe=F.createElement("div"),oe.setAttribute("class","pin-spacer"+(Qe?" pin-spacer-"+Qe:"")),c.pinState=Q=z(at)),Tt.spacer=oe=c.spacer,Ne=v(at),xe=Ne[lt+$e.os2],ue=B.getProperty(at),de=B.quickSetter(at,$e.a,ze),_(at,oe,Ne),te=z(at)),Ct&&(Z=p(Ct)?m(Ct,Be):Be,j=O("scroller-start",Qe,mt,$e,Z,0),X=O("scroller-end",Qe,mt,$e,Z,0,j),ae=j["offset"+$e.op.d2],H=O("start",Qe,mt,$e,Z,ae),q=O("end",Qe,mt,$e,Z,ae),bt||(function(e){e.style.position="absolute"===v(e).position?"absolute":"relative"}(yt?D:mt),B.set([j,X],{force3D:!0}),be=B.quickSetter(j,$e.a,ze),_e=B.quickSetter(X,$e.a,ze))),Tt.revert=function(e){var t=!1!==e||!Tt.enabled,n=$;t!==g&&(t&&(Ue=Math.max(Tt.scroll(),Tt.scroll.rec||0),Ve=Tt.progress,Ze=r&&r.progress()),H&&[H,q,j,X].forEach(function(e){return e.style.display=t?"none":"block"}),t&&($=1),Tt.update(t),$=n,at&&(t?function(e,t,r){if(tt(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(at,oe,Q):gt&&Tt.isActive||_(at,oe,v(at),ye)),g=t)},Tt.refresh=function(t){if(!$&&Tt.enabled)if(at&&t&&pe)w(it,"scrollEnd",P);else{$=1,qe&&qe.pause(),ct&&r&&r.progress(0).invalidate(),g||Tt.revert();for(var n,o,i,a,c,d,p,h,m,y=St(),k=Et(),O=l(mt,$e),M=0,S=0,L=e.end,R=e.endTrigger||st,N=e.start||(0!==e.start&&st?at?"0 0":"0 100%":0),F=st&&Math.max(0,We.indexOf(Tt))||0,W=F;W--;)!(p=We[W].pin)||p!==st&&p!==at||We[W].revert();for(E=A(N,st,y,$e,Tt.scroll(),H,j,Tt,k,Ot,bt,O)||(at?-.001:0),f(L)&&(L=L(Tt)),u(L)&&!L.indexOf("+=")&&(~L.indexOf(" ")?L=(u(N)?N.split(" ")[0]:"")+L:(M=C(L.substr(2),y),L=u(N)?N:E+M,R=st)),I=Math.max(E,A(L||(R?"100% 0":O),R,y,$e,Tt.scroll()+M,q,X,Tt,k,Ot,bt,O))||-.001,J=I-E||(E-=.01)&&.001,M=0,W=F;W--;)(p=(d=We[W]).pin)&&d.start-d._pinPush<E&&(n=d.end-d.start,p===st&&(M+=n),p===at&&(S+=n));if(E+=M,I+=M,Tt._pinPush=S,H&&M&&((n={})[$e.a]="+="+M,B.set([H,q],n)),at)n=v(at),a=$e===Le,i=Tt.scroll(),ve=parseFloat(ue($e.a))+S,!O&&1<I&&((yt?D:mt).style["overflow-"+$e.a]="scroll"),_(at,oe,n),te=z(at),o=Re(at,!0),h=bt&&s(mt,a?Ae:Le)(),lt&&((ye=[lt+$e.os2,J+S+ze]).t=oe,(W=lt===Se?x(at,$e)+J+S:0)&&ye.push($e.d,W+ze),tt(ye),bt&&Tt.scroll(Ue)),bt&&((c={top:o.top+(a?i-E:h)+ze,left:o.left+(a?h:i-E)+ze,boxSizing:"border-box",position:"fixed"})[we]=c.maxWidth=Math.ceil(o.width)+ze,c[ke]=c.maxHeight=Math.ceil(o.height)+ze,c[Ee]=c[Ee+Te]=c[Ee+Ce]=c[Ee+Me]=c[Ee+Oe]="0",c[Se]=n[Se],c[Se+Te]=n[Se+Te],c[Se+Ce]=n[Se+Ce],c[Se+Me]=n[Se+Me],c[Se+Oe]=n[Se+Oe],ee=function(e,t,r){for(var n,o=[],i=e.length,s=r?8:0;s<i;s+=2)n=e[s],o.push(n,n in t?t[n]:e[s+1]);return o.t=e.t,o}(Q,c,gt)),r?(m=r._initted,ne(1),r.progress(1,!0),me=ue($e.a)-ve+J+S,J!==me&&ee.splice(ee.length-2,2),r.progress(0,!0),m||r.invalidate(),ne(0)):me=J;else if(st&&Tt.scroll())for(o=st.parentNode;o&&o!==D;)o._pinOffset&&(E-=o._pinOffset,I-=o._pinOffset),o=o.parentNode;for(W=0;W<F;W++)!(d=We[W].pin)||d!==st&&d!==at||We[W].revert(!1);Tt.start=E,Tt.end=I,(b=T=Tt.scroll())<Ue&&Tt.scroll(Ue),Tt.revert(!1),$=0,r&&vt&&r._initted&&r.progress(Ze,!0).render(r.time(),!0,!0),Ve!==Tt.progress&&(qe&&r.totalProgress(Ve,!0),Tt.progress=Ve,Tt.update()),at&&lt&&(oe._pinOffset=Math.round(Tt.progress*me)),nt&&nt(Tt)}},Tt.getVelocity=function(){return(Tt.scroll()-T)/(fe()-U)*1e3||0},Tt.update=function(e,t){var o,i,s,a,c,u=Tt.scroll(),f=e?0:(u-E)/J,d=f<0?0:1<f?1:f||0,p=Tt.progress;if(t&&(T=b,b=u,ht&&(He=Fe,Fe=r&&!vt?r.totalProgress():d)),ut&&!d&&at&&!$&&!le&&pe&&E<u+(u-T)/(fe()-U)*ut&&(d=1e-4),d!==p&&Tt.enabled){if(a=(c=(o=Tt.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Tt.direction=p<d?1:-1,Tt.progress=d,vt||(!qe||$||le?r&&r.totalProgress(d,!!$):(qe.vars.totalProgress=d,qe.invalidate().restart())),at)if(e&&lt&&(oe.style[lt+$e.os2]=xe),bt){if(a){if(s=!e&&p<d&&u<I+1&&u+1>=l(mt,$e),gt)if(e||!o&&!s)L(at,oe);else{var h=Re(at,!0),g=u-E;L(at,D,h.top+($e===Le?g:0)+ze,h.left+($e===Le?0:g)+ze)}tt(o||s?ee:te),me!==J&&d<1&&o||de(ve+(1!==d||s?0:me))}}else de(ve+me*d);!ht||n.tween||$||le||Ye.restart(!0),Ke&&(c||pt&&d&&(d<1||!ie))&&Y(Ke.targets).forEach(function(e){return e.classList[o||pt?"add":"remove"](Ke.className)}),!Je||vt||e||Je(Tt),a&&!$?(i=d&&!p?0:1===d?1:1===p?2:3,vt&&(s=!c&&"none"!==kt[i+1]&&kt[i+1]||kt[i],r&&("complete"===s||"reset"===s||s in r)&&("complete"===s?r.pause().totalProgress(1):"reset"===s?r.restart(!0).pause():r[s]()),Je&&Je(Tt)),!c&&ie||(et&&c&&et(Tt),wt[i]&&wt[i](Tt),pt&&(1===d?Tt.kill(!1,1):wt[i]=0),c||wt[i=1===d?1:3]&&wt[i](Tt))):vt&&Je&&!$&&Je(Tt)}_e&&(be(u+(j._isFlipped?1:0)),_e(u))},Tt.enable=function(){Tt.enabled||(Tt.enabled=!0,w(mt,"resize",S),w(mt,"scroll",M),Mt&&w(it,"refreshInit",Mt),r&&r.add?B.delayedCall(.01,function(){return E||I||Tt.refresh()})&&(J=.01)&&(E=I=0):Tt.refresh())},Tt.disable=function(e,t){if(Tt.enabled&&(!1!==e&&Tt.revert(),Tt.enabled=Tt.isActive=!1,t||qe&&qe.pause(),Ue=0,c&&(c.uncache=1),Mt&&k(it,"refreshInit",Mt),Ye&&(Ye.pause(),n.tween&&n.tween.kill()&&(n.tween=0)),!yt)){for(var r=We.length;r--;)if(We[r].scroller===mt&&We[r]!==Tt)return;k(mt,"resize",S),k(mt,"scroll",M)}},Tt.kill=function(e,t){Tt.disable(e,t),Qe&&delete De[Qe];var n=We.indexOf(Tt);We.splice(n,1),n===K&&0<Ge&&K--,r&&(r.scrollTrigger=null,e&&r.render(-1),t||r.kill()),H&&[H,q,j,X].forEach(function(e){return e.parentNode.removeChild(e)}),at&&(c&&(c.uncache=1),n=0,We.forEach(function(e){return e.pin===at&&n++}),n||(c.spacer=0))},Tt.enable()}else this.update=this.refresh=this.kill=t},it.register=function(e){if(!I&&(B=e||n(),r()&&window.document&&(N=window,F=document,W=F.documentElement,D=F.body),B&&(Y=B.utils.toArray,V=B.utils.clamp,ne=B.core.suppressOverwrites||t,B.core.globals("ScrollTrigger",it),D))){j=N.requestAnimationFrame||function(e){return setTimeout(e,16)},w(N,"mousewheel",M),H=[N,F,W,D],w(F,"scroll",M);var o,i=D.style,s=i.borderTop;i.borderTop="1px solid #000",o=Re(D),Le.m=Math.round(o.top+Le.sc())||0,Ae.m=Math.round(o.left+Ae.sc())||0,s?i.borderTop=s:i.removeProperty("border-top"),Z=setInterval(T,200),B.delayedCall(.5,function(){return le=0}),w(F,"touchcancel",t),w(D,"touchstart",t),b(w,F,"pointerdown,touchstart,mousedown",function(){return G=1}),b(w,F,"pointerup,touchend,mouseup",function(){return G=0}),J=B.utils.checkPrefix("transform"),Qe.push(J),I=fe(),q=B.delayedCall(.2,Ze).pause(),te=[F,"visibilitychange",function(){var e=N.innerWidth,t=N.innerHeight;F.hidden?(Q=e,ee=t):Q===e&&ee===t||S()},F,"DOMContentLoaded",Ze,N,"load",function(){return pe||Ze()},N,"resize",S],c(w)}return I},it.defaults=function(e){for(var t in e)Ie[t]=e[t]},it.kill=function(){he=0,We.slice(0).forEach(function(e){return e.kill(1)})},it.config=function(e){"limitCallbacks"in e&&(ie=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(Z)||(Z=t)&&setInterval(T,t),"autoRefreshEvents"in e&&(c(k)||c(w,e.autoRefreshEvents||"none"),oe=-1===(e.autoRefreshEvents+"").indexOf("resize"))},it.scrollerProxy=function(e,t){var r=Y(e)[0],n=ue.indexOf(r),i=o(r);~n&&ue.splice(n,i?6:2),i?ce.unshift(N,t,D,t,W,t):ce.unshift(r,t)},it.matchMedia=function(e){var t,r,n,o,i;for(r in e)n=je.indexOf(r),o=e[r],"all"===(se=r)?o():(t=N.matchMedia(r))&&(t.matches&&(i=o()),~n?(je[n+1]=g(je[n+1],o),je[n+2]=g(je[n+2],i)):(n=je.length,je.push(r,o,i),t.addListener?t.addListener(E):t.addEventListener("change",E)),je[n+3]=t.matches),se=0;return je},it.clearMatchMedia=function(e){e||(je.length=0),0<=(e=je.indexOf(e))&&je.splice(e,4)},it);function it(e,t){I||it.register(B)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}ot.version="3.6.0",ot.saveStyles=function(e){return e?Y(e).forEach(function(e){if(e&&e.style){var t=Ye.indexOf(e);0<=t&&Ye.splice(t,4),Ye.push(e,e.style.cssText,B.core.getCache(e),se)}}):Ye},ot.revert=function(e,t){return Ue(!e,t)},ot.create=function(e,t){return new ot(e,t)},ot.refresh=function(e){return e?S():Ze(!0)},ot.update=Je,ot.maxScroll=function(e,t){return l(e,t?Ae:Le)},ot.getScrollFunc=function(e,t){return s(Y(e)[0],t?Ae:Le)},ot.getById=function(e){return De[e]},ot.getAll=function(){return We.slice(0)},ot.isScrolling=function(){return!!pe},ot.addEventListener=function(e,t){var r=He[e]||(He[e]=[]);~r.indexOf(t)||r.push(t)},ot.removeEventListener=function(e,t){var r=He[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ot.batch=function(e,t){function r(e,t){var r=[],n=[],o=B.delayedCall(s,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var n,o=[],i={},s=t.interval||.016,a=t.batchMax||1e9;for(n in t)i[n]="on"===n.substr(0,2)&&f(t[n])&&"onRefreshInit"!==n?r(0,t[n]):t[n];return f(a)&&(a=a(),w(ot,"refresh",function(){return a=t.batchMax()})),Y(e).forEach(function(e){var t={};for(n in i)t[n]=i[n];t.trigger=e,o.push(ot.create(t))}),o},ot.sort=function(e){return We.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},n()&&B.registerPlugin(ot),e.ScrollTrigger=ot,e.default=ot,"undefined"==typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default});