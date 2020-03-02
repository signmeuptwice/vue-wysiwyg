!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).McWysiwyg={})}(this,(function(t){"use strict";function e(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}e(".material-design-icon {\n  display: inline-flex;\n  align-self: center;\n  position: relative;\n  height: 1em;\n  width: 1em;\n}\n.material-design-icon > .material-design-icon__svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n  position: absolute;\n  bottom: -0.125em;\n}\n");e(".wysiwyg-input {\n  margin: 4px;\n  padding: 2px;\n}\n.wysiwyg-input:focus {\n  outline: none;\n}\n.wysiwyg-container {\n}\n.wysiwyg-body {\n  overflow: auto;\n  display: inline-block;\n  width: 100%\n}\n.wysiwyg-editor {\n  padding: 10px;\n  background-color: white;\n  text-align: left;\n}\n.wysiwyg-toolbar {\n  height: 30px;\n  border-bottom: 1px solid lightgrey;\n  background-color: rgb(247, 247, 247);\n  /*text-align: left;*/\n}\n.toolbar-options {\n  height: 30px;\n  overflow: hidden;\n}\n.wysiwyg-editor:focus {\n  outline: none;\n}\n.toolbar-section {\n  display: inline-block;\n  margin: 0 10px;\n}\n.wysiwyg-button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 30px;\n  width: 30px;\n  background-color: transparent;\n  text-align: center;\n  padding: 2px;\n  border: none;\n}\n.wysiwyg-button:hover {\n  background-color: lightblue;\n  cursor: pointer;\n}\n.wysiwyg-button-loop {\n  margin-right: 4px;\n}\n.hoverTableCont {\n  width: 230px;\n  margin-right: 30px;\n  float: left;\n  padding: 15px 0 0 15px;\n}\n.hoverCell {\n  border: 1px solid #aaa;\n  height: 16px;\n  width: 16px;\n  margin: 0 1px 1px 0;\n  float: left;\n  cursor: pointer;\n}\n.hoverCell:hover {\n  background-color: #4b67a1 !important;\n}\n.hoverRow {\n  display: block;\n  clear: both;\n}\n.highlightCell {\n  background-color: #d1e0ff;\n}");var i={name:"FormatAlignCenterIcon",props:{title:{type:String,default:"Format Align Center icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};function s(t,e,i,s,n,o,a,r,l,d){"boolean"!=typeof a&&(l=r,r=a,a=!1);const c="function"==typeof i?i.options:i;let p;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),s&&(c._scopeId=s),o?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=p):e&&(p=a?function(t){e.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),p)if(c.functional){const t=c.render;c.render=function(e,i){return p.call(i),t(e,i)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,p):[p]}return i}"undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());const n=i;var o=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-align-center-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};o._withStripped=!0;const a=s({render:o,staticRenderFns:[]},void 0,n,void 0,!0,void 0,!1,void 0,void 0,void 0);const r={name:"FormatAlignLeftIcon",props:{title:{type:String,default:"Format Align Left icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var l=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-align-left-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};l._withStripped=!0;const d=s({render:l,staticRenderFns:[]},void 0,r,void 0,!0,void 0,!1,void 0,void 0,void 0);const c={name:"FormatAlignRightIcon",props:{title:{type:String,default:"Format Align Right icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var p=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-align-right-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};p._withStripped=!0;const u=s({render:p,staticRenderFns:[]},void 0,c,void 0,!0,void 0,!1,void 0,void 0,void 0);const g={name:"FormatBoldIcon",props:{title:{type:String,default:"Format Bold icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var h=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-bold-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};h._withStripped=!0;const v=s({render:h,staticRenderFns:[]},void 0,g,void 0,!0,void 0,!1,void 0,void 0,void 0);const f={name:"FormatHeader1Icon",props:{title:{type:String,default:"Format Header1 icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var m=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-header1-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};m._withStripped=!0;const y=s({render:m,staticRenderFns:[]},void 0,f,void 0,!0,void 0,!1,void 0,void 0,void 0);const w={name:"FormatIndentDecreaseIcon",props:{title:{type:String,default:"Format Indent Decrease icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var b=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-indent-decrease-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};b._withStripped=!0;const _=s({render:b,staticRenderFns:[]},void 0,w,void 0,!0,void 0,!1,void 0,void 0,void 0);const C={name:"FormatIndentIncreaseIcon",props:{title:{type:String,default:"Format Indent Increase icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var H=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-indent-increase-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};H._withStripped=!0;const V=s({render:H,staticRenderFns:[]},void 0,C,void 0,!0,void 0,!1,void 0,void 0,void 0);const x={name:"FormatItalicIcon",props:{title:{type:String,default:"Format Italic icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var S=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-italic-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};S._withStripped=!0;const k=s({render:S,staticRenderFns:[]},void 0,x,void 0,!0,void 0,!1,void 0,void 0,void 0);const M={name:"FormatListBulletedIcon",props:{title:{type:String,default:"Format List Bulleted icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var F=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-list-bulleted-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};F._withStripped=!0;const L=s({render:F,staticRenderFns:[]},void 0,M,void 0,!0,void 0,!1,void 0,void 0,void 0);const T={name:"FormatListNumberedIcon",props:{title:{type:String,default:"Format List Numbered icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var A=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-list-numbered-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};A._withStripped=!0;const z=s({render:A,staticRenderFns:[]},void 0,T,void 0,!0,void 0,!1,void 0,void 0,void 0);const R={name:"FormatStrikethroughIcon",props:{title:{type:String,default:"Format Strikethrough icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var B=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-strikethrough-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};B._withStripped=!0;const I=s({render:B,staticRenderFns:[]},void 0,R,void 0,!0,void 0,!1,void 0,void 0,void 0);const P={name:"FormatUnderlineIcon",props:{title:{type:String,default:"Format Underline icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var N=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon format-underline-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};N._withStripped=!0;const D=s({render:N,staticRenderFns:[]},void 0,P,void 0,!0,void 0,!1,void 0,void 0,void 0);const U={name:"TableLargeIcon",props:{title:{type:String,default:"Table Large icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var O=function(t,e){var i=e._c;return i("span",e._g(e._b({staticClass:"material-design-icon table-large-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M4,3H20A2,2 0 0,1 22,5V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V5A2,2 0 0,1 4,3M4,7V10H8V7H4M10,7V10H14V7H10M20,10V7H16V10H20M4,12V15H8V12H4M4,20H8V17H4V20M10,12V15H14V12H10M10,20H14V17H10V20M20,20V17H16V20H20M20,12H16V15H20V12Z"}},[i("title",[e._v(e._s(e.props.title))])])])])};O._withStripped=!0;const Z={components:{FormatAlignCenter:a,FormatAlignLeft:d,FormatAlignRight:u,FormatBold:v,FormatHeader:y,FormatIndentDecrease:_,FormatIndentIncrease:V,FormatItalic:k,FormatListBulleted:L,FormatListNumbered:z,FormatStrikethrough:I,FormatUnderline:D,TableLarge:s({render:O,staticRenderFns:[]},void 0,U,void 0,!0,void 0,!1,void 0,void 0,void 0)},props:{value:{type:String},hide:{type:Object,default:function(){return{}}},height:{type:[Number,String],default:400}},mounted:function(){this.uid=this.generateRandom(10)},data:function(){return{uid:null,isBold:!1,isItalic:!1,isUnderlined:!1,isStrikedThrough:!1,isHeading:!1,isAlignedLeft:!0,isAlignedCenter:!1,isAlignedRight:!1,showToolbarOptions:!1,showHeadingOptions:!1,showLinkForm:!1,linkText:"",linkURL:"",showTableForm:!1,rows:null,cols:null,selectedCell:{rows:0,cols:0},caratSelection:null,savedPosition:null,content:null}},computed:{hSizes:function(){for(var t=[],e=1;6>=e;e++)t.push("H".concat(e));return t.push("Clear"),t},noSelectedCell:function(){return 0===this.selectedCell.rows&&0===this.selectedCell.cols}},methods:{resetLink:function(){this.linkText="",this.linkURL=""},resetTable:function(){this.rows=null,this.cols=null},generateRandom:function(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=i.length,n=0;n<t;n++)e+=i.charAt(Math.floor(Math.random()*s));return e},bold:function(){this.isBold=!this.isBold,this.exec("bold")},italize:function(){this.isItalic=!this.isItalic,this.exec("italic")},underline:function(){this.isUnderlined=!this.isUnderlined,this.exec("underline")},strikeThrough:function(){this.isStrikedThrough=!this.isStrikedThrough,this.exec("strikeThrough")},heading:function(t){this.exec("formatBlock",!1,"Clear"===t?"p":t)},showHeadings:function(){this.isHeading=!this.isHeading,this.showHeadingOptions=!this.showHeadingOptions},alignLeft:function(){this.isAlignedLeft=!this.isAlignedLeft,this.exec("justifyLeft")},alignCenter:function(){this.isAlignedCenter=!this.isAlignedCenter,this.exec("justifyCenter")},alignRight:function(){this.isAlignedRight=!this.isAlignedRight,this.exec("justifyRight")},showLinkOptions:function(){this.showLinkForm=!this.showLinkForm},createLink:function(){var t=document.getSelection();t.anchorOffset===t.extentOffset&&(t=this.linkText),this.exec("insertHTML",!1,"<a href='".concat(this.linkURL,"'>").concat(t,"</a>"))},orderedList:function(){this.exec("insertOrderedList")},insertUnorderedList:function(){this.exec("insertUnorderedList")},showTableOptions:function(){this.showTableForm||(this.caratSelection=document.getSelection(),this.savedPosition=[this.caratSelection.focusNode,this.caratSelection.focusOffset]),this.showTableForm=!this.showTableForm},generateTable:function(t,e){for(var i="",s=1;s<=t;s++){i+="<tr>";for(var n=1;n<=e;n++)i+='<td style="border: 1px solid lightgrey; padding: 2px;"></td>';i+="</tr>"}return i},setupCreateTable:function(){this.rows=this.selectedCell.rows,this.cols=this.selectedCell.cols,this.createTable()},createTable:function(){this.$refs[this.uid].focus(),this.caratSelection.collapse(this.savedPosition[0],this.savedPosition[1]);var t='\n                          <table width="100%" style="border-collapse: collapse; border: 1px solid lightgrey;">\n                            <tbody>\n                              '.concat(this.generateTable(this.rows,this.cols),"\n                            </tbody>\n                          </table>\n                        ");this.exec("insertHTML",!1,t),this.showTableForm=!1,this.caratSelection=null,this.savedPosition=null},indent:function(){this.exec("indent")},outdent:function(){this.exec("outdent")},changeSelectedCell:function(t,e){this.selectedCell.rows=t,this.selectedCell.cols=e},isHighlighted:function(t,e){return!this.noSelectedCell&&!!(t<=this.selectedCell.rows&&e<=this.selectedCell.cols)},exec:function(){var t;(t=document).execCommand.apply(t,arguments)},updateContent:function(){this.$emit("input",this.$refs[this.uid].innerHTML)}},watch:{value:function(){this.$props.value&&(this.content=this.$props.value,this.$refs[this.uid].innerHTML=this.$props.value)}}};var $=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.uid?i("div",{staticClass:"wysiwyg-container"},[i("div",{staticClass:"wysiwyg-toolbar"},[i("div",{staticClass:"toolbar-section"},[t.hide.bold?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isBold?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.bold(e)}}},[i("format-bold")],1),t._v(" "),t.hide.italic?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isItalic?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.italize(e)}}},[i("format-italic")],1),t._v(" "),t.hide.underline?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isUnderlined?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.underline(e)}}},[i("format-underline")],1),t._v(" "),t.hide.strikethrough?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isStrikedThrough?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.strikeThrough(e)}}},[i("format-strikethrough")],1),t._v(" "),t.hide.heading?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isHeading?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showHeadings(e)}}},[i("format-header")],1)]),t._v(" "),i("div",{staticClass:"toolbar-section"},[t.hide.alignLeft?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isAlignedLeft?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.alignLeft(e)}}},[i("format-align-left")],1),t._v(" "),t.hide.alignCenter?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isAlignedCenter?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.alignCenter(e)}}},[i("format-align-center")],1),t._v(" "),t.hide.alignRight?t._e():i("button",{staticClass:"wysiwyg-button",class:t.isAlignedRight?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.alignRight(e)}}},[i("format-align-right")],1),t._v(" "),t.hide.ol?t._e():i("button",{staticClass:"wysiwyg-button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.orderedList(e)}}},[i("format-list-numbered")],1),t._v(" "),t.hide.ul?t._e():i("button",{staticClass:"wysiwyg-button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.insertUnorderedList(e)}}},[i("format-list-bulleted")],1)]),t._v(" "),i("div",{staticClass:"toolbar-section"},[t.hide.url?t._e():i("button",{staticClass:"wysiwyg-button",class:t.showLinkForm?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showLinkOptions(e)}}},[i("b",{staticStyle:{"font-size":"10px"}},[t._v("URL")])]),t._v(" "),t.hide.table?t._e():i("button",{staticClass:"wysiwyg-button",class:t.showTableForm?"wysiwyg-button-active":"",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showTableOptions(e)}}},[i("table-large")],1),t._v(" "),t.hide.indent?t._e():i("button",{staticClass:"wysiwyg-button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.indent(e)}}},[i("format-indent-increase")],1),t._v(" "),t.hide.outdent?t._e():i("button",{staticClass:"wysiwyg-button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.outdent(e)}}},[i("format-indent-decrease")],1)])]),t._v(" "),t.showHeadingOptions?i("div",{staticClass:"toolbar-options"},t._l(t.hSizes,(function(e){return i("button",{key:e+t.uid,staticClass:"wysiwyg-button wysiwyg-button-loop",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.heading(e)}}},[t._v(t._s(e))])})),0):t._e(),t._v(" "),t.showLinkForm?i("div",{staticClass:"toolbar-options"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.createLink(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.linkText,expression:"linkText"}],staticClass:"wysiwyg-input",attrs:{type:"text",placeholder:"Link Text",required:""},domProps:{value:t.linkText},on:{input:function(e){e.target.composing||(t.linkText=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.linkURL,expression:"linkURL"}],staticClass:"wysiwyg-input",attrs:{type:"text",placeholder:"URL",required:""},domProps:{value:t.linkURL},on:{input:function(e){e.target.composing||(t.linkURL=e.target.value)}}}),t._v(" "),i("button",{staticClass:"wysiwyg-button",attrs:{type:"submit"}},[t._v("Insert")]),t._v(" "),i("button",{staticClass:"wysiwyg-button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.resetLink()}}},[t._v("Clear")])])]):t._e(),t._v(" "),t.showTableForm?i("div",{staticClass:"toolbar-options"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.createTable(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rows,expression:"rows"}],staticClass:"wysiwyg-input",attrs:{min:"0",type:"number",placeholder:"Rows",required:""},domProps:{value:t.rows},on:{input:function(e){e.target.composing||(t.rows=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cols,expression:"cols"}],staticClass:"wysiwyg-input",attrs:{min:"0",type:"number",placeholder:"Columns",required:""},domProps:{value:t.cols},on:{input:function(e){e.target.composing||(t.cols=e.target.value)}}}),t._v(" "),i("button",{staticClass:"wysiwyg-button",attrs:{type:"submit"}},[t._v("Insert")]),t._v(" "),i("button",{staticClass:"wysiwyg-button",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.resetTable()}}},[t._v("Clear")])]),t._v(" "),i("div",{staticClass:"hoverTableCont"},[i("div",{staticClass:"hoverTable",on:{mouseleave:function(e){return t.changeSelectedCell(0,0)}}},t._l(12,(function(e,s){return i("div",{key:s+t.uid,staticClass:"hoverRow"},t._l(12,(function(s,n){return i("div",{key:n+t.uid,class:["hoverCell",{highlightCell:t.isHighlighted(e,s)}],on:{mouseover:function(i){return t.changeSelectedCell(e,s)},click:t.setupCreateTable}})})),0)})),0),t._v(" "),i("br"),t._v(" "),i("div",{attrs:{id:"tableDimmensions"}},[t.noSelectedCell?i("em",[t._v("Select boxes above")]):i("em",[t._v(t._s(this.selectedCell.cols)+" x "+t._s(this.selectedCell.rows))])])])]):t._e(),t._v(" "),i("div",{staticClass:"wysiwyg-body"},[i("div",{ref:t.uid,staticClass:"wysiwyg-editor",style:{"min-height":t.height-50+"px"},attrs:{contenteditable:""},on:{focusout:t.updateContent}})])]):t._e()])};$._withStripped=!0;const E=s({render:$,staticRenderFns:[]},void 0,Z,void 0,!1,void 0,!1,void 0,void 0,void 0);var j={install:function(t){t.component("mc-wysiwyg",E)}};t.McWysiwyg=E,t.default=j,Object.defineProperty(t,"__esModule",{value:!0})}));
