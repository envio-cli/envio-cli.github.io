"use strict";(self.webpackChunkenvio_site=self.webpackChunkenvio_site||[]).push([[772],{7828:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var r=o(7624),a=o(2172);const t={sidebar_position:5},i="Load a Profile",s={id:"usage/load-profile",title:"Load a Profile",description:"You can use the envio load  command to load the profile and make the environment variables available in your terminal session.",source:"@site/envio/usage/load-profile.md",sourceDirName:"usage",slug:"/usage/load-profile",permalink:"/usage/load-profile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"envio",previous:{title:"Modifying Environment Variables in a Profile",permalink:"/usage/modifying-env-profile"},next:{title:"Unload a Profile",permalink:"/usage/unload-profile"}},l={},d=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"load-a-profile",children:"Load a Profile"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"envio load <profile_name>"})," command to load the profile and make the environment variables available in your terminal session."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ envio load <profile_name>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["On ",(0,r.jsx)(n.code,{children:"Windows"}),", users just need to reload their shell and they can start using their environment variables as before. However, on ",(0,r.jsx)(n.code,{children:"Unix-based"})," operating systems, a new approach has been implemented to load the environment variables securely. Whenever users open their shell, envio now asks users for the key used for the profile that was loaded. They have to type in the key to access their environment variables, which are then stored in a temporary file and sourced in the current session. This ensures that the environment variables are loaded securely and are not accessible to anyone without the correct key."]}),"\n",(0,r.jsx)(n.p,{children:"Now,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ echo $DATABASE_URL\n"})}),"\n",(0,r.jsxs)(n.p,{children:["will return the value of the ",(0,r.jsx)(n.code,{children:"DATABASE_URL"})," environment variable that was set in the ",(0,r.jsx)(n.code,{children:"myprofile"})," profile."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>i});var r=o(1504);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);