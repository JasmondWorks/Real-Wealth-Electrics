(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{3741:function(e,t,s){Promise.resolve().then(s.bind(s,9432))},9733:function(e,t,s){"use strict";var a=s(7437),n=s(6648);s(2265);var r=s(1045),c=s(3326);s(5081);var l=s(8060),i=s.n(l);s(2599);var o=s(2234);t.Z=e=>{let{pageRoute:t,data:s,pageSubtitle:l,heading:d,pageHeader:x,pageImage:u="",smallPageImage:m=!1}=e,{title:h,shortSummary:p,details:{introduction:g,content:j,conclusion:f}}=s.find(e=>(0,o.j)(e.title)===t);return(0,a.jsxs)("div",{children:[!x&&(0,a.jsx)(r.Z,{title:h,subtitle:l,children:(0,a.jsx)("p",{children:p})}),x,(0,a.jsx)(c.Z,{className:"border-t border-neutral-200",children:(0,a.jsx)("div",{className:"container-custom--sm",children:(0,a.jsxs)("div",{className:"py-10 space-y-8 lg:space-y-12 text-center",children:[(0,a.jsx)("h2",{className:"font-bold text-3xl leading-snug",children:d}),u&&(0,a.jsx)(n.default,{className:m&&"lg:max-w-xl mx-auto",src:"/assets/images/".concat(u),alt:"page image",width:2e3,height:2e3}),(0,a.jsx)("p",{children:g})]})})}),j.map(e=>(0,a.jsx)("div",{className:"".concat(i().alternatedSection," py-20"),children:(0,a.jsxs)("div",{className:"container-custom--sm",children:[(0,a.jsx)("h3",{className:"mb-10 font-bold text-xl",children:e.heading}),(0,a.jsx)("div",{className:"space-y-5 lg:col-span-3",children:e.paragraphs.map(e=>(0,a.jsx)("p",{children:e},e))})]})},e.heading))]})}},8714:function(e,t,s){"use strict";var a=s(7437);s(2265);var n=s(9921),r=s(2234);t.Z=e=>{let{linksArr:t,basePath:s=""}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e,t)=>(0,a.jsx)(n.Z,{className:"py-2 px-4 border border-neutral-300",text:e.title,linkDestination:"/".concat(s,"/").concat((0,r.j)(e.title))},e.title))})}},1045:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=s(7437);s(7138);var n=s(1169);s(2265);var r=s(9921),c=s(3872),l=e=>{let{title:t="",subtitle:s="",children:l}=e,i=(0,n.useRouter)();return(0,a.jsx)("div",{className:"p-10",children:(0,a.jsx)("section",{style:{backgroundImage:'url("/assets/images/pcb-trace.png")',backgroundSize:"contain",backgroundBlendMode:"overlay"},className:"border border-primary bg-primaryLight text-center py-20",children:(0,a.jsxs)("div",{className:"container-custom--sm space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h1",{className:"text-4xl leading-snug lg:text-5xl font-extrabold",children:t}),(0,a.jsx)("p",{className:"font-bold text-lg",children:s})]}),(0,a.jsx)("div",{className:"flex gap-x-3 gap-y-2 justify-center items-center flex-wrap px-4",children:l}),(0,a.jsx)(r.Z,{icon:(0,a.jsx)(c.x_l,{}),isLink:!1,onClick:()=>i.back(),text:"Go back",className:"px-3 py-2 leading-4 border border-neutral-500 font-semibold flex-row-reverse"})]})})})}},5081:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{title:t="",subtitle:s="",isAlignedLeft:n=!1,className:r="",headingSize:c="normal",isMarginBottomPresent:l=!0}=e;return(0,a.jsxs)("div",{className:"space-y-8 ".concat(l?"mb-14 lg:mb-20":""," ").concat(n?"":"max-w-3xl mx-auto text-center"," ").concat(r),children:[(0,a.jsx)("h2",{className:"".concat("normal"===c?"text-2xl lg:text-3xl leading-snug":""," ").concat("small"===c?"text-xl lg:text-2xl":"","\n         font-bold"),children:t}),s&&(0,a.jsx)("p",{children:s})]})}},3326:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{children:t,className:s,isContainerSmall:n=!1}=e;return(0,a.jsx)("section",{className:"".concat(s),children:(0,a.jsx)("div",{className:"".concat(n?"container-custom--sm":"container-custom"),children:t})})}},9432:function(e,t,s){"use strict";var a=s(7437),n=s(9733),r=s(1121),c=s(5081),l=s(3326);s(7138),s(9921);var i=s(2234),o=s(8714);t.default=e=>{let{usecase:t}=e,{useCases:s}=(0,r.O)();console.log(t);let d=s.find(e=>(0,i.j)(e.title)===t),{title:x,image:u}=d,m=s.filter(e=>e.title!==d.title);return console.log(m),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{pageRoute:t,data:s,heading:"Benefits of our products in the ".concat(x," industry"),pageSubtitle:"Use Case",pageImage:u}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{title:"Other use cases"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-5 justify-center",children:(0,a.jsx)(o.Z,{basePath:"usecases",linksArr:m})})]})]})}},1121:function(e,t,s){"use strict";s.d(t,{AppDataProvider:function(){return l},O:function(){return i}});var a=s(7437),n=s(2265),r=s(194);let c=(0,n.createContext)();function l(e){let{children:t}=e,s=r.bd.map(e=>{let t=[];return r.RB.forEach(s=>{s.category===e.title&&t.push(s)}),{...e,products:t}});return(0,a.jsx)(c.Provider,{value:{useCases:r.ri,categories:s},children:t})}function i(){let e=(0,n.useContext)(c);if(void 0===e)throw Error("You tried to access context outside app provider");return e}},8060:function(e){e.exports={alternatedSection:"BlogDetails_alternatedSection__4qAa7"}}},function(e){e.O(0,[120,240,866,615,265,971,23,744],function(){return e(e.s=3741)}),_N_E=e.O()}]);