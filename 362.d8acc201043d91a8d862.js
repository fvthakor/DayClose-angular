(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[362],{2362:(t,e,i)=>{"use strict";i.r(e),i.d(e,{DocumentModule:()=>h});var n=i(8583),o=i(3679),r=i(7716),s=i(8319),a=i(8204);function c(t,e){1&t&&(r.TgZ(0,"div",13),r._uU(1," Name is required. "),r.qZA())}const u=function(t){return{"is-invalid":t}};let d=(()=>{class t{constructor(t,e,i){this.activeModal=t,this.fb=e,this.documentService=i,this.title="Create Document Type",this.buttonText="Create",this.isFormSubmitted=!1,this.createForm()}ngOnInit(){this.angForm.patchValue(this.document),this.title=this.document._id?"Edit Document Type":"Create Document Type",this.buttonText=this.document._id?"Update":"Create"}createForm(){this.angForm=this.fb.group({name:["",[o.kI.required]]})}submitForm(){if(this.isFormSubmitted=!0,this.angForm.invalid)return;const t=this.angForm.value;this.document._id?this.documentService.update(this.document._id,t).subscribe(t=>{this.activeModal.close("form submit")}):this.documentService.create(t).subscribe(t=>{this.activeModal.close("form submit")})}get form(){return this.angForm.controls}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(s.Kz),r.Y36(o.qu),r.Y36(a.Zg))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-create-document"]],inputs:{document:"document"},decls:18,vars:7,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close","btn-danger","text-white",3,"click"],["method","post","novalidate","",3,"formGroup","submit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","mb-3","form-group"],["for","name",1,"col-form-label","lable-right"],["type","text","name","name","formControlName","name","id","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-danger",3,"click"],[1,"invalid-feedback"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h4",1),r._uU(2),r.qZA(),r.TgZ(3,"button",2),r.NdJ("click",function(){return e.activeModal.dismiss("Cross click")}),r.qZA(),r.qZA(),r.TgZ(4,"form",3),r.NdJ("submit",function(){return e.submitForm()}),r.TgZ(5,"div",4),r.TgZ(6,"div",5),r.TgZ(7,"div",6),r.TgZ(8,"label",7),r._uU(9," Name "),r.qZA(),r.TgZ(10,"div"),r._UZ(11,"input",8),r.YNc(12,c,2,0,"div",9),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(13,"div",10),r.TgZ(14,"button",11),r._uU(15),r.qZA(),r.TgZ(16,"button",12),r.NdJ("click",function(){return e.activeModal.close("Close click")}),r._uU(17,"Close"),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.Oqu(e.title),r.xp6(2),r.Q6J("formGroup",e.angForm),r.xp6(7),r.Q6J("ngClass",r.VKq(5,u,e.isFormSubmitted&&e.form.name.errors)),r.xp6(1),r.Q6J("ngIf",e.isFormSubmitted&&(null==e.form.name.errors?null:e.form.name.errors.required)),r.xp6(3),r.Oqu(e.buttonText))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,n.mk,n.O5],styles:[""]}),t})();var l=i(3423),g=i(2789),m=i(2798);function Z(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"tr"),r.TgZ(1,"td"),r.TgZ(2,"span",26),r._uU(3),r.qZA(),r.qZA(),r.TgZ(4,"td",27),r.TgZ(5,"button",28),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().open(e)}),r._UZ(6,"span",29),r.qZA(),r.TgZ(7,"button",30),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().delete(e._id?e._id:"")}),r._UZ(8,"span",31),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(3),r.hij(" ",t.name," "),r.xp6(3),r.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg"),r.xp6(2),r.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen027.svg")}}const p=function(t,e,i){return{id:"server",itemsPerPage:t,currentPage:e,totalItems:i}};let b=(()=>{class t{constructor(t,e,i,n){this.modalService=t,this.documentService=e,this.changeDetectorRef=i,this.helperService=n,this.limit=10,this.total=0,this.page=1,this.documents=[],this.totalPages=0,this.totalPageSize=0,this.query=""}ngOnInit(){this.getPage(1)}open(t){const e=this.modalService.open(d);e.componentInstance.document=t,e.result.then(t=>{"form submit"===t&&this.getPage(1)},t=>{"form submit"===t&&this.getPage(1)})}getPage(t){this.documentService.getAll(t,this.limit,this.query).subscribe(e=>{this.total=e.total,this.page=t,this.documents=e.data;const i=Math.ceil(e.total/this.limit);this.totalPages=i,this.totalPageSize=10*i,this.changeDetectorRef.detectChanges()})}delete(t){this.helperService.confirmSwal({message:"You won't be able to revert this!",title:"Are you sure?",buttonText:"Yes, delete it!"}).subscribe(e=>{e&&this.documentService.delete(t).subscribe(t=>{this.getPage(1)})})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(s.FF),r.Y36(a.Zg),r.Y36(r.sBO),r.Y36(a.W_))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-document"]],decls:37,vars:11,consts:[[1,"page-breadcrumb"],[1,"d-flex","justify-content-between"],[1,"d-flex","justify-content-start"],[1,"d-flex","flex-row"],[1,"p-2"],[1,"form-group"],["type","text","placeholder","search..",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/dashboard"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card"],[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"card-toolbar"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"card-body","py-3"],[1,"table-responsive"],[1,"table","table-row-bordered","table-row-gray-100","align-middle","gs-0","gy-3"],[1,"fw-bolder","text-muted"],[1,"min-w-150px"],[1,"min-w-100px","text-end"],[4,"ngFor","ngForOf"],[1,"d-flex","flex-wrap","justify-content-end","p-2"],[1,"d-flex","justify-content-start",3,"collectionSize","page","pageChange"],[1,"text-dark","fw-bolder","fs-6"],[1,"text-end"],[1,"btn","btn-icon","btn-light-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-light-danger","btn-sm",3,"click"],[1,"svg-icon","svg-danger","svg-icon-3",3,"inlineSVG"]],template:function(t,e){1&t&&(r.TgZ(0,"nav",0),r.TgZ(1,"div",1),r.TgZ(2,"div"),r.TgZ(3,"div",2),r.TgZ(4,"div",3),r.TgZ(5,"div",4),r.TgZ(6,"div",5),r.TgZ(7,"input",6),r.NdJ("ngModelChange",function(t){return e.query=t})("keyup",function(){return e.getPage(1)}),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"div"),r.TgZ(9,"ol",7),r.TgZ(10,"li",8),r.TgZ(11,"a",9),r._uU(12,"Dashboard"),r.qZA(),r.qZA(),r.TgZ(13,"li",10),r._uU(14,"Document Type"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(15,"div",11),r.TgZ(16,"div",12),r.TgZ(17,"h3",13),r.TgZ(18,"span",14),r._uU(19,"Document Type"),r.qZA(),r.qZA(),r.TgZ(20,"div",15),r.TgZ(21,"button",16),r.NdJ("click",function(){return e.open({name:""})}),r._uU(22,"Crate Document Type"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(23,"div",17),r.TgZ(24,"div",18),r.TgZ(25,"table",19),r.TgZ(26,"thead"),r.TgZ(27,"tr",20),r.TgZ(28,"th",21),r._uU(29,"Document Name"),r.qZA(),r.TgZ(30,"th",22),r._uU(31,"Actions"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(32,"tbody"),r.YNc(33,Z,9,3,"tr",23),r.ALo(34,"paginate"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(35,"div",24),r.TgZ(36,"ngb-pagination",25),r.NdJ("pageChange",function(t){return e.page=t})("pageChange",function(t){return e.getPage(t)}),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(7),r.Q6J("ngModel",e.query),r.xp6(26),r.Q6J("ngForOf",r.xi3(34,4,e.documents,r.kEZ(7,p,e.limit,e.page,e.total))),r.xp6(3),r.Q6J("collectionSize",e.totalPageSize)("page",e.page))},directives:[o.Fj,o.JJ,o.On,l.yS,n.sg,s.N9,g.d$],pipes:[m._s],styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,l.Bz.forChild([{path:"",component:b}]),o.u5,o.UX,g.vi,s.jF,m.JX]]}),t})()}}]);