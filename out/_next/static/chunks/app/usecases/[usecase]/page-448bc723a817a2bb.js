(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{3741:function(e,t,s){Promise.resolve().then(s.bind(s,9864))},566:function(e,t,s){"use strict";var r=s(7437),a=s(3145);s(2265);var n=s(4633),c=s(7905),i=s(7792),l=s(4006),o=s.n(l);s(8946);var u=s(5422);t.Z=e=>{let{pageRoute:t,data:s,pageSubtitle:l,heading:d,pageHeader:x,pageImage:m="",smallPageImage:p=!1}=e,{title:h,shortSummary:f,details:{introduction:b,content:g,conclusion:v}}=s.find(e=>(0,u.j)(e.title)===t);return(0,r.jsxs)("div",{children:[!x&&(0,r.jsx)(n.Z,{title:h,subtitle:l,children:(0,r.jsx)("p",{children:f})}),x,(0,r.jsx)(c.Z,{className:"",children:(0,r.jsx)("div",{className:"container-custom--sm",children:(0,r.jsxs)("div",{className:"space-y-8 lg:space-y-12 text-center",children:[m&&(0,r.jsx)(a.default,{className:p&&"lg:max-w-xl mx-auto",src:"/assets/images/".concat(m),alt:"page image",width:2e3,height:2e3}),(0,r.jsx)("p",{children:b})]})})}),(0,r.jsxs)(c.Z,{className:"!bg-white",children:[(0,r.jsx)(i.Z,{title:"Benefits of ".concat(h)}),(0,r.jsx)("div",{className:"flex flex-col space-y-8 lg:space-y-12",children:g.map(e=>(0,r.jsx)("div",{className:"".concat(o().alternatedSection," py-10 bg-neutral-50"),children:(0,r.jsxs)("div",{className:"container-custom--sm",children:[(0,r.jsx)("h3",{className:"mb-6 font-bold text-xl",children:e.heading}),(0,r.jsx)("div",{className:"space-y-4 lg:col-span-3",children:e.paragraphs.map(e=>(0,r.jsx)("p",{children:e},e))})]})},e.heading))})]})]})}},6916:function(e,t,s){"use strict";var r=s(7437),a=s(7648);s(2265),t.Z=e=>{let{variant:t="primary",text:s,href:n="",className:c="",onClick:i,size:l="base",children:o,disabled:u}=e,d="hover:bg-primary/90 transition-all duration-300 text-neutral-800 hover:text-black focus-visible:text-black bg-primary font-bold rounded-md border-primary focus-visible:ring-2 ring-primary ring-offset-2 !outline-none leading-none ".concat({sm:"px-4 py-3",base:"px-6 py-5 text-lg",lg:"px-8 py-6 text-xl"}[l]," disabled:bg-neutral-200 disabled:border-neutral-200 disabled:cursor-not-allowed whitespace-nowrap items-center cursor-pointer"),x={primary:d+" border-[1px] bg-primary hover:bg-primaryDark focus-visible:bg-primaryDark",secondary:d+" border-2 bg-transparent hover:bg-primary hover:text-neutral-800 focus-visible:!text-current"};return n?(0,r.jsxs)(a.default,{disabled:u,href:n,className:"".concat(x[t]," ").concat(c," "),children:[s&&(0,r.jsx)("span",{children:s}),!s&&o]}):(0,r.jsxs)("button",{disabled:u,onClick:i,className:"".concat(x[t],"  ").concat(c),children:[s&&s,!s&&o]})}},8956:function(e,t,s){"use strict";var r=s(7437),a=s(7648);s(2265);var n=s(1273);t.Z=e=>{let{text:t,className:s,variant:c="small",href:i="",onClick:l,icon:o=""}=e,u="transition-all text-neutral-600 inline-flex items-center gap-2 hover:gap-4 whitespace-nowrap hover:text-black font-bold",d={small:u+" text-base",large:u+" text-lg",cta:u+" !text-black text-xl"};return i?(0,r.jsxs)(a.default,{onClick:l,href:i,className:"".concat(d[c]," ").concat(s),children:[(0,r.jsx)("span",{children:t}),o,!o&&(0,r.jsx)(n.Z1Y,{})]}):(0,r.jsxs)("button",{onClick:l,className:"".concat(d[c]," ").concat(s),children:[(0,r.jsx)("span",{children:t}),o,!o&&(0,r.jsx)(n.Z1Y,{})]})}},7122:function(e,t,s){"use strict";var r=s(7437);s(2265);var a=s(8956),n=s(5422);t.Z=e=>{let{linksArr:t,basePath:s=""}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e,t)=>(0,r.jsx)(a.Z,{className:"py-2 px-4 border border-neutral-300 hover:border-black",text:e.title,href:"/".concat(s,"/").concat((0,n.j)(e.title))},e.title))})}},4633:function(e,t,s){"use strict";var r=s(7437);s(7648);var a=s(9376);s(2265),s(8956);var n=s(3145);s(6916),t.Z=e=>{let{title:t="",subtitle:s="",children:c}=e;return(0,a.useRouter)(),(0,r.jsx)("div",{className:"px-10 py-16 pt-20",children:(0,r.jsxs)("section",{className:"border bg-primaryLight text-center py-10 relative",children:[(0,r.jsx)(n.default,{fill:!0,src:"/assets/images/pcb-trace.png",alt:"pcb trace",className:"object-cover bg-blend-overlay opacity-[.02] pointer-events-none"}),(0,r.jsx)("div",{className:"container-custom--sm",children:(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("h1",{className:"text-3xl leading-snug lg:text-4xl font-extrabold",children:t}),c]})})]})})}},7792:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{title:t="",subtitle:s="",isAlignedLeft:a=!1,className:n="",headingSize:c="normal",isMarginBottomPresent:i=!0}=e;return(0,r.jsxs)("div",{className:"space-y-3 z-10 ".concat(i?"mb-14 md:mb-20":""," ").concat(a?"":"max-w-3xl mx-auto text-center"," ").concat(n),children:[(0,r.jsx)("h2",{className:"".concat("normal"===c?"leading-snug":""," ").concat("","\n         "),children:t}),s&&(0,r.jsx)("p",{children:s})]})}},7905:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{children:t,className:s,isContainerSmall:a=!1}=e;return(0,r.jsx)("section",{className:"".concat(s),children:(0,r.jsx)("div",{className:"".concat(a?"container-custom--sm":"container-custom"),children:t})})}},9864:function(e,t,s){"use strict";var r=s(7437),a=s(566),n=s(2207),c=s(7792),i=s(7905),l=s(5422),o=s(7122);t.default=e=>{let{usecase:t}=e,{useCases:s}=(0,n.O)();console.log(t);let u=s.find(e=>(0,l.j)(e.title)===t),{title:d,image:x}=u,m=s.filter(e=>e.title!==u.title);return console.log(m),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{pageRoute:t,data:s,heading:"Benefits of our products in the ".concat(d," industry"),pageSubtitle:"Use Case",pageImage:x}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(c.Z,{title:"Other use cases"}),(0,r.jsx)("div",{className:"flex flex-wrap gap-5 justify-center",children:(0,r.jsx)(o.Z,{basePath:"usecases",linksArr:m})})]})]})}},2207:function(e,t,s){"use strict";s.d(t,{AppDataProvider:function(){return i},O:function(){return l}});var r=s(7437),a=s(2265),n=s(5124);let c=(0,a.createContext)();function i(e){let{children:t}=e,s=n.bd.map(e=>{let t=[];return n.RB.forEach(s=>{s.category===e.title&&t.push(s)}),{...e,products:t}});return(0,r.jsx)(c.Provider,{value:{useCases:n.ri,categories:s},children:t})}function l(){let e=(0,a.useContext)(c);if(void 0===e)throw Error("You tried to access context outside app provider");return e}},5422:function(e,t,s){"use strict";s.d(t,{j:function(){return n}});var r=s(8946),a=s.n(r);function n(e){return a().snakeCase(e)}},9376:function(e,t,s){"use strict";var r=s(5475);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},4006:function(){}},function(e){e.O(0,[305,240,866,599,145,124,971,117,744],function(){return e(e.s=3741)}),_N_E=e.O()}]);