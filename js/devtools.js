(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={devtools:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([3,"chunk-vendors"]),a()})({"17c3":function(e,t,a){"use strict";a("92a3")},"28b2":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("fa64");new r["default"]({render:function(e){return e(n["a"])}}).$mount("#app")},3:function(e,t,a){e.exports=a("28b2")},"598e":function(e,t,a){},"92a3":function(e,t,a){},d868:function(e,t,a){"use strict";a("598e")},fa64:function(e,t,a){"use strict";a("b0c0");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t("div",{staticClass:"button-content"},e._l(e.tabList,(function(a,r){return t("div",{key:r,on:{click:function(t){return e.checkTab(a.type)}}},[1==a.type&&e.rowContent.length>0?t("Badge",{staticClass:"item",attrs:{value:e.rowContent.length,type:"primary"}},[t("div",{class:e.type==a.type?"checkButton":"button"},[e._v(" "+e._s(a.name)+" ")])]):[t("div",{class:e.type==a.type?"checkButton":"button"},[e._v(" "+e._s(a.name)+" ")])]],2)})),0),1==e.type?[t("div",{staticClass:"select-box"},[t("div",{staticClass:"button-content"},[t("Button",{on:{click:function(t){return e.isAll(1)}}},[e._v(" 全部展开 ")]),t("Button",{on:{click:function(t){return e.isAll(2)}}},[e._v(" 全部收齐 ")]),t("span",{staticClass:"tips"},[e._v("注：点击蓝色区域链接即可跳转对应资源")])],1)]),1==e.type?t("div",{attrs:{id:"file-list"},on:{click:e.fileList}},[e.rowContent&&e.rowContent.length>0?e._l(e.rowContent,(function(a,r){return t("li",{key:r,staticStyle:{"list-style":"none"},attrs:{"data-file-type":a.type,"data-file-lang":a.codeLang}},[null!=a.url&&""!=a.url?t("div",{staticClass:"file-list-link-box"},[t("div",{staticClass:"isSq",on:{click:function(t){return e.isSq(a)}}},[e._v(" "+e._s(a.isShow?"▼":"▶")+" ")]),t("span",{staticClass:"isSq",on:{click:function(t){return e.isSq(a)}}},[e._v(" 资源："+e._s(r+1))]),t("span",{staticClass:"isSq",on:{click:function(t){return e.isSq(a)}}},[e._v(" 资源类型："+e._s(a.type))]),t("a",{staticStyle:{color:"#ffffff"},attrs:{href:"javascript:;"},on:{click:function(t){return e.goUrl(a.url)}}},[e._v(" "+e._s(a.url))])]):e._e(),a.isShow?t("pre",[e._v(e._s(a.annotationCode))]):e._e()])})):[t("Empty",{attrs:{description:"暂无信息"}})]],2):e._e()]:e._e(),2==e.type?[t("div",{staticClass:"button-content",staticStyle:{"justify-content":"space-between"}},[t("div",{staticClass:"checkbox"},[t("div",[t("CheckboxGroup",{attrs:{size:"mini","true-label":"1","false-label":"0","text-color":"#ffffff",fill:"#005cb6"},model:{value:e.checkboxGroup4,callback:function(t){e.checkboxGroup4=t},expression:"checkboxGroup4"}},e._l(e.cities,(function(a){return t("CheckboxButton",{key:a.type,attrs:{label:a.type},on:{change:e.changeCheck}},[e._v(" "+e._s(a.name)+" ")])})),1)],1)]),t("div",{staticClass:"right-content"},[t("div",{staticClass:"button",on:{click:e.goRequest}},[e._v(" 发送 ")])])]),t("div",{staticClass:"bar-content"},[t("Input",{staticClass:"form-control",attrs:{id:"url_field",type:"textarea",rows:4,placeholder:"URL",resize:"none"},model:{value:e.barData.barUrl,callback:function(t){e.$set(e.barData,"barUrl",t)},expression:"barData.barUrl"}}),t("div",{staticClass:"bar-two-content"},[e.barData.type1?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:3,placeholder:"postData",resize:"none"},model:{value:e.barData.postData,callback:function(t){e.$set(e.barData,"postData",t)},expression:"barData.postData"}})],1):e._e(),e.barData.type2?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:2,placeholder:"referer",resize:"none"},model:{value:e.barData.referer,callback:function(t){e.$set(e.barData,"referer",t)},expression:"barData.referer"}})],1):e._e(),e.barData.type3?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:2,placeholder:"User Agent",resize:"none"},model:{value:e.barData.userAgent,callback:function(t){e.$set(e.barData,"userAgent",t)},expression:"barData.userAgent"}})],1):e._e(),e.barData.type4?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:2,placeholder:"Cookies",resize:"none"},model:{value:e.barData.cookies,callback:function(t){e.$set(e.barData,"cookies",t)},expression:"barData.cookies"}})],1):e._e()])],1)]:e._e()],2)},n=[],o=(a("d3b7"),a("159b"),a("498a"),a("ac1f"),a("5319"),a("4d63"),a("25f0"),a("a15b"),a("466d"),a("4de4"),a("1157")),s=a.n(o),i=a("5c96"),c={name:"SuperSerachPlusTools",components:{CheckboxGroup:i["CheckboxGroup"],CheckboxButton:i["CheckboxButton"],Input:i["Input"],Badge:i["Badge"],Empty:i["Empty"],Button:i["Button"]},data:function(){return{cities:[{type:1,name:"postData"},{type:2,name:"Referer"},{type:3,name:"UserAgent"},{type:4,name:"Cookies"}],checkboxGroup4:[],searchKey:"",rowContent:[],type:1,tabList:[{name:"注释扫描",type:1},{name:"superBar",type:2}],barData:{type1:!1,type2:!1,type3:!1,type4:!1,barUrl:"",postData:"",referer:"",userAgent:"",cookies:""}}},created:function(){this.init()},comments:function(){},methods:{isAll:function(e){1==e?this.rowContent.forEach((function(e){e.isShow=!0})):this.rowContent.forEach((function(e){e.isShow=!1}))},cleaAll:function(){s()("#enable_post_btn").prop("checked",!1),s()("#enable_referer_btn").prop("checked",!1),s()("#enable_user_agent_btn").prop("checked",!1),s()("#enable_cookie_btn").prop("checked",!1),this.barData.type1=!1,this.barData.type2=!1,this.barData.type3=!1,this.barData.type4=!1,this.barData.barUrl="",this.barData.postData="",this.barData.referer="",this.barData.userAgent="",this.barData.cookies=""},showMessage:function(e,t,a,r){var n=this.$createElement;Object(i["Notification"])({duration:a||800,title:r,message:n("i",{style:2==e?"color: red":"color: #1257ad"},t),customClass:"notify-success"})},goRequest:function(){if(null!=this.barData.barUrl&&""!=this.barData.barUrl){var e={referer:null,user_agent:null,cookie:null},t=null,a="GET";this.barData.type1&&(a="POST",t=this.getFieldFormData(this.barData.postData)),this.barData.type2&&(e.referer=this.barData.referer),this.barData.type3&&(e.user_agent=this.barData.userAgent),this.barData.type4&&(e.cookie=this.barData.cookies);var r=this.barData.barUrl;if(r=r.replace(new RegExp(/\n|\r/g),"").trim(),new RegExp(/^(http:\/\/|https:\/\/|view-source:)/gi).test(r)||(r="http://"+r),r){if("GET"===a){var n='const url = "'+encodeURIComponent(r)+'";';n+="window.location.href = decodeURIComponent(url);",chrome.devtools.inspectedWindow.eval(n,(function(e,t){setTimeout((function(){}),100)}))}else{var o='var post_data = "'+encodeURIComponent(JSON.stringify(t))+'"; var url = "'+encodeURIComponent(r)+'";';o+="var fields = JSON.parse(decodeURIComponent(post_data));",o+='const form = document.createElement("form");',o+='form.setAttribute("method", "post");',o+='form.setAttribute("action", decodeURIComponent(url));',o+='fields.forEach(function(f) { var input = document.createElement("input"); input.setAttribute("type", "hidden"); input.setAttribute("name", f[\'name\']); input.setAttribute("value", f[\'value\']); form.appendChild(input); });',o+="document.body.appendChild(form);",o+="form.submit();",this.exec(o)}var s=chrome.devtools.inspectedWindow.tabId;chrome.runtime.sendMessage({tabId:s,action:"send_requests",data:{headers:e}})}else this.showMessage(2,"url校验不通过")}else this.showMessage(2,"url不能为空")},exec:function(e){return chrome.devtools.inspectedWindow.eval(e)},handleMessage:function(e,t,a){var r=e.tabId,n=e.action;switch(n){case"send_requests":var o=e.data,s=o.url;if(method=o.method,referer=o.referer,user_agent=o.user_agent,cookie=o.cookie,"GET"===method)chrome.tabs.update(r,{url:s});else{var i=JSON.stringify(o.post_data);chrome.tabs.executeScript(r,{code:'let post_data = "'+encodeURIComponent(i)+'"; let url = "'+encodeURIComponent(s)+'"'},(function(){chrome.tabs.executeScript(r,{file:"../js/post_form.js"})}))}chrome.webRequest.onBeforeSendHeaders.addListener(this.rewriteHeaders(),{urls:["<all_urls>"],tabId:r},["blocking","requestHeaders"]);break;case"load_url":chrome.tabs.get(r,(function(e){var t=getCurrentPostData(r);a({url:e.url,data:t})}));break}},rewriteHeaders:function(e){var t,a,r;r=t=a=-1;for(var n=0;n<e.requestHeaders.length;n++){var o=e.requestHeaders[n];switch(o.name.toLowerCase()){case"referer":t=n;break;case"user-agent":a=n;break;case"cookie":r=n;break}}return referer&&(-1!==t?e.requestHeaders[t].value=referer:e.requestHeaders.push({name:"Referer",value:referer})),user_agent&&(-1!==a?e.requestHeaders[a].value=user_agent:e.requestHeaders.push({name:"User-Agent",value:user_agent})),cookie&&(-1!==r?e.requestHeaders[r].value=cookie:e.requestHeaders.push({name:"Cookie",value:cookie})),{requestHeaders:e.requestHeaders}},setCurrentPostData:function(e){if("POST"===e.method&&e.requestBody){var t=e.requestBody.formData,a=[];for(var r in t)if(t.hasOwnProperty(r)){var n=r+"="+t[r];a.push(n)}chrome.tabs.query({currentWindow:!0,active:!0},(function(e){var t=e[0].id;postDataCurrent.push({tabId:t,data:a.join("&")})}))}},getFieldFormData:function(e){var t=Array(),a=e.trim().split("&");for(var r in a){var n=a[r].match(/(^.*?)=(.*)/);if(3===n.length){var o={};o["name"]=n[1],o["value"]=unescape(n[2]),t.push(o)}}return t},checkTab:function(e){this.type=e},isSq:function(e){e.isShow=!e.isShow},queryKey:function(){this.searchKey&&this.showMessage(1,"功能暂未开发完成")},changeCheck:function(e,t){var a=e,r=t.target._value;1==r&&(this.barData.type1=a),2==r&&(this.barData.type2=a),3==r&&(this.barData.type3=a),4==r&&(this.barData.type4=a)},fileList:function(){var e=this;s()("#filterType,#filterLang").change((function(){var t=s()(this).children("option:selected").val(),a=s()(this).attr("id");e.state[a]=t;var r=s()("#file-list li");r.each((function(t){s()(this).attr("data-file-type")!==e.state["filterType"]&&"allType"!==e.state["filterType"]||s()(this).attr("data-file-lang")!==e.state["filterLang"]&&"allLang"!==e.state["filterLang"]?s()(this).hide():s()(this).show()}))})),s()("#file-list").on("click","a",(function(){e.openResource(s()(this).html())}))},goUrl:function(e){chrome.devtools.panels.openResource(e)},filterResourcesArr:function(e){console.table(e);var t=e.filter((function(e){if(("script"===e["type"]||"stylesheet"===e["type"]||"document"===e["type"])&&-1===e["url"].indexOf("chrome-extension")&&-1===e["url"].indexOf("file://"))return e}));return t},getResourcesAnnotationCode:function(e){var t=/<!--[^\!\[]*?(?<!\/\/)-->|\/\/.*(?:\r|\n|$)|(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/gm,a=e.match(t);return null===a?"":a.join("")},appendResourcesDom:function(e){var t=this.getResourcesAnnotationCode(e.content),a=new RegExp("[\\u4E00-\\u9FFF]+","g"),r=a.test(t)?"gb":"en";if(""!==t){var n={type:e.type,codeLang:r,url:e.url,annotationCode:t,isShow:!1};this.rowContent.push(n)}},htmlEncodeByRegExp:function(e){var t="";return 0==e.length?"":(t=e.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/ /g,"&nbsp;"),t=t.replace(/\'/g,"&#39;"),t=t.replace(/\"/g,"&quot;"),t)},getResources:function(){var e=this;chrome.devtools.inspectedWindow.getResources((function(t){var a=e.filterResourcesArr(t);a.forEach((function(t,a){t.getContent((function(a){var r=t;r["content"]=a,e.appendResourcesDom(r)}))}))}))},openResource:function(e){chrome.devtools.panels.openResource(e)},init:function(){this.getResources()}}},u=c,l=(a("d868"),a("17c3"),a("2877")),p=Object(l["a"])(u,r,n,!1,null,null,null);t["a"]=p.exports}});