(self.webpackChunkblog_site=self.webpackChunkblog_site||[]).push([[544],{6179:function(e,t,a){"use strict";var n=a(7294),r=a(5414),l=a(5444);function s(e){var t=e.description,a=e.lang,s=e.meta,i=e.title,c=(0,l.useStaticQuery)("63159454").site,o=t||c.siteMetadata.description;return n.createElement(r.Z,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(s)})}s.defaultProps={lang:"en",meta:[],description:""},t.Z=s},5166:function(e,t,a){"use strict";a.r(t);var n=a(3552),r=a(7294),l=a(5444),s=a(8738),i=a(6179),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,n=this.props.pageContext,c=n.currentPage,o=n.numPages,m=1===c,p=c===o,u=c-1==1?"/":(c-1).toString(),g=(c+1).toString();return r.createElement(s.Z,null,r.createElement(i.Z,{title:t,keywords:["blog","gatsby","javascript","react"]}),r.createElement("div",{className:"content-box clearfix"},a.map((function(e){var t=e.node;return r.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.gatsbyImageData&&r.createElement(l.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src+")"}}),r.createElement("div",{className:"post-content"},r.createElement("h2",{className:"post-title"},r.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)),r.createElement("p",null,t.excerpt),r.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})),r.createElement("div",{className:"container"},r.createElement("nav",{className:"pagination",role:"navigation"},r.createElement("ul",null,!m&&r.createElement("p",null,r.createElement(l.Link,{to:u,rel:"prev",className:"newer-posts"},"← Previous Page")),r.createElement("p",null,r.createElement("span",{className:"page-number"},"Page ",c," of ",o)),!p&&r.createElement("p",null,r.createElement(l.Link,{to:g,rel:"next",className:"older-posts"},"Next Page →")))))))},t}(r.Component);t.default=c}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-b651e08bb4fb0daf07a2.js.map