(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{2750:function(e,t,a){"use strict";a("3894")},3894:function(e,t,a){},5458:function(e,t,a){"use strict";a("abcb")},abcb:function(e,t,a){},fa64:function(e,t,a){"use strict";a("b0c0");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t("div",{staticClass:"button-content"},e._l(e.tabList,(function(a,r){return t("div",{key:r,on:{click:function(t){return e.checkTab(a.type)}}},[1==a.type&&e.rowContent.length>0?t("Badge",{staticClass:"item",attrs:{value:e.rowContent.length,type:"primary"}},[t("div",{class:e.type==a.type?"checkButton":"button"},[e._v(" "+e._s(a.name)+" ")])]):3==a.type&&e.jkCount>0?t("Badge",{staticClass:"item",attrs:{value:e.jkCount,type:"warning"}},[t("div",{class:e.type==a.type?"checkButton":"button"},[e._v(" "+e._s(a.name)+" ")])]):[t("div",{class:e.type==a.type?"checkButton":"button"},[e._v(" "+e._s(a.name)+" ")])]],2)})),0),1==e.type?[t("div",{staticClass:"select-box"},[t("div",{staticClass:"button-content"},[t("Button",{on:{click:function(t){return e.isAll(1)}}},[e._v(" 全部展开 ")]),t("Button",{on:{click:function(t){return e.isAll(2)}}},[e._v(" 全部收齐 ")]),t("Button",{on:{click:function(t){return e.settingKey()}}},[e._v(" 配置扫描 ")]),t("span",{staticClass:"tips"},[e._v("注：点击蓝色区域链接即可跳转对应资源")])],1)]),1==e.type?t("div",{attrs:{id:"file-list"},on:{click:e.fileList}},[e.rowContent&&e.rowContent.length>0?e._l(e.rowContent,(function(a,r){return t("li",{key:r,staticStyle:{"list-style":"none"},attrs:{"data-file-type":a.type,"data-file-lang":a.codeLang}},[null!=a.url&&""!=a.url?t("div",{staticClass:"file-list-link-box"},[t("div",{staticClass:"isSq",on:{click:function(t){return e.isSq(a)}}},[e._v(" "+e._s(a.isShow?"▼":"▶")+" ")]),t("span",{staticClass:"isSq",on:{click:function(t){return e.isSq(a)}}},[e._v(" 资源："+e._s(r+1))]),t("span",{staticClass:"isSq",on:{click:function(t){return e.isSq(a)}}},[e._v(" 资源类型："+e._s(a.type))]),t("Popover",{attrs:{placement:"top-start",title:a.type,width:"300",trigger:"hover",content:a.url}},[t("div",{staticClass:"a-url",staticStyle:{color:"#ffffff"},attrs:{slot:"reference"},on:{click:function(t){return e.goUrl(a.url)}},slot:"reference"},[e._v(" "+e._s(a.url)+" ")])]),t("div",{staticClass:"zs-content-flex",on:{click:function(t){return e.openDrawer(a)}}},[a.zsIsTips?t("div",{staticClass:"tipsStr",style:e.superBarSearchColor?"color: "+e.superBarSearchColor:""},[e._v(" 存在注释："+e._s(a.zsTipsStr)+" ")]):e._e(),a.wjIsTips?t("div",{staticClass:"tipsStr",style:e.superBarSearchColor?"color: "+e.superBarSearchColor:""},[e._v(" 文件存在："+e._s(a.wjTipsStr)+" ")]):e._e()])],1):e._e(),a.isShow?t("pre",[e._v(e._s(a.annotationCode))]):e._e()])})):[t("Empty",{attrs:{description:"暂无信息"}})]],2):e._e()]:e._e(),2==e.type?[t("div",{staticClass:"button-content",staticStyle:{"justify-content":"space-between"}},[t("div",{staticClass:"checkbox"},[t("div",[t("CheckboxGroup",{attrs:{size:"mini","true-label":"1","false-label":"0","text-color":"#ffffff",fill:"#005cb6"},model:{value:e.checkboxGroup4,callback:function(t){e.checkboxGroup4=t},expression:"checkboxGroup4"}},e._l(e.cities,(function(a){return t("CheckboxButton",{key:a.type,attrs:{label:a.type},on:{change:e.changeCheck}},[e._v(" "+e._s(a.name)+" ")])})),1)],1)]),t("div",{staticClass:"right-content"},[t("div",{staticClass:"button",on:{click:e.clearAll}},[e._v(" 清空 ")]),t("div",{staticClass:"button",on:{click:e.goRequest}},[e._v(" 发送 ")])])]),t("div",{staticClass:"bar-content"},[t("Input",{staticClass:"form-control",attrs:{id:"url_field",type:"textarea",rows:4,placeholder:"URL",resize:"none"},model:{value:e.barData.barUrl,callback:function(t){e.$set(e.barData,"barUrl",t)},expression:"barData.barUrl"}}),t("div",{staticClass:"bar-two-content"},[e.barData.type1?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:3,placeholder:"postData",resize:"none"},model:{value:e.barData.postData,callback:function(t){e.$set(e.barData,"postData",t)},expression:"barData.postData"}})],1):e._e(),e.barData.type2?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:2,placeholder:"referer",resize:"none"},model:{value:e.barData.referer,callback:function(t){e.$set(e.barData,"referer",t)},expression:"barData.referer"}})],1):e._e(),e.barData.type3?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:2,placeholder:"User Agent",resize:"none"},model:{value:e.barData.userAgent,callback:function(t){e.$set(e.barData,"userAgent",t)},expression:"barData.userAgent"}})],1):e._e(),e.barData.type4?t("div",[t("Input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:2,placeholder:"Cookies",resize:"none"},model:{value:e.barData.cookies,callback:function(t){e.$set(e.barData,"cookies",t)},expression:"barData.cookies"}})],1):e._e()])],1)]:e._e(),3==e.type?[t("div",{staticClass:"button-content",staticStyle:{"justify-content":"flex-end"}},[t("div",{staticClass:"right-content"},[t("div",{staticClass:"button",on:{click:e.settingTab}},[e._v(" 扫描参数配置 ")]),t("div",{staticClass:"button",on:{click:e.clearTable}},[e._v(" 清空 ")])])]),t("Table",{staticStyle:{width:"100%"},attrs:{data:e.tableDataOne,"max-height":"550",height:"550",border:!0,"row-class-name":e.tableRowClassName,type:"card",size:"mini"}},[t("template",{slot:"empty"},[t("Empty",{attrs:{"image-size":100,description:"暂无数据"}})],1),t("TableColumn",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("Form",{staticClass:"demo-table-expand",attrs:{"label-position":"left"}},[t("FormItem",{attrs:{label:"url"}},[t("Tag",{attrs:{type:"info"}},[e._v(" "+e._s(a.row.url)+" ")])],1),t("FormItem",{attrs:{label:"请求类型"}},[t("Tag",{attrs:{type:"success"}},[e._v(" "+e._s(a.row.type)+" ")])],1),t("FormItem",{attrs:{label:"响应状态"}},[t("Tag",{attrs:{type:"success"}},[e._v(" "+e._s(a.row.status)+" ")])],1),t("FormItem",{attrs:{label:"响应类型"}},[t("Tag",{attrs:{type:"success"}},[e._v(" "+e._s(a.row.mimeType)+" ")])],1),t("FormItem",{attrs:{label:"请求参数"}},[a.row.requestBody&&a.row.requestBody.params&&a.row.requestBody.params.length>0?e._l(a.row.requestBody.params,(function(a,r){return t("div",{key:r,staticClass:"params"},[e._v(" "+e._s(a.name)+":"+e._s(a.value)+" ")])})):e._e()],2),t("FormItem",{attrs:{label:"响应头"}},[a.row.headers&&a.row.headers&&a.row.headers.length>0?[t("div",{staticClass:"xy-content"},e._l(a.row.headers,(function(a,r){return t("div",{key:r,staticClass:"params"},[t("Tag",[e._v(e._s(a.name)+"："+e._s(a.value))])],1)})),0)]:e._e()],2),t("FormItem",{attrs:{label:"cookie"}},[a.row.cookie&&a.row.cookie&&a.row.cookie.length>0?[t("div",{staticClass:"xy-content"},e._l(a.row.cookie,(function(a,r){return t("div",{key:r,staticClass:"params"},[t("Tag",{attrs:{type:"success"}},[e._v(" "+e._s(a.name)+"："+e._s(a.value)+" ")])],1)})),0)]:e._e()],2),t("FormItem",{attrs:{label:"扫描信息"}},[a.row.isShowTableTips&&a.row.isShowTableTips&&a.row.isShowTableTips.length>0?[t("div",{staticClass:"xy-content"},e._l(a.row.isShowTableTips,(function(a,r){return t("div",{key:r,staticClass:"params"},[t("div",{style:1==a.type?"color: "+e.superBarSearchColorTable1:2==a.type?"color: "+e.superBarSearchColorTable2:3==a.type?"color: "+e.superBarSearchColorTable3:""},[e._v(" "+e._s(a.name)+"存在："+e._s(a.query)+" ")])])})),0)]:e._e()],2)],1)]}}],null,!1,3681511227)}),t("TableColumn",{attrs:{prop:"url",label:"请求地址",width:"180",align:"center"}}),t("TableColumn",{attrs:{prop:"type",label:"请求类型",width:"100",align:"center",sortable:""}}),t("TableColumn",{attrs:{prop:"status",label:"响应",width:"80",align:"center",sortable:""}}),t("TableColumn",{attrs:{prop:"mimeType",label:"响应类型",align:"center",sortable:""}}),t("TableColumn",{attrs:{prop:"requestBody",label:"请求体",width:"auto",align:"center"}}),t("TableColumn",{attrs:{prop:"cookie",label:"cookie",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.cookie&&a.row.cookie.length>0?[t("div",{staticClass:"xy-content"},e._l(a.row.cookie,(function(a,r){return t("div",{key:r,staticClass:"params"},[t("div",[e._v(" "+e._s(a.name)+"："+e._s(a.value)+" ")])])})),0)]:e._e()]}}],null,!1,4085758688)}),t("TableColumn",{attrs:{prop:"isShowTableTips",label:"扫描信息",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.isShowTableTips&&a.row.isShowTableTips.length>0?[t("div",{staticClass:"sm-content"},e._l(a.row.isShowTableTips,(function(a,r){return t("div",{key:r,staticClass:"params",style:1==a.type?"color: "+e.superBarSearchColorTable1:2==a.type?"color: "+e.superBarSearchColorTable2:3==a.type?"color: "+e.superBarSearchColorTable3:""},[t("div",[e._v(" "+e._s(a.name)+"存在："+e._s(a.query))])])})),0)]:e._e()]}}],null,!1,3560944751)}),t("TableColumn",{attrs:{prop:"content",label:"响应内容",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("Button",{attrs:{size:"mini"},on:{click:function(t){return e.showContent(a.row)}}},[e._v(" 查看 ")])]}}],null,!1,1884472978)})],2)]:e._e(),t("Dialog",{attrs:{title:"配置扫描",visible:e.superVisible,width:"50%","before-close":e.superVisibleClose},on:{"update:visible":function(t){e.superVisible=t}}},[t("div",{staticClass:"dialogOne-content"},[t("span",[e._v("注:需要扫描的参数需要使用#号单独隔开 例：(api#url#password)")]),t("Input",{staticStyle:{width:"100%","margin-top":"5px"},attrs:{type:"textarea",rows:5,placeholder:"请输入要扫描的参数",resize:"none"},model:{value:e.superBarSearch,callback:function(t){e.superBarSearch=t},expression:"superBarSearch"}}),t("div",{staticClass:"tips-color"},[t("span",{staticClass:"demonstration"},[e._v("设置提示颜色")]),t("ColorPicker",{model:{value:e.superBarSearchColor,callback:function(t){e.superBarSearchColor=t},expression:"superBarSearchColor"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("Button",{on:{click:function(t){e.superVisible=!1}}},[e._v("取 消")]),t("Button",{attrs:{type:"primary"},on:{click:e.saveSuperBarSearch}},[e._v("保 存")])],1)]),t("Dialog",{attrs:{title:"响应数据",visible:e.xyVisible,width:"100%"},on:{"update:visible":function(t){e.xyVisible=t}}},[t("div",{staticClass:"dialogTwo-content"},[e.jsonData&&"application/json"==e.jsonData.mimeType?t("div",{staticClass:"json"},[t("JsonViewer",{attrs:{value:e.jsonData.content,expanded:!0}})],1):e.jsonData?t("div",{staticClass:"json"},[t("pre",[e._v(e._s(e.jsonData.content))])]):e._e()])]),t("Dialog",{attrs:{title:"配置netWork扫描参数",visible:e.superVisibleTabe,width:"50%"},on:{"update:visible":function(t){e.superVisibleTabe=t}}},[t("div",{staticClass:"dialogOne-content"},[t("span",[e._v("注:需要扫描的参数需要使用#号单独隔开 例：(api#url#password)")]),t("Input",{staticStyle:{width:"100%","margin-top":"5px"},attrs:{type:"textarea",rows:5,placeholder:"请输入要扫描的参数",resize:"none"},model:{value:e.superBarSearchTable,callback:function(t){e.superBarSearchTable=t},expression:"superBarSearchTable"}}),t("div",{staticClass:"tips-color"},[t("span",{staticClass:"demonstration"},[e._v("设置响应体信息颜色")]),t("ColorPicker",{model:{value:e.superBarSearchColorTable1,callback:function(t){e.superBarSearchColorTable1=t},expression:"superBarSearchColorTable1"}})],1),t("div",{staticClass:"tips-color"},[t("span",{staticClass:"demonstration"},[e._v("设置头部信息颜色")]),t("ColorPicker",{model:{value:e.superBarSearchColorTable2,callback:function(t){e.superBarSearchColorTable2=t},expression:"superBarSearchColorTable2"}})],1),t("div",{staticClass:"tips-color"},[t("span",{staticClass:"demonstration"},[e._v("设置cookie颜色")]),t("ColorPicker",{model:{value:e.superBarSearchColorTable3,callback:function(t){e.superBarSearchColorTable3=t},expression:"superBarSearchColorTable3"}})],1),t("div",[t("span",[e._v(" 扫描类型：")]),t("Select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectValues,callback:function(t){e.selectValues=t},expression:"selectValues"}},e._l(e.options,(function(e){return t("Option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",[t("span",[e._v(" 响应类型：")]),t("Select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectValuesTwo,callback:function(t){e.selectValuesTwo=t},expression:"selectValuesTwo"}},e._l(e.optionsTwo,(function(e){return t("Option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("Button",{on:{click:function(t){e.superVisibleTabe=!1}}},[e._v("取 消")]),t("Button",{attrs:{type:"primary"},on:{click:e.saveSuperBarSearchTabe}},[e._v("保 存")])],1)]),t("Drawer",{attrs:{title:"注释扫描结果",visible:e.isDrawer,direction:"rtl"},on:{"update:visible":function(t){e.isDrawer=t}}},[e.zsItem?t("div",{staticClass:"zs-content"},[e.zsItem.zsIsTips?t("div",{staticClass:"tipsStr",style:e.superBarSearchColor?"color: "+e.superBarSearchColor:""},[e._v(" 存在注释："+e._s(e.zsItem.zsTipsStr)+" ")]):e._e(),e.zsItem.wjIsTips?t("div",{staticClass:"tipsStr",style:e.superBarSearchColor?"color: "+e.superBarSearchColor:""},[e._v(" 文件存在："+e._s(e.zsItem.wjTipsStr)+" ")]):e._e()]):e._e()])],2)},s=[],o=(a("4de4"),a("d3b7"),a("caad"),a("2532"),a("159b"),a("498a"),a("ac1f"),a("5319"),a("4d63"),a("25f0"),a("a15b"),a("466d"),a("a9e3"),a("1157")),n=a.n(o),i=a("349e"),l=a.n(i),c=a("5c96"),u={name:"SuperSerachPlusTools",components:{CheckboxGroup:c["CheckboxGroup"],CheckboxButton:c["CheckboxButton"],Input:c["Input"],Badge:c["Badge"],Empty:c["Empty"],Button:c["Button"],Dialog:c["Dialog"],ColorPicker:c["ColorPicker"],Table:c["Table"],TableColumn:c["TableColumn"],Form:c["Form"],FormItem:c["FormItem"],Tag:c["Tag"],JsonViewer:l.a,Select:c["Select"],Option:c["Option"],Popover:c["Popover"],Drawer:c["Drawer"]},data:function(){return{isDrawer:!1,cities:[{type:1,name:"postData"},{type:2,name:"Referer"},{type:3,name:"UserAgent"},{type:4,name:"Cookies"}],checkboxGroup4:[],searchKey:"",rowContent:[],type:1,tabList:[{name:"注释扫描",type:1},{name:"接口扫描",type:3},{name:"superBar",type:2}],barData:{type1:!1,type2:!1,type3:!1,type4:!1,barUrl:"",postData:"",referer:"",userAgent:"",cookies:""},superBarSearch:"",superBarSearchColor:"#409EFF",superVisible:!1,xyVisible:!1,jsonData:null,tableDataOne:[],tableDataOneCopy:[],superVisibleTabe:!1,superBarSearchColorTable1:"#409EFF",superBarSearchColorTable2:"#409EFF",superBarSearchColorTable3:"#409EFF",superBarSearchTable:"",options:[{value:1,label:"响应体信息"},{value:2,label:"头部信息"},{value:3,label:"cookie信息"}],optionsTwo:[{value:1,label:"text/html"},{value:2,label:"application/json"},{value:3,label:"application/x-www-form-urlencoded"},{value:4,label:"multipart/form-data"},{value:5,label:"text/plain"},{value:6,label:"application/javascript"},{value:7,label:"application/xml"},{value:8,label:"text/xml"},{value:9,label:"text/css"},{value:10,label:"image/jpeg"},{value:11,label:"image/png"},{value:12,label:"image/gif"},{value:13,label:"image/webp"},{value:14,label:"image/svg+xml"},{value:15,label:"image/x-icon"},{value:16,label:"image/bmp"},{value:17,label:"image/tiff"},{value:18,label:"image/vnd.microsoft.icon"},{value:18,label:"text/javascript"}],selectValues:[],selectValuesTwo:[],queryTable:"",zsItem:null,isZsStatus:!1,isJkStatus:!1,jkCount:0}},created:function(){this.searchSuperKey(),this.init();var e=this;chrome.storage.sync.get("isJkStatus",(function(t){e.isJkStatus=t.isJkStatus,t.isJkStatus?e.onRequestFinished():e.showMessage(1,"未开启接口扫描功能，请在插件配置tools中开启",2e3)}))},comments:function(){},methods:{openDrawer:function(e){this.zsItem=null,this.zsItem=e,this.isDrawer=!0},queryTableInput:function(e){this.queryTable=e;var t=this.tableDataOne;t&&t.length>0&&this.queryTable&&(this.tableDataOne=this.queryTable?t.filter(this.createStateFilter(this.queryTable)):t)},createStateFilter:function(e){return function(t){return t.content.toLowerCase().includes(e.toLowerCase())}},settingTab:function(){this.superVisibleTabe=!0},saveSuperBarSearchTabe:function(){if(""!=this.superBarSearchTable){var e=this.selectValues;if(0!=e.length){var t=this.selectValuesTwo;0!=t.length?(chrome.storage.sync.set({superBarSearchTable:this.superBarSearchTable}),chrome.storage.sync.set({superBarSearchColorTable1:this.superBarSearchColorTable1}),chrome.storage.sync.set({superBarSearchColorTable2:this.superBarSearchColorTable2}),chrome.storage.sync.set({superBarSearchColorTable3:this.superBarSearchColorTable3}),chrome.storage.sync.set({superSearchSelectS:JSON.stringify(e)}),chrome.storage.sync.set({superSearchSelectSTwo:JSON.stringify(t)}),this.showMessage(1,"保存成功,生效需重新打开插件",2e3),this.superVisibleTabe=!1):this.showMessage(2,"请选择响应类型")}else this.showMessage(2,"请选择扫描类型")}else this.showMessage(2,"参数不能为空")},showContent:function(e){this.xyVisible=!0,this.jsonData=e},tableRowClassName:function(e){var t=e.row;e.rowIndex;t.status},clearTable:function(){this.tableDataOne=[]},settingKey:function(){this.superVisible=!0},superVisibleClose:function(){this.superVisible=!1},saveSuperBarSearch:function(){""!=this.superBarSearch?(chrome.storage.sync.set({superBarSearch:this.superBarSearch}),chrome.storage.sync.set({superBarSearchColor:this.superBarSearchColor}),this.showMessage(1,"保存成功,生效需重新打开插件",2e3),this.superVisible=!1):this.showMessage(2,"参数不能为空")},searchSuperKey:function(){var e=this;chrome.storage.sync.get("superBarSearch",(function(t){t.superBarSearch&&(e.superBarSearch=t.superBarSearch)})),chrome.storage.sync.get("superBarSearchColor",(function(t){t.superBarSearchColor&&(e.superBarSearchColor=t.superBarSearchColor)})),chrome.storage.sync.get("superBarSearchTable",(function(t){t.superBarSearchTable&&(e.superBarSearchTable=t.superBarSearchTable)})),chrome.storage.sync.get("superBarSearchColorTable1",(function(t){t.superBarSearchColorTable1&&(e.superBarSearchColorTable1=t.superBarSearchColorTable1)})),chrome.storage.sync.get("superBarSearchColorTable2",(function(t){t.superBarSearchColorTable2&&(e.superBarSearchColorTable2=t.superBarSearchColorTable2)})),chrome.storage.sync.get("superBarSearchColorTable3",(function(t){t.superBarSearchColorTable3&&(e.superBarSearchColorTable3=t.superBarSearchColorTable3)})),chrome.storage.sync.get("superSearchSelectS",(function(t){t.superSearchSelectS&&(e.selectValues=JSON.parse(t.superSearchSelectS))})),chrome.storage.sync.get("superSearchSelectSTwo",(function(t){t.superSearchSelectSTwo&&(e.selectValuesTwo=JSON.parse(t.superSearchSelectSTwo))})),chrome.storage.sync.get("isZsStatus",(function(t){e.isZsStatus=t.isZsStatus})),chrome.storage.sync.get("isJkStatus",(function(t){e.isJkStatus=t.isJkStatus}))},isAll:function(e){1==e?this.rowContent.forEach((function(e){e.isShow=!0})):this.rowContent.forEach((function(e){e.isShow=!1}))},clearAll:function(){this.barData={type1:!1,type2:!1,type3:!1,type4:!1,barUrl:"",postData:"",referer:"",userAgent:"",cookies:""},this.checkboxGroup4=[]},showMessage:function(e,t,a,r){var s=this.$createElement;Object(c["Notification"])({duration:a||800,title:r,message:s("i",{style:2==e?"color: red":"color: #1257ad"},t),customClass:"notify-success"})},goRequest:function(){if(null!=this.barData.barUrl&&""!=this.barData.barUrl){var e={referer:null,user_agent:null,cookie:null},t=null,a="GET";this.barData.type1&&(a="POST",t=this.getFieldFormData(this.barData.postData)),this.barData.type2&&(e.referer=this.barData.referer),this.barData.type3&&(e.user_agent=this.barData.userAgent),this.barData.type4&&(e.cookie=this.barData.cookies);var r=this.barData.barUrl;if(r=r.replace(new RegExp(/\n|\r/g),"").trim(),new RegExp(/^(http:\/\/|https:\/\/|view-source:)/gi).test(r)||(r="http://"+r),r){if("GET"===a){var s='const url = "'+encodeURIComponent(r)+'";';s+="window.location.href = decodeURIComponent(url);",chrome.devtools.inspectedWindow.eval(s,(function(e,t){setTimeout((function(){}),100)}))}else{var o='var post_data = "'+encodeURIComponent(JSON.stringify(t))+'"; var url = "'+encodeURIComponent(r)+'";';o+="var fields = JSON.parse(decodeURIComponent(post_data));",o+='const form = document.createElement("form");',o+='form.setAttribute("method", "post");',o+='form.setAttribute("action", decodeURIComponent(url));',o+='fields.forEach(function(f) { var input = document.createElement("input"); input.setAttribute("type", "hidden"); input.setAttribute("name", f[\'name\']); input.setAttribute("value", f[\'value\']); form.appendChild(input); });',o+="document.body.appendChild(form);",o+="form.submit();",this.exec(o)}var n=chrome.devtools.inspectedWindow.tabId;chrome.runtime.sendMessage({tabId:n,action:"send_requests",data:{headers:e}})}else this.showMessage(2,"url校验不通过")}else this.showMessage(2,"url不能为空")},exec:function(e){return chrome.devtools.inspectedWindow.eval(e)},handleMessage:function(e,t,a){var r=e.tabId,s=e.action;switch(s){case"send_requests":var o=e.data,n=o.url;if(method=o.method,referer=o.referer,user_agent=o.user_agent,cookie=o.cookie,"GET"===method)chrome.tabs.update(r,{url:n});else{var i=JSON.stringify(o.post_data);chrome.tabs.executeScript(r,{code:'let post_data = "'+encodeURIComponent(i)+'"; let url = "'+encodeURIComponent(n)+'"'},(function(){chrome.tabs.executeScript(r,{file:"../js/post_form.js"})}))}chrome.webRequest.onBeforeSendHeaders.addListener(this.rewriteHeaders(),{urls:["<all_urls>"],tabId:r},["blocking","requestHeaders"]);break;case"load_url":chrome.tabs.get(r,(function(e){var t=getCurrentPostData(r);a({url:e.url,data:t})}));break}},rewriteHeaders:function(e){var t,a,r;r=t=a=-1;for(var s=0;s<e.requestHeaders.length;s++){var o=e.requestHeaders[s];switch(o.name.toLowerCase()){case"referer":t=s;break;case"user-agent":a=s;break;case"cookie":r=s;break}}return referer&&(-1!==t?e.requestHeaders[t].value=referer:e.requestHeaders.push({name:"Referer",value:referer})),user_agent&&(-1!==a?e.requestHeaders[a].value=user_agent:e.requestHeaders.push({name:"User-Agent",value:user_agent})),cookie&&(-1!==r?e.requestHeaders[r].value=cookie:e.requestHeaders.push({name:"Cookie",value:cookie})),{requestHeaders:e.requestHeaders}},setCurrentPostData:function(e){if("POST"===e.method&&e.requestBody){var t=e.requestBody.formData,a=[];for(var r in t)if(t.hasOwnProperty(r)){var s=r+"="+t[r];a.push(s)}chrome.tabs.query({currentWindow:!0,active:!0},(function(e){var t=e[0].id;postDataCurrent.push({tabId:t,data:a.join("&")})}))}},getFieldFormData:function(e){var t=Array(),a=e.trim().split("&");for(var r in a){var s=a[r].match(/(^.*?)=(.*)/);if(3===s.length){var o={};o["name"]=s[1],o["value"]=unescape(s[2]),t.push(o)}}return t},checkTab:function(e){this.type=e,1==this.type&&(this.isZsStatus||this.showMessage(1,"未开启注释扫描功能，请在插件配置tools中开启",2e3)),3==this.type&&(this.isJkStatus||this.showMessage(1,"未开启接口扫描功能，请在插件配置tools中开启",2e3))},isSq:function(e){e.isShow=!e.isShow},queryKey:function(){this.searchKey&&this.showMessage(1,"功能暂未开发完成")},changeCheck:function(e,t){var a=e,r=t.target._value;1==r&&(this.barData.type1=a),2==r&&(this.barData.type2=a),3==r&&(this.barData.type3=a),4==r&&(this.barData.type4=a)},fileList:function(){var e=this;n()("#filterType,#filterLang").change((function(){var t=n()(this).children("option:selected").val(),a=n()(this).attr("id");e.state[a]=t;var r=n()("#file-list li");r.each((function(t){n()(this).attr("data-file-type")!==e.state["filterType"]&&"allType"!==e.state["filterType"]||n()(this).attr("data-file-lang")!==e.state["filterLang"]&&"allLang"!==e.state["filterLang"]?n()(this).hide():n()(this).show()}))})),n()("#file-list").on("click","a",(function(){e.openResource(n()(this).html())}))},goUrl:function(e){chrome.devtools.panels.openResource(e)},filterResourcesArr:function(e){console.table(e);var t=e.filter((function(e){if(("script"===e["type"]||"stylesheet"===e["type"]||"document"===e["type"])&&-1===e["url"].indexOf("chrome-extension")&&-1===e["url"].indexOf("file://"))return e}));return t},getResourcesAnnotationCode:function(e){var t=/<!--[^\!\[]*?(?<!\/\/)-->|\/\/.*(?:\r|\n|$)|(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/gm,a=e.match(t);return null===a?"":a.join("")},appendResourcesDom:function(e){var t=this.getResourcesAnnotationCode(e.content),a=new RegExp("[\\u4E00-\\u9FFF]+","g"),r=a.test(t)?"gb":"en";if(""!==t){var s=!1,o="",n=!1,i="";if(this.superBarSearch){var l=this.superBarSearch.split("#");l.forEach((function(a){void 0!=a&&null!=a&&""!=a&&(-1!==t.indexOf(a)&&(s=!0,o+=a+" "),-1!==e.content.indexOf(a)&&(n=!0,i+=a+" "))}))}var c={type:e.type,codeLang:r,url:e.url,annotationCode:t,isShow:!1,zsIsTips:s,zsTipsStr:o,wjIsTips:n,wjTipsStr:i};this.rowContent.push(c)}},htmlEncodeByRegExp:function(e){var t="";return 0==e.length?"":(t=e.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/ /g,"&nbsp;"),t=t.replace(/\'/g,"&#39;"),t=t.replace(/\"/g,"&quot;"),t)},getResources:function(){var e=this;chrome.devtools.inspectedWindow.getResources((function(t){var a=e.filterResourcesArr(t);a.forEach((function(t,a){t.getContent((function(a){var r=t;r["content"]=a,e.appendResourcesDom(r)}))}))}))},openResource:function(e){chrome.devtools.panels.openResource(e)},init:function(){var e=this;chrome.storage.sync.get("isZsStatus",(function(t){t.isZsStatus?e.getResources():e.showMessage(1,"未开启注释扫描功能，请在插件配置tools中开启",2e3)}))},onRequestFinished:function(){var e=this;chrome.devtools.network.onRequestFinished.addListener((function(t){t.getContent((function(a,r){var s=t.request.url,o=t.request.method;if(void 0==o||null==o||""==o)return!1;var n=t.response.content.mimeType;if(!e.filterMimeType(n))return!1;var i=t.response.headers,l=t.response.status,c=t.response.cookies,u=t.request.queryString,p=e.selectValues,h=e.superBarSearchTable,b=!1,d=[];if(p&&p.length>0&&h&&null!=h&&""!=h){var f=h.split("#");f.forEach((function(t){void 0!=t&&null!=t&&""!=t&&p.forEach((function(r){var s=Number(r);if(1==s&&a&&-1!==a.indexOf(t)){b=!0;var o={type:s,name:e.isTypeReturnStr(s),query:t};d.push(o),e.jkCount++}2==s&&i&&i.length>0&&i.forEach((function(a){if(a.value&&-1!==a.value.indexOf(t)||a.name&&-1!==a.name.indexOf(t)){b=!0;var r={type:s,name:e.isTypeReturnStr(s),query:t};d.push(r),e.jkCount++}})),3==s&&c&&c.length>0&&c.forEach((function(a){if(a.value&&-1!==a.value.indexOf(t)||a.name&&-1!==a.name.indexOf(t)){b=!0;var r={type:s,name:e.isTypeReturnStr(s),query:t};d.push(r),e.jkCount++}}))}))}))}var v=t.request.postData,m={url:s,type:o,mimeType:n,content:a,headers:i,status:l,cookie:c,requestParams:u&&u.length>0?u:[],requestBody:v,isShowTable:b,isShowTableTips:d};e.tableDataOne.push(m)}))}))},isTypeReturnStr:function(e){var t="";return 1==e&&(t="响应体信息"),2==e&&(t="头部信息"),3==e&&(t="cookie信息"),t},filterMimeType:function(e){if(void 0==e||null==e||""==e)return!1;var t=this.selectValuesTwo,a=this.optionsTwo,r=!1;return a.forEach((function(a){t.forEach((function(t){a.value==t&&e==a.label&&(r=!0)}))})),r}}},p=u,h=(a("5458"),a("2750"),a("2877")),b=Object(h["a"])(p,r,s,!1,null,null,null);t["a"]=b.exports}}]);