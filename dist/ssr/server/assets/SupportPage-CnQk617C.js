import{defineComponent as i,resolveComponent as m,mergeProps as _,withCtx as c,createVNode as d,toDisplayString as f,useSSRContext as g}from"vue";import{ssrRenderComponent as x,ssrInterpolate as C}from"vue/server-renderer";const n=i({__name:"SupportPage",__ssrInlineRender:!0,setup(s){return(e,t,p,a)=>{const l=m("q-page");t(x(l,_({class:"row items-center justify-evenly"},a),{default:c((S,o,v,u)=>{if(o)o(`<h3 class="t-text-3xl"${u}>${C(e.$t("pages.soporte.title"))}</h3>`);else return[d("h3",{class:"t-text-3xl"},f(e.$t("pages.soporte.title")),1)]}),_:1},p))}}}),r=n.setup;n.setup=(s,e)=>{const t=g();return(t.modules||(t.modules=new Set)).add("src/views/pages/SupportPage.vue"),r?r(s,e):void 0};export{n as default};
