import{_ as l,q as n,k as p,l as c,B as a,M as m,x as _,u as f,y as b}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const g={name:"DeviceKostalSEM",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-kostal-sem"},w={class:"small"};function x(t,e,s,h,k,i){const d=n("openwb-base-heading"),u=n("openwb-base-text-input"),r=n("openwb-base-number-input");return p(),c("div",v,[a(d,null,{default:m(()=>[_(" Einstellungen für Kostal Smart Energy Meter oder TQ EM 410 "),f("span",w,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),a(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>i.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),a(r,{title:"Port",required:"",min:1,max:65535,"model-value":s.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>i.updateConfiguration(o,"configuration.port"))},null,8,["model-value"])])}const C=l(g,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_sem/device.vue"]]);export{C as default};