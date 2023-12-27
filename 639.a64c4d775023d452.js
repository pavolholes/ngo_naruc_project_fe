"use strict";(self.webpackChunkngo_project_fe=self.webpackChunkngo_project_fe||[]).push([[639],{6224:(p,l,o)=>{o.r(l),o.d(l,{LoginPageModule:()=>u});var g=o(6814),s=o(1896),t=o(5879),c=o(3076),i=o(6223);let m=(()=>{class e{constructor(r,n,a){this.userService=r,this.fb=n,this.router=a,this.loginForm=this.fb.group({email:[""],password:[""]})}onSubmit(){let r={email:this.loginForm.get("email")?.value,password:this.loginForm.get("password")?.value};this.userService.loginUser(r).subscribe({next:n=>{localStorage.setItem("user_name",n.name),localStorage.setItem("user_surname",n.surname),localStorage.setItem("user_id",n._id?String(n._id):"0"),localStorage.setItem("user_role",n.role),localStorage.setItem("token",n.token?n.token:""),this.userService.selectedUser$.emit({_id:n._id,name:n.name,surname:n.surname,email:n.email,role:n.role}),this.router.navigate(["/"])},error:n=>{}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(c.K),t.Y36(i.qu),t.Y36(s.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-form"]],decls:27,vars:1,consts:[[1,"page-content-white"],[1,"main-text"],[1,"font-weight-bold","welcome"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"label-position"],["for","email"],[1,"input-position"],["type","email","formControlName","email","aria-describedby","emailHelp","placeholder","Email",1,"form-control"],[1,"spacer2"],["for","password"],["type","password","formControlName","password","placeholder","Heslo",1,"form-control"],[1,"spacer3"],[1,"button-position"],["type","submit",1,"btn","btn-orange-form"],[1,"bottom-description-position"],[1,"bottom-description"],["type","submit",1,"btn","btn-reset"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Prihl\xe1senie"),t.qZA()()(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(5,"div",4)(6,"div",5)(7,"label",6),t._uU(8,"Zadaj svoj pracovn\xfd email"),t.qZA()(),t.TgZ(9,"div",7),t._UZ(10,"input",8),t.qZA()(),t._UZ(11,"div",9),t.TgZ(12,"div",4)(13,"div",5)(14,"label",10),t._uU(15,"Zadaj svoje heslo"),t.qZA()(),t.TgZ(16,"div",7),t._UZ(17,"input",11),t.qZA()(),t._UZ(18,"div",12),t.TgZ(19,"div",13)(20,"button",14),t._uU(21," Prihl\xe1si\u0165 sa "),t.qZA()()(),t.TgZ(22,"div",15)(23,"p",16),t._uU(24,"Nepam\xe4t\xe1\u0161 si heslo? Klikni sem a po\u0161leme ti nov\xe9 na email."),t.qZA(),t.TgZ(25,"button",17),t._uU(26," Resetova\u0165 heslo "),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("formGroup",a.loginForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".page-content-white[_ngcontent-%COMP%]{display:block;position:inherit;text-align:center}.welcome[_ngcontent-%COMP%]{font-size:48px;font-weight:700}.input-position[_ngcontent-%COMP%]{margin:auto;width:85%}.input-position[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{border-radius:80px;height:56.6px}input[_ngcontent-%COMP%]::placeholder{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#929090}.label-position[_ngcontent-%COMP%]{padding-left:11%;padding-bottom:1%}.label-position[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#929090}.form-group[_ngcontent-%COMP%]{width:100%}.btn-orange-form[_ngcontent-%COMP%]{width:399.03px;height:73px;filter:drop-shadow(0px 4px 10px rgba(0,0,0,.25));background:linear-gradient(87.91deg,#FF5800 .65%,#FF8B00 100%);border-radius:50px;font-style:normal;font-weight:700;font-size:16px;line-height:19px;text-transform:uppercase;color:#fff}.btn-orange-form[_ngcontent-%COMP%]:hover{width:399.03px;height:73px;filter:drop-shadow(0px 4px 10px rgba(0,0,0,.25));background:linear-gradient(90deg,#bcbcbc 0%,#bcbcbc 99.99%);border-radius:50px;font-style:normal;font-weight:700;font-size:16px;line-height:19px;text-transform:uppercase;color:#ff4d00}.form[_ngcontent-%COMP%]{padding-top:7.5vh}.button-position[_ngcontent-%COMP%]{text-align:center}.spacer2[_ngcontent-%COMP%]{padding-top:3%}.spacer3[_ngcontent-%COMP%]{padding-top:15vh}.bottom-description-position[_ngcontent-%COMP%]{text-align:center;padding-top:5vh}.bottom-description[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#929090}.btn-reset[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:17.168px;line-height:21px;text-decoration-line:underline;color:#929292}p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0rem}"]})}return e})();const d=[{path:"",component:(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:20,vars:0,consts:[[1,"wrapper"],["id","container-blue",1,"container-blue"],[1,"page-content-logo"],[1,"main-logo"],["src","/assets/images/logo.png","alt","Responsive image",1,"img-fluid","logo"],[1,"page-content"],[1,"main-text"],[1,"font-weight-bold","welcome"],[1,"spacer"],[1,"main-description"],[1,"description"],[1,"login-img"],["src","/assets/images/login.svg","alt","Responsive image",1,"img-fluid"],[1,"container-white"],[1,"login-form"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6)(7,"h1",7),t._uU(8,"Vitaj sp\xe4\u0165!"),t.qZA()(),t._UZ(9,"div",8),t.TgZ(10,"div",9)(11,"p",10),t._uU(12,"Prihl\xe1s sa do svojho \xfa\u010dtu"),t.qZA()()(),t.TgZ(13,"div",11),t._UZ(14,"img",12),t.qZA()(),t.TgZ(15,"div",13)(16,"div",2),t._UZ(17,"div",3),t.qZA(),t.TgZ(18,"div",14),t._UZ(19,"app-login-form"),t.qZA()()())},dependencies:[m],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;height:100vh}.wrapper[_ngcontent-%COMP%]{display:flex;margin:0;height:100vh}.container-blue[_ngcontent-%COMP%]{display:block;height:100%;background-color:#f7fbff;width:40%}.container-white[_ngcontent-%COMP%]{display:block;height:100%;background-color:#fff;width:60%}.page-content-logo[_ngcontent-%COMP%]{display:block;text-align:center;padding-top:11%;height:17%}.page-content[_ngcontent-%COMP%]{display:block;position:inherit;text-align:center}.main-logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:22%}.welcome[_ngcontent-%COMP%]{font-size:48px;font-weight:700}.description[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#5c5c5c}.login-img[_ngcontent-%COMP%]{position:inherit;text-align:center}.img-fluid[_ngcontent-%COMP%]{max-width:30vw}.spacer[_ngcontent-%COMP%]{padding-top:8vh}.login-form[_ngcontent-%COMP%]{align-items:center;justify-content:center;display:flex}"]})}return e})()}];let h=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(d),s.Bz]})}return e})(),u=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[g.ez,h,i.u5,i.UX]})}return e})()},553:(p,l,o)=>{o.d(l,{N:()=>g});const g={production:!1,baseUrl:"https://ngo-naruc-api.onrender.com"}}}]);