(self.webpackChunktext=self.webpackChunktext||[]).push([["highlight/accesslog"],{63074:e=>{function n(e){return e?"string"==typeof e?e:e.source:null}function l(...e){return e.map((e=>n(e))).join("")}function a(...e){return"("+e.map((e=>n(e))).join("|")+")"}e.exports=function(e){const n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:l(/"/,a(...n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}}}]);
//# sourceMappingURL=accesslog.js.map?v=4f45467903eeee5638c1