import{a as R}from"./chunk-ZKW2JU5P.js";import{d as E}from"./chunk-33BG25T3.js";import{a as M}from"./chunk-PTMSCK73.js";import{$a as _,Ba as f,Ha as v,Ja as C,Ka as w,Kb as D,L as g,O as y,V as s,Wa as c,X as S,Xa as m,Ya as h,cb as d,db as j,fb as I,ia as x,ib as k,ua as u,va as p,xa as l}from"./chunk-7JVR2ODQ.js";function b(n,e){let i=!e?.manualCleanup;i&&!e?.injector&&x(b);let r=i?e?.injector?.get(f)??s(f):null,t;e?.requireSync?t=p({kind:0}):t=p({kind:1,value:e?.initialValue});let a=n.subscribe({next:o=>t.set({kind:1,value:o}),error:o=>{if(e?.rejectErrors)throw o;t.set({kind:2,error:o})}});return r?.onDestroy(a.unsubscribe.bind(a)),u(()=>{let o=t();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new y(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function U(n,e){if(n&1&&(c(0,"section"),h(1,"img",1),c(2,"div")(3,"h3"),d(4),m(),c(5,"p"),d(6),m()()()),n&2){let i=_(),r,t;l(1),v("srcset",i.user().avatar)("alt",i.user().first_name),l(3),I("",(r=i.user())==null?null:r.first_name," ",(r=i.user())==null?null:r.last_name,""),l(2),j((t=i.user())==null?null:t.email)}}function q(n,e){n&1&&(c(0,"p"),d(1,"Cargando informaci\xF3n"),m())}var Q=(()=>{let e=class e{constructor(){this.route=s(E),this.usersService=s(R),this.user=b(this.route.params.pipe(g(({id:r})=>this.usersService.getUserById(r)))),this.titleLabel=u(()=>this.user()?`Informaci\xF3n del usuario: ${this.user()?.first_name} ${this.user()?.last_name} `:"Informaci\xF3n del usuario")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S({type:e,selectors:[["ng-component"]],standalone:!0,features:[k],decls:3,vars:2,consts:[[3,"title"],[3,"srcset","alt"]],template:function(t,a){t&1&&(h(0,"app-title",0),C(1,U,7,5,"section")(2,q,2,0)),t&2&&(v("title",a.titleLabel()),l(1),w(1,a.user()?1:2))},dependencies:[D,M],encapsulation:2});let n=e;return n})();export{Q as default};