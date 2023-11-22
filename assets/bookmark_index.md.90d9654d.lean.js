import{d as h,c as r,L as g,M as b,o as l,k as e,t as p,_ as v,O as a,l as t,a as s}from"./chunks/framework.402b02fe.js";const k={class:"grid gap-2 md:grid-cols-3 sm:grid-cols-2"},_=["href"],w={class:"flex"},S=["src"],x={class:"desc line-clamp-2"},y=h({__name:"BookList",props:{data:{tpye:Array,default:()=>[]}},setup(d){const i=d;return(m,u)=>(l(),r("div",k,[(l(!0),r(g,null,b(i.data,(c,f)=>(l(),r("a",{class:"card-item",key:f,href:c.link,target:"_blank"},[e("div",w,[e("img",{src:c.icon,alt:"",class:"w-[30px] h-[30px] mr-[10px] bg-[var(--vp-c-bg-elv-mute)]"},null,8,S),e("span",null,p(c.title),1)]),e("div",x,p(c.desc),1)],8,_))),128))]))}});const n=v(y,[["__scopeId","data-v-8efc1b11"]]),o={开发社区:[{title:"掘金",link:"https://juejin.im/",desc:"掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。",icon:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png"},{title:"SegmentFault",link:"https://segmentfault.com/",desc:"SegmentFault 思否是中国领先的开发者技术社区。我们以技术问答、技术专栏、技术课程、技术资讯为核心的产品形态，为开发者提供纯粹、高质的技术交流平台。",icon:"https://static.segmentfault.com/main_site_next/ca29af12/favicon.ico"},{title:"CNode",link:"https://cnodejs.org/",desc:"CNode：Node.js专业中文社区",icon:"https://static2.cnodejs.org/public/images/cnode_icon_32.png"},{title:"开源中国",link:"https://www.oschina.net/",desc:"OSCHINA.NET 是目前领先的中文开源技术社区。我们传播开源的理念，推广开源项目，为 IT 开发者提供了一个发现、使用、并交流开源技术的平台",icon:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F1222%2Fcc85d56fj00qlqf5x0004c0004g004gc.jpg&thumbnail=125y125&quality=95&type=jpg"}],框架类库:[{title:"React",link:"https://facebook.github.io/react/",desc:"The library for web and native user interfaces",icon:"https://react.dev/favicon.ico"},{title:"Vue",link:"https://cn.vuejs.org/",desc:"Vue.js - 渐进式的 JavaScript 框架",icon:"https://cn.vuejs.org/logo.svg"},{title:"Angular",link:"https://angular.io/",desc:"Angular is a platform for building mobile and desktop web applications.\\n    Join the community of millions of developers who build compelling user interfaces with Angular.",icon:"https://angular.io/assets/images/favicons/favicon.ico"},{title:"Nextjs",link:"https://nextjs.org/",desc:"Next.js by Vercel is the full-stack React framework for the web.",icon:"https://nextjs.org/favicon.ico"},{title:"Nuxt",link:"https://nuxt.com/",desc:"Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.",icon:"https://nuxt.com/icon.png"},{title:"React Native",link:"https://reactnative.dev/",desc:"A framework for building native apps using React",icon:"https://reactnative.dev/img/favicon.ico"},{title:"RxJs",link:"https://rxjs.dev/",desc:"提供强大的数据流组合和控制能力的Reactive编程库",icon:"https://rxjs.dev/assets/images/favicons/favicon.ico"}],在线学习:[{title:"Learn Nodejs",link:"https://nodejs.dev/en/",desc:"Welcome to Node.js!",icon:"https://nodejs.dev/favicon-32x32.png"},{title:"Devdocs",link:"https://devdocs.io/",desc:"Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++…",icon:"https://devdocs.io/favicon.ico"},{title:"力扣",link:"https://leetcode.cn/",desc:"力扣",icon:"https://leetcode.cn/favicon.ico"}],图形动效:[{title:"D3",link:"https://d3js.org/",desc:"The JavaScript library for bespoke data visualization",icon:"https://d3js.org/logo.png"},{title:"Threejs",link:"https://threejs.org/",icon:"https://threejs.org/files/favicon.ico",desc:"Three.js – JavaScript 3D library"},{title:"Echarts",link:"https://echarts.apache.org/",desc:"Apache ECharts, a powerful, interactive charting and visualization library for browser",icon:"https://echarts.apache.org/en/images/favicon.png?_v_=20200710_1"}],CSS相关:[{title:"Tailwind CSS",link:"https://tailwindcss.com/",desc:"Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",icon:"https://tailwindcss.com/favicons/favicon.ico"},{title:"CSS-Tricks",link:"https://css-tricks.com/",desc:"Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",icon:"https://css-tricks.com/favicon.ico"},{title:"Css Wizardry",link:"https://csswizardry.com/",desc:"Web Performance Optimisation, Engineering, and Consultancy",icon:"https://csswizardry.com/icon.png"},{title:"Sass",link:"https://sass-lang.com/",desc:"Syntactically Awesome Style Sheets",icon:"https://sass-lang.com/icon.png"},{title:"Less",link:"https://lesscss.org/",desc:"Less extends CSS with dynamic behavior such as variables, mixins, operations and functions. Less runs on both the server-side (with Node.js and Rhino) or client-side (modern browsers only).\\n",icon:"https://lesscss.org/public/ico/favicon.ico"},{title:"Stylus",link:"https://stylus-lang.com/",desc:"Expressive, robust, feature-rich CSS language built for nodejs",icon:"https://stylus-lang.com/logo.svg"}],IDE:[{title:"VSCode",link:"https://code.visualstudio.com/",desc:"Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.  Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.",icon:"https://code.visualstudio.com/favicon.ico"},{title:"WebStorm",link:"https://jetbrains.com/webstorm/",desc:"WebStorm, our IDE for JS and related technologies, makes the development experience more enjoyable by automating routine work and helping with complex tasks.",icon:"https://www.jetbrains.com/favicon.ico?r=1234"}],构建工具:[{title:"Vite",link:"https://vitejs.dev/",desc:"Next Generation Frontend Tooling",icon:"https://vitejs.dev/logo.svg"},{title:"Turbopack",link:"https://turbo.build/",desc:"Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.",icon:"https://turbo.build/images/favicon-dark/apple-touch-icon.png"},{title:"Webpack",link:"https://webpack.js.org/",desc:"webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.",icon:"https://webpack.js.org/favicon.a3dd58d3142f7566.ico"},{title:"Gulp",link:"https://gulpjs.com/",desc:"gulp.js",icon:"https://gulpjs.com/img/favicon.png"},{title:"Yeoman",link:"https://yeoman.io/",desc:"The web's scaffolding tool for modern webapps | Yeoman",icon:"https://yeoman.io/static/favicon.b25e58c4b8.ico"},{title:"Grunt",link:"https://gruntjs.com/",desc:"Grunt: The JavaScript Task Runner",icon:"https://gruntjs.com/img/favicons/apple-touch-icon.png"},{title:"Babel",link:"https://babeljs.io/",desc:"The compiler for next generation JavaScript",icon:"https://babeljs.io/img/favicon.png"}],在线工具:[{title:"CodePen",link:"https://codepen.io",icon:"https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",desc:"An online code editor, learning environment, and community for front-end web development using HTML, CSS and JavaScript code snippets, projects, and web applications."},{title:"Can I use",link:"https://caniuse.com/",desc:"Can I use provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",icon:"https://caniuse.com/img/favicon-128.png"},{title:"JSON Schema Store",link:"https://www.schemastore.org/json/",desc:"JSON Schemas for common JSON file formats",icon:"https://www.schemastore.org/img/favicon/apple-touch-icon-57x57.png"}],字体图标:[{title:"Iconfont",link:"https://iconfont.cn/",desc:"iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具",icon:"https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg"},{title:"IcoMoon",link:"https://icomoon.io/",desc:"IcoMoon provides a package of vector icons, along with a free HTML5 app for making custom icon fonts or SVG sprites. Browse among thousands of pixel perfect icons or import your own vectors.",icon:"https://icomoon.io/favicon.ico"},{title:"Iconify",link:"https://iconify.design/",desc:"All popular icon sets, one framework",icon:"https://iconify.design/favicon.ico"}],其他:[{title:"Charles",link:"https://www.charlesproxy.com/",desc:"Charles Web Debugging Proxy - Official Site",icon:"https://www.charlesproxy.com/static/img/icon.850a44d2.png"},{title:"极简插件_Chrome",link:"https://chrome.zzzmh.cn/#/index",desc:"极简插件是一个优质Chrome插件扩展收录下载网站，收录热门好用的Chrome插件扩展，国内最方便的插件下载网站。",icon:"https://chrome.zzzmh.cn/favicon.ico"},{title:"网页翻译插件",link:"https://github.com/immersive-translate/immersive-translate",desc:"一款免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI 驱动的双语网页翻译扩展，帮助你有效地打破信息差，在手机上也可以用！",icon:"https://immersivetranslate.com/img/logo.png"}]},j=e("h1",{id:"书签",tabindex:"-1"},[s("书签 "),e("a",{class:"header-anchor",href:"#书签","aria-label":'Permalink to "书签"'},"​")],-1),C=e("h2",{id:"开发社区",tabindex:"-1"},[s("开发社区 "),e("a",{class:"header-anchor",href:"#开发社区","aria-label":'Permalink to "开发社区"'},"​")],-1),T=e("h2",{id:"框架类库",tabindex:"-1"},[s("框架类库 "),e("a",{class:"header-anchor",href:"#框架类库","aria-label":'Permalink to "框架类库"'},"​")],-1),N=e("h2",{id:"在线学习",tabindex:"-1"},[s("在线学习 "),e("a",{class:"header-anchor",href:"#在线学习","aria-label":'Permalink to "在线学习"'},"​")],-1),P=e("h2",{id:"图形动效",tabindex:"-1"},[s("图形动效 "),e("a",{class:"header-anchor",href:"#图形动效","aria-label":'Permalink to "图形动效"'},"​")],-1),J=e("h2",{id:"css-相关",tabindex:"-1"},[s("CSS 相关 "),e("a",{class:"header-anchor",href:"#css-相关","aria-label":'Permalink to "CSS 相关"'},"​")],-1),L=e("h2",{id:"ide",tabindex:"-1"},[s("IDE "),e("a",{class:"header-anchor",href:"#ide","aria-label":'Permalink to "IDE"'},"​")],-1),I=e("h2",{id:"构建工具",tabindex:"-1"},[s("构建工具 "),e("a",{class:"header-anchor",href:"#构建工具","aria-label":'Permalink to "构建工具"'},"​")],-1),z=e("h2",{id:"在线工具",tabindex:"-1"},[s("在线工具 "),e("a",{class:"header-anchor",href:"#在线工具","aria-label":'Permalink to "在线工具"'},"​")],-1),A=e("h2",{id:"字体图标",tabindex:"-1"},[s("字体图标 "),e("a",{class:"header-anchor",href:"#字体图标","aria-label":'Permalink to "字体图标"'},"​")],-1),O=e("h2",{id:"其他",tabindex:"-1"},[s("其他 "),e("a",{class:"header-anchor",href:"#其他","aria-label":'Permalink to "其他"'},"​")],-1),E=JSON.parse('{"title":"书签","description":"","frontmatter":{},"headers":[],"relativePath":"bookmark/index.md","filePath":"bookmark/index.md"}'),V={name:"bookmark/index.md"},F=h({...V,setup(d){const i=Object.keys(o);return(m,u)=>(l(),r("div",null,[j,C,a(n,{data:t(o)[t(i)[0]]},null,8,["data"]),T,a(n,{data:t(o)[t(i)[1]]},null,8,["data"]),N,a(n,{data:t(o)[t(i)[2]]},null,8,["data"]),P,a(n,{data:t(o)[t(i)[3]]},null,8,["data"]),J,a(n,{data:t(o)[t(i)[4]]},null,8,["data"]),L,a(n,{data:t(o)[t(i)[5]]},null,8,["data"]),I,a(n,{data:t(o)[t(i)[6]]},null,8,["data"]),z,a(n,{data:t(o)[t(i)[7]]},null,8,["data"]),A,a(n,{data:t(o)[t(i)[8]]},null,8,["data"]),O,a(n,{data:t(o)[t(i)[9]]},null,8,["data"])]))}});export{E as __pageData,F as default};