(self.webpackChunkblog_site=self.webpackChunkblog_site||[]).push([[989],{6179:function(t,e,n){"use strict";var r=n(7294),a=n(5414),o=n(5444);function u(t){var e=t.description,n=t.lang,u=t.meta,c=t.title,i=(0,o.useStaticQuery)("63159454").site,f=e||i.siteMetadata.description;return r.createElement(a.Z,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:c},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:f}].concat(u)})}u.defaultProps={lang:"en",meta:[],description:""},e.Z=u},4870:function(t,e,n){"use strict";n.r(e);var r=n(3552),a=n(1804),o=n.n(a),u=n(7294),c=n(5444),i=n(154),f=n(8738),l=n(6179),s=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark;return u.createElement(f.Z,null,u.createElement(l.Z,{title:t.frontmatter.title,description:t.excerpt}),u.createElement("div",{className:"clearfix post-content-box"},u.createElement("article",{className:"article-page"},u.createElement("div",{className:"page-content"},t.frontmatter.img&&u.createElement("div",{className:"page-cover-image"},u.createElement("figure",null,u.createElement(i.G,{image:t.frontmatter.img.childImageSharp.gatsbyImageData,className:"page-image",key:t.frontmatter.img.childImageSharp.gatsbyImageData.src,alt:""}))),u.createElement("div",{className:"wrap-content"},u.createElement("header",{className:"header-page"},u.createElement("h1",{className:"page-title"},t.frontmatter.title),u.createElement("div",{className:"page-date"},u.createElement("span",null,t.frontmatter.date))),u.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),u.createElement("div",{className:"page-footer"},u.createElement("div",{className:"page-tag"},t.frontmatter.tags&&t.frontmatter.tags.map((function(t){return u.createElement("span",{key:t},u.createElement(c.Link,{className:"tag",to:"/tags/"+o()(t)+"/"},"# ",t))})))))))))},e}(u.Component);e.default=s},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},2663:function(t){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},9029:function(t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},4239:function(t,e,n){var r=n(2705),a=n(9607),o=n(2333),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?a(t):o(t)}},8674:function(t){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},531:function(t,e,n){var r=n(2705),a=n(9932),o=n(1469),u=n(3448),c=r?r.prototype:void 0,i=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(u(e))return i?i.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},5393:function(t,e,n){var r=n(2663),a=n(3816),o=n(8748),u=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(u,"")),t,"")}}},9389:function(t,e,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(i){}var a=u.call(t);return r&&(e?t[c]=n:delete t[c]),a}},3157:function(t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},2757:function(t){var e="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+a+"]",u="\\d+",c="[\\u2700-\\u27bf]",i="["+n+"]",f="[^\\ud800-\\udfff"+a+u+e+n+r+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+i+"|"+f+")",m="(?:"+p+"|"+f+")",x="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",y=b+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")"+b+v+")*"),E="(?:"+[c,l,s].join("|")+")"+y,h=RegExp([p+"?"+i+"+"+x+"(?="+[o,p,"$"].join("|")+")",m+"+"+g+"(?="+[o,p+d,"$"].join("|")+")",p+"?"+d+"+"+x,p+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,E].join("|"),"g");t.exports=function(t){return t.match(h)||[]}},3816:function(t,e,n){var r=n(9389),a=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(u,"")}},1469:function(t){var e=Array.isArray;t.exports=e},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),a=n(7005);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},1804:function(t,e,n){var r=n(5393)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}},8748:function(t,e,n){var r=n(9029),a=n(3157),o=n(9833),u=n(2757);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?u(t):r(t):t.match(e)||[]}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bf7fbcc52cc1eee49e7f.js.map