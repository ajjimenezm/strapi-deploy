import{aP as I,i as z,u as v,l as O,f4 as R,f6 as q,r as S,ck as G,f7 as U,j as d,P as E,f8 as b}from"./strapi-D3ZwAQHX.js";import{C as $,T as k}from"./Form-DTO0ZIaB-CNLVuxlZ.js";import{u as w}from"./hooks-DMvik5y_-BqqEJhsX.js";import{s as Q}from"./objects-wl73iEma-BdWwwMa5.js";import"./useDragAndDrop-HYwNDExe-hquhwnQb.js";import"./ComponentIcon-BZcTc4rj-3rbwhljT.js";import"./FieldTypeIcon-BY6MrVF4-0TI51PTt.js";import"./getEmptyImage-CjqolaH3.js";const B=G.injectEndpoints({endpoints:e=>({getComponentConfiguration:e.query({query:t=>`/content-manager/components/${t}/configuration`,transformResponse:t=>t.data,providesTags:(t,o,s)=>[{type:"ComponentConfiguration",id:s}]}),updateComponentConfiguration:e.mutation({query:({uid:t,...o})=>({url:`/content-manager/components/${t}/configuration`,method:"PUT",data:o}),transformResponse:t=>t.data,invalidatesTags:(t,o,{uid:s})=>[{type:"ComponentConfiguration",id:s},{type:"ContentTypeSettings",id:"LIST"}]})})}),{useGetComponentConfigurationQuery:D,useUpdateComponentConfigurationMutation:H}=B,K=()=>{const{slug:e}=I(),{toggleNotification:t}=z(),{formatMessage:o}=v(),{_unstableFormatAPIError:s}=O(),{components:f,fieldSizes:h,schema:r,error:i,isLoading:c,isFetching:F}=R(void 0,{selectFromResult:a=>{const y=a.data?.components.find(n=>n.uid===e),C=a.data?.components.reduce((n,u)=>(n[u.uid]=u,n),{}),p=q(y?.attributes,C),m=Object.entries(a.data?.fieldSizes??{}).reduce((n,[u,{default:T}])=>(n[u]=T,n),{});return{isFetching:a.isFetching,isLoading:a.isLoading,error:a.error,components:p,schema:y,fieldSizes:m}}});S.useEffect(()=>{i&&t({type:"danger",message:s(i)})},[i,s,t]);const{data:g,isLoading:P,isFetching:x,error:l}=D(e??"");S.useEffect(()=>{l&&t({type:"danger",message:s(l)})},[l,s,t]);const _=P||c||x||F,j=S.useMemo(()=>g&&!_?V(g,{schema:r,components:f}):{layout:[],components:{},metadatas:{},options:{},settings:U},[g,_,r,f]),[M]=H(),A=async a=>{try{const y=Object.entries(g?.component.metadatas??{}).reduce((p,[m,{edit:n,list:u}])=>{const{__temp_key__:T,size:J,name:W,...N}=a.layout.flatMap(L=>L.children).find(L=>L.name===m)??{};return p[m]={edit:{...n,...N},list:u},p},{}),C=await M({layouts:{edit:a.layout.map(p=>p.children.reduce((m,{name:n,size:u})=>n!==k?[...m,{name:n,size:u}]:m,[])),list:g?.component.layouts.list},settings:Q(a.settings,"displayName",void 0),metadatas:y,uid:e});"data"in C?t({type:"success",message:o({id:"notification.success.saved",defaultMessage:"Saved"})}):t({type:"danger",message:s(C.error)})}catch{t({type:"danger",message:o({id:"notification.error",defaultMessage:"An error occurred"})})}};return _?d.jsx(E.Loading,{}):l||i||!r?d.jsx(E.Error,{}):d.jsxs(d.Fragment,{children:[d.jsx(E.Title,{children:`Configure ${j.settings.displayName} Edit View`}),d.jsx($,{onSubmit:A,attributes:r.attributes,fieldSizes:h,layout:j})]})},V=(e,{schema:t,components:o})=>{const s=b(e.component.layouts.edit,t?.attributes,e.component.metadatas,{configurations:e.components,schemas:o}),f=Object.entries(e.components).reduce((r,[i,c])=>(r[i]={layout:b(c.layouts.edit,o[i].attributes,c.metadatas),settings:{...c.settings,icon:o[i].info.icon,displayName:o[i].info.displayName}},r),{}),h=Object.entries(e.component.metadatas).reduce((r,[i,c])=>({...r,[i]:c.edit}),{});return{layout:[s],components:f,metadatas:h,options:{...t?.options,...t?.pluginOptions},settings:{...e.component.settings,displayName:t?.info.displayName}}},it=()=>{const e=w(t=>t.admin_app.permissions.contentManager?.componentsConfigurations);return d.jsx(E.Protect,{permissions:e,children:d.jsx(K,{})})};export{K as ComponentConfigurationPage,it as ProtectedComponentConfigurationPage};
