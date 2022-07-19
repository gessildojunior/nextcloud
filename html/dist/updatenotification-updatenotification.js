/*! For license information please see updatenotification-updatenotification.js.LICENSE.txt */
!function(){"use strict";var e,a={36267:function(e,a,i){var o=i(20144),s=i(79753),r=i(26533),p=i.n(r),l=i(7811),c=i.n(l),d=i(34741),u=i(2649),h=i.n(u);d.VTooltip.options.defaultHtml=!1;var f={name:"UpdateNotification",components:{Multiselect:c(),PopoverMenu:p()},directives:{ClickOutside:h(),tooltip:d.VTooltip},data:function(){return{newVersionString:"",lastCheckedDate:"",isUpdateChecked:!1,webUpdaterEnabled:!0,isWebUpdaterRecommended:!0,updaterEnabled:!0,versionIsEol:!1,downloadLink:"",isNewVersionAvailable:!1,hasValidSubscription:!1,updateServerURL:"",changelogURL:"",whatsNewData:[],currentChannel:"",channels:[],notifyGroups:"",availableGroups:[],isDefaultUpdateServerURL:!0,enableChangeWatcher:!1,availableAppUpdates:[],missingAppUpdates:[],appStoreFailed:!1,appStoreDisabled:!1,isListFetched:!1,hideMissingUpdates:!1,hideAvailableUpdates:!0,openedWhatsNew:!1,openedUpdateChannelMenu:!1}},_$el:null,_$notifyGroups:null,computed:{newVersionAvailableString:function(){return t("updatenotification","A new version is available: <strong>{newVersionString}</strong>",{newVersionString:this.newVersionString})},noteDelayedStableString:function(){return t("updatenotification","Note that after a new release the update only shows up after the first minor release or later. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found. Learn more about updates and release channels at {link}").replace("{link}",'<a href="https://nextcloud.com/release-channels/">https://nextcloud.com/release-channels/</a>')},lastCheckedOnString:function(){return t("updatenotification","Checked on {lastCheckedDate}",{lastCheckedDate:this.lastCheckedDate})},statusText:function(){return this.isListFetched?this.appStoreDisabled?t("updatenotification","Please make sure your config.php does not set <samp>appstoreenabled</samp> to false."):this.appStoreFailed?t("updatenotification","Could not connect to the App Store or no updates have been returned at all. Search manually for updates or make sure your server has access to the internet and can connect to the App Store."):0===this.missingAppUpdates.length?t("updatenotification","<strong>All</strong> apps have a compatible version for this Nextcloud version available.",this):n("updatenotification","<strong>%n</strong> app has no compatible version for this Nextcloud version available.","<strong>%n</strong> apps have no compatible version for this Nextcloud version available.",this.missingAppUpdates.length):t("updatenotification","Checking apps for compatible versions")},whatsNew:function(){if(0===this.whatsNewData.length)return null;var n=[];for(var e in this.whatsNewData)n[e]={icon:"icon-checkmark",longtext:this.whatsNewData[e]};return this.changelogURL&&n.push({href:this.changelogURL,text:t("updatenotification","View changelog"),icon:"icon-link",target:"_blank",action:""}),n},channelList:function(){var n=[];return n.push({text:t("updatenotification","Enterprise"),longtext:t("updatenotification","For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package."),icon:"icon-star",active:"enterprise"===this.currentChannel,disabled:!this.hasValidSubscription,action:this.changeReleaseChannelToEnterprise}),n.push({text:t("updatenotification","Stable"),longtext:t("updatenotification","The most recent stable version. It is suited for regular use and will always update to the latest major version."),icon:"icon-checkmark",active:"stable"===this.currentChannel,action:this.changeReleaseChannelToStable}),n.push({text:t("updatenotification","Beta"),longtext:t("updatenotification","A pre-release version only for testing new features, not for production environments."),icon:"icon-category-customization",active:"beta"===this.currentChannel,action:this.changeReleaseChannelToBeta}),this.isNonDefaultChannel&&n.push({text:this.currentChannel,icon:"icon-rename",active:!0}),n},isNonDefaultChannel:function(){return"enterprise"!==this.currentChannel&&"stable"!==this.currentChannel&&"beta"!==this.currentChannel},localizedChannelName:function(){switch(this.currentChannel){case"enterprise":return t("updatenotification","Enterprise");case"stable":return t("updatenotification","Stable");case"beta":return t("updatenotification","Beta");default:return this.currentChannel}}},watch:{notifyGroups:function(n){if(this.enableChangeWatcher){var t=[];_.each(n,(function(n){t.push(n.value)})),OCP.AppConfig.setValue("updatenotification","notify_groups",JSON.stringify(t))}},isNewVersionAvailable:function(){this.isNewVersionAvailable&&$.ajax({url:(0,s.generateOcsUrl)("apps/updatenotification/api/v1/applist/{newVersion}",{newVersion:this.newVersion}),type:"GET",beforeSend:function(n){n.setRequestHeader("Accept","application/json")},success:function(n){this.availableAppUpdates=n.ocs.data.available,this.missingAppUpdates=n.ocs.data.missing,this.isListFetched=!0,this.appStoreFailed=!1}.bind(this),error:function(n){this.availableAppUpdates=[],this.missingAppUpdates=[],this.appStoreDisabled=n.responseJSON.ocs.data.appstore_disabled,this.isListFetched=!0,this.appStoreFailed=!0}.bind(this)})}},beforeMount:function(){var n=JSON.parse($("#updatenotification").attr("data-json"));this.newVersion=n.newVersion,this.newVersionString=n.newVersionString,this.lastCheckedDate=n.lastChecked,this.isUpdateChecked=n.isUpdateChecked,this.webUpdaterEnabled=n.webUpdaterEnabled,this.isWebUpdaterRecommended=n.isWebUpdaterRecommended,this.updaterEnabled=n.updaterEnabled,this.downloadLink=n.downloadLink,this.isNewVersionAvailable=n.isNewVersionAvailable,this.updateServerURL=n.updateServerURL,this.currentChannel=n.currentChannel,this.channels=n.channels,this.notifyGroups=n.notifyGroups,this.isDefaultUpdateServerURL=n.isDefaultUpdateServerURL,this.versionIsEol=n.versionIsEol,this.hasValidSubscription=n.hasValidSubscription,n.changes&&n.changes.changelogURL&&(this.changelogURL=n.changes.changelogURL),n.changes&&n.changes.whatsNew&&(n.changes.whatsNew.admin&&(this.whatsNewData=this.whatsNewData.concat(n.changes.whatsNew.admin)),this.whatsNewData=this.whatsNewData.concat(n.changes.whatsNew.regular))},mounted:function(){this._$el=$(this.$el),this._$notifyGroups=this._$el.find("#oca_updatenotification_groups_list"),this._$notifyGroups.on("change",function(){this.$emit("input")}.bind(this)),$.ajax({url:(0,s.generateOcsUrl)("cloud/groups"),dataType:"json",success:function(n){var t=[];$.each(n.ocs.data.groups,(function(n,e){t.push({value:e,label:e})})),this.availableGroups=t,this.enableChangeWatcher=!0}.bind(this)})},methods:{clickUpdaterButton:function(){$.ajax({url:(0,s.generateUrl)("/apps/updatenotification/credentials")}).success((function(n){var t=document.createElement("form");t.setAttribute("method","post"),t.setAttribute("action",(0,s.getRootUrl)()+"/updater/");var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","updater-secret-input"),e.setAttribute("value",n),t.appendChild(e),document.body.appendChild(t),t.submit()}))},changeReleaseChannelToEnterprise:function(){this.changeReleaseChannel("enterprise")},changeReleaseChannelToStable:function(){this.changeReleaseChannel("stable")},changeReleaseChannelToBeta:function(){this.changeReleaseChannel("beta")},changeReleaseChannel:function(n){this.currentChannel=n,$.ajax({url:(0,s.generateUrl)("/apps/updatenotification/channel"),type:"POST",data:{channel:this.currentChannel},success:function(n){OC.msg.finishedAction("#channel_save_msg",n)}}),this.openedUpdateChannelMenu=!1},toggleUpdateChannelMenu:function(){this.openedUpdateChannelMenu=!this.openedUpdateChannelMenu},toggleHideMissingUpdates:function(){this.hideMissingUpdates=!this.hideMissingUpdates},toggleHideAvailableUpdates:function(){this.hideAvailableUpdates=!this.hideAvailableUpdates},toggleMenu:function(){this.openedWhatsNew=!this.openedWhatsNew},closeUpdateChannelMenu:function(){this.openedUpdateChannelMenu=!1},hideMenu:function(){this.openedWhatsNew=!1}}},v=i(93379),A=i.n(v),m=i(7795),g=i.n(m),C=i(90569),b=i.n(C),w=i(3565),U=i.n(w),k=i(19216),y=i.n(k),x=i(44589),N=i.n(x),S=i(41044),E={};E.styleTagTransform=N(),E.setAttributes=U(),E.insert=b().bind(null,"head"),E.domAPI=g(),E.insertStyleElement=y(),A()(S.Z,E),S.Z&&S.Z.locals&&S.Z.locals;var D=i(16722),M={};M.styleTagTransform=N(),M.setAttributes=U(),M.insert=b().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=y(),A()(D.Z,M),D.Z&&D.Z.locals&&D.Z.locals;var L=(0,i(51900).Z)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"followupsection",attrs:{id:"updatenotification"}},[e("div",{staticClass:"update"},[n.isNewVersionAvailable?[n.versionIsEol?e("p",[e("span",{staticClass:"warning"},[e("span",{staticClass:"icon icon-error-white"}),n._v("\n\t\t\t\t\t"+n._s(n.t("updatenotification","The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible."))+"\n\t\t\t\t")])]):n._e(),n._v(" "),e("p",[e("span",{domProps:{innerHTML:n._s(n.newVersionAvailableString)}}),e("br"),n._v(" "),n.isListFetched?n._e():e("span",{staticClass:"icon icon-loading-small"}),n._v(" "),e("span",{domProps:{innerHTML:n._s(n.statusText)}})]),n._v(" "),n.missingAppUpdates.length?[e("h3",{on:{click:n.toggleHideMissingUpdates}},[n._v("\n\t\t\t\t\t"+n._s(n.t("updatenotification","Apps missing compatible version"))+"\n\t\t\t\t\t"),n.hideMissingUpdates?n._e():e("span",{staticClass:"icon icon-triangle-n"}),n._v(" "),n.hideMissingUpdates?e("span",{staticClass:"icon icon-triangle-s"}):n._e()]),n._v(" "),n.hideMissingUpdates?n._e():e("ul",{staticClass:"applist"},n._l(n.missingAppUpdates,(function(t,a){return e("li",{key:a},[e("a",{attrs:{href:"https://apps.nextcloud.com/apps/"+t.appId,title:n.t("settings","View in store")}},[n._v(n._s(t.appName)+" ↗")])])})),0)]:n._e(),n._v(" "),n.availableAppUpdates.length?[e("h3",{on:{click:n.toggleHideAvailableUpdates}},[n._v("\n\t\t\t\t\t"+n._s(n.t("updatenotification","Apps with compatible version"))+"\n\t\t\t\t\t"),n.hideAvailableUpdates?n._e():e("span",{staticClass:"icon icon-triangle-n"}),n._v(" "),n.hideAvailableUpdates?e("span",{staticClass:"icon icon-triangle-s"}):n._e()]),n._v(" "),n.hideAvailableUpdates?n._e():e("ul",{staticClass:"applist"},n._l(n.availableAppUpdates,(function(t,a){return e("li",{key:a},[e("a",{attrs:{href:"https://apps.nextcloud.com/apps/"+t.appId,title:n.t("settings","View in store")}},[n._v(n._s(t.appName)+" ↗")])])})),0)]:n._e(),n._v(" "),!n.isWebUpdaterRecommended&&n.updaterEnabled&&n.webUpdaterEnabled?[e("h3",{staticClass:"warning"},[n._v("\n\t\t\t\t\t"+n._s(n.t("updatenotification","Please note that the web updater is not recommended with more than 100 users! Please use the command line updater instead!"))+"\n\t\t\t\t")])]:n._e(),n._v(" "),e("div",[n.updaterEnabled&&n.webUpdaterEnabled?e("a",{staticClass:"button primary",attrs:{href:"#"},on:{click:n.clickUpdaterButton}},[n._v(n._s(n.t("updatenotification","Open updater")))]):n._e(),n._v(" "),n.downloadLink?e("a",{staticClass:"button",class:{hidden:!n.updaterEnabled},attrs:{href:n.downloadLink}},[n._v(n._s(n.t("updatenotification","Download now")))]):n._e(),n._v(" "),n.updaterEnabled&&!n.webUpdaterEnabled?e("span",[n._v("\n\t\t\t\t\t"+n._s(n.t("updatenotification","Please use the command line updater to update."))+"\n\t\t\t\t")]):n._e(),n._v(" "),n.whatsNew?e("div",{staticClass:"whatsNew"},[e("div",{staticClass:"toggleWhatsNew"},[e("a",{directives:[{name:"click-outside",rawName:"v-click-outside",value:n.hideMenu,expression:"hideMenu"}],staticClass:"button",on:{click:n.toggleMenu}},[n._v(n._s(n.t("updatenotification","What's new?")))]),n._v(" "),e("div",{staticClass:"popovermenu",class:{"menu-center":!0,open:n.openedWhatsNew}},[e("PopoverMenu",{attrs:{menu:n.whatsNew}})],1)])]):n._e()])]:n.isUpdateChecked?[n._v("\n\t\t\t"+n._s(n.t("updatenotification","Your version is up to date."))+"\n\t\t\t"),e("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:n.lastCheckedOnString,expression:"lastCheckedOnString",modifiers:{auto:!0}}],staticClass:"icon-info svg"})]:[n._v("\n\t\t\t"+n._s(n.t("updatenotification","The update check is not yet finished. Please refresh the page."))+"\n\t\t")],n._v(" "),n.isDefaultUpdateServerURL?n._e():[e("p",{staticClass:"topMargin"},[e("em",[n._v(n._s(n.t("updatenotification","A non-default update server is in use to be checked for updates:"))+" "),e("code",[n._v(n._s(n.updateServerURL))])])])]],2),n._v(" "),e("div",[n._v("\n\t\t"+n._s(n.t("updatenotification","You can change the update channel below which also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page."))+"\n\t")]),n._v(" "),e("h3",{staticClass:"update-channel-selector"},[n._v("\n\t\t"+n._s(n.t("updatenotification","Update channel:"))+"\n\t\t"),e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:n.closeUpdateChannelMenu,expression:"closeUpdateChannelMenu"}],staticClass:"update-menu"},[e("span",{staticClass:"icon-update-menu",on:{click:n.toggleUpdateChannelMenu}},[n._v("\n\t\t\t\t"+n._s(n.localizedChannelName)+"\n\t\t\t\t"),e("span",{staticClass:"icon-triangle-s"})]),n._v(" "),e("div",{staticClass:"popovermenu menu menu-center",class:{"show-menu":n.openedUpdateChannelMenu}},[e("PopoverMenu",{attrs:{menu:n.channelList}})],1)])]),n._v(" "),e("span",{staticClass:"msg",attrs:{id:"channel_save_msg"}}),e("br"),n._v(" "),e("p",[e("em",[n._v(n._s(n.t("updatenotification","You can always update to a newer version. But you can never downgrade to a more stable version.")))]),e("br"),n._v(" "),e("em",{domProps:{innerHTML:n._s(n.noteDelayedStableString)}})]),n._v(" "),e("p",{attrs:{id:"oca_updatenotification_groups"}},[n._v("\n\t\t"+n._s(n.t("updatenotification","Notify members of the following groups about available updates:"))+"\n\t\t"),e("Multiselect",{attrs:{options:n.availableGroups,multiple:!0,label:"label","track-by":"value","tag-width":75},model:{value:n.notifyGroups,callback:function(t){n.notifyGroups=t},expression:"notifyGroups"}}),e("br"),n._v(" "),"daily"===n.currentChannel||"git"===n.currentChannel?e("em",[n._v(n._s(n.t("updatenotification","Only notifications for app updates are available.")))]):n._e(),n._v(" "),"daily"===n.currentChannel?e("em",[n._v(n._s(n.t("updatenotification","The selected update channel makes dedicated notifications for the server obsolete.")))]):n._e(),n._v(" "),"git"===n.currentChannel?e("em",[n._v(n._s(n.t("updatenotification","The selected update channel does not support updates of the server.")))]):n._e()],1)])}),[],!1,null,"418946e4",null).exports;o.default.mixin({methods:{t:function(n,t,e,a,i){return OC.L10N.translate(n,t,e,a,i)},n:function(n,t,e,a,i,o){return OC.L10N.translatePlural(n,t,e,a,i,o)}}}),new o.default({el:"#updatenotification",render:function(n){return n(L)}})},41044:function(n,t,e){var a=e(87537),i=e.n(a),o=e(23645),s=e.n(o)()(i());s.push([n.id,"#updatenotification[data-v-418946e4]{margin-top:-25px;margin-bottom:200px}#updatenotification div.update[data-v-418946e4],#updatenotification p[data-v-418946e4]:not(.inlineblock){margin-bottom:25px}#updatenotification h2.inlineblock[data-v-418946e4]{margin-top:25px}#updatenotification h3[data-v-418946e4]{cursor:pointer}#updatenotification h3 .icon[data-v-418946e4]{cursor:pointer}#updatenotification h3[data-v-418946e4]:first-of-type{margin-top:0}#updatenotification h3.update-channel-selector[data-v-418946e4]{display:inline-block;cursor:inherit}#updatenotification .icon[data-v-418946e4]{display:inline-block;margin-bottom:-3px}#updatenotification .icon-triangle-s[data-v-418946e4],#updatenotification .icon-triangle-n[data-v-418946e4]{opacity:.5}#updatenotification .whatsNew[data-v-418946e4]{display:inline-block}#updatenotification .toggleWhatsNew[data-v-418946e4]{position:relative}#updatenotification .popovermenu[data-v-418946e4]{margin-top:5px;width:300px}#updatenotification .popovermenu p[data-v-418946e4]{margin-bottom:0;width:100%}#updatenotification .applist[data-v-418946e4]{margin-bottom:25px}#updatenotification .update-menu[data-v-418946e4]{position:relative;cursor:pointer;margin-left:3px;display:inline-block}#updatenotification .update-menu .icon-update-menu[data-v-418946e4]{cursor:inherit}#updatenotification .update-menu .icon-update-menu .icon-triangle-s[data-v-418946e4]{display:inline-block;vertical-align:middle;cursor:inherit;opacity:1}#updatenotification .update-menu .popovermenu[data-v-418946e4]{display:none;top:28px}#updatenotification .update-menu .popovermenu.show-menu[data-v-418946e4]{display:block}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/UpdateNotification.vue"],names:[],mappings:"AAwcA,qCACC,gBAAA,CACA,mBAAA,CACA,yGAEC,kBAAA,CAED,oDACC,eAAA,CAED,wCACC,cAAA,CACA,8CACC,cAAA,CAED,sDACC,YAAA,CAED,gEACC,oBAAA,CACA,cAAA,CAGF,2CACC,oBAAA,CACA,kBAAA,CAED,4GACC,UAAA,CAED,+CACC,oBAAA,CAED,qDACC,iBAAA,CAED,kDAKC,cAAA,CACA,WAAA,CALA,oDACC,eAAA,CACA,UAAA,CAKF,8CACC,kBAAA,CAGD,kDACC,iBAAA,CACA,cAAA,CACA,eAAA,CACA,oBAAA,CACA,oEACC,cAAA,CACA,qFACC,oBAAA,CACA,qBAAA,CACA,cAAA,CACA,SAAA,CAGF,+DACC,YAAA,CACA,QAAA,CACA,yEACC,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#updatenotification {\n\tmargin-top: -25px;\n\tmargin-bottom: 200px;\n\tdiv.update,\n\tp:not(.inlineblock) {\n\t\tmargin-bottom: 25px;\n\t}\n\th2.inlineblock {\n\t\tmargin-top: 25px;\n\t}\n\th3 {\n\t\tcursor: pointer;\n\t\t.icon {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t&:first-of-type {\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t&.update-channel-selector {\n\t\t\tdisplay: inline-block;\n\t\t\tcursor: inherit;\n\t\t}\n\t}\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: -3px;\n\t}\n\t.icon-triangle-s, .icon-triangle-n {\n\t\topacity: 0.5;\n\t}\n\t.whatsNew {\n\t\tdisplay: inline-block;\n\t}\n\t.toggleWhatsNew {\n\t\tposition: relative;\n\t}\n\t.popovermenu {\n\t\tp {\n\t\t\tmargin-bottom: 0;\n\t\t\twidth: 100%;\n\t\t}\n\t\tmargin-top: 5px;\n\t\twidth: 300px;\n\t}\n\t.applist {\n\t\tmargin-bottom: 25px;\n\t}\n\n\t.update-menu {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tmargin-left: 3px;\n\t\tdisplay: inline-block;\n\t\t.icon-update-menu {\n\t\t\tcursor: inherit;\n\t\t\t.icon-triangle-s {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tvertical-align: middle;\n\t\t\t\tcursor: inherit;\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t\t.popovermenu {\n\t\t\tdisplay: none;\n\t\t\ttop: 28px;\n\t\t\t&.show-menu {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.Z=s},16722:function(n,t,e){var a=e(87537),i=e.n(a),o=e(23645),s=e.n(o)()(i());s.push([n.id,"#updatenotification .popovermenu{margin-top:5px;width:300px}#updatenotification .popovermenu p{margin-top:5px;width:100%}#updatenotification .update-menu .icon-star:hover,#updatenotification .update-menu .icon-star:focus{background-image:var(--icon-star-000)}#updatenotification .topMargin{margin-top:15px}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/UpdateNotification.vue"],names:[],mappings:"AAkhBA,iCAKC,cAAA,CACA,WAAA,CALA,mCACC,cAAA,CACA,UAAA,CAMF,oGAEC,qCAAA,CAED,+BACC,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* override needed to make menu wider */\n#updatenotification .popovermenu {\n\tp {\n\t\tmargin-top: 5px;\n\t\twidth: 100%;\n\t}\n\tmargin-top: 5px;\n\twidth: 300px;\n}\n/* override needed to replace yellow hover state with a dark one */\n#updatenotification .update-menu .icon-star:hover,\n#updatenotification .update-menu .icon-star:focus {\n\tbackground-image: var(--icon-star-000);\n}\n#updatenotification .topMargin {\n\tmargin-top: 15px;\n}\n"],sourceRoot:""}]),t.Z=s}},i={};function o(n){var t=i[n];if(void 0!==t)return t.exports;var e=i[n]={id:n,loaded:!1,exports:{}};return a[n].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}o.m=a,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=function(n,t,a,i){if(!t){var s=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],i=e[c][2];for(var r=!0,p=0;p<t.length;p++)(!1&i||s>=i)&&Object.keys(o.O).every((function(n){return o.O[n](t[p])}))?t.splice(p--,1):(r=!1,i<s&&(s=i));if(r){e.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,a,i]},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,{a:t}),t},o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},o.j=7292,function(){o.b=document.baseURI||self.location.href;var n={7292:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var a,i,s=e[0],r=e[1],p=e[2],l=0;if(s.some((function(t){return 0!==n[t]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(p)var c=p(o)}for(t&&t(e);l<s.length;l++)i=s[l],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(c)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var s=o.O(void 0,[7874],(function(){return o(36267)}));s=o.O(s)}();
//# sourceMappingURL=updatenotification-updatenotification.js.map?v=d45c580623911e9ec4d6