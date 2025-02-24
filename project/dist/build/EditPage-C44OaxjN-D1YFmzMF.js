const __vite__fileDeps=["EventsTable-CeqMb1jP-jR1V8RP-.js","strapi-D3ZwAQHX.js","strapi-COJtagOC.css","selectors-Dej_6h4x-LdPhI-0-.js","useWebhooks-DzJ3X-hd-bXaoPy3I.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as j,a4 as ee,a5 as te,i as se,l as re,r as w,j as e,P as $,aA as ae,bb as L,bc as I,bd as P,F as g,ah as C,be as ne,bf as ie,bg as R,V as oe,T as x,W as y,aX as le,a0 as de,v as H,L as _,aU as ce,U as q,bh as ue,$ as W,B as S,S as f,a1 as he,ap as V,d as z,a8 as ge,b0 as me,ao as O,bi as pe,G as E,bj as N,bk as T,bl as be,I as fe,bm as xe,aG as je,b4 as we,ai as ke,aj as ye,bn as Se,bo as ve}from"./strapi-D3ZwAQHX.js";import{s as Ee}from"./selectors-Dej_6h4x-LdPhI-0-.js";import{u as Ce}from"./useWebhooks-DzJ3X-hd-bXaoPy3I.js";const Me=({children:t})=>{const{formatMessage:s}=j(),r=s({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.jsxs(g,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(y.Label,{"aria-hidden":!0,children:r}),e.jsx(Ie,{"aria-label":r,children:t})]})},Ie=z(Se)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 6%;
    vertical-align: middle;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,Re=()=>[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}],Te=({getHeaders:t=Re})=>{const{formatMessage:s}=j(),r=t();return e.jsx(ie,{children:e.jsxs(L,{children:[e.jsx(R,{children:e.jsx(oe,{children:s({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),r.map(n=>["app.utils.publish","app.utils.unpublish"].includes(n?.id??"")?e.jsx(R,{title:s({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:s(n)})},n.id):e.jsx(R,{children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:s(n)})},n.id))]})})},Ae=({providedEvents:t})=>{const s=t||$e(),{value:r=[],onChange:n}=C("events"),h="events",i=r,a=[],u=i.reduce((l,c)=>{const o=c.split(".")[0];return l[o]||(l[o]=[]),l[o].push(c),l},{}),b=(l,c)=>{const o=new Set(i);c?o.add(l):o.delete(l),n(h,Array.from(o))},d=(l,c)=>{const o=new Set(i);c?s[l].forEach(m=>{a.includes(m)||o.add(m)}):s[l].forEach(m=>o.delete(m)),n(h,Array.from(o))};return e.jsx(ne,{children:Object.entries(s).map(([l,c])=>e.jsx(D,{disabledEvents:a,name:l,events:c,inputValue:u[l],handleSelect:b,handleSelectAll:d},l))})},$e=()=>({entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}),D=({disabledEvents:t=[],name:s,events:r=[],inputValue:n=[],handleSelect:h,handleSelectAll:i})=>{const{formatMessage:a}=j(),u=r.filter(o=>!t.includes(o)),b=n.length>0,d=n.length===u.length,l=()=>{i(s,!d)},c=5;return e.jsxs(L,{children:[e.jsx(I,{children:e.jsx(P,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:s,checked:b&&!d?"indeterminate":d,onCheckedChange:l,children:Fe(s)})}),r.map(o=>e.jsx(I,{textAlign:"center",children:e.jsx(g,{width:"100%",justifyContent:"center",children:e.jsx(P,{disabled:t.includes(o),"aria-label":o,name:o,checked:n.includes(o),onCheckedChange:m=>h(o,!!m)})})},o)),r.length<c&&e.jsx(I,{colSpan:c-r.length})]})},Fe=t=>t.replace(/-/g," ").split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()).join(" "),A={Root:Me,Headers:Te,Body:Ae,Row:D},Pe=()=>e.jsxs(A.Root,{children:[e.jsx(A.Headers,{}),e.jsx(A.Body,{})]}),He=z(ve)`
  cursor: pointer;
`,_e=()=>{const{formatMessage:t}=j(),s=T("HeadersInput",a=>a.addFieldRow),r=T("HeadersInput",a=>a.removeFieldRow),n=T("HeadersInput",a=>a.onChange),{value:h=[]}=C("headers"),i=a=>{h.length===1?n("headers",[{key:"",value:""}]):r("headers",a)};return e.jsxs(g,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(y.Label,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),e.jsxs(S,{padding:8,background:"neutral100",hasRadius:!0,children:[h.map((a,u)=>e.jsxs(f.Root,{gap:4,padding:2,children:[e.jsx(f.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(qe,{name:`headers.${u}.key`,"aria-label":`row ${u+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"})})}),e.jsx(f.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(g,{alignItems:"flex-end",gap:2,children:[e.jsx(S,{style:{flex:1},children:e.jsx(be,{name:`headers.${u}.value`,"aria-label":`row ${u+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),type:"string"})}),e.jsx(fe,{width:"4rem",height:"4rem",onClick:()=>i(u),color:"primary600",label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:u+1}),type:"button",children:e.jsx(xe,{width:"0.8rem"})})]})})]},`${u}-${JSON.stringify(a.key)}`)),e.jsx(S,{paddingTop:4,children:e.jsx(He,{type:"button",onClick:()=>{s("headers",{key:"",value:""})},startIcon:e.jsx(je,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})]})},qe=({name:t,label:s,...r})=>{const[n,h]=w.useState([...U]),{value:i}=C("headers"),a=C(t);w.useEffect(()=>{const d=U.filter(l=>!i?.some(c=>c.key!==a.value&&c.key===l));h(d)},[i,a.value]);const u=d=>{a.onChange(t,d)},b=d=>{h(l=>[...l,d]),u(d)};return e.jsxs(y.Root,{name:t,error:a.error,children:[e.jsx(y.Label,{children:s}),e.jsx(ke,{...r,onClear:()=>u(""),onChange:u,onCreateOption:b,placeholder:"",creatable:!0,value:a.value,children:n.map(d=>e.jsx(ye,{value:d,children:d},d))}),e.jsx(y.Error,{})]})},U=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ve=({isPending:t,onCancel:s,response:r})=>{const{statusCode:n,message:h}=r??{},{formatMessage:i}=j();return e.jsx(S,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(f.Root,{gap:4,style:{alignItems:"center"},children:[e.jsx(f.Item,{col:3,direction:"column",alignItems:"stretch",children:e.jsx(x,{children:i({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),e.jsx(f.Item,{col:3,direction:"column",alignItems:"stretch",children:e.jsx(Oe,{isPending:t,statusCode:n})}),e.jsx(f.Item,{col:6,direction:"column",alignItems:"stretch",children:t?e.jsx(g,{justifyContent:"flex-end",children:e.jsx("button",{onClick:s,type:"button",children:e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(x,{textColor:"neutral400",children:i({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),e.jsx(N,{fill:"neutral400",height:"1.2rem",width:"1.2rem"})]})})}):e.jsx(Ue,{statusCode:n,message:h})})]})})},Oe=({isPending:t,statusCode:s})=>{const{formatMessage:r}=j();return t||!s?e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(we,{height:"1.2rem",width:"1.2rem"}),e.jsx(x,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):s>=200&&s<300?e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(W,{fill:"success700",height:"1.2rem",width:"1.2rem"}),e.jsx(x,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):s>=300?e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(N,{fill:"danger700",height:"1.2rem",width:"1.2rem"}),e.jsxs(x,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",s]})]}):null},Ue=({statusCode:t,message:s})=>{const{formatMessage:r}=j();return t?t>=200&&t<300?e.jsx(g,{justifyContent:"flex-end",children:e.jsx(x,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?e.jsx(g,{justifyContent:"flex-end",children:e.jsx(g,{maxWidth:"25rem",justifyContent:"flex-end",title:s,children:e.jsx(x,{ellipsis:!0,textColor:"neutral600",children:s})})}):null:null},Be=({handleSubmit:t,triggerWebhook:s,isCreating:r,isTriggering:n,triggerResponse:h,data:i})=>{const{formatMessage:a}=j(),[u,b]=w.useState(!1),d=le(Pe,async()=>(await me(()=>import("./EventsTable-CeqMb1jP-jR1V8RP-.js"),__vite__mapDeps([0,1,2,3,4]))).EventsTableEE),l=c=>Object.keys(c).length?Object.entries(c).map(([o,m])=>({key:o,value:m})):[{key:"",value:""}];return d?e.jsx(de,{initialValues:{name:i?.name||"",url:i?.url||"",headers:l(i?.headers||{}),events:i?.events||[]},method:r?"POST":"PUT",onSubmit:t,validationSchema:ze({formatMessage:a}),children:({isSubmitting:c,modified:o})=>e.jsxs(e.Fragment,{children:[e.jsx(_.Header,{primaryAction:e.jsxs(g,{gap:2,children:[e.jsx(q,{onClick:()=>{s(),b(!0)},variant:"tertiary",startIcon:e.jsx(ue,{}),disabled:r||n,children:a({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),e.jsx(q,{startIcon:e.jsx(W,{}),type:"submit",disabled:!o,loading:c,children:a({id:"global.save",defaultMessage:"Save"})})]}),title:r?a({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):i?.name,navigationAction:e.jsx(ce,{fallback:"../webhooks"})}),e.jsx(_.Content,{children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:4,children:[u&&e.jsx(Ve,{isPending:n,response:h,onCancel:()=>b(!1)}),e.jsx(S,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(f.Root,{gap:6,children:[{label:a({id:"global.name",defaultMessage:"Name"}),name:"name",required:!0,size:6,type:"string"},{label:a({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),name:"url",required:!0,size:12,type:"string"}].map(({size:m,...v})=>e.jsx(f.Item,{col:m,direction:"column",alignItems:"stretch",children:e.jsx(he,{...v})},v.name))}),e.jsx(_e,{}),e.jsx(d,{})]})})]})})]})}):null},Le=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,We=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,ze=({formatMessage:t})=>H().shape({name:E().nullable().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Le,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:E().nullable().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(We,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:pe(s=>{const r=O();if(s.length===1){const{key:n,value:h}=s[0];if(!n&&!h)return r}return r.of(H().shape({key:E().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})).nullable(),value:E().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"})).nullable()}))}),events:O()}),B=t=>({...t,headers:t.headers.reduce((s,{key:r,value:n})=>(r!==""&&(s[r]=n),s),{})}),G=()=>{const{formatMessage:t}=j(),r=ee("/settings/webhooks/:id")?.params.id,n=r==="create",h=te(),{toggleNotification:i}=se(),{_unstableFormatAPIError:a,_unstableFormatValidationErrors:u}=re(),b=w.useCallback(a,[]),[d,l]=w.useState(!1),[c,o]=w.useState(),{isLoading:m,webhooks:v,error:M,createWebhook:X,updateWebhook:Z,triggerWebhook:K}=Ce({id:r},{skip:n});w.useEffect(()=>{M&&i({type:"danger",message:b(M)})},[M,i,b]);const J=async()=>{try{l(!0);const k=await K(r);if("error"in k){i({type:"danger",message:a(k.error)});return}o(k.data)}catch{i({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}finally{l(!1)}},Q=async(k,F)=>{try{if(n){const p=await X(B(k));if("error"in p){V(p.error)&&p.error.name==="ValidationError"?F.setErrors(u(p.error)):i({type:"danger",message:a(p.error)});return}i({type:"success",message:t({id:"Settings.webhooks.created"})}),h(`../webhooks/${p.data.id}`,{replace:!0})}else{const p=await Z({id:r,...B(k)});if("error"in p){V(p.error)&&p.error.name==="ValidationError"?F.setErrors(u(p.error)):i({type:"danger",message:a(p.error)});return}i({type:"success",message:t({id:"notification.form.success.fields"})})}}catch{i({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}};if(m)return e.jsx($.Loading,{});const[Y]=v??[];return e.jsxs(ae,{children:[e.jsx($.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Webhooks"})}),e.jsx(Be,{data:Y,handleSubmit:Q,triggerWebhook:J,isCreating:n,isTriggering:d,triggerResponse:c})]})},Ne=()=>{const t=ge(Ee);return e.jsx($.Protect,{permissions:t.settings?.webhooks.update,children:e.jsx(G,{})})};var Ze=Object.freeze({__proto__:null,EditPage:G,ProtectedEditPage:Ne});export{G as E,A as a,Ze as b};
