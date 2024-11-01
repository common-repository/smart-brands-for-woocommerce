!function(){"use strict";var e=window.wp.element,t=window.wp.escapeHtml;const r=wp.element.createElement,a={};a.brandIcon=r("img",{src:(0,t.escapeAttribute)(sp_smart_brand_gb_block.url+"/core/Admin/GutenbergBlock/assets/sbn.svg")});var s=a;const{__:__}=wp.i18n,{Fragment:o}=wp.element,n=wp.element.createElement;var c=r=>{let{attributes:{shortcode:a},shortCodeList:s,shortcodeUpdate:c}=r;return(0,e.createElement)(o,null,n("div",{className:"sp-smart-brand-gutenberg-shortcode editor-styles-wrapper"},n("select",{className:"sp-smart-brand-shortcode-selector",onChange:e=>c(e),value:(0,t.escapeAttribute)(a)},n("option",{value:(0,t.escapeAttribute)("0")},(0,t.escapeHTML)(__("-- Select a brand group --","smart-brands-for-woocommerce"))),s.map((e=>{var r=e.title.length>35?e.title.substring(0,30)+".... #("+e.id+")":e.title+" #("+e.id+")";return n("option",{value:(0,t.escapeAttribute)(e.id.toString()),key:(0,t.escapeAttribute)(e.id.toString())},(0,t.escapeHTML)(r))})))))},l=window.wp.blockEditor;const{__:d}=wp.i18n,{registerBlockType:m}=wp.blocks,{PanelBody:p,PanelRow:i}=wp.components,{Fragment:b}=wp.element,u=wp.serverSideRender,_=wp.element.createElement;m("sp-smart-brand/shortcode",{title:(0,t.escapeHTML)(d("Smart Brand","smart-brands-for-woocommerce")),description:(0,t.escapeHTML)(d("Use Smart Brand to insert a brands group in your page","smart-brands-for-woocommerce")),icon:s.brandIcon,category:"common",supports:{html:!0},edit:r=>{const{attributes:a,setAttributes:s}=r;var o=sp_smart_brand_gb_block.shortCodeList;let n=e=>{let t=!1,r=setInterval((function(){let a=jQuery("#smart-brand-main-area-"+e).parents().attr("id");document.getElementById(a)&&(jQuery.getScript(sp_smart_brand_gb_block.loadPublic),t=!0,a=""),t&&clearInterval(r),0==e&&clearInterval(r)}),10)},m=e=>{var r;r=e,s({shortcode:(0,t.escapeAttribute)(r.target.value)});let a=(0,t.escapeAttribute)(e.target.value);n(a)};if(document.addEventListener("readystatechange",(e=>{if("complete"===e.target.readyState){let e=(0,t.escapeAttribute)(a.shortcode);n(e)}})),jQuery(".sp-smart-brand-wrapper:not(.sp-smart-brand-wrapper-loaded)").length>0){let e=(0,t.escapeAttribute)(a.shortcode);n(e)}return a.preview?_("div",{className:"sp_smart_brand_shortcode_block_preview_image"},_("img",{src:(0,t.escapeAttribute)(sp_smart_brand_gb_block.url+"/core/Admin/GutenbergBlock/assets/wp-brand-block-preview.png")})):0===o.length?(0,e.createElement)(b,null,_("div",{className:"components-placeholder components-placeholder is-large"},_("div",{className:"components-placeholder__label"},_("img",{className:"block-editor-block-icon",src:(0,t.escapeAttribute)(sp_smart_brand_gb_block.url+"admin/GutenbergBlock/assets/wp-brand-icon.svg")}),(0,t.escapeHTML)(d("Smart Brand","smart-brands-for-woocommerce"))),_("div",{className:"components-placeholder__instructions"},(0,t.escapeHTML)(d("No shortcode found. ","smart-brands-for-woocommerce")),_("a",{href:(0,t.escapeAttribute)(sp_smart_brand_gb_block.link)},(0,t.escapeHTML)(d("Create a shortcode now!","smart-brands-for-woocommerce")))))):a.shortcode&&0!=a.shortcode?(0,e.createElement)(b,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(p,{title:"Smart Brand"},(0,e.createElement)(i,null,(0,e.createElement)(c,{attributes:a,shortCodeList:o,shortcodeUpdate:m})))),(0,e.createElement)(u,{block:"sp-smart-brand/shortcode",attributes:a})):(0,e.createElement)(b,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(p,{title:"Smart Brand"},(0,e.createElement)(i,null,(0,e.createElement)(c,{attributes:a,shortCodeList:o,shortcodeUpdate:m})))),_("div",{className:"components-placeholder components-placeholder is-large"},_("div",{className:"components-placeholder__label"},_("img",{className:"block-editor-block-icon",src:(0,t.escapeAttribute)(sp_smart_brand_gb_block.url+"/core/Admin/GutenbergBlock/assets/sbn.svg")}),(0,t.escapeHTML)(d("Smart Brand","smart-brands-for-woocommerce"))),_("div",{className:"components-placeholder__instructions"},(0,t.escapeHTML)(d("Select a brand group","smart-brands-for-woocommerce"))),(0,e.createElement)(c,{attributes:a,shortCodeList:o,shortcodeUpdate:m})))},save(){return null}})}();