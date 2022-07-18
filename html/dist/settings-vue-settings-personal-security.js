/*! For license information please see settings-vue-settings-personal-security.js.LICENSE.txt */
!function(){"use strict";var n,e={68680:function(n,e,o){var i=o(16453),a=o(20144),r=o(72268),s=o.n(r),c=o(34741),p=o(4820),l=o(10128),d=o.n(l),u=o(79753),A=o(33476),h={ie:/(?:MSIE|Trident|Trident\/7.0; rv)[ :](\d+)/,edge:/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\) Chrome\/[0-9.]+ (?:Mobile Safari|Safari)\/[0-9.]+ Edge\/[0-9.]+$/,firefox:/^Mozilla\/5\.0 \([^)]*(Windows|OS X|Linux)[^)]+\) Gecko\/[0-9.]+ Firefox\/(\d+)(?:\.\d)?$/,chrome:/^Mozilla\/5\.0 \([^)]*(Windows|OS X|Linux)[^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\) Chrome\/(\d+)[0-9.]+ (?:Mobile Safari|Safari)\/[0-9.]+$/,safari:/^Mozilla\/5\.0 \([^)]*(Windows|OS X)[^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\)(?: Version\/([0-9]+)[0-9.]+)? Safari\/[0-9.A-Z]+$/,androidChrome:/Android.*(?:; (.*) Build\/).*Chrome\/(\d+)[0-9.]+/,iphone:/ *CPU +iPhone +OS +([0-9]+)_(?:[0-9_])+ +like +Mac +OS +X */,ipad:/\(iPad; *CPU +OS +([0-9]+)_(?:[0-9_])+ +like +Mac +OS +X */,iosClient:/^Mozilla\/5\.0 \(iOS\) (?:ownCloud|Nextcloud)-iOS.*$/,androidClient:/^Mozilla\/5\.0 \(Android\) (?:ownCloud|Nextcloud)-android.*$/,iosTalkClient:/^Mozilla\/5\.0 \(iOS\) Nextcloud-Talk.*$/,androidTalkClient:/^Mozilla\/5\.0 \(Android\) Nextcloud-Talk.*$/,davx5:/DAV(?:droid|x5)\/([^ ]+)/,webPirate:/(Sailfish).*WebPirate\/(\d+)/,sailfishBrowser:/(Sailfish).*SailfishBrowser\/(\d+)/},f={ie:t("setting","Internet Explorer"),edge:t("setting","Edge"),firefox:t("setting","Firefox"),chrome:t("setting","Google Chrome"),safari:t("setting","Safari"),androidChrome:t("setting","Google Chrome for Android"),iphone:t("setting","iPhone"),ipad:t("setting","iPad"),iosClient:t("setting","{productName} iOS app",{productName:window.oc_defaults.productName}),androidClient:t("setting","{productName} Android app",{productName:window.oc_defaults.productName}),iosTalkClient:t("setting","{productName} Talk for iOS",{productName:window.oc_defaults.productName}),androidTalkClient:t("setting","{productName} Talk for Android",{productName:window.oc_defaults.productName}),davx5:"DAVx5",webPirate:"WebPirate",sailfishBrowser:"SailfishBrowser"},m={ie:"icon-desktop",edge:"icon-desktop",firefox:"icon-desktop",chrome:"icon-desktop",safari:"icon-desktop",androidChrome:"icon-phone",iphone:"icon-phone",ipad:"icon-tablet",iosClient:"icon-phone",androidClient:"icon-phone",iosTalkClient:"icon-phone",androidTalkClient:"icon-phone",davx5:"icon-phone",webPirate:"icon-link",sailfishBrowser:"icon-link"},g={name:"AuthToken",components:{Actions:A.Actions,ActionButton:A.ActionButton,ActionCheckbox:A.ActionCheckbox},props:{token:{type:Object,required:!0}},data:function(){return{showMore:this.token.canScope||this.token.canDelete,renaming:!1,newName:"",actionOpen:!1}},computed:{lastActivityRelative:function(){return OC.Util.relativeModifiedDate(1e3*this.token.lastActivity)},lastActivity:function(){return OC.Util.formatDate(1e3*this.token.lastActivity,"LLL")},iconName:function(){var n=this.token.name.match(/Mozilla\/5\.0 \((\w+)\) (?:mirall|csyncoC)\/(\d+\.\d+\.\d+)/),e="";n&&(this.token.name=t("settings","Sync client - {os}",{os:n[1],version:n[2]}),e="icon-desktop");var o=this.token.name,i=this.token.name;for(var a in h){var r=o.match(h[a]);r&&(i=r[2]&&r[1]?f[a]+" "+r[2]+" - "+r[1]:r[1]?f[a]+" "+r[1]:f[a],e=m[a])}return this.token.current&&(i=t("settings","This session")),{icon:e,name:i}},wiping:function(){return 2===this.token.type}},methods:{startRename:function(){var n=this;this.actionOpen=!1,this.newName=this.token.name,this.renaming=!0,this.$nextTick((function(){n.$refs.input.select()}))},cancelRename:function(){this.renaming=!1},revoke:function(){this.actionOpen=!1,this.$emit("delete",this.token)},rename:function(){this.renaming=!1,this.$emit("rename",this.token,this.newName)},wipe:function(){this.actionOpen=!1,this.$emit("wipe",this.token)}}},v=o(93379),C=o.n(v),k=o(7795),w=o.n(k),y=o(90569),b=o.n(y),x=o(3565),_=o.n(x),T=o(19216),O=o.n(T),N=o(44589),P=o.n(N),B=o(16010),S={};S.styleTagTransform=P(),S.setAttributes=_(),S.insert=b().bind(null,"head"),S.domAPI=w(),S.insertStyleElement=O(),C()(B.Z,S),B.Z&&B.Z.locals&&B.Z.locals;var D=o(51900),E=(0,D.Z)(g,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("tr",{class:n.wiping,attrs:{"data-id":n.token.id}},[e("td",{staticClass:"client"},[e("div",{class:n.iconName.icon})]),n._v(" "),e("td",{staticClass:"token-name"},[n.token.canRename&&n.renaming?e("input",{directives:[{name:"model",rawName:"v-model",value:n.newName,expression:"newName"}],ref:"input",attrs:{type:"text"},domProps:{value:n.newName},on:{keyup:[function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.rename.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:n.cancelRename.apply(null,arguments)}],blur:n.cancelRename,input:function(t){t.target.composing||(n.newName=t.target.value)}}}):e("span",[n._v(n._s(n.iconName.name))]),n._v(" "),n.wiping?e("span",{staticClass:"wiping-warning"},[n._v("("+n._s(n.t("settings","Marked for remote wipe"))+")")]):n._e()]),n._v(" "),e("td",[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.lastActivity,expression:"lastActivity"}],staticClass:"last-activity"},[n._v(n._s(n.lastActivityRelative))])]),n._v(" "),e("td",{staticClass:"more"},[n.token.current?n._e():e("Actions",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:{content:n.t("settings","Device settings"),container:"body"},expression:"{\n\t\t\t\tcontent: t('settings', 'Device settings'),\n\t\t\t\tcontainer: 'body'\n\t\t\t}",modifiers:{auto:!0}}],attrs:{open:n.actionOpen},on:{"update:open":function(t){n.actionOpen=t}}},[1===n.token.type?e("ActionCheckbox",{attrs:{checked:n.token.scope.filesystem},on:{change:function(t){return t.stopPropagation(),t.preventDefault(),n.$emit("toggle-scope",n.token,"filesystem",!n.token.scope.filesystem)}}},[n._v("\n\t\t\t\t"+n._s(n.t("settings","Allow filesystem access"))+"\n\t\t\t")]):n._e(),n._v(" "),n.token.canRename?e("ActionButton",{attrs:{icon:"icon-rename"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.startRename.apply(null,arguments)}}},[n._v("\n\t\t\t\t"+n._s(n.t("settings","Rename"))+"\n\t\t\t")]):n._e(),n._v(" "),n.token.canDelete?[2!==n.token.type?[e("ActionButton",{attrs:{icon:"icon-delete"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.revoke.apply(null,arguments)}}},[n._v("\n\t\t\t\t\t\t"+n._s(n.t("settings","Revoke"))+"\n\t\t\t\t\t")]),n._v(" "),e("ActionButton",{attrs:{icon:"icon-delete"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.wipe.apply(null,arguments)}}},[n._v("\n\t\t\t\t\t\t"+n._s(n.t("settings","Wipe device"))+"\n\t\t\t\t\t")])]:2===n.token.type?e("ActionButton",{attrs:{icon:"icon-delete",title:n.t("settings","Revoke")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.revoke.apply(null,arguments)}}},[n._v("\n\t\t\t\t\t"+n._s(n.t("settings","Revoking this token might prevent the wiping of your device if it has not started the wipe yet."))+"\n\t\t\t\t")]):n._e()]:n._e()],2)],1)])}),[],!1,null,"1c8c3140",null),R={name:"AuthTokenList",components:{AuthToken:E.exports},props:{tokens:{type:Array,required:!0}},computed:{sortedTokens:function(){return this.tokens.slice().sort((function(n,t){var e=parseInt(n.lastActivity,10);return parseInt(t.lastActivity,10)-e}))}},methods:{toggleScope:function(n,t,e){this.$emit("toggle-scope",n,t,e)},rename:function(n,t){this.$emit("rename",n,t)},onDelete:function(n){this.$emit("delete",n)},onWipe:function(n){this.$emit("wipe",n)}}},$=o(52442),U={};U.styleTagTransform=P(),U.setAttributes=_(),U.insert=b().bind(null,"head"),U.domAPI=w(),U.insertStyleElement=O(),C()($.Z,U),$.Z&&$.Z.locals&&$.Z.locals;var Z=o(47719),M={};M.styleTagTransform=P(),M.setAttributes=_(),M.insert=b().bind(null,"head"),M.domAPI=w(),M.insertStyleElement=O(),C()(Z.Z,M),Z.Z&&Z.Z.locals&&Z.Z.locals;var j=(0,D.Z)(R,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("table",{attrs:{id:"app-tokens-table"}},[n.tokens.length?e("thead",[e("tr",[e("th"),n._v(" "),e("th",[n._v(n._s(n.t("settings","Device")))]),n._v(" "),e("th",[n._v(n._s(n.t("settings","Last activity")))]),n._v(" "),e("th")])]):n._e(),n._v(" "),e("tbody",{staticClass:"token-list"},n._l(n.sortedTokens,(function(t){return e("AuthToken",{key:t.id,attrs:{token:t},on:{"toggle-scope":n.toggleScope,rename:n.rename,delete:n.onDelete,wipe:n.onWipe}})})),1)])}),[],!1,null,"4f8ceff3",null).exports,q=o(147),W=o.n(q),G=o(1412),L=o.n(G);function I(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function z(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?I(Object(e),!0).forEach((function(t){F(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function F(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var Q={name:"AuthTokenSetupDialogue",components:{QR:W(),Button:L()},props:{add:{type:Function,required:!0}},data:function(){return{adding:!1,loading:!1,deviceName:"",appPassword:"",loginName:"",passwordCopied:!1,showQR:!1,qrUrl:"",hoveringCopyButton:!1}},computed:{copyTooltipOptions:function(){var n={hideOnTargetClick:!1,trigger:"manual"};return this.passwordCopied?z(z({},n),{},{content:t("settings","Copied!"),show:!0}):z(z({},n),{},{content:t("settings","Copy"),show:this.hoveringCopyButton})}},methods:{selectInput:function(n){n.currentTarget.select()},submit:function(){var n=this;d()().then((function(){return n.loading=!0,n.add(n.deviceName)})).then((function(t){n.adding=!0,n.loginName=t.loginName,n.appPassword=t.token;var e=window.location.protocol+"//"+window.location.host+(0,u.getRootUrl)();n.qrUrl="nc://login/user:".concat(t.loginName,"&password:").concat(t.token,"&server:").concat(e),n.$nextTick((function(){n.$refs.appPassword.select()}))})).catch((function(e){console.error("could not create a new app password",e),OC.Notification.showTemporary(t("settings","Error while creating device token")),n.reset()}))},onCopyPassword:function(){var n=this;this.passwordCopied=!0,this.$refs.clipboardButton.blur(),setTimeout((function(){n.passwordCopied=!1}),3e3)},onCopyPasswordFailed:function(){OC.Notification.showTemporary(t("settings","Could not copy app password. Please copy it manually."))},reset:function(){this.adding=!1,this.loading=!1,this.showQR=!1,this.qrUrl="",this.deviceName="",this.appPassword="",this.loginName=""}}},K=o(97127),H={};H.styleTagTransform=P(),H.setAttributes=_(),H.insert=b().bind(null,"head"),H.domAPI=w(),H.insertStyleElement=O(),C()(K.Z,H),K.Z&&K.Z.locals&&K.Z.locals;var X=(0,D.Z)(Q,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.adding?e("div",[n._v("\n\t"+n._s(n.t("settings","Use the credentials below to configure your app or device."))+"\n\t"+n._s(n.t("settings","For security reasons this password will only be shown once."))+"\n\t"),e("div",{staticClass:"app-password-row"},[e("span",{staticClass:"app-password-label"},[n._v(n._s(n.t("settings","Username")))]),n._v(" "),e("input",{staticClass:"monospaced",attrs:{type:"text",readonly:"readonly"},domProps:{value:n.loginName},on:{focus:n.selectInput}})]),n._v(" "),e("div",{staticClass:"app-password-row"},[e("span",{staticClass:"app-password-label"},[n._v(n._s(n.t("settings","Password")))]),n._v(" "),e("input",{ref:"appPassword",staticClass:"monospaced",attrs:{type:"text",readonly:"readonly"},domProps:{value:n.appPassword},on:{focus:n.selectInput}}),n._v(" "),e("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.copyTooltipOptions,expression:"copyTooltipOptions"},{name:"clipboard",rawName:"v-clipboard:copy",value:n.appPassword,expression:"appPassword",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:n.onCopyPassword,expression:"onCopyPassword",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:n.onCopyPasswordFailed,expression:"onCopyPasswordFailed",arg:"error"}],ref:"clipboardButton",staticClass:"icon icon-clippy",on:{mouseover:function(t){n.hoveringCopyButton=!0},mouseleave:function(t){n.hoveringCopyButton=!1}}}),n._v(" "),e("Button",{on:{click:n.reset}},[n._v("\n\t\t\t"+n._s(n.t("settings","Done"))+"\n\t\t")])],1),n._v(" "),e("div",{staticClass:"app-password-row"},[e("span",{staticClass:"app-password-label"}),n._v(" "),n.showQR?e("QR",{attrs:{value:n.qrUrl}}):e("a",{on:{click:function(t){n.showQR=!0}}},[n._v("\n\t\t\t"+n._s(n.t("settings","Show QR code for mobile apps"))+"\n\t\t")])],1)]):e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:n.deviceName,expression:"deviceName"}],attrs:{type:"text",maxlength:120,disabled:n.loading,placeholder:n.t("settings","App name")},domProps:{value:n.deviceName},on:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.submit.apply(null,arguments)},input:function(t){t.target.composing||(n.deviceName=t.target.value)}}}),n._v(" "),e("Button",{attrs:{disabled:n.loading},on:{click:n.submit}},[n._v("\n\t\t"+n._s(n.t("settings","Create new app password"))+"\n\t")])],1)}),[],!1,null,"6a24fa34",null),V=X.exports;function J(n,t,e,o,i,a,r){try{var s=n[a](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(o,i)}var Y=function(n){return function(t){return n(t),t}},nn={name:"AuthTokenSection",components:{AuthTokenSetupDialogue:V,AuthTokenList:j},props:{tokens:{type:Array,required:!0},canCreateToken:{type:Boolean,required:!0}},data:function(){return{baseUrl:(0,u.generateUrl)("/settings/personal/authtokens")}},methods:{addNewToken:function(n){var e=this;console.debug("creating a new app token",n);var o={name:n};return p.default.post(this.baseUrl,o).then((function(n){return n.data})).then(Y((function(){return console.debug("app token created")}))).then(Y((function(n){return e.tokens.push(n.deviceToken)}))).catch((function(n){throw console.error.bind("could not create app password",n),OC.Notification.showTemporary(t("settings","Error while creating device token")),n}))},toggleTokenScope:function(n,e,o){console.debug("updating app token scope",n.id,e,o);var i=n.scope[e];return n.scope[e]=o,this.updateToken(n).then(Y((function(){return console.debug("app token scope updated")}))).catch((function(o){throw console.error.bind("could not update app token scope",o),OC.Notification.showTemporary(t("settings","Error while updating device token scope")),n.scope[e]=i,o}))},rename:function(n,e){console.debug("renaming app token",n.id,n.name,e);var o=n.name;return n.name=e,this.updateToken(n).then(Y((function(){return console.debug("app token name updated")}))).catch((function(e){console.error.bind("could not update app token name",e),OC.Notification.showTemporary(t("settings","Error while updating device token name")),n.name=o}))},updateToken:function(n){return p.default.put(this.baseUrl+"/"+n.id,n).then((function(n){return n.data}))},deleteToken:function(n){var e=this;return console.debug("deleting app token",n),this.tokens=this.tokens.filter((function(t){return t!==n})),p.default.delete(this.baseUrl+"/"+n.id).then((function(n){return n.data})).then(Y((function(){return console.debug("app token deleted")}))).catch((function(o){console.error.bind("could not delete app token",o),OC.Notification.showTemporary(t("settings","Error while deleting the token")),e.tokens.push(n)}))},wipeToken:function(n){var e,o=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("wiping app token",n),e.prev=1,e.next=4,d()();case 4:return e.next=6,new Promise((function(n){OC.dialogs.confirm(t("settings","Do you really want to wipe your data from this device?"),t("settings","Confirm wipe"),n,!0)}));case 6:if(e.sent){e.next=9;break}return console.debug("wipe aborted by user"),e.abrupt("return");case 9:return e.next=11,p.default.post(o.baseUrl+"/wipe/"+n.id);case 11:console.debug("app token marked for wipe"),n.type=2,e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("could not wipe app token",e.t0),OC.Notification.showTemporary(t("settings","Error while wiping the device with the token"));case 19:case"end":return e.stop()}}),e,null,[[1,15]])})),function(){var n=this,t=arguments;return new Promise((function(o,i){var a=e.apply(n,t);function r(n){J(a,o,i,r,s,"next",n)}function s(n){J(a,o,i,r,s,"throw",n)}r(void 0)}))})()}}},tn=nn,en=(0,D.Z)(tn,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"section",attrs:{id:"security"}},[e("h2",[n._v(n._s(n.t("settings","Devices & sessions",{},void 0,{sanitize:!1})))]),n._v(" "),e("p",{staticClass:"settings-hint hidden-when-empty"},[n._v("\n\t\t"+n._s(n.t("settings","Web, desktop and mobile clients currently logged in to your account."))+"\n\t")]),n._v(" "),e("AuthTokenList",{attrs:{tokens:n.tokens},on:{"toggle-scope":n.toggleTokenScope,rename:n.rename,delete:n.deleteToken,wipe:n.wipeToken}}),n._v(" "),n.canCreateToken?e("AuthTokenSetupDialogue",{attrs:{add:n.addNewToken}}):n._e()],1)}),[],!1,null,"451cdc4a",null).exports;o.nc=btoa(OC.requestToken),a.default.use(s()),a.default.use(c.default,{defaultHtml:!1}),a.default.prototype.t=t,new(a.default.extend(en))({propsData:{tokens:(0,i.loadState)("settings","app_tokens"),canCreateToken:(0,i.loadState)("settings","can_create_app_token")}}).$mount("#security-authtokens")},16010:function(n,t,e){var o=e(87537),i=e.n(o),a=e(23645),r=e.n(a)()(i());r.push([n.id,".wiping[data-v-1c8c3140]{background-color:var(--color-background-darker)}td[data-v-1c8c3140]{border-top:1px solid var(--color-border);max-width:200px;white-space:normal;vertical-align:middle;position:relative}td.client[data-v-1c8c3140],td.more[data-v-1c8c3140]{overflow:visible;position:relative;width:44px;height:44px}td.token-name[data-v-1c8c3140]{padding:10px 6px}td.token-name.token-rename[data-v-1c8c3140]{padding:0}td.token-name input[data-v-1c8c3140]{width:100%;margin:0}td.token-name .wiping-warning[data-v-1c8c3140]{color:var(--color-text-lighter)}td.more[data-v-1c8c3140]{padding:0 10px}td.client div[data-v-1c8c3140]{opacity:.57;width:44px;height:44px}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthToken.vue"],names:[],mappings:"AAiQA,yBACC,+CAAA,CAGD,oBACC,wCAAA,CACA,eAAA,CACA,kBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,oDACC,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGD,+BACC,gBAAA,CAEA,4CACC,SAAA,CAGD,qCACC,UAAA,CACA,QAAA,CAGF,+CACC,+BAAA,CAGD,yBAEC,cAAA,CAMA,+BACC,WAAA,CACA,UAAA,CACA,WAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wiping {\n\tbackground-color: var(--color-background-darker);\n}\n\ntd {\n\tborder-top: 1px solid var(--color-border);\n\tmax-width: 200px;\n\twhite-space: normal;\n\tvertical-align: middle;\n\tposition: relative;\n\n\t&%icon {\n\t\toverflow: visible;\n\t\tposition: relative;\n\t\twidth: 44px;\n\t\theight: 44px;\n\t}\n\n\t&.token-name {\n\t\tpadding: 10px 6px;\n\n\t\t&.token-rename {\n\t\t\tpadding: 0;\n\t\t}\n\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t\tmargin: 0;\n\t\t}\n\t}\n\t&.token-name .wiping-warning {\n\t\tcolor: var(--color-text-lighter);\n\t}\n\n\t&.more {\n\t\t@extend %icon;\n\t\tpadding: 0 10px;\n\t}\n\n\t&.client {\n\t\t@extend %icon;\n\n\t\tdiv {\n\t\t\topacity: 0.57;\n\t\t\twidth: 44px;\n\t\t\theight: 44px;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.Z=r},52442:function(n,t,e){var o=e(87537),i=e.n(o),a=e(23645),r=e.n(a)()(i());r.push([n.id,"table[data-v-4f8ceff3]{width:100%;min-height:50px;padding-top:5px;max-width:580px}table th[data-v-4f8ceff3]{opacity:.5;padding:10px 0}.token-list td>a.icon-more[data-v-4f8ceff3]{transition:opacity var(--animation-quick)}.token-list a.icon-more[data-v-4f8ceff3]{padding:14px;display:block;width:44px;height:44px;opacity:.5}.token-list tr:hover td>a.icon[data-v-4f8ceff3],.token-list tr td>a.icon[data-v-4f8ceff3]:focus,.token-list tr.active td>a.icon[data-v-4f8ceff3]{opacity:1}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthTokenList.vue"],names:[],mappings:"AAwFA,uBACC,UAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CAEA,0BACC,UAAA,CACA,cAAA,CAKD,4CACC,yCAAA,CAGD,yCACC,YAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CAIA,iJAGC,SAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ntable {\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding-top: 5px;\n\tmax-width: 580px;\n\n\tth {\n\t\topacity: .5;\n\t\tpadding: 10px 0;\n\t}\n}\n\n.token-list {\n\ttd > a.icon-more {\n\t\ttransition: opacity var(--animation-quick);\n\t}\n\n\ta.icon-more {\n\t\tpadding: 14px;\n\t\tdisplay: block;\n\t\twidth: 44px;\n\t\theight: 44px;\n\t\topacity: .5;\n\t}\n\n\ttr {\n\t\t&:hover td > a.icon,\n\t\ttd > a.icon:focus,\n\t\t&.active td > a.icon {\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.Z=r},47719:function(n,t,e){var o=e(87537),i=e.n(o),a=e(23645),r=e.n(a)()(i());r.push([n.id,"#app-tokens-table tr>*:nth-child(2){padding-left:6px}#app-tokens-table tr>*:nth-child(3){text-align:right}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthTokenList.vue"],names:[],mappings:"AA8HC,oCACC,gBAAA,CAGD,oCACC,gBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#app-tokens-table {\n\ttr > *:nth-child(2) {\n\t\tpadding-left: 6px;\n\t}\n\n\ttr > *:nth-child(3) {\n\t\ttext-align: right;\n\t}\n}\n"],sourceRoot:""}]),t.Z=r},97127:function(n,t,e){var o=e(87537),i=e.n(o),a=e(23645),r=e.n(a)()(i());r.push([n.id,".app-password-row[data-v-6a24fa34]{display:table-row}.app-password-row .icon[data-v-6a24fa34]{background-size:16px 16px;display:inline-block;position:relative;top:3px;margin-left:5px;margin-right:8px}.app-password-label[data-v-6a24fa34]{display:table-cell;padding-right:1em;text-align:right;vertical-align:middle}.monospaced[data-v-6a24fa34]{width:245px;font-family:monospace}.button-vue[data-v-6a24fa34]{display:inline-block;margin:3px 3px 3px 3px}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthTokenSetupDialogue.vue"],names:[],mappings:"AAqLA,mCACC,iBAAA,CAEA,yCACC,yBAAA,CACA,oBAAA,CACA,iBAAA,CACA,OAAA,CACA,eAAA,CACA,gBAAA,CAKF,qCACC,kBAAA,CACA,iBAAA,CACA,gBAAA,CACA,qBAAA,CAGD,6BACC,WAAA,CACA,qBAAA,CAGD,6BACC,oBAAA,CACA,sBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.app-password-row {\n\tdisplay: table-row;\n\n\t.icon {\n\t\tbackground-size: 16px 16px;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\ttop: 3px;\n\t\tmargin-left: 5px;\n\t\tmargin-right: 8px;\n\t}\n\n}\n\n.app-password-label {\n\tdisplay: table-cell;\n\tpadding-right: 1em;\n\ttext-align: right;\n\tvertical-align: middle;\n}\n\n.monospaced {\n\twidth: 245px;\n\tfont-family: monospace;\n}\n\n.button-vue{\n\tdisplay:inline-block;\n\tmargin: 3px 3px 3px 3px;\n}\n\n"],sourceRoot:""}]),t.Z=r}},o={};function i(n){var t=o[n];if(void 0!==t)return t.exports;var a=o[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=e,i.amdD=function(){throw new Error("define cannot be used indirect")},i.amdO={},n=[],i.O=function(t,e,o,a){if(!e){var r=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],a=n[l][2];for(var s=!0,c=0;c<e.length;c++)(!1&a||r>=a)&&Object.keys(i.O).every((function(n){return i.O[n](e[c])}))?e.splice(c--,1):(s=!1,a<r&&(r=a));if(s){n.splice(l--,1);var p=o();void 0!==p&&(t=p)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,o,a]},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,{a:t}),t},i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},i.j=4783,function(){i.b=document.baseURI||self.location.href;var n={4783:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,a,r=e[0],s=e[1],c=e[2],p=0;if(r.some((function(t){return 0!==n[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var l=c(i)}for(t&&t(e);p<r.length;p++)a=r[p],i.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return i.O(l)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var a=i.O(void 0,[7874],(function(){return i(68680)}));a=i.O(a)}();
//# sourceMappingURL=settings-vue-settings-personal-security.js.map?v=7805e60d140683b86204