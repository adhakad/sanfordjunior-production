"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[947],{98947:(F,A,r)=>{r.r(A),r.d(A,{ResultModule:()=>ct});var I=r(36895),y=r(89299),c=r(24006),t=r(94650),d=r(87129),J=r(38283),G=r(87258),Y=r(22759),E=r(462),L=r(97496),Q=r(3238),w=r(4859),q=r(59549),z=r(44144),D=r(51572),K=r(84385),B=r(88789);const $=["content"];function H(n,i){1&n&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Please enter admission no."),t.qZA())}function W(n,i){if(1&n&&(t.TgZ(0,"div")(1,"mat-option",18),t._uU(2),t.ALo(3,"classSuffix"),t.qZA()()),2&n){const e=i.$implicit;t.xp6(1),t.s9C("value",e.class),t.xp6(1),t.Oqu(t.lcZ(3,2,e.class))}}function X(n,i){1&n&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Class is required"),t.qZA())}function V(n,i){1&n&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Please enter roll number."),t.qZA())}function tt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",4)(2,"div",7)(3,"h3"),t._uU(4,"Exam Result"),t.qZA(),t.TgZ(5,"div",8)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"form",9),t.NdJ("ngSubmit",function(){t.CHM(e);const u=t.oxw(2);return t.KtG(u.examResult())}),t.TgZ(9,"mat-form-field",10)(10,"mat-label"),t._uU(11,"Admission No."),t.qZA(),t._UZ(12,"input",11),t.YNc(13,H,2,0,"mat-hint",12),t.qZA(),t.TgZ(14,"mat-form-field",10)(15,"mat-label"),t._uU(16,"class"),t.qZA(),t.TgZ(17,"mat-select",13),t.YNc(18,W,4,4,"div",14),t.qZA(),t.YNc(19,X,2,0,"mat-hint",12),t.qZA(),t.TgZ(20,"mat-form-field",10)(21,"mat-label"),t._uU(22,"Roll Number"),t.qZA(),t._UZ(23,"input",15),t.YNc(24,V,2,0,"mat-hint",12),t.qZA(),t.TgZ(25,"button",16),t._uU(26,"Submit"),t.qZA()()()()()()}if(2&n){const e=t.oxw(2);let o,u,M;t.xp6(7),t.Oqu(e.errorMsg),t.xp6(1),t.Q6J("formGroup",e.examResultForm),t.xp6(5),t.Q6J("ngIf",!(null!=(o=e.examResultForm.get("admissionNo"))&&o.valid)&&(null==(o=e.examResultForm.get("admissionNo"))?null:o.touched)),t.xp6(5),t.Q6J("ngForOf",e.classInfo),t.xp6(1),t.Q6J("ngIf",!(null!=(u=e.examResultForm.get("class"))&&u.valid)&&(null==(u=e.examResultForm.get("class"))?null:u.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(M=e.examResultForm.get("rollNumber"))&&M.valid)&&(null==(M=e.examResultForm.get("rollNumber"))?null:M.touched)),t.xp6(1),t.Q6J("disabled",!e.examResultForm.valid)}}function et(n,i){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,tt,27,7,"div",5),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",!e.examResultInfo)}}function nt(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"titlecase"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA()()),2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(t.lcZ(5,6,e.subject)),t.xp6(3),t.Oqu(e.theoryMarks),t.xp6(2),t.Oqu(e.practicalMarks>0?e.practicalMarks:""),t.xp6(2),t.Oqu(e.totalMarks),t.xp6(2),t.Oqu(e.grade)}}function ot(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",19)(1,"div",4)(2,"div",20,21)(4,"div",22)(5,"table",23)(6,"tr")(7,"td"),t._UZ(8,"img",24),t._uU(9),t.ALo(10,"uppercase"),t.ALo(11,"uppercase"),t.qZA()()(),t.TgZ(12,"table",25)(13,"tr")(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"titlecase"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()(),t.TgZ(21,"table",25)(22,"tr")(23,"td",26),t._uU(24,"Admission No. :"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td",26),t._uU(28,"Roll Number :"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA(),t.TgZ(31,"td",26),t._uU(32,"Class :"),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.ALo(35,"classSuffix"),t.qZA()(),t.TgZ(36,"tr")(37,"td",26),t._uU(38,"Student Name :"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.ALo(41,"titlecase"),t.qZA(),t.TgZ(42,"td",26),t._uU(43,"Father Name :"),t.qZA(),t.TgZ(44,"td"),t._uU(45),t.ALo(46,"titlecase"),t.qZA(),t.TgZ(47,"td",26),t._uU(48,"Mother Name :"),t.qZA(),t.TgZ(49,"td"),t._uU(50),t.ALo(51,"titlecase"),t.qZA()()(),t.TgZ(52,"table",27)(53,"tr")(54,"th"),t._uU(55,"S.No."),t.qZA(),t.TgZ(56,"th"),t._uU(57,"Subject"),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Theory Marks"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Practical Marks"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"Total Marks"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Grade"),t.qZA()(),t.YNc(66,nt,14,8,"tr",14),t.qZA(),t.TgZ(67,"table",27)(68,"tr")(69,"td")(70,"span",26),t._uU(71,"Result Status"),t.qZA(),t._uU(72),t.qZA(),t.TgZ(73,"td")(74,"span",26),t._uU(75,"Grand Total (Theory + Practical/Internal Marks)"),t.qZA(),t._uU(76),t.qZA(),t.TgZ(77,"td")(78,"span",26),t._uU(79,"Percentage"),t.qZA(),t._uU(80),t.qZA(),t.TgZ(81,"td")(82,"span",26),t._uU(83,"Overall Grade"),t.qZA(),t._uU(84),t.qZA()()(),t.TgZ(85,"div")(86,"h4",26),t._uU(87,"Disclaimer:"),t.qZA(),t.TgZ(88,"p"),t._uU(89,"This is your online exam result, issued in accordance with our institution's policies. Please take note of the following:"),t.qZA(),t.TgZ(90,"p"),t._uU(91),t.qZA(),t.TgZ(92,"p"),t._uU(93,"2. Verify Accuracy: Review the result for accuracy, including your name, exam details, and scores. Report any discrepancies to the Examination Office for correction."),t.qZA(),t.TgZ(94,"p"),t._uU(95,"3. Confidential: This result is meant for your use only and should not be shared or used by others."),t.qZA(),t.TgZ(96,"p"),t._uU(97,"4. Record Keeping: Keep this result document for your records. It may be required for future reference or academic purposes."),t.qZA(),t.TgZ(98,"p"),t._uU(99,"5. Lost or Damaged: In case of loss or damage to the result, please contact the Examination Office for a duplicate or replacement. A fee may apply."),t.qZA(),t.TgZ(100,"p"),t._uU(101,"6. Academic Integrity: It is essential to maintain academic integrity and adhere to the school's code of conduct in all academic matters."),t.qZA(),t.TgZ(102,"p"),t._uU(103,"Your acceptance and retention of this result indicate your understanding and agreement with the terms and conditions outlined in this disclaimer."),t.qZA()()()()(),t.TgZ(104,"div",4)(105,"div",28)(106,"button",29),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.downloadPDF())}),t._uU(107,"PDF"),t.qZA(),t.TgZ(108,"button",30),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.printContent())}),t._uU(109,"Print"),t.qZA()()(),t._UZ(110,"app-footer"),t.qZA()}if(2&n){const e=t.oxw();t.xp6(9),t.AsE(" ",t.lcZ(10,19,null==e.schoolInfo?null:e.schoolInfo.schoolName),", ",t.lcZ(11,21,null==e.schoolInfo?null:e.schoolInfo.city)," "),t.xp6(6),t.hij(" School Code : ",null==e.schoolInfo?null:e.schoolInfo.schoolCode," "),t.xp6(2),t.AsE(" ",t.lcZ(18,23,null==e.examResultInfo?null:e.examResultInfo.examType)," Exam Result - ",null==e.studentInfo?null:e.studentInfo.session," "),t.xp6(3),t.hij(" Affiliation No. : ",null==e.schoolInfo?null:e.schoolInfo.affiliationNumber," "),t.xp6(6),t.Oqu(null==e.studentInfo?null:e.studentInfo.admissionNo),t.xp6(4),t.Oqu(null==e.studentInfo?null:e.studentInfo.rollNumber),t.xp6(4),t.Oqu(t.lcZ(35,25,null==e.studentInfo?null:e.studentInfo.class)),t.xp6(6),t.Oqu(t.lcZ(41,27,null==e.studentInfo?null:e.studentInfo.name)),t.xp6(5),t.Oqu(t.lcZ(46,29,null==e.studentInfo?null:e.studentInfo.fatherName)),t.xp6(5),t.Oqu(t.lcZ(51,31,null==e.studentInfo?null:e.studentInfo.motherName)),t.xp6(16),t.Q6J("ngForOf",e.examResultInfo.marks),t.xp6(6),t.hij(" : ",e.examResultInfo.resultStatus," "),t.xp6(4),t.AsE(" : ",null==e.examResultInfo?null:e.examResultInfo.grandTotalMarks,"/",null==e.examResultInfo?null:e.examResultInfo.totalMaxMarks," "),t.xp6(4),t.hij(" : ",null==e.examResultInfo?null:e.examResultInfo.percentile,"% "),t.xp6(4),t.hij(" : ",null==e.examResultInfo?null:e.examResultInfo.percentileGrade," "),t.xp6(7),t.hij("1. Result Identification: This document serves as your official exam result for the specified examination at ",null==e.schoolInfo?null:e.schoolInfo.schoolName,".")}}function st(n,i){1&n&&t._UZ(0,"mat-progress-spinner",35)}function at(n,i){if(1&n&&(t.TgZ(0,"div",33),t.YNc(1,st,1,0,"mat-progress-spinner",34),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.loader)}}function rt(n,i){if(1&n&&(t.TgZ(0,"div",31),t.YNc(1,at,2,1,"div",32),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loader)}}const lt=[{path:"",component:(()=>{class n{constructor(e,o,u,M,k){this.fb=e,this.schoolService=o,this.printPdfService=u,this.examResultService=M,this.classService=k,this.errorMsg="",this.processedData=[],this.loader=!1,this.examResultForm=this.fb.group({admissionNo:["",c.kI.required],class:["",c.kI.required],rollNumber:["",c.kI.required]})}ngOnInit(){this.getClass(),this.getSchool()}printContent(){this.printPdfService.printElement(this.content.nativeElement)}downloadPDF(){this.printPdfService.generatePDF(this.content.nativeElement,"Result.pdf")}getSchool(){this.schoolService.getSchool().subscribe(e=>{e&&(this.schoolInfo=e)})}getClass(){this.classService.getClassList().subscribe(e=>{e&&(this.classInfo=e)})}examResult(){this.examResultService.singleStudentExamResult(this.examResultForm.value).subscribe(e=>{if(e){let u=function(b,S){let Z=0;for(let h=0;h<b.length;h++){const s=b[h],a=S[h],l=Object.keys(s)[0],f=parseInt(s[l]);parseInt(a[l])<f&&Z++}return Z};this.loader=!0,this.studentInfo=e.studentInfo;let o=e.examResult;this.resultStructureInfo=e.examResultStructure;const M=u(this.resultStructureInfo.theoryPassMarks,o.theoryMarks);let k;k=0===M?"PASS":M<=2?"SUPPLY":"FAIL";let v=0,O="",x=0;if(o.practicalMarks){this.examResultInfo={};const Z=this.resultStructureInfo.theoryMaxMarks.reduce((s,a)=>{const l=Object.keys(a)[0],f=this.resultStructureInfo.theoryMaxMarks.find(g=>Object.keys(g)[0]===l);return s+(f?parseFloat(f[l]):0)},0)+this.resultStructureInfo.practicalMaxMarks.reduce((s,a)=>{const l=Object.keys(a)[0],f=this.resultStructureInfo.practicalMaxMarks.find(g=>Object.keys(g)[0]===l);return s+(f?parseFloat(f[l]):0)},0);this.examResultInfo={class:o.class,examType:o.examType,rollNumber:o.rollNumber,admissionNo:o.admissionNo,marks:o.theoryMarks.map(s=>{const a=Object.keys(s)[0],l=parseFloat(s[a]),f=o.practicalMarks.find(p=>Object.keys(p)[0]===a),m=f?parseFloat(f[a]):0,g=l+m,T=this.resultStructureInfo.theoryMaxMarks.find(p=>p.hasOwnProperty(a))[a],R=this.resultStructureInfo.practicalMaxMarks.find(p=>Object.keys(p)[0]===a),_=R?parseFloat(R[a]):0,N=(g/(parseFloat(T)+_)*100).toFixed(0);let j="";const C=this.resultStructureInfo.gradeMaxMarks,P=this.resultStructureInfo.gradeMinMarks;for(let p=0;p<C.length;p++){const dt=Object.values(C[p])[0];if(N>=P[p][Object.keys(P[p])[0]]&&N<=dt){j=Object.keys(C[p])[0];break}}return{subject:a,theoryMarks:l,practicalMarks:m,totalMarks:g,grade:j}})},v=this.examResultInfo.marks.reduce((s,a)=>s+a.totalMarks,0),x=v/Z*100,x=parseFloat(x.toFixed(2));const h=parseFloat(x.toFixed(0));for(let s=0;s<this.resultStructureInfo.gradeMaxMarks.length;s++){const a=parseFloat(String(Object.values(this.resultStructureInfo.gradeMaxMarks[s])[0])),l=parseFloat(String(Object.values(this.resultStructureInfo.gradeMinMarks[s])[0]));if(!isNaN(a)&&!isNaN(l)&&h>=l&&h<=a){O=Object.keys(this.resultStructureInfo.gradeMaxMarks[s])[0];break}}this.examResultInfo.grandTotalMarks=v,this.examResultInfo.totalMaxMarks=Z,this.examResultInfo.percentile=x,this.examResultInfo.percentileGrade=O,this.examResultInfo.resultStatus=k}if(!o.practicalMarks){this.examResultInfo={};const Z=this.resultStructureInfo.theoryMaxMarks.reduce((s,a)=>{const l=Object.keys(a)[0],f=this.resultStructureInfo.theoryMaxMarks.find(g=>Object.keys(g)[0]===l);return s+(f?parseFloat(f[l]):0)},0)+0;this.examResultInfo={class:o.class,examType:o.examType,rollNumber:o.rollNumber,admissionNo:o.admissionNo,marks:o.theoryMarks.map(s=>{const a=Object.keys(s)[0],l=parseFloat(s[a]),m=l+0;let g="";const T=this.resultStructureInfo.gradeMaxMarks,R=this.resultStructureInfo.gradeMinMarks;for(let _=0;_<T.length;_++){const U=Object.values(T[_])[0];if(m>=R[_][Object.keys(R[_])[0]]&&m<=U){g=Object.keys(T[_])[0];break}}return{subject:a,theoryMarks:l,practicalMarks:0,totalMarks:m,grade:g}})},v=this.examResultInfo.marks.reduce((s,a)=>s+a.totalMarks,0),x=v/Z*100,x=parseFloat(x.toFixed(2));const h=parseFloat(x.toFixed(0));for(let s=0;s<this.resultStructureInfo.gradeMaxMarks.length;s++){const a=parseFloat(String(Object.values(this.resultStructureInfo.gradeMaxMarks[s])[0])),l=parseFloat(String(Object.values(this.resultStructureInfo.gradeMinMarks[s])[0]));if(!isNaN(a)&&!isNaN(l)&&h>=l&&h<=a){O=Object.keys(this.resultStructureInfo.gradeMaxMarks[s])[0];break}}this.examResultInfo.grandTotalMarks=v,this.examResultInfo.totalMaxMarks=Z,this.examResultInfo.percentile=x,this.examResultInfo.percentileGrade=O,this.examResultInfo.resultStatus=k}setTimeout(()=>{this.loader=!1},1500)}},e=>{this.errorMsg=e.error.errorMsg})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(d.E),t.Y36(J.Z),t.Y36(G.k),t.Y36(Y.j))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-result"]],viewQuery:function(e,o){if(1&e&&t.Gf($,5),2&e){let u;t.iGM(u=t.CRH())&&(o.content=u.first)}},decls:4,vars:3,consts:[["class","login",4,"ngIf"],["class","container-fluid",4,"ngIf"],["class","spinner-container",4,"ngIf"],[1,"login"],[1,"row"],["class","col-12 col-lg-5 offset-lg-3 login-card",4,"ngIf"],[1,"col-12","col-lg-5","offset-lg-3","login-card"],[1,"col-12","col-lg-10","offset-lg-1"],[1,"col-12"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","admissionNo"],["class","form-text text-danger",4,"ngIf"],["type","number","matInput","","formControlName","class"],[4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","rollNumber"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"form-text","text-danger"],[3,"value"],[1,"container-fluid"],[1,"col-lg-10","offset-lg-1","custom-container"],["content",""],[1,"table-container"],[1,"logo-table","text-bold"],["src","../../../../assets/logo.png","alt",""],[1,"info-table"],[1,"text-bold"],[1,"custom-table"],[1,"col-lg-10","offset-lg-1","mt-4","mb-4"],["mat-raised-button","",1,"submit-button","print-pdf","mx-4",3,"click"],["mat-raised-button","",1,"submit-button","print-pdf",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(e,o){1&e&&(t._UZ(0,"app-header"),t.YNc(1,et,3,1,"div",0),t.YNc(2,ot,111,33,"div",1),t.YNc(3,rt,2,1,"div",2)),2&e&&(t.xp6(1),t.Q6J("ngIf",!o.examResultInfo),t.xp6(1),t.Q6J("ngIf",o.examResultInfo&&o.studentInfo),t.xp6(1),t.Q6J("ngIf",o.loader))},dependencies:[I.sg,I.O5,E.G,L.c,Q.ey,w.lW,q.KE,q.bx,q.hX,z.Nt,D.Ou,K.gD,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,I.gd,I.rS,B.N],styles:[".login[_ngcontent-%COMP%]{background-color:#fff;padding-top:10vh;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{background-color:#fff;padding-top:5vh;padding-bottom:5vh;box-shadow:none}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%]{color:#33558b;padding-bottom:2vh;letter-spacing:.6px;font-size:18px;font-weight:500;margin-bottom:5px;text-align:center}h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}p[_ngcontent-%COMP%]{color:#33558b;margin-top:2vh;letter-spacing:.25px;font-size:16px;margin-bottom:5px}a[_ngcontent-%COMP%]{color:#33558b;font-size:16px;font-weight:500;letter-spacing:.25px;text-decoration:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}@media (min-width:1200px){.login[_ngcontent-%COMP%]{min-height:90vh;padding-top:5vh;background-color:#f1f4f9;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{margin-top:2vh;margin-left:30%;margin-bottom:10vh;border-radius:15px;box-shadow:0 0 1px -10px #f1f4f9,0 0 #f1f4f9,0 0 15px #d2e1fc}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:48px;margin-bottom:15px}}.info-table[_ngcontent-%COMP%]{text-align:center}@media (min-width: 992px){.container-fluid[_ngcontent-%COMP%]{padding-top:3vh;background-color:#64748d15}.table-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;border:1px solid rgba(218,218,224,.858)}}"]}),n})()}];let it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[y.Bz.forChild(lt),y.Bz]}),n})();var ut=r(32882);let ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[I.ez,it,ut.S]}),n})()},88789:(F,A,r)=>{r.d(A,{N:()=>y});var I=r(94650);let y=(()=>{class c{transform(d){return d>=4&&d<=12?`${d}th`:1==d?`${d}st`:2==d?`${d}nd`:3==d?`${d}rd`:200==d?"Nursery":201==d?"LKG":202==d?"UKG":void 0}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275pipe=I.Yjl({name:"classSuffix",type:c,pure:!0}),c})()}}]);