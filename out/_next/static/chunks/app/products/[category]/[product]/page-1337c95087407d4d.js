(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3700:function(e,t,s){Promise.resolve().then(s.bind(s,639))},9292:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{variant:t="neutral",text:s="",className:a}=e;return(0,r.jsx)("span",{className:"inline-block w-fit mx-auto rounded-md py-[6px] px-2 font-bold leading-none text-sm border border-neutral-300 ".concat(a),children:s})}},1045:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var r=s(7437);s(7138);var a=s(1169);s(2265);var n=s(9921),c=s(3872),l=e=>{let{title:t="",subtitle:s="",children:l}=e,i=(0,a.useRouter)();return(0,r.jsx)("div",{className:"p-10",children:(0,r.jsx)("section",{style:{backgroundImage:'url("/assets/images/pcb-trace.png")',backgroundSize:"contain",backgroundBlendMode:"overlay"},className:"border border-primary bg-primaryLight text-center py-20",children:(0,r.jsxs)("div",{className:"container-custom--sm space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("h1",{className:"text-5xl font-extrabold",children:t}),(0,r.jsx)("p",{className:"font-bold text-lg",children:s})]}),(0,r.jsx)("div",{className:"flex gap-x-3 gap-y-2 justify-center items-center flex-wrap px-4",children:l}),(0,r.jsx)(n.Z,{icon:(0,r.jsx)(c.x_l,{}),isLink:!1,onClick:()=>i.back(),text:"Go back",className:"px-3 py-2 leading-4 border border-neutral-500 font-semibold flex-row-reverse"})]})})})}},4432:function(e,t,s){"use strict";var r=s(7437);s(2265);var a=s(9292);s(7138);var n=s(9921),c=s(6648);t.Z=e=>{let{title:t,body:s,className:l,isCategory:i,product:o,linkDestination:d}=e;return(0,r.jsxs)("div",{className:"flex flex-col group hover:border-primary border max-w-xl lg:max-w-2xl border-neutral-200 text-center ".concat(l),children:[t&&(0,r.jsx)("h3",{className:"p-3 group-hover:bg-primary group-hover:text-black font-bold    bg-primaryLight",children:t}),(0,r.jsxs)("div",{className:"space-y-4 py-8 flex flex-col items-center justify-center flex-1",children:[s&&s,(null==o?void 0:o.id)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{className:"object-contain w-full max-w-64 mx-auto",src:"/assets/images/".concat(o.images[0]),width:2e3,height:2e3,alt:"".concat(o.category," category")}),(0,r.jsx)(a.Z,{text:o.id.toUpperCase()})]})]}),(0,r.jsx)(n.Z,{className:"p-4 border-t border-neutral-200 flex justify-center opacity-85",text:t?"All ".concat(t):"Go to product",linkDestination:d})]})}},639:function(e,t,s){"use strict";s.d(t,{default:function(){return b}});var r=s(7437),a=s(9292),n=s(7138);s(2265);var c=e=>{let{variant:t="primary",text:s,icon:a="",linkDestination:c=""}=e;return c&&"primary"===t?(0,r.jsxs)(n.default,{href:c,className:"py-4 leading-5 px-6 text-neutral-800 bg-primary font-bold rounded-md border-2 border-primary",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:s})]}):c&&"secondary"===t?(0,r.jsxs)(n.default,{href:c,className:"py-4 leading-5 px-6 text-neutral-800 border-2 border-primary font-bold rounded-md",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:s})]}):(0,r.jsxs)(r.Fragment,{children:["primary"===t&&(0,r.jsxs)("button",{className:"py-4 leading-5 px-6 text-neutral-800 bg-primary font-bold rounded-md border-2 border-primary",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:s})]}),"secondary"===t&&(0,r.jsxs)("button",{className:"py-4 leading-5 px-6 text-neutral-800 border-2 border-primary font-bold rounded-md",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:s})]})]})},l=s(1045),i=s(4432),o=s(147),d=s(5081),u=s(3326),x=s(3781),m=s(6648),p=s(3872),h=s(3568),j=s.n(h),f=e=>{let{className:t,isFullPage:s=!0}=e;return s?(0,r.jsx)("div",{className:"w-[80vw] mx-auto h-screen grid place-items-center",children:(0,r.jsx)("div",{class:"".concat(j().loader," ").concat(t)})}):(0,r.jsx)("div",{class:"".concat(j().loader," ").concat(t)})},g=s(2234),b=e=>{var t;let{product:s,category:h}=e,{products:j}=(0,x.r)(),b=j.find(e=>e.id===s);console.log(h);let v=j.filter(e=>(0,g.j)(e.category)===h&&e.id!==s);return(null==b?void 0:b.id)?(0,r.jsxs)("div",{children:[(0,r.jsxs)(l.Z,{title:s.toUpperCase(),subtitle:"Product",children:[(0,r.jsx)(n.default,{href:"/",className:"text-neutral-500",children:"Home"}),(0,r.jsx)(p.Dli,{className:"text-neutral-500"}),(0,r.jsx)(n.default,{href:"/products/".concat(h),className:"text-neutral-500",children:"Digital Satellite Clocks"}),(0,r.jsx)(p.Dli,{className:"text-neutral-500"}),(0,r.jsx)("p",{className:"font-bold",children:s.toUpperCase()})]}),(0,r.jsx)("div",{children:j.category}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(d.Z,{isAlignedLeft:!0,className:"text-left",title:"".concat(null==b?void 0:b.category," (").concat(null==b?void 0:b.id.toUpperCase(),")")}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-20",children:[(0,r.jsxs)("div",{className:"border border-neutral-200",children:[(0,r.jsx)("div",{className:"bg-neutral-200 px-8 py-16 ",children:(0,r.jsx)(m.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:2e3,height:2e3,className:"object-contain",alt:"product"})}),(0,r.jsxs)("div",{className:"flex gap-3 p-3 bg-neutral-100 bg-opacity-50",children:[(0,r.jsx)("div",{className:"p-2 bg-neutral-400 w-20 h-20 flex items-center justify-between",children:(0,r.jsx)(m.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:200,height:200,className:"object-contain",alt:"product"})}),(0,r.jsx)("div",{className:"p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50",children:(0,r.jsx)(m.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:200,height:200,className:"object-contain",alt:"product"})}),(0,r.jsx)("div",{className:"p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50",children:(0,r.jsx)(m.default,{src:"/assets/images/".concat(null==b?void 0:b.images[0]),width:200,height:200,className:"object-contain",alt:"product"})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-6",children:"Key Features"}),(0,r.jsx)("ul",{className:"list-disc mb-12 space-y-3 pl-4",children:null==b?void 0:null===(t=b.specifications)||void 0===t?void 0:t.map(e=>(0,r.jsx)("li",{children:e},e))}),(0,r.jsx)(c,{variant:"primary",text:"Contact Us Now"})]})]})]}),v&&(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(d.Z,{isAlignedLeft:!0,title:"Similar Products"}),(0,r.jsx)(o.Z,{className:"grid grid-cols-4 gap-5",children:v.map(e=>(0,r.jsx)(i.Z,{linkDestination:"/products/".concat(h,"/").concat(e.id),body:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.default,{src:"/assets/images/".concat(e.images[0]),width:2e3,height:2e3,alt:"product category",className:"object-contain w-full max-w-40 mx-auto"}),(0,r.jsx)(a.Z,{text:e.id.toUpperCase()})]})},e.id))})]})]})]}):(0,r.jsx)(f,{})}},147:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{children:t,className:s}=e;return(0,r.jsx)("div",{className:"".concat(s),style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1rem"},children:t})}},5081:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{title:t="",subtitle:s="",isAlignedLeft:a=!1,className:n="",headingSize:c="normal",isMarginBottomPresent:l=!0}=e;return(0,r.jsxs)("div",{className:"space-y-8 ".concat(l?"mb-20":""," ").concat(a?"":"max-w-3xl mx-auto text-center"," ").concat(n),children:[(0,r.jsx)("h2",{className:"".concat("normal"===c?"text-3xl leading-snug":""," ").concat("small"===c?"text-2xl":"","\n         font-bold"),children:t}),s&&(0,r.jsx)("p",{children:s})]})}},3326:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{children:t,className:s,isContainerSmall:a=!1}=e;return(0,r.jsx)("section",{className:"".concat(s),children:(0,r.jsx)("div",{className:"".concat(a?"container-custom--sm":"container-custom"),children:t})})}},3781:function(e,t,s){"use strict";s.d(t,{ProductsProvider:function(){return l},r:function(){return i}});var r=s(7437),a=s(2265),n=s(194);let c=(0,a.createContext)();function l(e){let{children:t}=e,[s,l]=(0,a.useState)([]);(0,a.useEffect)(()=>{l(n.RB)},[]);let i=s.reduce((e,t)=>{let{category:s}=t;return e[s]||(e[s]=[]),e[s].push(t),e},{});return(0,r.jsx)(c.Provider,{value:{products:s,productCategories:i},children:t})}function i(){let e=(0,a.useContext)(c);if(void 0===e)throw Error("You tried to access context outside products provider");return e}},2234:function(e,t,s){"use strict";s.d(t,{j:function(){return n}});var r=s(2599),a=s.n(r);function n(e){return a().snakeCase(e)}},3568:function(e){e.exports={loader:"Loader_loader__wmkYO",spin:"Loader_spin__LtA1K"}}},function(e){e.O(0,[381,240,866,615,691,971,23,744],function(){return e(e.s=3700)}),_N_E=e.O()}]);