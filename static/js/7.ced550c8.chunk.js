(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{115:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(116),u=n.n(l);t.a=function(){return i.a.createElement("div",{className:u.a.Loader},"Loading...")}},116:function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},140:function(e,t,n){e.exports={Input:"input_Input__3BPgK",Label:"input_Label__24bIE",InputElement:"input_InputElement__2HI6E",Invalid:"input_Invalid__3QqA4"}},141:function(e,t,n){e.exports={Button:"button_Button__2rvm5",Success:"button_Success__2fkNB",Danger:"button_Danger__3R9zs"}},142:function(e,t,n){e.exports={Auth:"Auth_Auth__Bd1Nb"}},158:function(e,t,n){"use strict";n.r(t);var a=n(46),i=n(16),l=n(15),u=n(17),r=n(18),o=n(19),c=n(0),s=n.n(c),d=n(140),p=n.n(d),h=function(e){var t=null,n=[p.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(p.a.Invalid),e.elementType){case"input":t=s.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=s.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=s.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return s.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=s.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return s.a.createElement("div",null,s.a.createElement("div",{className:p.a.Input},s.a.createElement("label",{className:p.a.Label},e.label),t))},m=n(141),v=n.n(m),g=function(e){return s.a.createElement("button",{disabled:e.disabled,className:[v.a.Button,v.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},f=n(142),b=n.n(f),_=n(30),E=n(115),j=n(21),y=n(22),S=n(5),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Your Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var i=Object(S.b)(n.state.controls,Object(a.a)({},t,Object(S.b)(n.state.controls[t],{value:e.target.value,valid:Object(S.a)(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:i})},n.switchAuthModeHandler=function(){n.setState((function(e){return{isSignup:!e.isSignup}}))},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return s.a.createElement(h,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=s.a.createElement(E.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuthenticated&&(l=s.a.createElement(y.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:b.a.Auth},l,i,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(g,{btnType:"Success"},"SUBMIT")),s.a.createElement(g,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(c.Component);t.default=Object(j.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!=e.auth.token,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(_.b(t,n,a))},onSetAuthRedirectPath:function(){return e(_.g("/"))}}}))(C)}}]);
//# sourceMappingURL=7.ced550c8.chunk.js.map