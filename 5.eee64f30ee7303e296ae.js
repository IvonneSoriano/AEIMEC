(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(n,t,e){"use strict";e.r(t),e.d(t,"HomeModule",(function(){return M}));var o=e("ofXK"),i=e("nhfI"),c=e("tyNb"),a=e("EVdn"),g=e.n(a),s=e("fXoL"),r=e("0hAW");function b(n,t){if(1&n&&(s.Jb(0,"div",11),s.Jb(1,"div",12),s.Jb(2,"h2",13),s.fc(3),s.Ib(),s.Jb(4,"p",14),s.fc(5),s.Ib(),s.Ib(),s.Ib()),2&n){const n=t.$implicit;s.dc("background-image:  linear-gradient(180deg, rgba(25, 16, 81, 0) 29.69%, #191051 90.1%), url(",n.img,");"),s.ub(3),s.gc(n.title),s.ub(2),s.gc(n.description)}}let l=(()=>{class n{constructor(){this.config={resistance:!0,resistanceRatio:.1,autoplay:!0,loop:!0,speed:1e3,mousewheel:!1,parallax:!0,pagination:{el:".pagination",clickable:!0,renderBullet:function(n,t){return'<span class="'+t+'"><div class="parallax-wrap"><div class="parallax-element"></div></div></span>'}},on:{slideChangeTransitionStart:function(){g()(".swiper-slide-active").find("div").each((function(){g()(this).hasClass("active")||g()(this).trigger("click")})),g()(".swiper-slide-duplicate-active").find("div").each((function(){g()(this).hasClass("active")||g()(this).trigger("click")})),g()(".swiper-slide-active").hasClass("change-header")?(g()("#page-content").removeClass("light-content"),g()("#magic-cursor").removeClass("light-content")):(g()("#page-content").addClass("light-content"),g()("#magic-cursor").addClass("light-content")),g()(".swiper-slide-duplicate-active").hasClass("change-header")?(g()("#page-content").removeClass("light-content"),g()("#magic-cursor").removeClass("light-content")):(g()("#page-content").addClass("light-content"),g()("#magic-cursor").addClass("light-content")),g()(".swiper-slide").find(".slide-title").each((function(){g()(this).removeClass("active-title")}))}}},this.data=r.c}ngOnInit(){g()(document).ready((function(){var n=g()("#home").height();g()(".scrollDown").on("click",(function(){g()("html,body").animate({scrollTop:n},800)}))}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.yb({type:n,selectors:[["app-home-slider"]],decls:14,vars:3,consts:[["id","home",1,"home"],[1,"pagination"],[1,"swiper-container",3,"swiper","index","indexChange"],[1,"swiper-wrapper"],["class","swiper-slide slider img",3,"style",4,"ngFor","ngForOf"],[1,"scrollDown"],[1,"m-0","poppins"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 29.64 17.28",1,"ico"],["id","Capa_2","data-name","Capa 2"],["id","Capa_1-2","data-name","Capa 1"],["d","M14.72,11.54a.6.6,0,0,1-.85,0L3,.21a.76.76,0,0,0-1.08,0L.21,2a.77.77,0,0,0,0,1.09l13.64,14a.61.61,0,0,0,.85,0l14.69-14a.76.76,0,0,0,0-1.08L27.68.27a.77.77,0,0,0-1.09,0Z"],[1,"swiper-slide","slider","img"],[1,"info"],[1,"h1","spaceMono"],[1,"m-0","spaceGrotesk"]],template:function(n,t){1&n&&(s.Jb(0,"section",0),s.Fb(1,"div",1),s.Jb(2,"div",2),s.Ob("indexChange",(function(n){return t.index=n})),s.Jb(3,"div",3),s.ec(4,b,6,5,"div",4),s.Ib(),s.Ib(),s.Jb(5,"div",5),s.Jb(6,"p",6),s.fc(7,"Scroll down"),s.Ib(),s.Rb(),s.Jb(8,"svg",7),s.Jb(9,"title"),s.fc(10,"scroll down"),s.Ib(),s.Jb(11,"g",8),s.Jb(12,"g",9),s.Fb(13,"path",10),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Ib()),2&n&&(s.ub(2),s.Vb("swiper",t.config)("index",t.index),s.ub(2),s.Vb("ngForOf",t.data.sliders))},directives:[i.a,o.i],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.home[_ngcontent-%COMP%]{height:100vh;width:100%;background-color:#eee;position:relative}.home[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{position:absolute;top:60px;right:60px;z-index:300;z-index:100000;height:15px}.home[_ngcontent-%COMP%]   .slider.img[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative;background-repeat:no-repeat;background-size:cover}.home.text[_ngcontent-%COMP%]{position:absolute;bottom:50px}.home.text[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{color:pink}.home[_ngcontent-%COMP%]   .scrollDown[_ngcontent-%COMP%]{position:absolute;z-index:10000;bottom:50px;font-weight:700;color:#f0f0f0;text-align:center;left:50%;transform:translateX(-50%);font-size:14px;cursor:pointer;line-height:21px}.home[_ngcontent-%COMP%]   .scrollDown[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{fill:#f0f0f0;width:12px;height:12px}@media (max-width:1024px){.home[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{top:40px;right:20%}.home[_ngcontent-%COMP%]   .slider.img[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:90%;font-size:18px;line-height:24px}.home[_ngcontent-%COMP%]   .scrollDown[_ngcontent-%COMP%]{bottom:10%}}@media (max-width:768px){.home[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{right:10%}}"]}),n})();function d(n,t){if(1&n&&(s.Jb(0,"div",23),s.Jb(1,"h3",24),s.fc(2),s.Ib(),s.Jb(3,"p",5),s.fc(4),s.Ib(),s.Ib()),2&n){const n=t.$implicit;s.ub(2),s.gc(n.title),s.ub(2),s.hc(" ",n.description," ")}}function p(n,t){if(1&n&&(s.Jb(0,"div",25),s.Jb(1,"div",26),s.Fb(2,"img",27),s.Ib(),s.Jb(3,"div",28),s.Jb(4,"h4",29),s.fc(5),s.Ib(),s.Jb(6,"p",30),s.fc(7),s.Ib(),s.Ib(),s.Ib()),2&n){const n=t.$implicit;s.ub(2),s.Vb("src",n.img,s.bc)("alt",n.job),s.ub(3),s.gc(n.fullname),s.ub(2),s.gc(n.job)}}let m=(()=>{class n{constructor(){this.config={slidesPerView:2,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{992:{slidesPerView:2},1250:{slidesPerView:3},1450:{slidesPerView:5}}},this.subtitle=r.a.subtitle,this.generalInfo=r.a.generalInfo,this.members=r.a.members}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.yb({type:n,selectors:[["app-about-us"]],decls:29,vars:10,consts:[["id","aboutUs",1,"aboutUs","container-fluid"],[1,"sutitle","row"],[1,"col-6","img"],[1,"info"],[1,"m-0","h2","spaceMono","mb-2"],[1,"poppins"],[1,"row","generalInfo","mb-2"],["class","text",4,"ngFor","ngForOf"],[1,"membersInfo"],[1,"members"],[1,"title"],[1,"m-0","h3","spaceMono","mb-2"],[1,"navigation","d-flex"],["type","button",1,"button-prev"],["src","assets/img/left.svg","alt","Prev"],["type","button",1,"button-next"],["src","assets/img/right.svg","alt","Next"],[1,"swiper-container",3,"swiper","index","indexChange"],[1,"swiper-wrapper"],["class","swiper-slide member",4,"ngFor","ngForOf"],[1,"ad","d-flex","poppins"],[3,"href"],["type","button",1,"btn"],[1,"text"],[1,"m-0","h3","spaceMono"],[1,"swiper-slide","member"],[1,"img"],[3,"src","alt"],[1,"info","poppins"],[1,"m-0","h4"],[1,"m-0"]],template:function(n,t){1&n&&(s.Jb(0,"section",0),s.Jb(1,"div",1),s.Fb(2,"div",2),s.Jb(3,"div",3),s.Jb(4,"h2",4),s.fc(5),s.Ib(),s.Jb(6,"p",5),s.fc(7),s.Ib(),s.Ib(),s.Ib(),s.Jb(8,"div",6),s.ec(9,d,5,2,"div",7),s.Ib(),s.Jb(10,"div",8),s.Jb(11,"div",9),s.Jb(12,"div",10),s.Jb(13,"h3",11),s.fc(14),s.Ib(),s.Jb(15,"div",12),s.Jb(16,"button",13),s.Fb(17,"img",14),s.Ib(),s.Jb(18,"button",15),s.Fb(19,"img",16),s.Ib(),s.Ib(),s.Ib(),s.Jb(20,"div",17),s.Ob("indexChange",(function(n){return t.index=n})),s.Jb(21,"div",18),s.ec(22,p,8,4,"div",19),s.Ib(),s.Ib(),s.Ib(),s.Jb(23,"div",20),s.Jb(24,"p"),s.fc(25),s.Ib(),s.Jb(26,"a",21),s.Jb(27,"button",22),s.fc(28),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Ib()),2&n&&(s.ub(5),s.gc(t.subtitle.title),s.ub(2),s.gc(t.subtitle.description),s.ub(2),s.Vb("ngForOf",t.generalInfo),s.ub(5),s.gc(t.members.title),s.ub(6),s.Vb("swiper",t.config)("index",t.index),s.ub(2),s.Vb("ngForOf",t.members.members),s.ub(3),s.gc(t.members.ad.title),s.ub(1),s.Vb("href",t.members.ad.url,s.bc),s.ub(2),s.gc(t.members.ad.btnInfo))},directives:[o.i,i.a],styles:[".bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.aboutUs[_ngcontent-%COMP%]{min-height:100vh}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]{height:385px;position:relative}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:385px;background-color:#ddd}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{position:absolute;background:rgba(33,4,218,.8);height:225px;max-width:510px;top:50%;padding:25px;left:50%;transform:translate(-50%,-50%)}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#04d88b}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%]{padding:40px 80px 40px 40px;background-color:#04d88b;justify-content:space-between}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{padding:0 40px}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:6px}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:400px}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]{position:relative}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]{padding:20px 60px}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;position:relative;justify-content:space-between;align-items:center}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:10px;border:none;background-color:initial;cursor:pointer;outline:none!important}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{margin-right:0}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10px;height:10px}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]{background-size:cover;text-align:center}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:200px;overflow:hidden}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:15px 20px;text-align:center}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%]{background-color:#2104da;align-items:center;justify-content:space-between;padding:20px 60px;margin-right:-15px;margin-left:-15px}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f0f0f0}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:700;text-align:center;background-color:#16ffaa;color:#5d44ff}@media (max-width:1024px){.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]{height:60vh}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:100%;background-color:#ddd}.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{right:17px;left:unset;width:70%;height:unset;transform:translateY(-50%)}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%]{flex-direction:column;align-items:center;padding:40px 20px;text-align:center}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{padding:0;margin-bottom:30px}.aboutUs[_ngcontent-%COMP%]   .generalInfo[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]{margin-right:-15px;margin-left:-15px}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]{padding:40px 20px}.aboutUs[_ngcontent-%COMP%]   .membersInfo[_ngcontent-%COMP%]   .members[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:40px}.aboutUs[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-between;align-items:center}.aboutUs[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f0f0f0}.aboutUs[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:700;text-align:center;background-color:#16ffaa;color:#5d44ff}}@media (max-height:710px){.aboutUs[_ngcontent-%COMP%]   .sutitle[_ngcontent-%COMP%]{height:80vh}}"]}),n})(),C=(()=>{class n{constructor(){this.data=r.b,this.email=this.data.email,this.data.email=screen.width<=1024?"e-mail":this.data.email,this.facebook=r.f.facebook,this.instagram=r.f.instagram,this.whatsapp=r.f.whatsapp}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.yb({type:n,selectors:[["app-contact-us"]],decls:34,vars:6,consts:[["id","contactUs",1,"contactUs"],[1,"info"],[1,"m-0","h2","spaceMono"],[1,"img"],[1,"footer"],[1,"socialNet"],[1,"social",3,"href"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 16.67 35.73",1,"ico"],["id","Capa_2","data-name","Capa 2"],["id","Capa_1-2","data-name","Capa 1"],["d","M11.91,7.15h4.76V0H11.19C3.42,0,3.61,6.26,3.61,7.2v4.71H0v7.15H3.61V35.73h7.11V19.06h4.76l1.19-7.15h-6V8.34A1.08,1.08,0,0,1,11.91,7.15Z"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 34 34",1,"ico"],["d","M25,0H9A9.08,9.08,0,0,0,0,9.15v15.7A9.08,9.08,0,0,0,9,34H25a9.08,9.08,0,0,0,9-9.15V9.15A9.08,9.08,0,0,0,25,0ZM31,24.62A6.3,6.3,0,0,1,24.75,31H9.25A6.3,6.3,0,0,1,3,24.62V9.38A6.3,6.3,0,0,1,9.25,3h15.5A6.3,6.3,0,0,1,31,9.38Z"],["d","M17,8.27A8.64,8.64,0,0,0,8.45,17,8.64,8.64,0,0,0,17,25.73,8.64,8.64,0,0,0,25.55,17,8.64,8.64,0,0,0,17,8.27Zm0,14.36A5.63,5.63,0,1,1,22.51,17,5.57,5.57,0,0,1,17,22.63Z"],["cx","26.01","cy","7.8","rx","1.93","ry","1.97"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 33.22 33.22",1,"ico"],["d","M25.41,20.21c-.1-.17-.37-.27-.78-.48s-2.42-1.18-2.79-1.31-.65-.21-.92.2-1.06,1.32-1.3,1.59-.48.3-.88.1a11.08,11.08,0,0,1-3.29-2,11.84,11.84,0,0,1-2.27-2.8c-.24-.41,0-.63.18-.83s.41-.47.61-.71a2.87,2.87,0,0,0,.41-.67.74.74,0,0,0,0-.71c-.1-.2-.92-2.2-1.26-3s-1.43-.71-1.7-.71a1.9,1.9,0,0,0-1.09.51,4.32,4.32,0,0,0-1.43,3.38,7.76,7.76,0,0,0,1.67,4.18c.2.27,3.05,4.45,7.19,6.11,3.88,1.57,4.75,1.43,5.54,1.16a3.73,3.73,0,0,0,1.91-2.07,3.37,3.37,0,0,0,.24-1.92Z"],["d","M16.61,0A16.61,16.61,0,0,0,0,16.61a16.41,16.41,0,0,0,2.13,8.1L0,33.22,8.51,31.1A16.61,16.61,0,1,0,16.61,0Zm0,31a14.3,14.3,0,0,1-7.8-2.32h0l-2.87.63h0l-2.61.58,1.3-5.17h0l0-.12a14.39,14.39,0,1,1,12,6.4Z"],[3,"href"],[1,"btn","poppins"]],template:function(n,t){1&n&&(s.Jb(0,"section",0),s.Jb(1,"div",1),s.Jb(2,"h2",2),s.fc(3),s.Ib(),s.Fb(4,"div",3),s.Jb(5,"div",4),s.Jb(6,"div",5),s.Jb(7,"a",6),s.Rb(),s.Jb(8,"svg",7),s.Jb(9,"title"),s.fc(10,"facebook ico"),s.Ib(),s.Jb(11,"g",8),s.Jb(12,"g",9),s.Fb(13,"path",10),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Qb(),s.Jb(14,"a",6),s.Rb(),s.Jb(15,"svg",11),s.Jb(16,"title"),s.fc(17,"instagram ico"),s.Ib(),s.Jb(18,"g",8),s.Jb(19,"g",9),s.Fb(20,"path",12),s.Fb(21,"path",13),s.Fb(22,"ellipse",14),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Qb(),s.Jb(23,"a",6),s.Rb(),s.Jb(24,"svg",15),s.Jb(25,"title"),s.fc(26,"whatsapp ico"),s.Ib(),s.Jb(27,"g",8),s.Jb(28,"g",9),s.Fb(29,"path",16),s.Fb(30,"path",17),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Qb(),s.Jb(31,"a",18),s.Jb(32,"button",19),s.fc(33),s.Ib(),s.Ib(),s.Ib(),s.Ib(),s.Ib()),2&n&&(s.ub(3),s.gc(t.data.title),s.ub(4),s.Vb("href",t.facebook,s.bc),s.ub(7),s.Vb("href",t.instagram,s.bc),s.ub(9),s.Vb("href",t.whatsapp,s.bc),s.ub(8),s.Wb("href","mailto:",t.email,"",s.bc),s.ub(2),s.gc(t.data.email))},styles:['.bg-ly-Primary[_ngcontent-%COMP%]{background-color:#006fff}.f-ly-Secondary[_ngcontent-%COMP%]{color:#04d88b}.f-ly-White[_ngcontent-%COMP%]{color:#f0f0f0}.contactUs[_ngcontent-%COMP%]{height:100vh;background-image:linear-gradient(180deg,rgba(0,111,255,0),rgba(0,111,255,.7));display:flex;align-items:center;justify-content:center}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{background-color:#04d88b;width:95%;padding:17px 40px}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#2104da}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{margin:20px 0;width:100%;height:270px;background-color:rgba(0,0,0,.5)}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .socialNet[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:50%;border:none;outline:none!important;cursor:pointer;padding:0!important;background-color:initial;margin-right:39px}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .socialNet[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]:last-of-type{margin-right:0}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .socialNet[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{fill:#2104da;height:18px}.contactUs[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#2104da;color:#fff;text-align:center}@media (max-width:1024px){.contactUs[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{content:"HOLA"}}']}),n})();const f=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){g()(document).ready((function(){g()(window).on("scroll",(function(){g()(document).scrollTop(),g()(document).height()}))}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.yb({type:n,selectors:[["app-home"]],decls:3,vars:0,template:function(n,t){1&n&&(s.Fb(0,"app-home-slider"),s.Fb(1,"app-about-us"),s.Fb(2,"app-contact-us"))},directives:[l,m,C],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=s.Cb({type:n}),n.\u0275inj=s.Bb({factory:function(t){return new(t||n)},imports:[[c.d.forChild(f)],c.d]}),n})(),M=(()=>{class n{}return n.\u0275mod=s.Cb({type:n}),n.\u0275inj=s.Bb({factory:function(t){return new(t||n)},providers:[],imports:[[o.b,i.b,u]]}),n})()}}]);