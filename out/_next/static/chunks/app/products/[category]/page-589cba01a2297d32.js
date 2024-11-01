(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{4480:function(e,t,a){Promise.resolve().then(a.bind(a,1590))},9292:function(e,t,a){"use strict";var s=a(7437);a(2265),t.Z=e=>{let{variant:t="neutral",text:a="",className:r}=e;return(0,s.jsx)("span",{className:"inline-block w-fit mx-auto rounded-md py-[6px] px-2 font-bold leading-none text-sm border border-neutral-300 ".concat(r),children:a})}},9733:function(e,t,a){"use strict";var s=a(7437),r=a(6648);a(2265);var n=a(1045),c=a(3326);a(5081);var l=a(8060),i=a.n(l);a(2599);var o=a(2234);t.Z=e=>{let{pageRoute:t,data:a,pageSubtitle:l,heading:d,pageHeader:x,pageImage:u="",smallPageImage:m=!1}=e,{title:p,shortSummary:h,details:{introduction:g,content:j,conclusion:f}}=a.find(e=>(0,o.j)(e.title)===t);return(0,s.jsxs)("div",{children:[!x&&(0,s.jsx)(n.Z,{title:p,subtitle:l,children:(0,s.jsx)("p",{children:h})}),x,(0,s.jsx)(c.Z,{className:"border-t border-neutral-200",children:(0,s.jsx)("div",{className:"container-custom--sm",children:(0,s.jsxs)("div",{className:"py-10 space-y-8 lg:space-y-12 text-center",children:[(0,s.jsx)("h2",{className:"font-bold text-3xl leading-snug",children:d}),u&&(0,s.jsx)(r.default,{className:m&&"lg:max-w-xl mx-auto",src:"/assets/images/".concat(u),alt:"page image",width:2e3,height:2e3}),(0,s.jsx)("p",{children:g})]})})}),j.map(e=>(0,s.jsx)("div",{className:"".concat(i().alternatedSection," py-20"),children:(0,s.jsxs)("div",{className:"container-custom--sm",children:[(0,s.jsx)("h3",{className:"mb-10 font-bold text-xl",children:e.heading}),(0,s.jsx)("div",{className:"space-y-5 lg:col-span-3",children:e.paragraphs.map(e=>(0,s.jsx)("p",{children:e},e))})]})},e.heading))]})}},1590:function(e,t,a){"use strict";var s=a(7437);a(2265),a(1045),a(7138);var r=a(9733),n=a(3326),c=a(5081),l=a(147),i=a(4432),o=a(6648),d=a(9292),x=a(1121);a(2599);var u=a(2234),m=a(8714);t.default=e=>{let{category:t}=e,{categories:a}=(0,x.O)(),{title:p,image:h,products:g}=a.find(e=>(0,u.j)(e.title)===t),j=a.filter(e=>(0,u.j)(e.title)!==t);return(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,{smallPageImage:!0,pageRoute:t,data:a,heading:"Features of the ".concat(p),pageSubtitle:"Category",pageImage:h}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(c.Z,{title:"Products"}),(0,s.jsx)(l.Z,{className:"grid grid-cols-4 gap-5",children:g.map(e=>(0,s.jsx)(i.Z,{linkDestination:"/products/".concat(t,"/").concat(e.id),body:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.default,{src:"/assets/images/".concat(e.images[0]),width:2e3,height:2e3,alt:"product category",className:"object-contain w-full max-w-40 mx-auto"}),(0,s.jsx)(d.Z,{text:e.id.toUpperCase()})]})},e.id))})]}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(c.Z,{title:"Other categories"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-5 justify-center",children:(0,s.jsx)(m.Z,{basePath:"products",linksArr:j})})]})]})}},8714:function(e,t,a){"use strict";var s=a(7437);a(2265);var r=a(9921),n=a(2234);t.Z=e=>{let{linksArr:t,basePath:a=""}=e;return(0,s.jsx)(s.Fragment,{children:t.map((e,t)=>(0,s.jsx)(r.Z,{className:"py-2 px-4 border border-neutral-300",text:e.title,linkDestination:"/".concat(a,"/").concat((0,n.j)(e.title))},e.title))})}},1045:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437);a(7138);var r=a(1169);a(2265);var n=a(9921),c=a(3872),l=e=>{let{title:t="",subtitle:a="",children:l}=e,i=(0,r.useRouter)();return(0,s.jsx)("div",{className:"p-10",children:(0,s.jsx)("section",{style:{backgroundImage:'url("/assets/images/pcb-trace.png")',backgroundSize:"contain",backgroundBlendMode:"overlay"},className:"border border-primary bg-primaryLight text-center py-20",children:(0,s.jsxs)("div",{className:"container-custom--sm space-y-6",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h1",{className:"text-4xl leading-snug lg:text-5xl font-extrabold",children:t}),(0,s.jsx)("p",{className:"font-bold text-lg",children:a})]}),(0,s.jsx)("div",{className:"flex gap-x-3 gap-y-2 justify-center items-center flex-wrap px-4",children:l}),(0,s.jsx)(n.Z,{icon:(0,s.jsx)(c.x_l,{}),isLink:!1,onClick:()=>i.back(),text:"Go back",className:"px-3 py-2 leading-4 border border-neutral-500 font-semibold flex-row-reverse"})]})})})}},4432:function(e,t,a){"use strict";var s=a(7437);a(2265);var r=a(9292);a(7138);var n=a(9921),c=a(6648);t.Z=e=>{let{title:t,body:a,className:l,isCategory:i,product:o,linkDestination:d}=e;return(0,s.jsxs)("div",{className:"flex flex-col group hover:border-primary border max-w-xl lg:max-w-2xl border-neutral-200 text-center ".concat(l),children:[t&&(0,s.jsx)("h3",{className:"p-3 group-hover:bg-primary group-hover:text-black font-bold    bg-primaryLight",children:t}),(0,s.jsxs)("div",{className:"space-y-4 py-8 flex flex-col items-center justify-center flex-1",children:[a&&a,(null==o?void 0:o.id)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.default,{className:"object-contain w-full max-w-64 mx-auto",src:"/assets/images/".concat(o.images[0]),width:2e3,height:2e3,alt:"".concat(o.category," category")}),(0,s.jsx)(r.Z,{text:o.id.toUpperCase()})]})]}),(0,s.jsx)(n.Z,{className:"p-4 border-t border-neutral-200 flex justify-center opacity-85",text:t?"All ".concat(t):"Go to product",linkDestination:d})]})}},147:function(e,t,a){"use strict";var s=a(7437);a(2265),t.Z=e=>{let{children:t,className:a}=e;return(0,s.jsx)("div",{className:"".concat(a),style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1rem"},children:t})}},5081:function(e,t,a){"use strict";var s=a(7437);a(2265),t.Z=e=>{let{title:t="",subtitle:a="",isAlignedLeft:r=!1,className:n="",headingSize:c="normal",isMarginBottomPresent:l=!0}=e;return(0,s.jsxs)("div",{className:"space-y-8 ".concat(l?"mb-14 lg:mb-20":""," ").concat(r?"":"max-w-3xl mx-auto text-center"," ").concat(n),children:[(0,s.jsx)("h2",{className:"".concat("normal"===c?"text-2xl lg:text-3xl leading-snug":""," ").concat("small"===c?"text-xl lg:text-2xl":"","\n         font-bold"),children:t}),a&&(0,s.jsx)("p",{children:a})]})}},3326:function(e,t,a){"use strict";var s=a(7437);a(2265),t.Z=e=>{let{children:t,className:a,isContainerSmall:r=!1}=e;return(0,s.jsx)("section",{className:"".concat(a),children:(0,s.jsx)("div",{className:"".concat(r?"container-custom--sm":"container-custom"),children:t})})}},1121:function(e,t,a){"use strict";a.d(t,{AppDataProvider:function(){return l},O:function(){return i}});var s=a(7437),r=a(2265),n=a(194);let c=(0,r.createContext)();function l(e){let{children:t}=e,a=n.bd.map(e=>{let t=[];return n.RB.forEach(a=>{a.category===e.title&&t.push(a)}),{...e,products:t}});return(0,s.jsx)(c.Provider,{value:{useCases:n.ri,categories:a},children:t})}function i(){let e=(0,r.useContext)(c);if(void 0===e)throw Error("You tried to access context outside app provider");return e}},8060:function(e){e.exports={alternatedSection:"BlogDetails_alternatedSection__4qAa7"}}},function(e){e.O(0,[120,240,866,615,265,971,23,744],function(){return e(e.s=4480)}),_N_E=e.O()}]);