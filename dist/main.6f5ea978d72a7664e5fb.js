(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(n,o,t){n.exports=t("zUnb")},zUnb:function(n,o,t){"use strict";t.r(o);var e=t("fXoL"),a=t("jhN1"),r=t("tyNb");const l=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"welcome",loadChildren:()=>Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,"TtBp")).then(n=>n.WelcomeModule)},{path:"monitor",loadChildren:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"pqN0")).then(n=>n.MonitorModule)},{path:"login",loadChildren:()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(9)]).then(t.bind(null,"F4UR")).then(n=>n.LoginModule)},{path:"register",loadChildren:()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(11)]).then(t.bind(null,"fhSy")).then(n=>n.RegisterModule)},{path:"caculator",loadChildren:()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(8)]).then(t.bind(null,"Dw8M")).then(n=>n.CaculatorModule)}];let i=(()=>{class n{}return n.\u0275mod=e.Mb({type:n}),n.\u0275inj=e.Lb({factory:function(o){return new(o||n)},imports:[[r.g.forRoot(l)],r.g]}),n})();var c=t("3Pt+");let d=(()=>{class n{constructor(){this.isCollapsed=!1}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Ib({type:n,selectors:[["app-root"]],decls:40,vars:0,consts:[[1,"navbar","navbar-expand-xl","navbar-light","bg-light"],["href","#",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","active"],["href","welcome",1,"nav-link"],[1,"sr-only"],[1,"nav-item"],["href","monitor",1,"nav-link"],["href","login",1,"nav-link"],["href","caculator",1,"nav-link"],[1,"nav-item","dropdown"],["href","#","id","navbarDropdown","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle"],["aria-labelledby","navbarDropdown",1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"dropdown-divider"],["href","#",1,"nav-link"],[1,"form-inline","my-2","my-xl-0"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","mr-sm-2"],["type","submit",1,"btn","btn-outline-success","my-2","my-sm-0"]],template:function(n,o){1&n&&(e.Ub(0,"nav",0),e.Ub(1,"a",1),e.Hc(2,"Logo"),e.Tb(),e.Ub(3,"button",2),e.Pb(4,"span",3),e.Tb(),e.Ub(5,"div",4),e.Ub(6,"ul",5),e.Ub(7,"li",6),e.Ub(8,"a",7),e.Hc(9,"Welcome "),e.Ub(10,"span",8),e.Hc(11,"(current)"),e.Tb(),e.Tb(),e.Tb(),e.Ub(12,"li",9),e.Ub(13,"a",10),e.Hc(14,"Monitor"),e.Tb(),e.Tb(),e.Ub(15,"li",9),e.Ub(16,"a",11),e.Hc(17,"Login"),e.Tb(),e.Tb(),e.Ub(18,"li",9),e.Ub(19,"a",12),e.Hc(20,"Calculator"),e.Tb(),e.Tb(),e.Ub(21,"li",13),e.Ub(22,"a",14),e.Hc(23," Dropdown "),e.Tb(),e.Ub(24,"div",15),e.Ub(25,"a",16),e.Hc(26,"Action"),e.Tb(),e.Ub(27,"a",16),e.Hc(28,"Another action"),e.Tb(),e.Pb(29,"div",17),e.Ub(30,"a",16),e.Hc(31,"Something else here"),e.Tb(),e.Tb(),e.Tb(),e.Ub(32,"li",9),e.Ub(33,"a",18),e.Hc(34,"Disabled"),e.Tb(),e.Tb(),e.Tb(),e.Ub(35,"form",19),e.Pb(36,"input",20),e.Ub(37,"button",21),e.Hc(38,"Search"),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Pb(39,"router-outlet"))},directives:[c.q,c.l,c.m,r.h],styles:[".topnav[_ngcontent-%COMP%]{background-color:#333;overflow:hidden}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.active[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:none}.dropdown[_ngcontent-%COMP%]{float:left;overflow:hidden}.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%]{font-size:17px;border:none;outline:none;color:#fff;padding:14px 16px;background-color:inherit;font-family:inherit;margin:0}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:none;color:#000;padding:12px 16px;text-decoration:none;display:block;text-align:left}.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#555;color:#fff}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd;color:#000}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}@media screen and (max-width:600px){.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child){display:none}.topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]{float:right;display:block}}@media screen and (max-width:600px){.topnav.responsive[_ngcontent-%COMP%]{position:relative}.topnav.responsive[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:none;display:block;text-align:left}.topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{float:none}.topnav.responsive[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{position:relative}.topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%]{display:block;width:100%;text-align:left}}"]}),n})();var p=t("FwiY"),b=t("kVq8");const s=[b.F,b.G,b.o,b.A];let g=(()=>{class n{}return n.\u0275mod=e.Mb({type:n}),n.\u0275inj=e.Lb({factory:function(o){return new(o||n)},providers:[{provide:p.a,useValue:s}],imports:[[p.c],p.c]}),n})();var u=t("yW9e"),v=t("Q8cG"),f=t("tk/3"),h=t("R1ws"),M=t("Rm4T"),P=t("ofXK"),C=t("tAZD"),m=t.n(C),w=t("OzZK");Object(P.z)(m.a);let O=(()=>{class n{}return n.\u0275mod=e.Mb({type:n,bootstrap:[d]}),n.\u0275inj=e.Lb({factory:function(o){return new(o||n)},providers:[{provide:M.b,useValue:M.f}],imports:[[a.a,i,g,u.a,v.e,c.h,f.c,h.b,w.c]]}),n})();Object(e.T)(),a.c().bootstrapModule(O).catch(n=>console.error(n))},zn8P:function(n,o){function t(n){return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}))}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="zn8P"}},[[0,2,7]]]);