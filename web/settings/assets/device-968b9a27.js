import{_ as c,q as n,l as r,m as d,A as o,K as s,v as a,u,x as _}from"./vendor-5f866419.js";import"./vendor-sortablejs-793d687d.js";const l={name:"DeviceOpenwbPvKit",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-openwb-pvkit"},m={class:"small"};function b(e,t,v,g,w,h){const i=n("openwb-base-heading"),p=n("openwb-base-alert");return r(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für openWB PV-Kit "),u("span",m,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(p,{subtype:"info"},{default:s(()=>[a(" Dieses Gerät erfordert keine Einstellungen. ")]),_:1})])}const x=c(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb_pv_kit/device.vue"]]);export{x as default};