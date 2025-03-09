(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3700:function(e,t,s){Promise.resolve().then(s.bind(s,4320))},657:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{variant:t="neutral",text:s="",className:r}=e;return(0,a.jsx)("span",{className:"inline-block w-fit mx-auto rounded-md p-1 font-bold leading-none text-sm border border-neutral-300 ".concat(r),children:s})}},6916:function(e,t,s){"use strict";var a=s(7437),r=s(7648);s(2265),t.Z=e=>{let{variant:t="primary",text:s,href:c="",className:n="",onClick:l,size:i="base",children:o,disabled:d}=e,u="hover:bg-primary/90 transition-all duration-300 text-neutral-800 hover:text-black focus-visible:text-black bg-primary font-bold rounded-md border-primary focus-visible:ring-2 ring-primary ring-offset-2 !outline-none leading-none ".concat({sm:"px-4 py-3",base:"px-6 py-5 text-lg",lg:"px-8 py-6 text-xl"}[i]," disabled:bg-neutral-200 disabled:border-neutral-200 disabled:cursor-not-allowed whitespace-nowrap items-center cursor-pointer"),x={primary:u+" border-[1px] bg-primary hover:bg-primaryDark focus-visible:bg-primaryDark",secondary:u+" border-2 bg-transparent hover:bg-primary hover:text-neutral-800 focus-visible:!text-current"};return c?(0,a.jsxs)(r.default,{disabled:d,href:c,className:"".concat(x[t]," ").concat(n," "),children:[s&&(0,a.jsx)("span",{children:s}),!s&&o]}):(0,a.jsxs)("button",{disabled:d,onClick:l,className:"".concat(x[t],"  ").concat(n),children:[s&&s,!s&&o]})}},8956:function(e,t,s){"use strict";var a=s(7437),r=s(7648);s(2265);var c=s(1273);t.Z=e=>{let{text:t,className:s,variant:n="small",href:l="",onClick:i,icon:o=""}=e,d="transition-all text-neutral-600 inline-flex items-center gap-2 hover:gap-4 whitespace-nowrap hover:text-black font-bold",u={small:d+" text-base",large:d+" text-lg",cta:d+" !text-black text-xl"};return l?(0,a.jsxs)(r.default,{onClick:i,href:l,className:"".concat(u[n]," ").concat(s),children:[(0,a.jsx)("span",{children:t}),o,!o&&(0,a.jsx)(c.Z1Y,{})]}):(0,a.jsxs)("button",{onClick:i,className:"".concat(u[n]," ").concat(s),children:[(0,a.jsx)("span",{children:t}),o,!o&&(0,a.jsx)(c.Z1Y,{})]})}},4633:function(e,t,s){"use strict";var a=s(7437);s(7648);var r=s(9376);s(2265),s(8956);var c=s(3145);s(6916),t.Z=e=>{let{title:t="",subtitle:s="",children:n}=e;return(0,r.useRouter)(),(0,a.jsx)("div",{className:"px-10 py-16 pt-20",children:(0,a.jsxs)("section",{className:"border bg-primaryLight text-center py-10 relative",children:[(0,a.jsx)(c.default,{fill:!0,src:"/assets/images/pcb-trace.png",alt:"pcb trace",className:"object-cover bg-blend-overlay opacity-[.02] pointer-events-none"}),(0,a.jsx)("div",{className:"container-custom--sm",children:(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("h1",{className:"text-3xl leading-snug lg:text-4xl font-extrabold",children:t}),n]})})]})})}},2414:function(e,t,s){"use strict";var a=s(7437);s(2265);var r=s(657);s(7648);var c=s(8956),n=s(3145);t.Z=e=>{let{title:t,body:s,className:l,isCategory:i,product:o,href:d}=e;return(0,a.jsxs)("div",{className:"flex flex-col group space-y-6 text-center ".concat(l),children:[(0,a.jsxs)("div",{className:"space-y-3 flex flex-col items-center justify-center flex-1",children:[s&&s,(null==o?void 0:o.id)&&(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center flex-1 gap-4",children:[(0,a.jsx)(n.default,{className:"object-contain w-full max-w-60 mx-auto flex-1",src:"/assets/images/".concat(o.images[0]),width:2e3,height:2e3,alt:"".concat(o.category," category")}),(0,a.jsx)(r.Z,{className:"font-medium",text:o.id.toUpperCase()})]})]}),(0,a.jsx)(c.Z,{className:"flex justify-center hover:text-black",text:t?"".concat(t," products"):"Go to product",href:d})]})}},4320:function(e,t,s){"use strict";s.d(t,{default:function(){return b}});var a=s(7437),r=s(657),c=s(6916),n=s(2414),l=s(4144),i=s(7792),o=s(7905),d=s(1731),u=s(3145);s(2265);var x=s(9905),m=s.n(x),h=e=>{let{className:t,isFullPage:s=!0}=e;return s?(0,a.jsx)("div",{className:m().overlay,children:(0,a.jsx)("div",{className:"".concat(m().loader," ").concat(t)})}):(0,a.jsx)("div",{className:"".concat(m().loader," ").concat(t)})},p=s(5422),f=s(4633),j=s(7648),v=s(1273),b=e=>{var t;let{product:s,category:x}=e,{products:m}=(0,d.r)(),b=m.find(e=>e.id===s),g=m.filter(e=>(0,p.j)(null==e?void 0:e.category)===x&&e.id!==s);return(null==b?void 0:b.id)?(0,a.jsxs)("div",{children:[(0,a.jsx)(f.Z,{title:s.toUpperCase(),subtitle:"Product",children:(0,a.jsxs)("div",{className:"flex gap-2 items-center justify-center ",children:[(0,a.jsx)(j.default,{href:"/",className:"text-neutral-500",children:"Home"}),(0,a.jsx)(v.Dli,{className:"text-neutral-500"}),(0,a.jsx)(j.default,{href:"/products/".concat(x),className:"text-neutral-500",children:null==b?void 0:b.category}),(0,a.jsx)(v.Dli,{className:"text-neutral-500"}),(0,a.jsx)("p",{className:"font-bold",children:s.toUpperCase()})]})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Z,{className:"!bg-transparent",children:[(0,a.jsx)(i.Z,{className:"text-left",title:"".concat(null==b?void 0:b.category," (").concat(null==b?void 0:b.id.toUpperCase(),")")}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-20",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"bg-neutral-200 px-8 py-16 ",children:(0,a.jsx)(u.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:2e3,height:2e3,className:"object-contain",alt:"product"})}),(0,a.jsxs)("div",{className:"flex gap-3 mt-3 bg-opacity-50",children:[(0,a.jsx)("div",{className:"p-2 bg-neutral-300 w-20 h-20 flex items-center justify-between",children:(0,a.jsx)(u.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:200,height:200,className:"object-contain",alt:"product"})}),(0,a.jsx)("div",{className:"p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50",children:(0,a.jsx)(u.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:200,height:200,className:"object-contain",alt:"product"})}),(0,a.jsx)("div",{className:"p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50",children:(0,a.jsx)(u.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:200,height:200,className:"object-contain",alt:"product"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-6",children:"Key Features"}),(0,a.jsx)("ul",{className:"list-disc mb-12 space-y-3 pl-4",children:null==b?void 0:null===(t=b.specifications)||void 0===t?void 0:t.map(e=>(0,a.jsx)("li",{children:e},e))}),(0,a.jsx)(c.Z,{variant:"primary",text:"Contact Us Now"})]})]})]}),g&&(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(i.Z,{title:"Similar Product(s)"}),(0,a.jsx)(l.Z,{items:g,children:g.map(e=>(0,a.jsx)(n.Z,{href:"/products/".concat(x,"/").concat(e.id),body:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{src:"/assets/images/".concat(e.images[0]),width:5e3,height:5e3,alt:"product category",className:"object-contain w-full max-w-sm mx-auto"}),(0,a.jsx)(r.Z,{text:e.id.toUpperCase()})]})},e.id))})]})]})]}):(0,a.jsx)(h,{isFullPage:!0})}},4144:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{children:t,className:s,items:r=[]}=e;return(0,a.jsx)("div",{className:"gap-16 grid grid-cols-1 ".concat(r.length>1?"md:grid-cols-2":""," ").concat(s),children:t})}},7792:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{title:t="",subtitle:s="",isAlignedLeft:r=!1,className:c="",headingSize:n="normal",isMarginBottomPresent:l=!0}=e;return(0,a.jsxs)("div",{className:"space-y-3 z-10 ".concat(l?"mb-14 md:mb-20":""," ").concat(r?"":"max-w-3xl mx-auto text-center"," ").concat(c),children:[(0,a.jsx)("h2",{className:"".concat("normal"===n?"leading-snug":""," ").concat("","\n         "),children:t}),s&&(0,a.jsx)("p",{children:s})]})}},7905:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{children:t,className:s,isContainerSmall:r=!1}=e;return(0,a.jsx)("section",{className:"".concat(s),children:(0,a.jsx)("div",{className:"".concat(r?"container-custom--sm":"container-custom"),children:t})})}},1731:function(e,t,s){"use strict";s.d(t,{ProductsProvider:function(){return l},r:function(){return i}});var a=s(7437),r=s(2265),c=s(5124);let n=(0,r.createContext)();function l(e){let{children:t}=e,[s,l]=(0,r.useState)([]);(0,r.useEffect)(()=>{l(c.RB)},[]);let i=s.reduce((e,t)=>{let{category:s}=t;return e[s]||(e[s]=[]),e[s].push(t),e},{});return(0,a.jsx)(n.Provider,{value:{products:s,productCategories:i},children:t})}function i(){let e=(0,r.useContext)(n);if(void 0===e)throw Error("You tried to access context outside products provider");return e}},5422:function(e,t,s){"use strict";s.d(t,{j:function(){return c}});var a=s(8946),r=s.n(a);function c(e){return r().snakeCase(e)}},9376:function(e,t,s){"use strict";var a=s(5475);s.o(a,"usePathname")&&s.d(t,{usePathname:function(){return a.usePathname}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}})},9905:function(e){e.exports={loader:"Loader_loader__wmkYO",spin:"Loader_spin__LtA1K",overlay:"Loader_overlay__rRxQq"}}},function(e){e.O(0,[283,240,866,599,145,124,971,117,744],function(){return e(e.s=3700)}),_N_E=e.O()}]);