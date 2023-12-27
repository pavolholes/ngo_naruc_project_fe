"use strict";(self.webpackChunkngo_project_fe=self.webpackChunkngo_project_fe||[]).push([[959],{4959:(p,d,i)=>{i.r(d),i.d(d,{HomePageModule:()=>v});var s=i(6814),u=i(1896),t=i(5879),a=i(6223),c=i(5836);let h=(()=>{class n{constructor(o,e,r){this.formBuilder=o,this.clientService=e,this.router=r,this.questForm=this.formBuilder.group({clientName:[""],clientSurname:[""],contractNumber:[""]})}ngOnInit(){}onSubmit(){const o=this.questForm.value;this.clientService.postNewClient({name:o.clientName,surname:o.clientSurname,registration_date:new Date,contract_no:o.contractNumber,last_phase:0,active:!0}).subscribe(r=>{this.router.navigate(["client-overview",r._id]),this.clientService.selectedClient$.emit(r)})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(c.y),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-client-form"]],decls:21,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","client-name",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","text","id","client-name","formControlName","clientName",1,"form-control"],[1,"spacer"],["for","client-surname",1,"col-sm-2","col-form-label"],["type","text","id","client-surname","formControlName","clientSurname",1,"form-control"],["for","contract-number",1,"col-sm-2","col-form-label"],["type","text","id","contract-number","formControlName","contractNumber",1,"form-control"],[1,"butt"],["type","submit",1,"btn","btn-orange-form"]],template:function(e,r){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(1,"div",1)(2,"label",2),t._uU(3,"Meno klienta"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"input",4),t.qZA()(),t._UZ(6,"div",5),t.TgZ(7,"div",1)(8,"label",6),t._uU(9,"Priezvisko klienta"),t.qZA(),t.TgZ(10,"div",3),t._UZ(11,"input",7),t.qZA()(),t._UZ(12,"div",5),t.TgZ(13,"div",1)(14,"label",8),t._uU(15,"\u0106\xedslo zmluvy"),t.qZA(),t.TgZ(16,"div",3),t._UZ(17,"input",9),t.qZA()(),t.TgZ(18,"div",10)(19,"button",11),t._uU(20," Potvrdi\u0165 "),t.qZA()()()),2&e&&t.Q6J("formGroup",r.questForm)},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".col-sm-10[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{border-radius:24px}.col-sm-10[_ngcontent-%COMP%]{width:55%;padding-left:5%;height:120%}.butt[_ngcontent-%COMP%]{padding-top:10%}.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:25%;font-style:normal;font-weight:700;font-size:16px;line-height:19px;text-align:right;color:#929090}.spacer[_ngcontent-%COMP%]{padding-top:4%}.row[_ngcontent-%COMP%]{text-align:center;padding-left:15%}.btn-orange-form[_ngcontent-%COMP%]{padding:1.5rem 5rem;filter:drop-shadow(0px 4px 10px rgba(0,0,0,.25));background:linear-gradient(87.91deg,#FF5800 .65%,#FF8B00 100%);border-radius:50px;font-weight:700;font-size:16px;text-transform:uppercase;color:#fff;width:27rem}.btn-orange-form[_ngcontent-%COMP%]:hover{background:linear-gradient(88deg,#D44900 -.01%,#FF6C1D 100.02%)}"]})}return n})();const m=[{path:"",component:(()=>{class n{openForm(){const o=document.getElementById("overlay"),e=document.getElementById("form-new-client");null!=e&&(e.style.display="block"),null!=o&&(o.style.display="block")}closeForm(){const o=document.getElementById("form-new-client"),e=document.getElementById("overlay");null!=o&&(o.style.display="none"),null!=e&&(e.style.display="none")}constructor(o){this.router=o,this.user=localStorage.getItem("user_name")}navigateClientsList(){this.router.navigate(["/clients-list"])}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-page"]],decls:57,vars:1,consts:[[1,"wrapper"],[1,"row","col-md-12"],[1,"page-content"],[1,"main-description"],[1,"font-weight-normal","welcome"],[1,"font-weight-bold","name"],["type","button",1,"btn","btn-orange",3,"click"],[1,"main-image"],["src","/assets/images/home_create_client.svg","alt","Responsive image",1,"img-fluid"],[1,"container-blue"],["src","/assets/images/home_client_list.svg","alt","Responsive image",1,"img-fluid"],[1,"clients-list"],["id","overlay",1,"overlay"],["tabindex","-1","role","dialog","id","form-new-client",1,"modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"row"],[1,"col-md-5","form-col"],["src","/assets/images/create_client.svg","alt","Responsive image",1,"img-fluid","form-img"],[1,"col-md-7","form-col2"],[1,"main-description-form"],[1,"description-form"],[1,"modal-form-body"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"h1",4),t._uU(6,"Vitaj"),t.qZA(),t.TgZ(7,"h1",5),t._uU(8),t.qZA()(),t.TgZ(9,"div")(10,"p"),t._uU(11," Za\u010dni cestu vytvoren\xedm nov\xe9ho klienta. Po vytvoren\xed mo\u017ee\u0161 hned za\u010da\u0165 vyp\u013a\u0148a\u0165 dotazn\xedk a vyda\u0165 sa na cestu spolu s klientom. "),t.qZA()(),t.TgZ(12,"div")(13,"button",6),t.NdJ("click",function(){return r.openForm()}),t._uU(14," Vytvori\u0165 nov\xe9ho klienta "),t.qZA()()(),t.TgZ(15,"div",7),t._UZ(16,"img",8),t.qZA()()()(),t.TgZ(17,"div",9)(18,"div",0)(19,"div",1)(20,"div",2)(21,"div"),t._UZ(22,"img",10),t.qZA(),t.TgZ(23,"div",3)(24,"div")(25,"h1",4),t._uU(26,"Vyplni\u0165"),t.qZA(),t.TgZ(27,"h1",5),t._uU(28,"pozorovacie h\xe1rky"),t.qZA()(),t.TgZ(29,"div")(30,"p"),t._uU(31,"N\xe1jdi v zozname osobu, pre ktor\xfa chce\u0161 vyplni\u0165 pozorovacie h\xe1rky a klikni na Zobrazi\u0165 detaily. Bude\u0161 presmerovan\xfd na dashboard klienta, kde si mo\u017ee\u0161 pozrie\u0165 grafick\xe9 v\xfdsledky, vyplni\u0165 pozorovacie h\xe1rky a vytla\u010di\u0165 v\u0161etky dokumenty. "),t.qZA()(),t.TgZ(32,"div",11)(33,"button",6),t.NdJ("click",function(){return r.navigateClientsList()}),t._uU(34," Zoznam Klientov "),t.qZA()()()()()()(),t.TgZ(35,"div",12)(36,"div",13)(37,"div",14)(38,"div",15)(39,"button",16),t.NdJ("click",function(){return r.closeForm()}),t.TgZ(40,"span",17),t._uU(41,"\xd7"),t.qZA()(),t.TgZ(42,"div",18)(43,"div",19),t._UZ(44,"img",20),t.qZA(),t.TgZ(45,"div",21)(46,"div")(47,"h1",4),t._uU(48,"Vytvori\u0165"),t.qZA(),t.TgZ(49,"h1",5),t._uU(50,"nov\xe9ho klienta"),t.qZA()(),t.TgZ(51,"div",22)(52,"p",23),t._uU(53," Vypl\u0148 formul\xe1r, my pre teba v\u0161etko priprav\xedme aby si mohol rovno vyp\u013a\u0148a\u0165 pozorovac\xed h\xe1rok ! "),t.qZA()()()(),t._UZ(54,"hr"),t.TgZ(55,"div",24),t._UZ(56,"app-new-client-form"),t.qZA()()()()()),2&e&&(t.xp6(8),t.hij("",r.user,"!"))},dependencies:[h],styles:[".wrapper[_ngcontent-%COMP%]{margin:0 10%;padding:2rem 5rem}.page-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;justify-content:space-between}.btn-orange[_ngcontent-%COMP%]{padding:1.2rem 4rem;filter:drop-shadow(0px 4px 10px rgba(0,0,0,.25));background:linear-gradient(87.91deg,#FF5800 .65%,#FF8B00 100%);border-radius:50px;font-weight:700;font-size:100%;text-transform:uppercase;color:#fff;white-space:nowrap;text-align:center}.btn-orange[_ngcontent-%COMP%]:hover{background:linear-gradient(88deg,#D44900 -.01%,#FF6C1D 100.02%)}.main-image[_ngcontent-%COMP%]{padding-left:5rem}.welcome[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:48px;line-height:58px;padding-bottom:.5rem;color:#000}.name[_ngcontent-%COMP%]{font-size:48px;font-weight:700;line-height:50px}p[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.main-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;width:30%;text-align:left}.container-blue[_ngcontent-%COMP%]{display:block;height:100%;width:100%;background-color:#f7fbff}.modal-dialog[_ngcontent-%COMP%]{max-width:100%;width:90vh;height:90vh}.modal-content[_ngcontent-%COMP%]{box-sizing:border-box;background:#FFFFFF;border-radius:80px;overflow:hidden;text-align:center;pointer-events:all;width:100%;height:100%}.close[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5;padding:0;border:none;background:none;position:absolute;top:4%;right:5%}.form-col[_ngcontent-%COMP%]{padding-top:3%;padding-left:3%}.form-col2[_ngcontent-%COMP%]{padding-left:6%;padding-top:8%;text-align:left}.form-img[_ngcontent-%COMP%]{width:85%}.main-description-form[_ngcontent-%COMP%]{padding-top:10%;width:80%}.modal-form-body[_ngcontent-%COMP%]{width:100%;padding-top:4%;height:50%}hr[_ngcontent-%COMP%]{width:80%;margin-left:10%!important;border:1px solid #5C5C5C}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#80808080;display:none}"]})}return n})()}];let f=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(m),u.Bz]})}return n})(),v=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[s.ez,f,a.UX]})}return n})()},5836:(p,d,i)=>{i.d(d,{y:()=>a});var s=i(5879),u=i(553),t=i(9862);let a=(()=>{class c{constructor(l){this.http=l,this.baseUrl=u.N.baseUrl,this.selectedClient$=new s.vpe,this.client={_id:0,name:"",surname:"",last_phase:1,registration_date:new Date,active:!0},this.selectedClient$.subscribe(m=>{this.client=m})}getClientsList(){return this.http.get(`${this.baseUrl}/ngo/clients`)}editClient(l){return this.http.put(`${this.baseUrl}/ngo/client/${l._id}`,l)}getSelectedClient(){return this.client}getClientById(l){return this.http.get(`${this.baseUrl}/ngo/client/${l}`)}postNewClient(l){return this.http.post(`${this.baseUrl}/ngo/clients`,l)}static#t=this.\u0275fac=function(m){return new(m||c)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},553:(p,d,i)=>{i.d(d,{N:()=>s});const s={production:!1,baseUrl:"https://ngo-naruc-api.onrender.com"}}}]);