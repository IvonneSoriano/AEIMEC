(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{axL4:function(n,t,e){"use strict";e.r(t),e.d(t,"WeAreModule",(function(){return J}));var c=e("ofXK"),o=e("tyNb"),a=e("fXoL"),i=e("0hAW");let g=(()=>{class n{constructor(){this.year=[],this.data=i.g.event;let n=this.data.year.split("");this.year.push(n[0]+n[1]),this.year.push(n[2]+n[3])}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.yb({type:n,selectors:[["app-event"]],decls:13,vars:4,consts:[[1,"event"],[1,"m-0","spaceMono","h1"],[1,"fixedText"],[1,"spaceGrotesk"],[3,"href"],["type","button",1,"btn"]],template:function(n,t){1&n&&(a.Jb(0,"div",0),a.Jb(1,"h1",1),a.Jb(2,"span"),a.fc(3),a.Ib(),a.Jb(4,"span",2),a.fc(5,"#WeAre"),a.Ib(),a.Jb(6,"span"),a.fc(7),a.Ib(),a.Ib(),a.Jb(8,"p",3),a.fc(9),a.Ib(),a.Jb(10,"a",4),a.Jb(11,"button",5),a.fc(12," Tickets "),a.Ib(),a.Ib(),a.Ib()),2&n&&(a.ub(3),a.gc(t.year[0]),a.ub(4),a.gc(t.year[1]),a.ub(2),a.hc(" ",t.data.description," "),a.ub(1),a.Vb("href",t.data.ticketUrl,a.bc))},styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.event[_ngcontent-%COMP%]{height:100vh;background-image:linear-gradient(180deg,rgba(33,4,218,.22),#006fff),url(texture.f6179badffb3f920ece1.png);width:100%;background-size:cover;display:flex;flex-direction:column;align-items:center;justify-content:center}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:124px;line-height:1;color:#f0f0f0}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span.fixedText[_ngcontent-%COMP%]{color:#04d88b}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;line-height:27px;max-width:730px;text-align:center;margin:40px auto 30px;color:#f0f0f0}.event[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#16ffaa;color:#5d44ff;font-weight:700}@media (max-width:1024px){.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:114px}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px}}@media (max-width:768px){.event[_ngcontent-%COMP%]{padding:70px 25px}.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:104px}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px}}@media (max-width:360px){.event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:75px}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:300px}}"]}),n})();var r=e("EVdn"),d=e.n(r);let s=(()=>{class n{constructor(){this.data=i.g.date}ngOnInit(){d()(document).ready((function(){var n=new Date(i.g.date.englishDate).getTime();setInterval((function(){var t=(new Date).getTime(),e=n-t,c=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4);d()(".days .number").html(c),d()(".hours .number").html(o),d()(".minutes .number").html(a)}),1e3)}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.yb({type:n,selectors:[["app-date"]],decls:18,vars:2,consts:[[1,"date"],[1,"m-0","h2","spaceMono"],[1,"countDown"],[1,"days"],[1,"m-0","number","spaceMono"],[1,"m-0","text","h2","spaceMono"],[1,"hours"],[1,"minutes"],[1,"spaceGrotesk","description"]],template:function(n,t){1&n&&(a.Jb(0,"div",0),a.Jb(1,"h2",1),a.fc(2),a.Ib(),a.Jb(3,"div",2),a.Jb(4,"div",3),a.Fb(5,"p",4),a.Jb(6,"p",5),a.fc(7,"d\xedas"),a.Ib(),a.Ib(),a.Jb(8,"div",6),a.Fb(9,"p",4),a.Jb(10,"p",5),a.fc(11,"horas"),a.Ib(),a.Ib(),a.Jb(12,"div",7),a.Fb(13,"p",4),a.Jb(14,"p",5),a.fc(15,"minutos"),a.Ib(),a.Ib(),a.Ib(),a.Jb(16,"p",8),a.fc(17),a.Ib(),a.Ib()),2&n&&(a.ub(2),a.gc(t.data.date),a.ub(15),a.hc(" ",t.data.description," "))},styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.date[_ngcontent-%COMP%]{min-height:100vh;background-color:#191051;display:flex;align-items:center;flex-direction:column;justify-content:center}.date[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#f0f0f0}.date[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:20px;line-height:27px;max-width:730px;text-align:center;margin:40px auto 30px;color:#f0f0f0}.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%]{margin-bottom:30px;margin-top:15px;display:flex;width:50%;justify-content:space-between}.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-align:center}.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:124px;color:#04d88b;font-weight:700;line-height:1}.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#f0f0f0}@media (max-width:1360px){.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%]{width:80%}}@media (max-width:1200px){.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%]{width:90%}}@media (max-width:768px){.date[_ngcontent-%COMP%]{padding:70px 25px}.date[_ngcontent-%COMP%]   .countDown[_ngcontent-%COMP%]{flex-direction:column}}@media (max-width:360px){.date[_ngcontent-%COMP%]{text-align:center}}"]}),n})();function p(n,t){1&n&&a.Fb(0,"div",10)}function b(n,t){if(1&n&&(a.Jb(0,"div",12),a.Fb(1,"div",13),a.Jb(2,"p",14),a.fc(3),a.Ib(),a.Jb(4,"div",15),a.Fb(5,"img",16),a.Ib(),a.Jb(6,"h3",17),a.fc(7),a.Ib(),a.Ib()),2&n){const n=a.Sb().$implicit;a.ub(3),a.gc(n.time),a.ub(2),a.Vb("src",n.img,a.bc),a.ub(2),a.gc(n.title)}}function O(n,t){1&n&&a.Fb(0,"div",10)}function l(n,t){if(1&n&&(a.Hb(0),a.ec(1,b,8,3,"div",11),a.ec(2,O,1,0,"div",5),a.Gb()),2&n){const n=t.index,e=a.Sb(),c=e.index,o=e.$implicit,i=a.Sb();a.ub(1),a.Vb("ngIf",(n+1)%2!=0),a.ub(1),a.Vb("ngIf",c+1<i.data.length&&n+1==o.events.length)}}function C(n,t){if(1&n&&(a.Jb(0,"div",12),a.Fb(1,"div",13),a.Jb(2,"p",14),a.fc(3),a.Ib(),a.Jb(4,"div",15),a.Fb(5,"img",16),a.Ib(),a.Jb(6,"h3",17),a.fc(7),a.Ib(),a.Ib()),2&n){const n=a.Sb().$implicit;a.ub(3),a.gc(n.time),a.ub(2),a.Vb("src",n.img,a.bc),a.ub(2),a.gc(n.title)}}function M(n,t){1&n&&a.Fb(0,"div",10)}function P(n,t){if(1&n&&(a.Hb(0),a.ec(1,C,8,3,"div",11),a.ec(2,M,1,0,"div",5),a.Gb()),2&n){const n=t.index,e=a.Sb(),c=e.index,o=e.$implicit,i=a.Sb();a.ub(1),a.Vb("ngIf",(n+1)%2==0),a.ub(1),a.Vb("ngIf",c+1<i.data.length&&n+1==o.events.length)}}const _=function(n,t,e){return{d1:n,d2:t,d3:e}};function f(n,t){if(1&n&&(a.Jb(0,"div",2),a.Jb(1,"div",3),a.Jb(2,"p",4),a.fc(3,"Actividades"),a.Ib(),a.Jb(4,"h2",4),a.fc(5),a.Ib(),a.ec(6,p,1,0,"div",5),a.Ib(),a.Jb(7,"div",6),a.Jb(8,"div",7),a.ec(9,l,3,2,"ng-container",8),a.Ib(),a.Jb(10,"div",9),a.ec(11,P,3,2,"ng-container",8),a.Ib(),a.Ib(),a.Ib()),2&n){const n=t.$implicit,e=t.index,c=a.Sb();a.Vb("ngClass",a.Zb(5,_,(e+1)%3==1,(e+1)%3==2,(e+1)%3==0)),a.ub(5),a.gc(n.title),a.ub(1),a.Vb("ngIf",e+1<c.data.length),a.ub(3),a.Vb("ngForOf",n.events),a.ub(2),a.Vb("ngForOf",n.events)}}let u=(()=>{class n{constructor(){this.data=i.g.agenda}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.yb({type:n,selectors:[["app-agenda"]],decls:2,vars:1,consts:[[1,"agenda"],["class","wrap",3,"ngClass",4,"ngFor","ngForOf"],[1,"wrap",3,"ngClass"],[1,"title"],[1,"m-0","spaceMono"],["class","extra",4,"ngIf"],[1,"activities"],[1,"acts","par"],[4,"ngFor","ngForOf"],[1,"acts","non"],[1,"extra"],["class","act",4,"ngIf"],[1,"act"],[1,"cube"],[1,"m-0","spaceGrotesk","time"],[1,"circle"],["alt","",3,"src"],[1,"m-0","h3","spaceMono"]],template:function(n,t){1&n&&(a.Jb(0,"div",0),a.ec(1,f,12,9,"div",1),a.Ib()),2&n&&(a.ub(1),a.Vb("ngForOf",t.data))},directives:[c.i,c.h,c.j],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.agenda[_ngcontent-%COMP%]{min-height:100vh}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{display:flex}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{position:absolute;bottom:0;background-color:#ff0;height:150px;width:100%}.agenda[_ngcontent-%COMP%]   .wrap.d1[_ngcontent-%COMP%]{background-color:#04d88b;padding:100px 0 0}.agenda[_ngcontent-%COMP%]   .wrap.d1[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{background-color:#f0f0f0}.agenda[_ngcontent-%COMP%]   .wrap.d1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#2104da}.agenda[_ngcontent-%COMP%]   .wrap.d1[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]{border-left:1px solid #2104da}.agenda[_ngcontent-%COMP%]   .wrap.d1[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{background-color:#2104da}.agenda[_ngcontent-%COMP%]   .wrap.d2[_ngcontent-%COMP%]{background-color:#f0f0f0}.agenda[_ngcontent-%COMP%]   .wrap.d2[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{background-color:#2104da}.agenda[_ngcontent-%COMP%]   .wrap.d2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#191051}.agenda[_ngcontent-%COMP%]   .wrap.d2[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]{border-left:1px solid #191051}.agenda[_ngcontent-%COMP%]   .wrap.d2[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{background-color:#191051}.agenda[_ngcontent-%COMP%]   .wrap.d3[_ngcontent-%COMP%]{background-color:#2104da}.agenda[_ngcontent-%COMP%]   .wrap.d3[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{background-color:#04d88b}.agenda[_ngcontent-%COMP%]   .wrap.d3[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#04d88b}.agenda[_ngcontent-%COMP%]   .wrap.d3[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]{border-left:1px solid #04d88b}.agenda[_ngcontent-%COMP%]   .wrap.d3[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{color:#04d88b}.agenda[_ngcontent-%COMP%]   .wrap.d3[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{background-color:#04d88b}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:0 0 40%;text-align:center;font-weight:700;position:relative}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:36px;line-height:36px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:80px;line-height:118px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]{flex:1;display:flex}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]{border-left:1px solid #2104da;position:relative;flex:0 0 50%}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:350px;padding:0 40px;position:relative}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{position:absolute;width:39px;height:39px;top:0;left:calc(-39px / 2)}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:159px;background-color:#ff0;border-radius:50%;height:159px;overflow:hidden}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;max-width:177px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-weight:700;font-size:24px;line-height:32px;margin-bottom:20px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts.par[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{margin-bottom:350px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts.non[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{margin-top:350px}@media (max-width:768px){.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{padding:75px 0 0;flex-direction:column}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{display:none}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts.par[_ngcontent-%COMP%]{border-left:none}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts.par[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{align-items:flex-end;margin-bottom:300px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts.par[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{left:unset;right:calc(-39px / 2)}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts.non[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{margin-top:300px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{min-height:250px}.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:100px;height:100px}}@media (max-width:360px){.agenda[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .acts[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:75px;height:75px}}"]}),n})();var h=e("nhfI");function x(n,t){if(1&n&&(a.Jb(0,"div",5),a.Jb(1,"div",6),a.Jb(2,"h2",7),a.fc(3),a.Ib(),a.Jb(4,"p",8),a.fc(5),a.Ib(),a.Ib(),a.Ib()),2&n){const n=t.$implicit;a.dc("background-image: url(",n.img,");"),a.ub(3),a.gc(n.title),a.ub(2),a.gc(n.description)}}let m=(()=>{class n{constructor(){this.config={resistance:!0,resistanceRatio:.1,autoplay:!0,loop:!0,speed:1e3,mousewheel:!1,parallax:!0,pagination:{el:".pagination",clickable:!0,renderBullet:function(n,t){return'<span class="'+t+'"><div class="parallax-wrap"><div class="parallax-element"></div></div></span>'}}},this.data=i.g.gallery}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.yb({type:n,selectors:[["app-galery"]],decls:5,vars:3,consts:[[1,"galery"],[1,"pagination"],[1,"swiper-container",3,"swiper","index","indexChange"],[1,"swiper-wrapper"],["class","swiper-slide slider img",3,"style",4,"ngFor","ngForOf"],[1,"swiper-slide","slider","img"],[1,"info"],[1,"h1","spaceMono"],[1,"m-0","spaceGrotesk"]],template:function(n,t){1&n&&(a.Jb(0,"div",0),a.Fb(1,"div",1),a.Jb(2,"div",2),a.Ob("indexChange",(function(n){return t.index=n})),a.Jb(3,"div",3),a.ec(4,x,6,5,"div",4),a.Ib(),a.Ib(),a.Ib()),2&n&&(a.ub(2),a.Vb("swiper",t.config)("index",t.index),a.ub(2),a.Vb("ngForOf",t.data))},directives:[h.a,c.i],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.galery[_ngcontent-%COMP%]{height:70vh;background-color:#191051;position:relative}.galery[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{position:absolute;top:60px;right:60px;z-index:300;z-index:100000;height:15px}.galery[_ngcontent-%COMP%]   .slider.img[_ngcontent-%COMP%]{width:100%;height:70vh;position:relative;background-repeat:no-repeat;background-size:cover}"]}),n})();function v(n,t){if(1&n&&(a.Jb(0,"div",5),a.Jb(1,"div",6),a.Fb(2,"img",7),a.Ib(),a.Ib()),2&n){const n=t.$implicit;a.ub(2),a.Vb("src",n.img,a.bc)("alt",n.name)}}let w=(()=>{class n{constructor(){this.configColab={slidesPerView:2,spaceBetween:0,slidesPerGroup:1,loop:!1,breakpoints:{992:{slidesPerView:2},1250:{slidesPerView:3},1450:{slidesPerView:5}}},this.data=i.g.sponsors}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.yb({type:n,selectors:[["app-sponsors"]],decls:6,vars:3,consts:[[1,"sponsors"],[1,"m-0","h3","spaceMono"],[1,"swiper-container",3,"swiper","index","indexChange"],[1,"swiper-wrapper"],["class","swiper-slide colab",4,"ngFor","ngForOf"],[1,"swiper-slide","colab"],[1,"img"],[3,"src","alt"]],template:function(n,t){1&n&&(a.Jb(0,"div",0),a.Jb(1,"h3",1),a.fc(2,"Nuestros patrocinadores:"),a.Ib(),a.Jb(3,"div",2),a.Ob("indexChange",(function(n){return t.index=n})),a.Jb(4,"div",3),a.ec(5,v,3,2,"div",4),a.Ib(),a.Ib(),a.Ib()),2&n&&(a.ub(3),a.Vb("swiper",t.configColab)("index",t.index),a.ub(2),a.Vb("ngForOf",t.data))},directives:[h.a,c.i],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.sponsors[_ngcontent-%COMP%]{height:30vh;background-color:#04d88b;padding:30px 20px;display:flex;align-items:center;flex-direction:column}.sponsors[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#191051}.sponsors[_ngcontent-%COMP%]   .colab[_ngcontent-%COMP%]{width:100%}.sponsors[_ngcontent-%COMP%]   .colab[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:150px}.sponsors[_ngcontent-%COMP%]   .colab[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}"]}),n})();const y=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.yb({type:n,selectors:[["app-we-are"]],decls:6,vars:0,consts:[["id","weAre",1,"weAre"]],template:function(n,t){1&n&&(a.Jb(0,"section",0),a.Fb(1,"app-event"),a.Fb(2,"app-date"),a.Fb(3,"app-agenda"),a.Fb(4,"app-galery"),a.Fb(5,"app-sponsors"),a.Ib())},directives:[g,s,u,m,w],styles:[""]}),n})()}];let I=(()=>{class n{}return n.\u0275mod=a.Cb({type:n}),n.\u0275inj=a.Bb({factory:function(t){return new(t||n)},imports:[[o.d.forChild(y)],o.d]}),n})(),J=(()=>{class n{}return n.\u0275mod=a.Cb({type:n}),n.\u0275inj=a.Bb({factory:function(t){return new(t||n)},imports:[[c.b,h.b,I]]}),n})()}}]);