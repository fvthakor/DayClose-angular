(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[782],{9782:(e,t,o)=>{"use strict";o.r(t),o.d(t,{UserModule:()=>be});var r=o(8583),n=o(3679),i=o(89),s=o(7716),a=o(3423),l=o(8204),m=o(8319);function c(e,t){if(1&e&&(s.ynx(0),s._uU(1),s.BQk()),2&e){const e=s.oxw().ngIf,t=s.oxw();s.xp6(1),s.hij(" ",t.getCity(e)," ")}}function u(e,t){1&e&&(s.ynx(0),s.TgZ(1,"div",35),s.TgZ(2,"div",36),s._uU(3," The registration details are incorrect "),s.qZA(),s.qZA(),s.BQk())}const g=function(e,t){return{"is-invalid":e,"is-valid":t}},d=function(e){return{validation:"required",message:"Address is required",control:e}};function p(e,t){if(1&e&&(s.TgZ(0,"div",12),s.TgZ(1,"label",6),s._uU(2,"Address"),s.qZA(),s._UZ(3,"input",37),s.GkF(4,8),s.qZA()),2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(3,g,e.registrationForm.controls.address.invalid,e.registrationForm.controls.address.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(6,d,e.registrationForm.controls.address))}}function f(e,t){if(1&e&&(s.TgZ(0,"option",39),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e._id),s.xp6(1),s.Oqu(e.name)}}const h=function(e){return{validation:"required",message:"county is required",control:e}};function Z(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",12),s.TgZ(1,"label",6),s._uU(2,"County"),s.qZA(),s.TgZ(3,"select",38),s.NdJ("change",function(){return s.CHM(e),s.oxw(2).getCities()}),s.TgZ(4,"option",20),s._uU(5,"--Select County--"),s.qZA(),s.YNc(6,f,2,2,"option",21),s.qZA(),s.GkF(7,8),s.qZA()}if(2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(4,g,e.registrationForm.controls.county.invalid,e.registrationForm.controls.county.valid)),s.xp6(3),s.Q6J("ngForOf",e.counties),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(7,h,e.registrationForm.controls.county))}}function q(e,t){if(1&e&&(s.TgZ(0,"option",39),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e._id),s.xp6(1),s.Oqu(e.name)}}const x=function(e){return{validation:"required",message:"city is required",control:e}};function v(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",12),s.TgZ(1,"label",6),s._uU(2,"City"),s.qZA(),s.TgZ(3,"select",40),s.NdJ("change",function(){return s.CHM(e),s.oxw(2).cityChanged()}),s.TgZ(4,"option",20),s._uU(5,"--Select City--"),s.qZA(),s.YNc(6,q,2,2,"option",21),s.qZA(),s.GkF(7,8),s.qZA()}if(2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(4,g,e.registrationForm.controls.city.invalid,e.registrationForm.controls.city.valid)),s.xp6(3),s.Q6J("ngForOf",e.cities),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(7,x,e.registrationForm.controls.city))}}function T(e,t){if(1&e&&(s.TgZ(0,"option",39),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e._id),s.xp6(1),s.Oqu(e.pincode)}}const k=function(e){return{validation:"required",message:"pincode is required",control:e}};function b(e,t){if(1&e&&(s.TgZ(0,"div",12),s.TgZ(1,"label",6),s._uU(2,"Zipcode"),s.qZA(),s.TgZ(3,"select",41),s.TgZ(4,"option",20),s._uU(5,"--Select Zipcode--"),s.qZA(),s.YNc(6,T,2,2,"option",21),s.qZA(),s.GkF(7,8),s.qZA()),2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(4,g,e.registrationForm.controls.pincode.invalid,e.registrationForm.controls.pincode.valid)),s.xp6(3),s.Q6J("ngForOf",e.pincodes),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(7,k,e.registrationForm.controls.pincode))}}const F=function(e){return{validation:"required",message:"Password is required",control:e}},A=function(e){return{validation:"minlength",message:"Password should have at least 3 symbols",control:e}},y=function(e){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}};function C(e,t){if(1&e&&(s.TgZ(0,"div",42),s.TgZ(1,"label",6),s._uU(2,"Password"),s.qZA(),s._UZ(3,"input",43),s.GkF(4,8),s.GkF(5,8),s.GkF(6,8),s.qZA()),2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(7,g,e.registrationForm.controls.password.invalid,e.registrationForm.controls.password.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(10,F,e.registrationForm.controls.password)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(12,A,e.registrationForm.controls.password)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(14,y,e.registrationForm.controls.password))}}function I(e,t){1&e&&(s.ynx(0),s.TgZ(1,"div",46),s.TgZ(2,"div",47),s._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),s.qZA(),s.qZA(),s.BQk())}const N=function(e){return{validation:"required",message:"Confirm Password is required",control:e}},J=function(e){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:e}},O=function(e){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:e}};function Q(e,t){if(1&e&&(s.TgZ(0,"div",44),s.TgZ(1,"label",6),s._uU(2,"Confirm Password"),s.qZA(),s._UZ(3,"input",45),s.GkF(4,8),s.GkF(5,8),s.GkF(6,8),s.YNc(7,I,4,0,"ng-container",0),s.qZA()),2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(8,g,e.registrationForm.controls.cPassword.invalid,e.registrationForm.controls.cPassword.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(11,N,e.registrationForm.controls.cPassword)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(13,J,e.registrationForm.controls.cPassword)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(15,O,e.registrationForm.controls.cPassword)),s.xp6(1),s.Q6J("ngIf",e.registrationForm.controls.cPassword.errors&&e.registrationForm.controls.cPassword.errors.ConfirmPassword)}}function _(e,t){if(1&e&&(s.TgZ(0,"option",39),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e._id),s.xp6(1),s.Oqu(e.name)}}function w(e,t){if(1&e&&(s.TgZ(0,"span"),s._UZ(1,"img",48),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("src",e.user.documentFront,s.LSH)}}function U(e,t){if(1&e&&(s.TgZ(0,"span"),s._UZ(1,"img",48),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("src",e.user.documentBack,s.LSH)}}function L(e,t){if(1&e&&(s.TgZ(0,"option",39),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e._id),s.xp6(1),s.Oqu(e.name)}}function S(e,t){if(1&e&&(s.TgZ(0,"option",39),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e._id),s.xp6(1),s.Oqu(e.name)}}const P=function(e){return{validation:"required",message:"Store is required",control:e}};function Y(e,t){if(1&e&&(s.TgZ(0,"div",12),s.TgZ(1,"label",6),s._uU(2,"Store"),s.qZA(),s.TgZ(3,"select",49),s.TgZ(4,"option",20),s._uU(5,"--Select Store--"),s.qZA(),s.YNc(6,S,2,2,"option",21),s.qZA(),s.GkF(7,8),s.qZA()),2&e){const e=s.oxw(2),t=s.MAs(3);s.xp6(3),s.Q6J("ngClass",s.WLB(4,g,e.registrationForm.controls.store.invalid,e.registrationForm.controls.store.valid)),s.xp6(3),s.Q6J("ngForOf",e.stores),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(7,P,e.registrationForm.controls.store))}}function B(e,t){if(1&e&&(s.TgZ(0,"span"),s._UZ(1,"img",48),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("src",e.user.employeePhoto,s.LSH)}}function D(e,t){if(1&e&&(s.ynx(0),s.TgZ(1,"span",50),s._uU(2),s.qZA(),s.BQk()),2&e){const e=s.oxw(2);s.xp6(2),s.Oqu(e.buttonText)}}function G(e,t){1&e&&(s.ynx(0),s.TgZ(1,"span",51),s._uU(2," Please wait... "),s._UZ(3,"span",52),s.qZA(),s.BQk()),2&e&&(s.xp6(1),s.Udp("display","block"))}const K=function(e){return{validation:"required",message:"First Name is required",control:e}},V=function(e){return{validation:"minlength",message:"First Name should have at least 3 symbols",control:e}},M=function(e){return{validation:"maxLength",message:"First Name should have maximum 100 symbols",control:e}},E=function(e){return{validation:"required",message:"Middle Name is required",control:e}},W=function(e){return{validation:"minlength",message:"Middle Name should have at least 3 symbols",control:e}},$=function(e){return{validation:"maxLength",message:"Middle Name should have maximum 100 symbols",control:e}},j=function(e){return{validation:"required",message:"Last Name is required",control:e}},R=function(e){return{validation:"minlength",message:"Last Name should have at least 3 symbols",control:e}},H=function(e){return{validation:"maxLength",message:"Last Name should have maximum 100 symbols",control:e}},z=function(e){return{validation:"required",message:"Emplyee Id is required",control:e}},X=function(e){return{validation:"required",message:"User Name is required",control:e}},ee=function(e){return{validation:"minlength",message:"User Name should have at least 3 symbols",control:e}},te=function(e){return{validation:"maxLength",message:"User Name should have maximum 100 symbols",control:e}},oe=function(e){return{validation:"required",message:"Mobile is required",control:e}},re=function(e){return{validation:"pattern",message:"Mobile is invalid",control:e}},ne=function(e){return{validation:"required",message:"Email is required",control:e}},ie=function(e){return{validation:"email",message:"Email is invalid",control:e}},se=function(e){return{validation:"minlength",message:"Email should have at least 3 symbols",control:e}},ae=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}},le=function(e){return{validation:"required",message:"Document Type is required",control:e}},me=function(e){return{validation:"required",message:"Document Number is required",control:e}},ce=function(e){return{validation:"required",message:"Document Front Image is required",control:e}},ue=function(e){return{validation:"required",message:"Document Back Image is required",control:e}},ge=function(e){return{validation:"required",message:"Skill is required",control:e}},de=function(e){return{validation:"required",message:"Employee Photo is required",control:e}};function pe(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div"),s.YNc(1,c,2,1,"ng-container",0),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return s.CHM(e),s.oxw().submit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Create an Account"),s.qZA(),s.qZA(),s.YNc(6,u,4,0,"ng-container",0),s.TgZ(7,"div",5),s.TgZ(8,"label",6),s._uU(9,"First Name"),s.qZA(),s._UZ(10,"input",7),s.GkF(11,8),s.GkF(12,8),s.GkF(13,8),s.qZA(),s.TgZ(14,"div",5),s.TgZ(15,"label",6),s._uU(16,"Middle Name"),s.qZA(),s._UZ(17,"input",9),s.GkF(18,8),s.GkF(19,8),s.GkF(20,8),s.qZA(),s.TgZ(21,"div",5),s.TgZ(22,"label",6),s._uU(23,"Last Name"),s.qZA(),s._UZ(24,"input",10),s.GkF(25,8),s.GkF(26,8),s.GkF(27,8),s.qZA(),s.TgZ(28,"div",5),s.TgZ(29,"label",6),s._uU(30,"Emplyee Id"),s.qZA(),s._UZ(31,"input",11),s.GkF(32,8),s.qZA(),s.TgZ(33,"div",12),s.TgZ(34,"label",6),s._uU(35,"User Name"),s.qZA(),s._UZ(36,"input",13),s.GkF(37,8),s.GkF(38,8),s.GkF(39,8),s.qZA(),s.TgZ(40,"div",12),s.TgZ(41,"label",6),s._uU(42,"Mobile"),s.qZA(),s._UZ(43,"input",14),s.GkF(44,8),s.GkF(45,8),s.qZA(),s.YNc(46,p,5,8,"div",15),s.YNc(47,Z,8,9,"div",15),s.YNc(48,v,8,9,"div",15),s.YNc(49,b,8,9,"div",15),s.TgZ(50,"div",12),s.TgZ(51,"label",6),s._uU(52,"Email"),s.qZA(),s._UZ(53,"input",16),s.GkF(54,8),s.GkF(55,8),s.GkF(56,8),s.GkF(57,8),s.qZA(),s.YNc(58,C,7,16,"div",17),s.YNc(59,Q,8,17,"div",18),s.TgZ(60,"div",12),s.TgZ(61,"label",6),s._uU(62,"Document Type"),s.qZA(),s.TgZ(63,"select",19),s.TgZ(64,"option",20),s._uU(65,"--Select Document Type--"),s.qZA(),s.YNc(66,_,2,2,"option",21),s.qZA(),s.GkF(67,8),s.qZA(),s.TgZ(68,"div",12),s.TgZ(69,"label",6),s._uU(70,"Document Number"),s.qZA(),s._UZ(71,"input",22),s.GkF(72,8),s.qZA(),s.TgZ(73,"div",12),s.TgZ(74,"label",6),s._uU(75,"Document Front Image"),s.qZA(),s.TgZ(76,"input",23),s.NdJ("change",function(t){return s.CHM(e),s.oxw().onFileSelected(t,"documentFront")}),s.qZA(),s.YNc(77,w,2,1,"span",0),s.GkF(78,8),s.qZA(),s.TgZ(79,"div",12),s.TgZ(80,"label",6),s._uU(81,"Document Back Image"),s.qZA(),s.TgZ(82,"input",24),s.NdJ("change",function(t){return s.CHM(e),s.oxw().onFileSelected(t,"documentBack")}),s.qZA(),s.YNc(83,U,2,1,"span",0),s.GkF(84,8),s.qZA(),s.TgZ(85,"div",12),s.TgZ(86,"label",6),s._uU(87,"Skill"),s.qZA(),s.TgZ(88,"select",25),s.TgZ(89,"option",20),s._uU(90,"--Select Skill--"),s.qZA(),s.YNc(91,L,2,2,"option",21),s.qZA(),s.GkF(92,8),s.qZA(),s.YNc(93,Y,8,9,"div",15),s.TgZ(94,"div",12),s.TgZ(95,"label",6),s._uU(96,"Remark 1"),s.qZA(),s._UZ(97,"input",26),s.qZA(),s.TgZ(98,"div",12),s.TgZ(99,"label",6),s._uU(100,"Remark 2"),s.qZA(),s._UZ(101,"input",27),s.qZA(),s.TgZ(102,"div",12),s.TgZ(103,"label",6),s._uU(104,"Employee Photo"),s.qZA(),s.TgZ(105,"input",28),s.NdJ("change",function(t){return s.CHM(e),s.oxw().onFileSelected(t,"employeePhoto")}),s.qZA(),s.YNc(106,B,2,1,"span",0),s.GkF(107,8),s.qZA(),s.TgZ(108,"div",12),s.TgZ(109,"label",6),s._uU(110,"Document 1"),s.qZA(),s.TgZ(111,"input",29),s.NdJ("change",function(t){return s.CHM(e),s.oxw().onFileSelected(t,"document1")}),s.qZA(),s.qZA(),s.TgZ(112,"div",12),s.TgZ(113,"label",6),s._uU(114,"Document 2"),s.qZA(),s.TgZ(115,"input",30),s.NdJ("change",function(t){return s.CHM(e),s.oxw().onFileSelected(t,"document2")}),s.qZA(),s.qZA(),s.TgZ(116,"div",31),s.TgZ(117,"div",32),s.TgZ(118,"button",33),s.YNc(119,D,3,1,"ng-container",0),s.ALo(120,"async"),s.YNc(121,G,4,2,"ng-container",0),s.ALo(122,"async"),s.qZA(),s.qZA(),s.qZA(),s._UZ(123,"div",34),s.qZA(),s.qZA()}if(2&e){const e=t.ngIf,o=s.oxw(),r=s.MAs(3);s.xp6(1),s.Q6J("ngIf","manager"===e.role),s.xp6(1),s.Q6J("formGroup",o.registrationForm),s.xp6(4),s.Q6J("ngIf",o.hasError),s.xp6(4),s.Q6J("ngClass",s.WLB(85,g,o.registrationForm.controls.firstName.invalid,o.registrationForm.controls.firstName.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(88,K,o.registrationForm.controls.firstName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(90,V,o.registrationForm.controls.firstName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(92,M,o.registrationForm.controls.firstName)),s.xp6(4),s.Q6J("ngClass",s.WLB(94,g,o.registrationForm.controls.middleName.invalid,o.registrationForm.controls.middleName.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(97,E,o.registrationForm.controls.middleName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(99,W,o.registrationForm.controls.middleName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(101,$,o.registrationForm.controls.middleName)),s.xp6(4),s.Q6J("ngClass",s.WLB(103,g,o.registrationForm.controls.lastName.invalid,o.registrationForm.controls.lastName.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(106,j,o.registrationForm.controls.lastName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(108,R,o.registrationForm.controls.lastName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(110,H,o.registrationForm.controls.lastName)),s.xp6(4),s.Q6J("ngClass",s.WLB(112,g,o.registrationForm.controls.emplyeeId.invalid,o.registrationForm.controls.emplyeeId.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(115,z,o.registrationForm.controls.emplyeeId)),s.xp6(4),s.Q6J("ngClass",s.WLB(117,g,o.registrationForm.controls.userName.invalid,o.registrationForm.controls.userName.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(120,X,o.registrationForm.controls.userName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(122,ee,o.registrationForm.controls.userName)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(124,te,o.registrationForm.controls.userName)),s.xp6(4),s.Q6J("ngClass",s.WLB(126,g,o.registrationForm.controls.phoneNumber.invalid,o.registrationForm.controls.phoneNumber.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(129,oe,o.registrationForm.controls.phoneNumber)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(131,re,o.registrationForm.controls.phoneNumber)),s.xp6(1),s.Q6J("ngIf","admin"===e.role),s.xp6(1),s.Q6J("ngIf","admin"===e.role),s.xp6(1),s.Q6J("ngIf","admin"===e.role),s.xp6(1),s.Q6J("ngIf","admin"===e.role),s.xp6(4),s.Q6J("ngClass",s.WLB(133,g,o.registrationForm.controls.email.invalid,o.registrationForm.controls.email.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(136,ne,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(138,ie,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(140,se,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(142,ae,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngIf",!o.user._id),s.xp6(1),s.Q6J("ngIf",!o.user._id),s.xp6(4),s.Q6J("ngClass",s.WLB(144,g,o.registrationForm.controls.documentType.invalid,o.registrationForm.controls.documentType.valid)),s.xp6(3),s.Q6J("ngForOf",o.documentTypes),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(147,le,o.registrationForm.controls.documentType)),s.xp6(4),s.Q6J("ngClass",s.WLB(149,g,o.registrationForm.controls.documentNumber.invalid,o.registrationForm.controls.documentNumber.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(152,me,o.registrationForm.controls.documentNumber)),s.xp6(4),s.Q6J("ngClass",s.WLB(154,g,o.registrationForm.controls.documentFront.invalid,o.registrationForm.controls.documentFront.valid)),s.xp6(1),s.Q6J("ngIf",o.user._id),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(157,ce,o.registrationForm.controls.documentFront)),s.xp6(4),s.Q6J("ngClass",s.WLB(159,g,o.registrationForm.controls.documentBack.invalid,o.registrationForm.controls.documentBack.valid)),s.xp6(1),s.Q6J("ngIf",o.user._id),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(162,ue,o.registrationForm.controls.documentBack)),s.xp6(4),s.Q6J("ngClass",s.WLB(164,g,o.registrationForm.controls.skill.invalid,o.registrationForm.controls.skill.valid)),s.xp6(3),s.Q6J("ngForOf",o.skills),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(167,ge,o.registrationForm.controls.skill)),s.xp6(1),s.Q6J("ngIf","admin"===e.role),s.xp6(12),s.Q6J("ngClass",s.WLB(169,g,o.registrationForm.controls.employeePhoto.invalid,o.registrationForm.controls.employeePhoto.valid)),s.xp6(1),s.Q6J("ngIf",o.user._id),s.xp6(1),s.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",s.VKq(172,de,o.registrationForm.controls.employeePhoto)),s.xp6(11),s.Q6J("disabled",o.registrationForm.invalid),s.xp6(1),s.Q6J("ngIf",!1===s.lcZ(120,81,o.isLoading$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(122,83,o.isLoading$))}}function fe(e,t){if(1&e&&(s.ynx(0),s.TgZ(1,"div",46),s.TgZ(2,"div",47),s.TgZ(3,"span",53),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&e){const e=s.oxw().message;s.xp6(4),s.hij(" ",e," ")}}function he(e,t){if(1&e&&s.YNc(0,fe,5,1,"ng-container",0),2&e){const e=t.control;s.Q6J("ngIf",e.hasError(t.validation)&&(e.dirty||e.touched))}}let Ze=(()=>{class e{constructor(e,t,o,r,n,i,s,a,l,m,c,u){this.fb=e,this.authService=t,this.router=o,this.cityService=r,this.changeDetectorRef=n,this.documentTypeService=i,this.skillService=s,this.storeService=a,this.auth=l,this.userService=m,this.activeModal=c,this.countyService=u,this.unsubscribe=[],this.formData=new FormData,this.cities=[],this.documentTypes=[],this.skills=[],this.stores=[],this.buttonText="Create",this.counties=[],this.pincodes=[],this.isLoading$=this.authService.isLoading$}ngOnInit(){this.getCounties(),this.getDocumentType(),this.getSkills(),this.getStores(),this.user$=this.auth.currentUserSubject.asObservable(),this.buttonText=this.user._id?"Update":"Create",this.user._id?this.initForm2():this.initForm(),this.registrationForm.patchValue(this.user)}getCity(e){return this.registrationForm.patchValue({city:e.city,pincode:e.pincode,address:e.address,store:e.store,county:e.county?e.county:"64d1067bcfc33436a69df83d"}),console.log(this.registrationForm.value),""}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({emplyeeId:["",n.kI.compose([n.kI.required])],firstName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],middleName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],lastName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],userName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],phoneNumber:["",n.kI.compose([n.kI.required,n.kI.pattern(/^[0-9]\d*$/)])],email:["",n.kI.compose([n.kI.required,n.kI.email,n.kI.minLength(3),n.kI.maxLength(320)])],address:["",n.kI.compose([n.kI.required])],county:["",n.kI.compose([n.kI.required])],city:["",n.kI.compose([n.kI.required])],pincode:["",n.kI.compose([n.kI.required])],password:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],cPassword:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],documentType:["",n.kI.compose([n.kI.required])],documentNumber:["",n.kI.compose([n.kI.required])],documentFront:["",n.kI.compose([n.kI.required])],documentBack:["",n.kI.compose([n.kI.required])],skill:["",n.kI.compose([n.kI.required])],store:["",n.kI.compose([n.kI.required])],remark1:[""],remark2:[""],employeePhoto:["",n.kI.compose([n.kI.required])],document1:[""],document2:[""],agree:[!0,n.kI.compose([n.kI.required])]},{validator:i.RK.MatchPassword})}initForm2(){this.registrationForm=this.fb.group({emplyeeId:["",n.kI.compose([n.kI.required])],firstName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],middleName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],lastName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],userName:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])],phoneNumber:["",n.kI.compose([n.kI.required,n.kI.pattern(/^[0-9]\d*$/)])],email:["",n.kI.compose([n.kI.required,n.kI.email,n.kI.minLength(3),n.kI.maxLength(320)])],address:["",n.kI.compose([n.kI.required])],county:["",n.kI.compose([n.kI.required])],city:["",n.kI.compose([n.kI.required])],pincode:["",n.kI.compose([n.kI.required])],documentType:["",n.kI.compose([n.kI.required])],documentNumber:["",n.kI.compose([n.kI.required])],documentFront:["",n.kI.compose([n.kI.required])],documentBack:["",n.kI.compose([n.kI.required])],skill:["",n.kI.compose([n.kI.required])],store:["",n.kI.compose([n.kI.required])],remark1:[""],remark2:[""],employeePhoto:["",n.kI.compose([n.kI.required])],document1:[""],document2:[""],agree:[!0,n.kI.compose([n.kI.required])]},{validator:i.RK.MatchPassword})}getStores(){this.storeService.getAllData().subscribe(e=>{this.stores=e,this.changeDetectorRef.detectChanges()})}getDocumentType(){this.documentTypeService.getAllData().subscribe(e=>{this.documentTypes=e,this.changeDetectorRef.detectChanges()})}getSkills(){this.skillService.getAllData().subscribe(e=>{this.skills=e,this.changeDetectorRef.detectChanges()})}getCounties(){this.countyService.getAllData().subscribe(e=>{this.counties=e,this.changeDetectorRef.detectChanges(),this.registrationForm.value.county&&""!==this.registrationForm.value.county&&this.getCities()})}getCities(){this.cityService.getCountyWiseData(this.registrationForm.value.county).subscribe(e=>{this.cities=e,this.changeDetectorRef.detectChanges(),this.user._id&&this.cityChanged()})}cityChanged(){const e=this.cities.filter(e=>e._id===this.registrationForm.value.city);this.pincodes=e.length>0&&e[0].pincodes?e[0].pincodes:[],this.changeDetectorRef.detectChanges()}onFileSelected(e,t){var o;const r=e.target;if(!(null===(o=r.files)||void 0===o?void 0:o.length))return;const n=r.files[0];try{this.formData.delete(t)}catch(i){}this.formData.append(`${t}`,n)}submit(){this.hasError=!1;const e={};Object.keys(this.f).forEach(t=>{"documentFront"!=t&&"documentBack"!=t&&"employeePhoto"!=t&&this.formData.append(`${t}`,this.f[t].value),e[t]=this.f[t].value}),this.user._id?this.userService.authUpdate(this.user._id,this.formData).subscribe(e=>{this.activeModal.close("form submit")}):this.userService.register(this.formData).subscribe(e=>{this.activeModal.close("form submit")})}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(n.qu),s.Y36(i.e8),s.Y36(a.F0),s.Y36(l.Zp),s.Y36(s.sBO),s.Y36(l.Zg),s.Y36(l.mE),s.Y36(l.d6),s.Y36(i.e8),s.Y36(l.KD),s.Y36(m.Kz),s.Y36(l.f2))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-create-user"]],inputs:{user:"user"},decls:4,vars:3,consts:[[4,"ngIf"],["formError",""],["novalidate","novalidate","id","",1,"form","row","fv-plugins-bootstrap5","fv-plugins-framework","p-8",3,"formGroup","ngSubmit"],[1,"mb-10","text-center"],[1,"text-dark","mb-3"],[1,"fv-row","mb-7","col-md-4"],[1,"form-label","fw-bolder","text-dark","fs-6"],["type","text","name","firstName","formControlName","firstName","placeholder","firstName","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text","name","middleName","formControlName","middleName","placeholder","middleName","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","text","name","lastName","formControlName","lastName","placeholder","lastName","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","text","name","emplyeeId","formControlName","emplyeeId","placeholder","Emplyee Id","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"col-md-4","fv-row","mb-7"],["type","text","name","userName","formControlName","userName","placeholder","userName","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","text","name","phoneNumber","formControlName","phoneNumber","placeholder","Mobile","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["class","col-md-4 fv-row mb-7",4,"ngIf"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["class","col-md-4 mb-10 fv-row",4,"ngIf"],["class","col-md-4 fv-row mb-5",4,"ngIf"],["name","documentType","formControlName","documentType",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","name","documentNumber","formControlName","documentNumber","placeholder","Document Number","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","file","name","documentFront","accept","image/png, image/jpeg","formControlName","documentFront","placeholder","pincode","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass","change"],["type","file","name","documentBack","accept","image/png, image/jpeg","formControlName","documentBack","placeholder","Document Back Image","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass","change"],["name","skill","formControlName","skill",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","text","name","remark1","formControlName","remark1","placeholder","Remark 1","autocomplete","off",1,"form-control","form-control-lg","form-control-solid"],["type","text","name","remark2","formControlName","remark2","placeholder","Remark 2","autocomplete","off",1,"form-control","form-control-lg","form-control-solid"],["type","file","name","employeePhoto","accept","image/png, image/jpeg","formControlName","employeePhoto","placeholder","Employee Photo","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass","change"],["type","file","name","document1","formControlName","document1","placeholder","Document 1","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"change"],["type","file","name","document2","formControlName","document2","placeholder","Document 2","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"change"],[1,"d-flex","flex-row-reverse"],[1,"p-2"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],[1,"text-center"],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],["type","text","name","address","formControlName","address","placeholder","address","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["name","county","formControlName","county",1,"form-control","form-control-lg","form-control-solid",3,"ngClass","change"],[3,"value"],["name","city","formControlName","city",1,"form-control","form-control-lg","form-control-solid",3,"ngClass","change"],["name","pincode","formControlName","pincode",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"col-md-4","mb-10","fv-row"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"col-md-4","fv-row","mb-5"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],["width","50",3,"src"],["name","store","formControlName","store",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(e,t){1&e&&(s.YNc(0,pe,124,174,"div",0),s.ALo(1,"async"),s.YNc(2,he,1,1,"ng-template",null,1,s.W1O)),2&e&&s.Q6J("ngIf",s.lcZ(1,1,t.user$))},directives:[r.O5,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,r.mk,r.tP,n.EJ,n.YN,n.Kr,r.sg],pipes:[r.Ov],styles:[""]}),e})();var qe=o(2789),xe=o(2798);function ve(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tr"),s.TgZ(1,"td"),s.TgZ(2,"span",26),s._uU(3),s.qZA(),s.qZA(),s.TgZ(4,"td"),s.TgZ(5,"span",27),s._uU(6),s.qZA(),s.qZA(),s.TgZ(7,"td"),s.TgZ(8,"span",27),s._uU(9),s.qZA(),s.qZA(),s.TgZ(10,"td"),s.TgZ(11,"span",27),s._uU(12),s.qZA(),s.qZA(),s.TgZ(13,"td",28),s.TgZ(14,"button",29),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().open(t)}),s._UZ(15,"span",30),s.qZA(),s.TgZ(16,"button",31),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().delete(t._id?t._id:"")}),s._UZ(17,"span",32),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit;s.xp6(3),s.hij(" ",e.firstName," "),s.xp6(3),s.hij(" ",e.lastName," "),s.xp6(3),s.hij(" ",e.email," "),s.xp6(3),s.hij(" ",e.address," "),s.xp6(3),s.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg"),s.xp6(2),s.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen027.svg")}}const Te=function(e,t,o){return{id:"server",itemsPerPage:e,currentPage:t,totalItems:o}};let ke=(()=>{class e{constructor(e,t,o,r){this.modalService=e,this.userService=t,this.changeDetectorRef=o,this.helperService=r,this.limit=10,this.total=0,this.page=1,this.stores=[],this.totalPages=0,this.totalPageSize=0,this.query=""}ngOnInit(){this.getPage(1)}open(e){console.log("user",e);const t=this.modalService.open(Ze,{size:"xl"});t.componentInstance.user=e,t.result.then(e=>{"form submit"===e&&this.getPage(1)},e=>{"form submit"===e&&this.getPage(1)})}getPage(e){this.userService.getAll(e,this.limit,this.query).subscribe(t=>{this.total=t.total,this.page=e,this.stores=t.data;const o=Math.ceil(t.total/this.limit);this.totalPages=o,this.totalPageSize=10*o,this.changeDetectorRef.detectChanges()})}delete(e){this.helperService.confirmSwal({message:"You won't be able to revert this!",title:"Are you sure?",buttonText:"Yes, delete it!"}).subscribe(t=>{t&&this.userService.delete(e).subscribe(e=>{this.getPage(1)})})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(m.FF),s.Y36(l.KD),s.Y36(s.sBO),s.Y36(l.W_))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-user"]],decls:41,vars:11,consts:[[1,"page-breadcrumb"],[1,"d-flex","justify-content-between"],[1,"d-flex","justify-content-start"],[1,"d-flex","flex-row"],[1,"p-2"],[1,"form-group"],["type","text","placeholder","search..",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/dashboard"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card"],[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-toolbar"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"card-body","py-3"],[1,"table-responsive"],[1,"table","table-row-bordered","table-row-gray-100","align-middle","gs-0","gy-3"],[1,"fw-bolder","text-muted"],[1,"min-w-150px"],[1,"min-w-120px"],[1,"min-w-100px","text-end"],[4,"ngFor","ngForOf"],[1,"d-flex","flex-wrap","justify-content-end","p-2"],[1,"d-flex","justify-content-start",3,"collectionSize","page","pageChange"],[1,"text-dark","fw-bolder","fs-6"],[1,"text-dark","fw-bolder","d-block","mb-1","fs-6"],[1,"text-end"],[1,"btn","btn-icon","btn-light-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-light-danger","btn-sm",3,"click"],[1,"svg-icon","svg-danger","svg-icon-3",3,"inlineSVG"]],template:function(e,t){1&e&&(s.TgZ(0,"nav",0),s.TgZ(1,"div",1),s.TgZ(2,"div"),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s.TgZ(7,"input",6),s.NdJ("ngModelChange",function(e){return t.query=e})("keyup",function(){return t.getPage(1)}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(8,"div"),s.TgZ(9,"ol",7),s.TgZ(10,"li",8),s.TgZ(11,"a",9),s._uU(12,"Dashboard"),s.qZA(),s.qZA(),s.TgZ(13,"li",10),s._uU(14,"User"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(15,"div",11),s.TgZ(16,"div",12),s._UZ(17,"h3",13),s.TgZ(18,"div",14),s.TgZ(19,"button",15),s.NdJ("click",function(){return t.open({})}),s._uU(20,"Create"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"div",16),s.TgZ(22,"div",17),s.TgZ(23,"table",18),s.TgZ(24,"thead"),s.TgZ(25,"tr",19),s.TgZ(26,"th",20),s._uU(27,"First Name"),s.qZA(),s.TgZ(28,"th",20),s._uU(29,"Last Name"),s.qZA(),s.TgZ(30,"th",20),s._uU(31,"Email"),s.qZA(),s.TgZ(32,"th",21),s._uU(33,"Address"),s.qZA(),s.TgZ(34,"th",22),s._uU(35,"Actions"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(36,"tbody"),s.YNc(37,ve,18,6,"tr",23),s.ALo(38,"paginate"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(39,"div",24),s.TgZ(40,"ngb-pagination",25),s.NdJ("pageChange",function(e){return t.page=e})("pageChange",function(e){return t.getPage(e)}),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(7),s.Q6J("ngModel",t.query),s.xp6(30),s.Q6J("ngForOf",s.xi3(38,4,t.stores,s.kEZ(7,Te,t.limit,t.page,t.total))),s.xp6(3),s.Q6J("collectionSize",t.totalPageSize)("page",t.page))},directives:[n.Fj,n.JJ,n.On,a.yS,r.sg,m.N9,qe.d$],pipes:[xe._s],styles:[""]}),e})(),be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,a.Bz.forChild([{path:"",component:ke}]),n.u5,n.UX,qe.vi,m.jF,xe.JX]]}),e})()}}]);