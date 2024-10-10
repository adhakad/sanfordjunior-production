"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[815],{43815:(g,l,c)=>{c.r(l),c.d(l,{TeacherStudentClsModule:()=>T});var d=c(36895),r=c(89299),t=c(94650),s=c(64371),i=c(91081),m=c(67598),p=c(40346),h=c(51572),f=c(88789);function u(n,a){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Admission"),t.qZA())}function C(n,a){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Student"),t.qZA())}function b(n,a){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Admit Card"),t.qZA())}function P(n,a){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Exam Result"),t.qZA())}function _(n,a){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Fee Payment"),t.qZA())}function M(n,a){if(1&n&&(t.TgZ(0,"div",12)(1,"div",1)(2,"div",13)(3,"h3",14),t._uU(4),t.ALo(5,"classSuffix"),t.qZA()()()()),2&n){const e=a.$implicit,o=t.oxw();t.xp6(2),t.hYB("routerLink","/teacher/student/",o.id,"/class/",e,""),t.xp6(2),t.Oqu(t.lcZ(5,3,e))}}function O(n,a){1&n&&t._UZ(0,"mat-progress-spinner",19)}function x(n,a){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,O,1,0,"mat-progress-spinner",18),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.loader)}}function v(n,a){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,x,2,1,"div",16),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loader)}}const k=[{path:"",component:(()=>{class n{constructor(e,o,S){this.activatedRoute=e,this.teacherAuthService=o,this.teacherService=S,this.loader=!0}ngOnInit(){this.teacherInfo=this.teacherAuthService.getLoggedInTeacherInfo();let e=this.teacherInfo?.id;this.activatedRoute.paramMap.subscribe(o=>{this.id=o.get("id"),e&&this.getTeacherById(e)}),setTimeout(()=>{this.loader=!1},1e3)}getTeacherById(e){this.teacherService.getTeacherById(e).subscribe(o=>{o&&("admission"==this.id&&(this.classInfo=1==o.admissionPermission.status&&o.admissionPermission.classes[0]>0?[...o.admissionPermission.classes]:[]),"student"==this.id&&(this.classInfo=1==o.studentPermission.status&&o.studentPermission.classes[0]>0?[...o.studentPermission.classes]:[]),"admit-card"==this.id&&(this.classInfo=1==o.admitCardPermission.status&&o.admitCardPermission.classes[0]>0?[...o.admitCardPermission.classes]:[]),"result"==this.id&&(this.classInfo=1==o.resultPermission.status&&o.resultPermission.classes[0]>0?[...o.resultPermission.classes]:[]),"fees"==this.id&&(this.classInfo=1==o.feeCollectionPermission.status&&o.feeCollectionPermission.classes[0]>0?[...o.feeCollectionPermission.classes]:[]))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.gz),t.Y36(s.J),t.Y36(i.S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-teacher-student-cls"]],decls:22,vars:7,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12"],[1,"main-card"],[1,"col-12","col-lg-4","pt-2","pb-2"],[1,"col-12"],[4,"ngIf"],["class","col-12 col-lg-4 pt-2 pb-4",4,"ngFor","ngForOf"],["class","spinner-container",4,"ngIf"],[1,"col-12","col-lg-4","pt-2","pb-4"],[1,"col-10","offset-1","category-card",3,"routerLink"],[1,"category-title"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(e,o){1&e&&(t._UZ(0,"app-header-nav"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-nav"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",1)(11,"div",7)(12,"div",1)(13,"div",8),t.YNc(14,u,2,0,"h3",9),t.YNc(15,C,2,0,"h3",9),t.YNc(16,b,2,0,"h3",9),t.YNc(17,P,2,0,"h3",9),t.YNc(18,_,2,0,"h3",9),t.qZA()()()(),t.TgZ(19,"div",1),t.YNc(20,M,6,5,"div",10),t.qZA()()()()()()()(),t.YNc(21,v,2,1,"div",11)),2&e&&(t.xp6(14),t.Q6J("ngIf","admission"===o.id),t.xp6(1),t.Q6J("ngIf","student"===o.id),t.xp6(1),t.Q6J("ngIf","admit-card"===o.id),t.xp6(1),t.Q6J("ngIf","result"===o.id),t.xp6(1),t.Q6J("ngIf","fees"===o.id),t.xp6(2),t.Q6J("ngForOf",o.classInfo),t.xp6(1),t.Q6J("ngIf",o.loader))},dependencies:[d.sg,d.O5,r.rH,m.R,p.s,h.Ou,f.N],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 12vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:12vh;left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#21409a;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#3f62a7;width:24px;height:24px}.mobile-menu[_ngcontent-%COMP%]{box-shadow:none}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#000!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:larger;margin-top:5px;color:#3f62a7!important}.mobile-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#3f62a7}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#000!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#33558b}p[_ngcontent-%COMP%]{color:#33558b;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#e9f1ff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#33558b}.form-control[_ngcontent-%COMP%]{height:45px;color:#33558b;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#4881dc;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#e9f1ff;color:#33558b;cursor:not-allowed}.learn-more[_ngcontent-%COMP%]{height:50px;width:225px;background:#f3014d;color:#fff;margin-top:10px!important;box-shadow:none!important}.learn-more[_ngcontent-%COMP%]:hover{height:50px;width:225px;background:rgba(33,150,0,.759);color:#fff;box-shadow:none!important}.learn-more.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ffdde8;color:#682037;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#4881dc;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#33558b;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#33558b}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#33558b;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#33558b}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#4881dc;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#4881dc;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#33558b!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#33558b!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#33558b!important;opacity:.8!important}  .mat-input-element{caret-color:#33558b!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#33558b!important}  .mat-form-field-label{color:#33558b!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#33558b!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#33558b!important}  .mat-radio-button{color:#33558b;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #33558b}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#4881dc}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#4881dc}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#33558b}  .mat-checkbox-frame{border-color:#33558b!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#4881dc!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#4881dc!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#4881dc!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#4881dc!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]{min-height:12vh!important;padding-bottom:15px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:10vh;margin-left:50px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#21409a;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#21409a;font-size:16px;font-family:Poppins,sans-serif!important;font-weight:500;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]{width:150%;padding-left:10px;padding-right:50px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#3f62a7}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#4881dc;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#4881dc;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}"]}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(k),r.Bz]}),n})();var y=c(79516);let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,w,y.k]}),n})()},88789:(g,l,c)=>{c.d(l,{N:()=>r});var d=c(94650);let r=(()=>{class t{transform(i){return i>=4&&i<=12?`${i}th`:1==i?`${i}st`:2==i?`${i}nd`:3==i?`${i}rd`:200==i?"Nursery":201==i?"LKG":202==i?"UKG":void 0}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=d.Yjl({name:"classSuffix",type:t,pure:!0}),t})()}}]);