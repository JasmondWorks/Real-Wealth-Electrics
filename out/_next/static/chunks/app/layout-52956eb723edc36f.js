(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8391:function(e,t,s){Promise.resolve().then(s.bind(s,9986)),Promise.resolve().then(s.bind(s,2207)),Promise.resolve().then(s.bind(s,1731)),Promise.resolve().then(s.t.bind(s,2972,23)),Promise.resolve().then(s.t.bind(s,4781,23)),Promise.resolve().then(s.t.bind(s,7960,23))},9986:function(e,t,s){"use strict";s.d(t,{default:function(){return h}});var l=s(7437),n=s(2265),r=s(7648),o=s(2768),a=s(1273),c=e=>{let{itemsText:t=[],text:s="",className:o=""}=e,[c,i]=(0,n.useState)(!1);return(0,l.jsxs)("div",{onClick:()=>i(e=>!e),className:"cursor-pointer lg:pointer-events-none font-medium inline-block py-4 lg:py-5 w-full ".concat(o),children:[(0,l.jsxs)("div",{className:"flex gap-1 items-center ".concat(c?"mb-5":""," lg:mb-0"),children:[(0,l.jsx)("span",{className:"w-full ".concat(c?"font-bold":""),children:s}),c?(0,l.jsx)(a.RiI,{className:"text-sm pointer-events-none"}):(0,l.jsx)(a.Dli,{className:"text-sm pointer-events-none"})]}),c&&(0,l.jsx)("ul",{className:"max-h-36 overflow-auto w-full lg:hidden space-y-2",children:t.map(e=>(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{href:"#",className:"w-full inline-block",children:e})},e))})]})},i=e=>{let{children:t,className:s}=e;return(0,l.jsx)("div",{className:"hidden z-50 absolute bottom-0 translate-y-[100%] w-full right-[50%] translate-x-[50%] container-custom ".concat(s),children:(0,l.jsx)("div",{className:"max-h-[80vh] shadow-lg border p-6 border-neutral-200 bg-white",children:t})})},u=s(1731),d=s(9376);let f={selectedCategory:null,selectedUseCaseTitle:null,selectedCaseStudy:null};function m(e,t){switch(t.type){case"category/select":return{...e,selectedCategory:t.payload};case"caseStudy/select":return{...e,selectedCaseStudy:t.payload};case"useCase/select":return{...e,selectedUseCaseTitle:t.payload};default:return e}}var h=()=>{let[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)(!1),{productCategories:h}=(0,u.r)(),x=Object.entries(h),[{selectedCategory:p},b]=(0,n.useReducer)(m,f),g=["/"],v=(0,d.usePathname)();return console.log(v),(0,n.useEffect)(()=>{t(!1),console.log(v)},[v]),(0,n.useEffect)(()=>{let e=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,l.jsxs)("div",{className:"fixed top-0 left-0 right-0 z-[1000000] transition-all duration-300 text-base ".concat(!s&&g.includes(v)?"lg:py-2":""," ").concat(s||e?"bg-white text-black shadow-md":"bg-transparent ".concat(g.includes(v)?"text-white":"")),children:[(0,l.jsxs)("div",{className:"container-custom lg:flex justify-between items-center relative z-10 ".concat(e?"bg-white":""),children:[(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)(r.default,{href:"/",className:"".concat(s?"py-4":"py-6"," text-2xl inline-block font-extrabold transition-all duration-300"),children:"RwE"}),(0,l.jsx)("button",{className:"outline-none focus-visible:ring-1 ring-yellow-400  border-none rounded-md",onClick:()=>t(e=>!e),children:(0,l.jsx)(o.pLT,{className:"text-4xl lg:hidden"})})]}),(0,l.jsx)("nav",{className:"overflow-auto lg:flex ".concat(e?"":"hidden"),children:(0,l.jsxs)("ul",{className:"list-none lg:flex items-center gap-y-2 mt-6 lg:mt-0",children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{href:"/",className:"block font-bold py-4 lg:py-5 lg:px-5",children:(0,l.jsx)("span",{className:"inline-block",children:"Home"})})}),(0,l.jsxs)("li",{className:"border-t lg:border-t-0 border-neutral-200 group",children:[(0,l.jsx)(c,{itemsText:x.map(e=>e[0]),text:"Products",className:"lg:px-5"}),(0,l.jsxs)(i,{className:"lg:group-hover:block group-hover:text-black",children:[(0,l.jsx)("h3",{className:"font-bold text-lg mb-6",children:"Categories"}),(0,l.jsx)("div",{className:"flex gap-10",children:(0,l.jsx)("ul",{className:"list-none space-y-3",children:x.map(e=>(0,l.jsx)(r.default,{onMouseOver:()=>b({type:"category/select",payload:e[0]}),href:"#",className:"flex gap-1 items-center ".concat(p===e[0]?"text-yellow-500":""),children:e[0]},e[0]))})})]})]}),(0,l.jsx)("li",{className:"border-t lg:border-t-0 border-neutral-200 group",children:(0,l.jsx)(r.default,{href:"#footer",className:"block font-medium py-4 lg:py-5 lg:px-5",children:(0,l.jsx)("span",{children:"About Us"})})}),(0,l.jsx)("li",{className:"border-t lg:border-t-0 border-neutral-200 group",children:(0,l.jsx)(r.default,{href:"#footer",className:"block font-medium py-4 lg:py-5 lg:pl-5",children:(0,l.jsx)("span",{children:"Contact Us"})})})]})})]}),e&&(0,l.jsx)("div",{onClick:()=>t(!1),className:"bg-black bg-opacity-60 fixed inset-0 -z-10"})]})}},2207:function(e,t,s){"use strict";s.d(t,{AppDataProvider:function(){return a},O:function(){return c}});var l=s(7437),n=s(2265),r=s(5124);let o=(0,n.createContext)();function a(e){let{children:t}=e,s=r.bd.map(e=>{let t=[];return r.RB.forEach(s=>{s.category===e.title&&t.push(s)}),{...e,products:t}});return(0,l.jsx)(o.Provider,{value:{useCases:r.ri,categories:s},children:t})}function c(){let e=(0,n.useContext)(o);if(void 0===e)throw Error("You tried to access context outside app provider");return e}},1731:function(e,t,s){"use strict";s.d(t,{ProductsProvider:function(){return a},r:function(){return c}});var l=s(7437),n=s(2265),r=s(5124);let o=(0,n.createContext)();function a(e){let{children:t}=e,[s,a]=(0,n.useState)([]);(0,n.useEffect)(()=>{a(r.RB)},[]);let c=s.reduce((e,t)=>{let{category:s}=t;return e[s]||(e[s]=[]),e[s].push(t),e},{});return(0,l.jsx)(o.Provider,{value:{products:s,productCategories:c},children:t})}function c(){let e=(0,n.useContext)(o);if(void 0===e)throw Error("You tried to access context outside products provider");return e}},9376:function(e,t,s){"use strict";var l=s(5475);s.o(l,"usePathname")&&s.d(t,{usePathname:function(){return l.usePathname}}),s.o(l,"useRouter")&&s.d(t,{useRouter:function(){return l.useRouter}})},7960:function(){},4781:function(e){e.exports={style:{fontFamily:"'__Montserrat_6523fe', '__Montserrat_Fallback_6523fe'"},className:"__className_6523fe"}}},function(e){e.O(0,[452,240,706,599,124,971,117,744],function(){return e(e.s=8391)}),_N_E=e.O()}]);