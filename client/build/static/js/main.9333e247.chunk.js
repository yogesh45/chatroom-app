(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{100:function(e,a,t){e.exports=t(209)},150:function(e,a){},186:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABzUlEQVRIia3VO4tTQRQA4M9FooWSXnwsFmIj2LmiqFhZirq4a0BYlUUQ8f1YcRX8GVZrqaCVCBZWIij+BR+NKKKFLjZudrMW91wyuSTBSXIgMHOSe77MmUmG0cUOPMIT7B9h3Y7YhZ9YjVcTJ0aN1LAZHxJo5NgUPmJ7D2wZp4ZFNuBLFPyMcWwJuLqygffsMOrYiW8VbGsX7PEgyFH8xRuM9cE+JdDDXOQYlnT2vtYD2xbjHzH/7zjeBbmP14r96oaNY3cOMqnY1GVMJ0jZmheRq2L1HORkgkxF7l6CLGqfqrKNX3E5B5kOpJkg8xVkX+Rv4W2sYmMO0ohVNGNVcLcPUuZP5yBT2u1qRO5mUuwPDkb+WpK/MyxyowdyNcnP5SAzWNF5hKvIgS7I7RxkMpBmjClaURb7jb2Rvx65Fi7lIPAqHp6J+VwPpNyTFi7mInXFr34R6zCbIL8wEZ8r29XChVyEolWreJbkDvVBzg+CwEIUOZfk1mNPjK8kyOygyBi+R5FNlfdq2qdupfJFsmNC+yY8EthZPFXsWbmSM8Mg8EDntdtK5kuK09jo+XRGvEsKryrauKA4IFl/8/1ireJKXoOXeI73ilWNNP4B0Rm6kC6KEsYAAAAASUVORK5CYII="},187:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},191:function(e,a,t){},205:function(e,a,t){},206:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n,s=t(0),r=t.n(s),c=t(5),o=t.n(c),m=t(37),l=t(81),i=t(56),u=t(12),A=t(82),g=t.n(A),E=(t(110),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_MESSAGE":case"MESSAGE_RECIEVED":return e.concat([{text:a.message.text,id:a.id,user:a.message.user,room:a.message.room,message_id:a.message.message_id}]);default:return e}}),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_USER":return e.concat([{name:a.name,id:a.id}]);case"USERS_LIST":return a.users;default:return e}},f=Object(u.b)({messages:E,users:d}),p=t(57),v=t(7),N=t(83),b=t.n(N),O=t(84),j=t.n(O),h=t(85),C=t.n(h),S=(t(186),t(187),t(52)),I=t.n(S),y=function(e){var a=e.message,t=e.name,n=e.room,c=e.editMessage,o=!1,m=Object(s.useState)(!1),l=Object(v.a)(m,2),i=l[0],u=l[1],A=Object(s.useState)(""),g=Object(v.a)(A,2),E=g[0],d=g[1],f=t.trim().toLowerCase();a.user===f&&(o=!0);return o?a.room&&a.room.toLowerCase()==n.toLowerCase()?r.a.createElement("div",{className:"messageContainer justifyEnd"},i?r.a.createElement("div",{className:"edit-message"},r.a.createElement("input",{type:"text",value:E,placeholder:"Type a message..",onChange:function(e){return function(e){d(e.target.value)}(e)}}),r.a.createElement("button",{className:"cancel-edit",onClick:function(){return u(!1)}},"Cancel"),r.a.createElement("button",{className:"save-message",onClick:function(e){u(!1),c(e,E,a.message_id)}},"Save")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"sentText pr-10"},f),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},I.a.emojify(a.text))))):"":a.room&&a.room.toLowerCase()==n.toLowerCase()?r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},I.a.emojify(a.text))),r.a.createElement("p",{className:"sentText pl-10 "},a.user)):""},x=(t(188),function(e){var a=e.messages,t=e.name,n=e.room,s=e.messageEdit;return console.log(a),r.a.createElement(C.a,{className:"messages"},a.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(y,{message:e,name:t,room:n,editMessage:s}))}))}),R=t(86),M=t.n(R),w=t(87),B=t.n(w),k=(t(189),function(e){var a=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:M.a,alt:"online icon"}),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:B.a,alt:"close icon"}))))}),U=(t(190),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}))}),Y=(t(191),t(211)),D=(t(192),function(e){var a=e.users;return console.log(a),r.a.createElement("div",{className:"usersOuter"},r.a.createElement("h3",{className:"headers"},"Online users"),r.a.createElement("div",{className:"usersInner"},a.map(function(e){var a=e.name.substr(0,2);return r.a.createElement("div",{className:"users"},r.a.createElement(Y.a,null,a),r.a.createElement("div",{className:"user-name"},e.name))})))}),K=(t(205),"https://mychat-room-app.herokuapp.com/"),V=Object(m.b)(function(e){return console.log(e),{messages:e.messages}},function(e){return{addMessage:function(a){return e(function(e,a){return{type:"ADD_MESSAGE",message:e}}(a))}}})(function(e){console.log(e);var a=Object(s.useState)(""),t=Object(v.a)(a,2),c=t[0],o=t[1],m=Object(s.useState)(""),l=Object(v.a)(m,2),i=l[0],u=l[1],A=Object(s.useState)([]),g=Object(v.a)(A,2),E=g[0],d=g[1],f=Object(s.useState)(""),N=Object(v.a)(f,2),O=N[0],h=N[1],C=Object(s.useState)([]),S=Object(v.a)(C,2),I=S[0],y=S[1],R=Object(s.useState)("new"),M=Object(v.a)(R,2),w=M[0];M[1];Object(s.useEffect)(function(){var a=b.a.parse(e.location.search),t=a.name,s=a.room;n=j()(K),u(s),o(t),n.emit("join",{name:t,room:s},function(a){if(a)alert(a);else if(s&&e.messages){var t;t=I.concat(e.messages),y(t)}})},[K,e.location.search]),Object(s.useEffect)(function(){n.on("message",function(a){y(function(e){return[].concat(Object(p.a)(e),[a])}),"admin"!=a.user&&e.addMessage(a)}),n.on("roomData",function(e){var a=e.users;d(a)}),n.on("edited_message",function(a){if(a){var t=Object(p.a)(e.messages),n=t.findIndex(function(e){return e.message_id==a.message_id});n&&(t[n].text=a.text,y(t)),console.log(n)}})},[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement(D,{users:E}),r.a.createElement("div",{className:"container"},r.a.createElement(k,{room:i}),r.a.createElement(x,{messages:I,name:c,room:i,messageEdit:function(e,a,t){e.preventDefault(),a&&n.emit("edit_message",{message:a,messageId:t})}}),r.a.createElement(U,{message:O,actionType:w,setMessage:h,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,function(){return h("")})}})))}),F=t(36);t(206);function J(){var e=Object(s.useState)(""),a=Object(v.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)(""),o=Object(v.a)(c,2),m=o[0],l=o[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return l(e.target.value)}})),r.a.createElement(F.b,{onClick:function(e){return t&&m?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var L=t(15),P=function(){return r.a.createElement(F.a,null,r.a.createElement(L.a,{path:"/",exact:!0,component:J}),r.a.createElement(L.a,{path:"/chat",component:V}))},G={key:"root",storage:g.a},T=Object(i.a)(G,f),W=Object(u.c)(T),X=Object(i.b)(W);o.a.render(r.a.createElement(m.a,{store:W},r.a.createElement(l.a,{loading:null,persistor:X},r.a.createElement(P,null))),document.getElementById("root"))},86:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},87:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="}},[[100,1,2]]]);
//# sourceMappingURL=main.9333e247.chunk.js.map