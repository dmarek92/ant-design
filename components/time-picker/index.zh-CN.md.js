webpackJsonp([123,211],{1175:function(t,n){t.exports={content:["section",["p","\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65f6\u95f4\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65f6\u95f4\u9762\u677f\u8fdb\u884c\u9009\u62e9\u3002"]],meta:{category:"Components",subtitle:"\u65f6\u95f4\u9009\u62e9\u6846",type:"Data Entry",title:"TimePicker",filename:"components/time-picker/index.zh-CN.md"},description:["section",["p","\u8f93\u5165\u6216\u9009\u62e9\u65f6\u95f4\u7684\u63a7\u4ef6\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["hr"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'13:30:56\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","import moment from 'moment';\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u65f6\u95f4"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u65e0"]],["tr",["td","value"],["td","\u5f53\u524d\u65f6\u95f4"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u65e0"]],["tr",["td","open"],["td","\u9762\u677f\u662f\u5426\u6253\u5f00"],["td","boolean"],["td","false"]],["tr",["td","onOpenChange"],["td","\u9762\u677f\u6253\u5f00/\u5173\u95ed\u65f6\u7684\u56de\u8c03"],["td","(open: boolean): void"],["td","\u65e0"]],["tr",["td","placeholder"],["td","\u6ca1\u6709\u503c\u7684\u65f6\u5019\u663e\u793a\u7684\u5185\u5bb9"],["td","string"],["td",'"\u8bf7\u9009\u62e9\u65f6\u95f4"']],["tr",["td","onChange"],["td","\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03"],["td","function(time: moment, timeString: string): void"],["td","\u65e0"]],["tr",["td","format"],["td","\u5c55\u793a\u7684\u65f6\u95f4\u683c\u5f0f"],["td","string"],["td",'"HH:mm:ss"']],["tr",["td","disabled"],["td","\u7981\u7528\u5168\u90e8\u64cd\u4f5c"],["td","boolean"],["td","false"]],["tr",["td","disabledHours"],["td","\u7981\u6b62\u9009\u62e9\u90e8\u5206\u5c0f\u65f6\u9009\u9879"],["td","function()"],["td","\u65e0"]],["tr",["td","disabledMinutes"],["td","\u7981\u6b62\u9009\u62e9\u90e8\u5206\u5206\u949f\u9009\u9879"],["td","function(selectedHour)"],["td","\u65e0"]],["tr",["td","disabledSeconds"],["td","\u7981\u6b62\u9009\u62e9\u90e8\u5206\u79d2\u9009\u9879"],["td","function(selectedHour, selectedMinute)"],["td","\u65e0"]],["tr",["td","hideDisabledOptions"],["td","\u9690\u85cf\u7981\u6b62\u9009\u62e9\u7684\u9009\u9879"],["td","boolean"],["td","false"]],["tr",["td","getPopupContainer"],["td","\u5b9a\u4e49\u6d6e\u5c42\u7684\u5bb9\u5668\uff0c\u9ed8\u8ba4\u4e3a body \u4e0a\u65b0\u5efa div"],["td","function(trigger)"],["td","\u65e0"]],["tr",["td","addon"],["td","\u9009\u62e9\u6846\u5e95\u90e8\u663e\u793a\u81ea\u5b9a\u4e49\u7684\u5185\u5bb9"],["td","function"],["td","\u65e0"]],["tr",["td","use12Hours"],["td","\u4f7f\u7528 12 \u5c0f\u65f6\u5236\uff0c\u4e3a true \u65f6 ",["code","format"]," \u9ed8\u8ba4\u4e3a ",["code","h:mm:ss a"]],["td","boolean"],["td","false"]],["tr",["td","className"],["td","\u9009\u62e9\u5668\u7c7b\u540d"],["td","string"],["td","''"]],["tr",["td","popupClassName"],["td","\u5f39\u51fa\u5c42\u7c7b\u540d"],["td","string"],["td","''"]]]],["style",".code-box-demo .ant-time-picker { margin: 0 8px 12px 0; }"]]}}});