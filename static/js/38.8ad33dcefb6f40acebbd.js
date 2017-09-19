webpackJsonp([38],{370:function(s,a,t){s.exports=t(461)},461:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{star1:1,star2:6}},methods:{_change:function(s){console.log("selected:"+s)}}},n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("undefined",[t("h1",[s._v("Rate 评分")]),s._v(" "),t("p",[s._v("评分组件。")]),s._v(" "),t("h2",{attrs:{id:"he-shi-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),t("p",[s._v("对评价进行展示。"),t("br"),s._v("\n对事物进行快速的评级操作。")]),s._v(" "),t("h2",{attrs:{id:"dai-ma-yan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 代码演示")]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-rate v-model="star1" @change="_change"></v-rate>\n</template>\n\n\n',script:"\n    export default {\n        data: function() {\n            return {\n                star1: 1\n            };\n        },\n        methods: {\n            _change(val) {\n                console.log('selected:' + val);\n            }\n        }\n    }\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-rate",{on:{change:s._change},model:{value:s.star1,callback:function(a){s.star1=a},expression:"star1"}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ji-ben"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),t("p",[s._v("最简单的用法。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"star1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),t("span",{staticClass:"hljs-attr"},[s._v("star1")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n            };\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            _change(val) {\n                "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'selected:'")]),s._v(" + val);\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 基本\n  最简单的用法。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"star1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_change"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("star1")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n            };\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            _change(val) {\n                "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'selected:'")]),s._v(" + val);\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-rate allow-half :value="2.5"></v-rate>\n</template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-rate",{attrs:{"allow-half":"",value:2.5}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ban-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ban-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" 半星")]),s._v(" "),t("p",[s._v("支持选中半星。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("allow-half")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("'2.5'")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 半星\n  支持选中半星。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("allow-half")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'2.5'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-rate v-model="star2" @change="_change">\n        <span class="ant-rate-text">{{ star2 }}星</span>\n    </v-rate>\n</template>\n\n\n',script:"\n    export default {\n        data: function() {\n            return {\n                star2: 6\n            };\n        },\n        methods: {\n            _change(val) {\n                console.log('selected:' + val);\n            }\n        }\n    }\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-rate",{on:{change:s._change},model:{value:s.star2,callback:function(a){s.star2=a},expression:"star2"}},[t("span",{staticClass:"ant-rate-text"},[s._v(s._s(s.star2)+"星")])])]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"wen-an-zhan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wen-an-zhan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 文案展示")]),s._v(" "),t("p",[s._v("给评分组件加上文案展示。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("'star2'")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_change"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("'ant-rate-text'")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" star2 "),t("span",[s._v("}}")]),s._v("星"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),t("span",{staticClass:"hljs-attr"},[s._v("star2")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("\n            };\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            _change(val) {\n                "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'selected:'")]),s._v(" + val);\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 文案展示\n  给评分组件加上文案展示。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'star2'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_change"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'ant-rate-text'")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" star2 "),t("span",[s._v("}}")]),s._v("星"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("star2")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("6")]),s._v("\n            };\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            _change(val) {\n                "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'selected:'")]),s._v(" + val);\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-rate disabled :value="2">\n</v-rate></template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-rate",{attrs:{disabled:"",value:2}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"zhi-du"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-du","aria-hidden":"true"}},[s._v("¶")]),s._v(" 只读")]),s._v(" "),t("p",[s._v("只读，无法进行鼠标交互。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-rate")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("'2'")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-brate")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 只读\n  只读，无法进行鼠标交互。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-rate")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-brate")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),t("h3",{attrs:{id:"rate-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rate-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Rate Props")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("count")]),s._v(" "),t("td",[s._v("star 总数")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("5")])]),s._v(" "),t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("当前值，如果输入值超过 count 会被强制转换成count值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("allowHalf")]),s._v(" "),t("td",[s._v("是否允许半选")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("只读，无法进行交互")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])])])]),s._v(" "),t("h3",{attrs:{id:"rate-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rate-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Rate Events")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件名称")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("回调参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("选择的值发生变化的时候触发")]),s._v(" "),t("td",[s._v("value")])])])])],1)},v=[],_={render:n,staticRenderFns:v},e=_,r=t(0),c=r(l,e,null,null,null);a.default=c.exports}});
//# sourceMappingURL=38.8ad33dcefb6f40acebbd.js.map