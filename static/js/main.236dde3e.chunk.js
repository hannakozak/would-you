(this["webpackJsonpwould-you"]=this["webpackJsonpwould-you"]||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.c3672991.png"},34:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),l=(a(26),a(4)),i=a(5),c=a(6),u=a(7),m=a(15),d=a(8),p=a(3),h=a(33),v=a(9),_=a(2),b={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://image.flaticon.com/icons/svg/2990/2990683.svg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},f={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function E(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){f=Object(_.a)({},f,Object(v.a)({},r.id,r)),b=Object(_.a)({},b,Object(v.a)({},n,Object(_.a)({},b[n],{questions:b[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function O(){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(_.a)({},b))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(_.a)({},f))}),1e3)}))]).then((function(e){var t=Object(h.a)(e,2);return{users:t[0],questions:t[1]}}))}function j(e,t,a){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){b=Object(_.a)({},b,Object(v.a)({},t,Object(_.a)({},b[t],{answers:Object(_.a)({},b[t].answers,Object(v.a)({},a,n))}))),f=Object(_.a)({},f,Object(v.a)({},a,Object(_.a)({},f[a],Object(v.a)({},n,Object(_.a)({},f[a][n],{votes:f[a][n].votes.concat([t])}))))),e()}),500)}))}({authedUser:e,qid:t,answer:a})}function g(e){return{type:"RECEIVE_USERS",users:e}}function w(e){return{type:"SET_AUTHED_USER",id:e}}var y=a(32),N=a(29),q=a.n(N),S=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={authedUser:null,selectedValuePlaceholder:"select"},e.handleChange=function(t){var a=t.value,n=t.label;return e.setState({authedUser:a,selectedValuePlaceholder:n})},e.handleLogin=function(t){t.preventDefault();var a=e.state.authedUser,n=e.props.setAuthedUser;a?n(a):alert("Choose Your Name!")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.users.map((function(e){var t=[];return t.value=e.id,t.label=r.a.createElement("div",null,r.a.createElement("img",{src:e.avatarURL,alt:e.name,className:"login__select__img"}),e.name),t}));return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__header"},r.a.createElement("div",{className:"login__header1"},"Welcome to the Would You Rather App!"),r.a.createElement("div",{className:"login__header2"},"Please sign in to continue")),r.a.createElement("img",{src:q.a,alt:"logo",className:"login__img"}),r.a.createElement("div",{className:"login__form"},r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("div",{className:"login__select"},r.a.createElement(y.a,{value:e.value,placeholder:this.state.selectedValuePlaceholder,onChange:this.handleChange,options:e})),r.a.createElement("button",{className:"login__button"},"sign in"))))}}]),a}(r.a.Component);var U=Object(p.b)((function(e){var t=e.users;return{users:Object.values(t)}}),(function(e){return{setAuthedUser:function(t){e(w(t))}}}))(S),x=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.question,a=e.user,n=e.answered,o=t.id;return r.a.createElement("div",{className:"poll"},r.a.createElement("div",{className:"poll__header"},a.name," asks:"),r.a.createElement("div",{className:"poll__card"},r.a.createElement("div",{className:"poll__card__img"},r.a.createElement("img",{src:a.avatarURL,alt:a.name,className:"poll__card__img"})),r.a.createElement("div",{className:"poll__card__details"},r.a.createElement("div",{className:"poll__card__details__header"},"Would you rather"),r.a.createElement("div",{className:"poll__card__details__poll"},t.optionOne.text," ",r.a.createElement("br",null)," or..."),r.a.createElement(m.b,{to:"/questions/".concat(o)},n?r.a.createElement("button",{className:"poll__button"},"Results"):r.a.createElement("button",{className:"poll__button"},"Answer Question")))))}}]),a}(r.a.Component);var T=Object(p.b)((function(e,t){e.authedUser;var a=e.questions,n=e.users,r=t.id,o=t.answered,s=a[r];return{user:n[s.author],question:s||null,answered:o}}))(x),k=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={answered:!1},e.handleClick=function(){e.state.answered?e.setState({answered:!1}):e.setState({answered:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.answeredQuestions,n=t.unansweredQuestions,o=this.state.answered;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__toggle"},r.a.createElement("button",{className:"home__button home__button--unanswered",onClick:function(){e.setState({answered:!1})},autoFocus:!0},"Unanswered"),r.a.createElement("button",{className:"home__button home__button--answered",onClick:function(){e.setState({answered:!0})}},"Answered")),r.a.createElement("div",{className:"home__main"},o&&a.map((function(e){return r.a.createElement(T,{key:e,id:e,answered:o})}))),r.a.createElement("div",{className:"home__main"},!o&&n.map((function(e){return r.a.createElement(T,{key:e,id:e,answered:o})}))))}}]),a}(r.a.Component);var C=Object(p.b)((function(e){var t=e.authedUser,a=e.users,n=e.questions;return{answeredQuestions:Object.keys(n).filter((function(e){return a[t].answers.hasOwnProperty(e)})).sort((function(e,t){return n[t].timestamp-n[e].timestamp})),unansweredQuestions:Object.keys(n).filter((function(e){return!a[t].answers.hasOwnProperty(e)})).sort((function(e,t){return n[t].timestamp-n[e].timestamp}))}}))(k),A=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(t){t.preventDefault(),(0,e.props.setAuthedUser)(null)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authedUser,a=e.users;return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav__menu--left"},r.a.createElement("li",{className:"nav__link"},r.a.createElement(m.c,{to:"/"},"Home")),r.a.createElement("li",{className:"nav__link"},r.a.createElement(m.c,{to:"/add"},"New Question")),r.a.createElement("li",{className:"nav__link"},r.a.createElement(m.c,{to:"/leaderboard"},"Leader Board"))),r.a.createElement("ul",{className:"nav__menu--right"},r.a.createElement("li",{className:"nav__link nav__link--right"},"Hello, ",t),r.a.createElement("li",{className:"nav__link nav__link--right"},r.a.createElement("img",{src:a[t].avatarURL,alt:t,className:"nav__link__img"})),r.a.createElement("li",{className:"nav__link nav__link--right"},r.a.createElement("button",{onClick:this.handleLogout,className:"nav__link__button"},"Log Out"))))}}]),a}(r.a.Component);var R=Object(p.b)((function(e){return{authedUser:e.authedUser,users:e.users}}),(function(e){return{setAuthedUser:function(t){e(w(t))}}}))(A),D=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.leaders;return r.a.createElement("div",{className:"leaderboard"},e.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"leaderboard__card"},r.a.createElement("div",{className:"leaderboard__img"},r.a.createElement("img",{src:e.avatarURL,alt:e.name,className:"leaderboard__img"})),r.a.createElement("div",{className:"leaderboard__user"},r.a.createElement("div",{className:"leaderboard__header"}," ",e.name),r.a.createElement("div",{className:"leaderboard__question"},"Answered questions: ",e.answerSum),r.a.createElement("div",{className:"leaderboard__question"},"Created questions: ",e.questionSum)),r.a.createElement("div",{className:"leaderboard__score"},"Score: ",r.a.createElement("br",null),e.answerSum+e.questionSum))})))}}]),a}(r.a.Component);var z=Object(p.b)((function(e){var t=e.users;return{leaders:Object.values(t).map((function(e){return{id:e.id,name:e.name,avatarURL:e.avatarURL,answerSum:Object.values(e.answers).length,questionSum:e.questions.length,total:Object.values(e.answers).length+e.questions.length}})).sort((function(e,t){return e.total-t.total})).reverse().slice(0,3)}}))(D),Q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={option1:"",option2:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.authedUser,r=a.handleSaveQuestion,o=e.state;r(o.option1,o.option2,n),e.setState({option1:"",option2:""}),e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"poll"},r.a.createElement("div",{className:"poll__header"},"Create a New Poll"),r.a.createElement("div",{className:"poll__new__header1"},"Complete the question:"),r.a.createElement("div",{className:"poll__new__header2"},"Would you rather..."),r.a.createElement("form",{className:"poll__new__form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"poll__new__form__input",id:"option1",type:"text",value:this.state.option1,onChange:this.handleChange,placeholder:"Enter option one ..."}),r.a.createElement("div",null,"or"),r.a.createElement("input",{className:"poll__new__form__input",id:"option2",type:"text",value:this.state.option2,onChange:this.handleChange,placeholder:"Enter option two ..."}),r.a.createElement("button",{className:"poll__button"},"Submit")))}}]),a}(r.a.Component);var L=Object(d.g)(Object(p.b)((function(e){return{authedUser:e.authedUser}}),{handleSaveQuestion:function(e,t,a){return function(n){return(r={optionOneText:e,optionTwoText:t,author:a},E(r)).then((function(e){var t;n(function(e){return{type:"ADD_QUESTION",question:e}}(e)),n({type:"ADD_QUESTION_TO_USER",id:(t=e).id,author:t.author})}));var r}}})(Q)),P=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){return e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.authedUser,r=a.question,o=a.handleSaveAnswer,s=r.id,l=e.state.value;l&&o(n,s,l),console.log(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.badPath)return r.a.createElement(d.a,{to:"/page404"});var e=this.props,t=e.question,a=e.author,n=t.optionOne,o=t.optionTwo,s=a.name,l=a.avatarURL;return r.a.createElement("div",{className:"poll"},r.a.createElement("div",{className:"poll__header"}," ",s," asks:"),r.a.createElement("div",{className:"poll__card"},r.a.createElement("div",{className:"poll__card__img"},r.a.createElement("img",{src:l,height:"50px",alt:"{name}",className:"poll__card__img"})),r.a.createElement("form",{className:"poll__card__details",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"poll__card__details__header"},"Would you rather"),r.a.createElement("div",{className:"poll__card__details__poll"},r.a.createElement("input",{type:"radio",name:"option",value:"optionOne",onChange:this.handleChange}),n.text,r.a.createElement("div",null,"or"),r.a.createElement("input",{type:"radio",name:"option",value:"optionTwo",onChange:this.handleChange}),o.text,r.a.createElement("button",{className:"poll__button"},"Submit")))))}}]),a}(r.a.Component);var I=Object(p.b)((function(e,t){var a=e.authedUser,n=e.questions,r=e.users,o=n[t.id],s=!1;return void 0===o&&(s=!0),{badPath:s,authedUser:a,users:r,questions:n,question:o||null,author:o?r[o.author]:null}}),{handleSaveAnswer:function(e,t,a){return function(n){return n(function(e,t,a){return{type:"ADD_ANSWER_TO_USER",authedUser:e,qid:t,answer:a}}(e,t,a)),n(function(e,t,a){return{type:"ADD_ANSWER_TO_QUESTION",authedUser:e,qid:t,answer:a}}(e,t,a)),j(e,t,a).catch((function(e){console.warn("Error in handleSaveQuestionAnswer:",e)}))}}})(P),W=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.question,t=e.optionOne.votes.length,a=e.optionTwo.votes.length,n=t+a,o=(t/(t+a)*100).toFixed(0),s=(a/(t+a)*100).toFixed(0);return r.a.createElement("div",{className:"poll"},r.a.createElement("div",{className:"poll__header"},"Results"),r.a.createElement("div",{className:"poll__result__header"},"Would you rather?"),r.a.createElement("div",{className:"poll__result__question"},e.optionOne.text),r.a.createElement("div",{className:"poll__result__option"},o," % ",r.a.createElement("progress",{className:"poll__result__progressbar",id:"file",max:n,value:t}," 70% ")),r.a.createElement("div",{className:"poll_result__total"},t," out of ",n," votes"),r.a.createElement("div",{className:"poll__result__question"},e.optionTwo.text),r.a.createElement("div",{className:"poll__result__option"},s," % ",r.a.createElement("progress",{className:"poll__result__progressbar",id:"file",max:n,value:a}," 70% ")),r.a.createElement("div",{className:"poll_result__total"},a," out of ",n," votes"),r.a.createElement("button",{className:"poll__button result__button",onClick:this.handleClick},"back"))}}]),a}(r.a.Component);var V=Object(d.g)(Object(p.b)((function(e,t){var a=e.questions,n=a[t.id];return{questions:a,question:n||null}}))(W)),H=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authedUserAnsweres,a=e.match.params.id,n=!!t.hasOwnProperty(a);return r.a.createElement("div",null,n?r.a.createElement(V,{id:a}):r.a.createElement(I,{id:a}))}}]),a}(r.a.Component);var J=Object(p.b)((function(e){var t=e.authedUser;return{authedUserAnsweres:e.users[t].answers}}))(H),M=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"poll__404"},"Sorry! Page doesn't exist!")}}]),a}(r.a.Component),F=Object(p.b)()(M),B=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){return O().then((function(t){var a=t.users,n=t.questions;e(g(a)),e(function(e){return{type:"RECEIVE_QUESTIONS",questions:e}}(n))}))}))}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"app"},this.props.authedUser?r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:C}),r.a.createElement(d.b,{path:"/questions/:id",component:J}),r.a.createElement(d.b,{path:"/add",component:L}),r.a.createElement(d.b,{path:"/leaderboard",component:z}),r.a.createElement(d.b,{path:"/page404",component:F}),r.a.createElement(d.b,{component:F}))):r.a.createElement(U,null)))}}]),a}(r.a.Component);var Y=Object(p.b)((function(e){return{authedUser:e.authedUser}}))(B),$=a(17);var G=Object($.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.id;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(_.a)({},e,{},t.users);case"ADD_QUESTION_TO_USER":var a=t.author,n=t.id;return Object(_.a)({},e,Object(v.a)({},a,Object(_.a)({},e[a],{questions:e[a].questions.concat(n)})));case"ADD_ANSWER_TO_USER":var r=t.authedUser,o=t.qid,s=t.answer;return Object(_.a)({},e,Object(v.a)({},r,Object(_.a)({},e[r],{answers:Object(_.a)({},e[r].answers,Object(v.a)({},o,s))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUESTIONS":return Object(_.a)({},e,{},t.questions);case"ADD_ANSWER_TO_QUESTION":var a=t.authedUser,n=t.qid,r=t.answer;return Object(_.a)({},e,Object(v.a)({},n,Object(_.a)({},e[n],Object(v.a)({},r,Object(_.a)({},e[n][r],{votes:e[n][r].votes.concat(a)})))));case"ADD_QUESTION":var o=t.question;return Object(_.a)({},e,Object(v.a)({},o.id,o));default:return e}}}),K=a(31),X=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},Z=Object($.a)(K.a,X),ee=Object($.d)(G,Z);console.log(ee.getState()),s.a.render(r.a.createElement(p.a,{store:ee},r.a.createElement(Y,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.236dde3e.chunk.js.map