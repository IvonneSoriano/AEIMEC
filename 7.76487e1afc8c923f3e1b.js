(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{axL4:function(n,t,e){"use strict";e.r(t),e.d(t,"WeAreModule",(function(){return f}));var i=e("ofXK"),o=e("tyNb"),c=e("fXoL"),a=e("0hAW");function r(n,t){if(1&n&&(c.Hb(0,"a",5),c.Hb(1,"button",6),c.cc(2," Tickets "),c.Gb(),c.Gb()),2&n){const n=c.Qb();c.Tb("href",n.data.ticketUrl,c.Yb)}}let g=(()=>{class n{constructor(){this.year=[],this.data=a.g.event;let n=this.data.year.split("");this.year.push(n[0]+n[1]),this.year.push(n[2]+n[3])}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.yb({type:n,selectors:[["app-event"]],decls:11,vars:4,consts:[[1,"event"],[1,"m-0","spaceMono","h1"],[1,"fixedText"],[1,"spaceGrotesk"],[3,"href",4,"ngIf"],[3,"href"],["type","button",1,"btn"]],template:function(n,t){1&n&&(c.Hb(0,"div",0),c.Hb(1,"h1",1),c.Hb(2,"span"),c.cc(3),c.Gb(),c.Hb(4,"span",2),c.cc(5,"#WeAre"),c.Gb(),c.Hb(6,"span"),c.cc(7),c.Gb(),c.Gb(),c.Hb(8,"p",3),c.cc(9),c.Gb(),c.bc(10,r,3,1,"a",4),c.Gb()),2&n&&(c.ub(3),c.dc(t.year[0]),c.ub(4),c.dc(t.year[1]),c.ub(2),c.ec(" ",t.data.description," "),c.ub(1),c.Tb("ngIf",t.data.ticketUrl))},directives:[i.i],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.event[_ngcontent-%COMP%]{height:100vh;background-image:linear-gradient(180deg,rgba(33,4,218,.22),#006fff),url(texture.f6179badffb3f920ece1.png);width:100%;background-size:cover;display:flex;flex-direction:column;align-items:center;justify-content:center}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:124px;line-height:1;color:#f0f0f0}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span.fixedText[_ngcontent-%COMP%]{color:#04d88b}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;line-height:27px;max-width:730px;text-align:center;margin:40px auto 30px;color:#f0f0f0}.event[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#16ffaa;color:#5d44ff;font-weight:700}@media (max-width:1024px){.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:114px}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px}}@media (max-width:768px){.event[_ngcontent-%COMP%]{padding:70px 25px}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:104px}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px}}@media (max-width:360px){.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:75px}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:300px}}"]}),n})();var s=e("nhfI");function p(n,t){1&n&&c.Fb(0,"div",5),2&n&&c.ac("background-image: url(",t.$implicit.img,");")}let l=(()=>{class n{constructor(){this.config={resistance:!0,resistanceRatio:.1,autoplay:!0,loop:!0,speed:1e3,mousewheel:!1,parallax:!0,pagination:{el:".pagination",clickable:!0,renderBullet:function(n,t){return'<span class="'+t+'"><div class="parallax-wrap"><div class="parallax-element"></div></div></span>'}}},this.data=a.g.gallery}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.yb({type:n,selectors:[["app-galery"]],decls:5,vars:3,consts:[[1,"galery"],[1,"pagination"],[1,"swiper-container",3,"swiper","index","indexChange"],[1,"swiper-wrapper"],["class","swiper-slide slider img",3,"style",4,"ngFor","ngForOf"],[1,"swiper-slide","slider","img"]],template:function(n,t){1&n&&(c.Hb(0,"div",0),c.Fb(1,"div",1),c.Hb(2,"div",2),c.Mb("indexChange",(function(n){return t.index=n})),c.Hb(3,"div",3),c.bc(4,p,1,3,"div",4),c.Gb(),c.Gb(),c.Gb()),2&n&&(c.ub(2),c.Tb("swiper",t.config)("index",t.index),c.ub(2),c.Tb("ngForOf",t.data))},directives:[s.a,i.h],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.galery[_ngcontent-%COMP%]{height:100vh;background-color:#191051;position:relative}.galery[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{position:absolute;top:60px;right:60px;z-index:300;z-index:100000;height:15px}.galery[_ngcontent-%COMP%]   .slider.img[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative;background-repeat:no-repeat;background-size:cover}@media (max-width:768px){.galery[_ngcontent-%COMP%]{height:60vh}.galery[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{bottom:20px;top:unset;right:0;left:unset}.galery[_ngcontent-%COMP%]   .slider.img[_ngcontent-%COMP%]{height:50vh}}@media (max-width:400px){.galery[_ngcontent-%COMP%]{height:47vh}.galery[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{width:60%}.galery[_ngcontent-%COMP%]   .slider.img[_ngcontent-%COMP%]{height:37vh}}"]}),n})();const d=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.yb({type:n,selectors:[["app-we-are"]],decls:3,vars:0,consts:[["id","weAre",1,"weAre"]],template:function(n,t){1&n&&(c.Hb(0,"section",0),c.Fb(1,"app-event"),c.Fb(2,"app-galery"),c.Gb())},directives:[g,l],styles:[""]}),n})()}];let b=(()=>{class n{}return n.\u0275mod=c.Cb({type:n}),n.\u0275inj=c.Bb({factory:function(t){return new(t||n)},imports:[[o.d.forChild(d)],o.d]}),n})(),f=(()=>{class n{}return n.\u0275mod=c.Cb({type:n}),n.\u0275inj=c.Bb({factory:function(t){return new(t||n)},imports:[[i.b,s.b,b]]}),n})()}}]);