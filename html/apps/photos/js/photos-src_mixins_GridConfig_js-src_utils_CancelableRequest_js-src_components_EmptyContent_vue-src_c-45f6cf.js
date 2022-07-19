/*! For license information please see photos-src_mixins_GridConfig_js-src_utils_CancelableRequest_js-src_components_EmptyContent_vue-src_c-45f6cf.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_GridConfig_js-src_utils_CancelableRequest_js-src_components_EmptyContent_vue-src_c-45f6cf"],{16897:n=>{n.exports={sizes:{400:{marginTop:66,marginW:8,count:3,gap:8},700:{marginTop:66,marginW:8,count:4,gap:8},1024:{marginTop:66,marginW:44,count:5,gap:8},1280:{marginTop:66,marginW:44,count:4,gap:8},1440:{marginTop:88,marginW:66,count:5,gap:8},1600:{marginTop:88,marginW:66,count:6,gap:8},2048:{marginTop:88,marginW:66,count:7,gap:8},2560:{marginTop:88,marginW:88,count:8,gap:8},3440:{marginTop:88,marginW:88,count:9,gap:8},max:{marginTop:88,marginW:88,count:10,gap:8}}}},85324:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var i=e(20144),a=e(16897);const o=new i.default({data:function(){return{gridConfig:a.sizes.max}},watch:{gridConfig:function(n){this.$emit("changed",n)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){var n=Object.keys(a.sizes).find((function(n){return n>document.documentElement.clientWidth}));this.gridConfig=a.sizes[n]||a.sizes.max}}});var r=e(25108);const s={data:function(){return{gridConfig:{}}},created:function(){var n=this;o.$on("changed",(function(t){n.gridConfig=t})),r.debug("[".concat("photos","]"),"Grid config",Object.assign({},o.gridConfig)),this.gridConfig=o.gridConfig},beforeDestroy:function(){o.$off("changed",this.gridConfig)}}},4615:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var i=e(4820);function a(n,t,e,i,a,o,r){try{var s=n[o](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,a)}const o=function(n){var t=i.default.CancelToken.source();return{request:function(){var e,i=(e=regeneratorRuntime.mark((function e(i,a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i,Object.assign({cancelToken:t.token},a)));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,o){var r=e.apply(n,t);function s(n){a(r,i,o,s,c,"next",n)}function c(n){a(r,i,o,s,c,"throw",n)}s(void 0)}))});return function(n,t){return i.apply(this,arguments)}}(),cancel:t.cancel}}},86228:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var i=e(87537),a=e.n(i),o=e(23645),r=e.n(o)()(a());r.push([n.id,'.emptycontent{grid-column:1/-1;margin-top:20vh}.illustration{min-width:200px;max-width:15%;width:300px;margin:auto;margin-bottom:20px;position:relative}.illustration svg{width:100%;height:100%;max-height:40vh}.illustration [fill*="6c63ff"]{fill:var(--color-primary-element)}',"",{version:3,sources:["webpack://./src/components/EmptyContent.vue"],names:[],mappings:"AAmHA,cAEC,gBAAA,CACA,eAAA,CAGD,cACC,eAAA,CACA,aAAA,CACA,WAAA,CACA,WAAA,CACA,kBAAA,CACA,iBAAA,CAEA,kBACC,UAAA,CACA,WAAA,CACA,eAAA,CAID,+BACC,iCAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.emptycontent {\n\t// span all the available columns\n\tgrid-column: 1/-1;\n\tmargin-top: 20vh;\n}\n\n.illustration {\n\tmin-width: 200px;\n\tmax-width: 15%;\n\twidth: 300px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tposition: relative;\n\n\tsvg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmax-height: 40vh;\n\t}\n\n\t// change colour of illustration\n\t[fill*=\'6c63ff\'] {\n\t\tfill: var(--color-primary-element);\n\t}\n}\n'],sourceRoot:""}]);const s=r},98359:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var i=e(87537),a=e.n(i),o=e(23645),r=e.n(o)()(a());r.push([n.id,".file[data-v-6ef9244c],.folder[data-v-6ef9244c]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-6ef9244c],.folder .cover[data-v-6ef9244c]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-6ef9244c],.file:active .cover[data-v-6ef9244c],.file:hover .cover[data-v-6ef9244c],.file:focus .cover[data-v-6ef9244c],.folder.active .cover[data-v-6ef9244c],.folder:active .cover[data-v-6ef9244c],.folder:hover .cover[data-v-6ef9244c],.folder:focus .cover[data-v-6ef9244c]{opacity:.3}.file--clear.active .cover[data-v-6ef9244c],.file--clear:active .cover[data-v-6ef9244c],.file--clear:hover .cover[data-v-6ef9244c],.file--clear:focus .cover[data-v-6ef9244c],.folder--clear.active .cover[data-v-6ef9244c],.folder--clear:active .cover[data-v-6ef9244c],.folder--clear:hover .cover[data-v-6ef9244c],.folder--clear:focus .cover[data-v-6ef9244c]{opacity:.1}.fade-enter-active[data-v-6ef9244c],.fade-leave-active[data-v-6ef9244c]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-6ef9244c],.fade-leave-to[data-v-6ef9244c]{opacity:0}.transition-group[data-v-6ef9244c]{display:contents}.icon-video-white[data-v-6ef9244c]{position:absolute;top:10px;right:10px;z-index:20}img[data-v-6ef9244c]{position:absolute;width:100%;height:100%;z-index:10;color:transparent;object-fit:contain}.file--cropped img[data-v-6ef9244c]{object-fit:cover}svg[data-v-6ef9244c]{position:absolute;width:70%;height:70%}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/File.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8DACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,4SACC,UAAA,CAQD,oWACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CCiED,mCACC,gBAAA,CAGD,mCACC,iBAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CAGD,qBACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CAEA,iBAAA,CAEA,kBAAA,CAEA,oCACC,gBAAA,CAIF,qBACC,iBAAA,CACA,SAAA,CACA,UAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \'../mixins/FileFolder\';\n\n.transition-group {\n\tdisplay: contents;\n}\n\n.icon-video-white {\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\tz-index: 20;\n}\n\nimg {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n\n\tcolor: transparent; // should be diplayed on error\n\n\tobject-fit: contain;\n\n\t.file--cropped & {\n\t\tobject-fit: cover;\n\t}\n}\n\nsvg {\n\tposition: absolute;\n\twidth: 70%;\n\theight: 70%;\n}\n'],sourceRoot:""}]);const s=r},56222:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var i=e(87537),a=e.n(i),o=e(23645),r=e.n(o)()(a());r.push([n.id,".icon-confirm[data-v-080cb7fa]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.photos-navigation[data-v-080cb7fa]{display:flex;position:block;height:44px;padding:0 40px;align-items:center;max-width:100%}.photos-navigation__title[data-v-080cb7fa]{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.photos-navigation__share[data-v-080cb7fa]{margin-left:10px}.photos-navigation__back[data-v-080cb7fa],.photos-navigation__share[data-v-080cb7fa]{flex-grow:0;flex-shrink:0}@media(min-width: 0px)and (max-width: 400px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:-36px}}@media(min-width: 400px)and (max-width: 700px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:-36px}}@media(min-width: 700px)and (max-width: 1024px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation__back[data-v-080cb7fa]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:0px}}@media(min-width: 1024px)and (max-width: 1280px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation__back[data-v-080cb7fa]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:0px}}@media(min-width: 1280px)and (max-width: 1440px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:22px}}@media(min-width: 1440px)and (max-width: 1600px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:22px}}@media(min-width: 1600px)and (max-width: 2048px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:22px}}@media(min-width: 2048px)and (max-width: 2560px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:44px}}@media(min-width: 2560px)and (max-width: 3440px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:44px}}@media(min-width: 3440px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:44px}}","",{version:3,sources:["webpack://./src/components/Navigation.vue","webpack://./src/mixins/GridSizes.scss"],names:[],mappings:"AAoJA,+BACC,gCAAA,CAAA,wBAAA,CAGD,oCACC,YAAA,CACA,cAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CACA,cAAA,CACA,2CACC,QAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAED,2CACC,gBAAA,CAED,qFAEC,WAAA,CACA,aAAA,CCvIC,6CDoHH,oCAyBE,0BAAA,CAOA,oEACC,kBAAA,CAAA,CCrJA,+CDoHH,oCAyBE,0BAAA,CAOA,oEACC,kBAAA,CAAA,CCrJA,gDDoHH,oCAyBE,0BAAA,CAGC,0CACC,YAAA,CAGF,oEACC,gBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,0BAAA,CAGC,0CACC,YAAA,CAGF,oEACC,gBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCzJA,0BDwHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use \'sass:math\';\n@import \'../mixins/GridSizes\';\n\n.icon-confirm {\n\ttransform: rotate(180deg)\n}\n\n.photos-navigation {\n\tdisplay: flex;\n\tposition: block;\n\theight: 44px;\n\tpadding: 0 40px;\n\talign-items: center;\n\tmax-width: 100%;\n\t&__title {\n\t\tmargin: 0;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\t&__share {\n\t\tmargin-left: 10px;\n\t}\n\t&__back,\n\t&__share {\n\t\tflex-grow: 0;\n\t\tflex-shrink: 0;\n\t}\n\n\t// Specific grid spacing\n\t@include grid-sizes using ($marginTop, $marginW) {\n\t\t// we space this with 2/3 margin top, 1/3 margin bottom\n\t\tmargin-top: math.div($marginTop - 44px * 2, 3);\n\n\t\t@if $marginW >= 44px {\n\t\t\t&__back {\n\t\t\t\tmargin: 0 math.div($marginW - 44px, 2);\n\t\t\t}\n\t\t}\n\t\t&--root &__title {\n\t\t\tpadding-left: #{$marginW - 44}px;\n\t\t}\n\t}\n}\n',"/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@use 'sass:map';\n\n@mixin grid-sizes() {\n\t$previous: 0;\n\n\t@each $size, $config in $sizes {\n\t\t$count: map.get($config, 'count');\n\t\t$marginTop: map.get($config, 'marginTop');\n\t\t$marginW: map.get($config, 'marginW');\n\n\t\t@if $size == 'max' {\n\t\t\t@media (min-width: #{$previous}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t} @else {\n\t\t\t@media (min-width: #{$previous}px) and (max-width: #{$size}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t}\n\t\t$previous: $size;\n\t}\n}\n"],sourceRoot:""}]);const s=r},66533:(n,t,e)=>{"use strict";e.d(t,{Z:()=>b});var i=e(25108);function a(n,t,e,i,a,o,r){try{var s=n[o](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,a)}const o={name:"EmptyContent",props:{illustrationName:{type:String,default:""}},data:function(){return{illustration:""}},computed:{haveIllustration:function(){return""!==this.illustrationName},isLoaded:function(){return!this.haveIllustration||""!==this.illustration},isReady:function(){return!this.haveIllustration||this.haveIllustration&&this.isLoaded}},watch:{illustrationName:function(){this.getIllustration()}},beforeMount:function(){this.getIllustration()},methods:{getIllustration:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.illustration="",""===t.illustrationName){n.next=12;break}return n.prev=2,n.next=5,e(57767)("./".concat(t.illustrationName,".svg"));case 5:a=n.sent,t.illustration=a.default,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),i.error("Could not get the error illustration",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})),function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function s(n){a(r,i,o,s,c,"next",n)}function c(n){a(r,i,o,s,c,"throw",n)}s(void 0)}))})()}}};var r=e(93379),s=e.n(r),c=e(7795),A=e.n(c),d=e(90569),p=e.n(d),l=e(3565),m=e.n(l),u=e(19216),g=e.n(u),h=e(44589),v=e.n(h),f=e(86228),C={};C.styleTagTransform=v(),C.setAttributes=m(),C.insert=p().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=g();s()(f.Z,C);f.Z&&f.Z.locals&&f.Z.locals;const b=(0,e(51900).Z)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.isReady?e("div",{staticClass:"emptycontent"},[n.haveIllustration?e("div",{staticClass:"illustration",domProps:{innerHTML:n._s(n.illustration)}}):e("div",{staticClass:"icon-error"}),n._v(" "),e("h2",[n._t("default")],2),n._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:n.$slots.desc,expression:"$slots.desc"}]},[n._t("desc")],2)]):n._e()}),[],!1,null,null,null).exports},97784:(n,e,i)=>{"use strict";i.d(e,{Z:()=>_});var a=i(79753),o=i(22200);function r(n,t,e,i,a,o,r){try{var s=n[o](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,a)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var o=n.apply(t,e);function s(n){r(o,i,a,s,c,"next",n)}function c(n){r(o,i,a,s,c,"throw",n)}s(void 0)}))}}const c={name:"File",mixins:[i(81090).Z],inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:function(){return{loaded:!1,error:!1}},computed:{davPath:function(){return(0,a.generateRemoteUrl)("dav/files/".concat((0,o.getCurrentUser)().uid))+this.item.injected.filename},ariaUuid:function(){return"image-".concat(this.item.injected.fileid)},ariaLabel:function(){return t("photos",'Open the full size "{name}" image',{name:this.item.injected.basename})},isImage:function(){return this.item.injected.mime.startsWith("image")},decodedEtag:function(){return this.item.injected.etag.replace("&quot;","").replace("&quot;","")},src:function(){return(0,a.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid,"&c=").concat(this.decodedEtag,"&x=",250,"&y=",250,"&forceIcon=0&a=").concat(this.croppedLayout?"0":"1"))}},beforeDestroy:function(){this.$refs.src=""},methods:{openViewer:function(){var n=this;OCA.Viewer.open({path:this.item.injected.filename,list:this.item.injected.list,loadMore:this.item.injected.loadMore?s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.item.injected.loadMore(!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))):function(){return[]},canLoop:this.item.injected.canLoop})},onLoad:function(){this.loaded=!0},onError:function(){this.error=!0}}};var A=i(93379),d=i.n(A),p=i(7795),l=i.n(p),m=i(90569),u=i.n(m),g=i(3565),h=i.n(g),v=i(19216),f=i.n(v),C=i(44589),b=i.n(C),x=i(98359),w={};w.styleTagTransform=b(),w.setAttributes=h(),w.insert=u().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=f();d()(x.Z,w);x.Z&&x.Z.locals&&x.Z.locals;const _=(0,i(51900).Z)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{staticClass:"file",class:{"file--cropped":n.croppedLayout},attrs:{href:n.davPath,"aria-label":n.ariaLabel},on:{click:function(t){return t.preventDefault(),n.openViewer.apply(null,arguments)}}},[n.item.injected.mime.includes("video")&&n.item.injected.hasPreview?e("div",{staticClass:"icon-video-white"}):n._e(),n._v(" "),e("transition-group",{staticClass:"transition-group",attrs:{name:"fade"}},[n.error?n._e():e("img",{key:n.item.injected.basename+"-img",ref:"img",attrs:{src:n.src,alt:n.item.injected.basename,"aria-describedby":n.ariaUuid},on:{load:n.onLoad,error:n.onError}}),n._v(" "),!n.loaded||n.error?e("svg",{key:n.item.injected.basename+"-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"url(#placeholder__gradient)"}},[n.isImage?e("use",{attrs:{href:"#placeholder--img"}}):e("use",{attrs:{href:"#placeholder--video"}})]):n._e()]),n._v(" "),e("p",{staticClass:"hidden-visually",attrs:{id:n.ariaUuid}},[n._v(n._s(n.item.injected.basename))]),n._v(" "),e("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"6ef9244c",null).exports},82390:(n,e,i)=>{"use strict";i.d(e,{Z:()=>w});var a=i(79440),o=i.n(a),r=i(56286);const s={name:"Navigation",components:{ActionButton:i.n(r)(),Actions:o()},inheritAttrs:!1,props:{basename:{type:String,required:!0},filename:{type:String,required:!0},showActions:{type:Boolean,default:!1},rootTitle:{type:String,default:t("photos","Photos")}},computed:{isRoot:function(){return"/"===this.filename},name:function(){return this.isRoot?this.rootTitle:this.basename},parentPath:function(){var n=this.filename.split("/");n.pop();var t=n.join("/");return this.isRoot||""===t.trim()?"/":n.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var n=/^\/?(.*)/i.exec(this.parentPath)[1],t=Object.assign({},this.$route,{params:{path:n}}),e=t.name,i=t.params;return""===n?{name:e}:decodeURIComponent(this.$router.resolve({name:e,params:i}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},showSidebar:function(){OCA.Files.Sidebar.open(this.filename)}}};var c=i(93379),A=i.n(c),d=i(7795),p=i.n(d),l=i(90569),m=i.n(l),u=i(3565),g=i.n(u),h=i(19216),v=i.n(h),f=i(44589),C=i.n(f),b=i(56222),x={};x.styleTagTransform=C(),x.setAttributes=g(),x.insert=m().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=v();A()(b.Z,x);b.Z&&b.Z.locals&&b.Z.locals;const w=(0,i(51900).Z)(s,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":n.isRoot},attrs:{role:"toolbar"}},[n.isRoot?n._e():e("Actions",{staticClass:"photos-navigation__back"},[e("ActionButton",{attrs:{icon:"icon-confirm"},on:{click:n.folderUp}},[n._v("\n\t\t\t"+n._s(n.backToText)+"\n\t\t")])],1),n._v(" "),e("h2",{staticClass:"photos-navigation__title"},[n._v("\n\t\t"+n._s(n.name)+"\n\t")]),n._v(" "),!n.isRoot&&n.showActions?e("Actions",{staticClass:"photos-navigation__share"},[e("ActionButton",{attrs:{icon:"icon-shared"},on:{click:n.showSidebar}},[n._v("\n\t\t\t"+n._s(n.t("photos","Share this folder"))+"\n\t\t")])],1):n._e()],1)}),[],!1,null,"080cb7fa",null).exports},57767:(n,t,e)=>{var i={"./empty.svg":[67515,"src_assets_Illustrations_empty_svg"],"./folder.svg":[76434,"src_assets_Illustrations_folder_svg"],"./images.svg":[80031,"src_assets_Illustrations_images_svg"]};function a(n){if(!e.o(i,n))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[n],a=t[0];return e.e(t[1]).then((()=>e(a)))}a.keys=()=>Object.keys(i),a.id=57767,n.exports=a}}]);
//# sourceMappingURL=photos-src_mixins_GridConfig_js-src_utils_CancelableRequest_js-src_components_EmptyContent_vue-src_c-45f6cf.js.map?v=b7bbc7be0abea60052d4