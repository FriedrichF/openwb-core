import{_ as n,u as r,k as i,l as s,D as p,N as a,y as c}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const d={name:"RippleControlReceiverGpio",emits:["update:configuration"],props:{rippleControlReceiver:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},l={class:"ripple-control-receiver-gpio"};function _(e,t,u,f,m,v){const o=r("openwb-base-alert");return i(),s("div",l,[p(o,{subtype:"info"},{default:a(()=>[c(" Wenn mindestens ein Kontakt geschlossen ist, wird die Ladung gesperrt. Wenn beide Kontakte offen sind, darf geladen werden. ")]),_:1})])}const h=n(d,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/ripple_control_receivers/gpio/ripple_control_receiver.vue"]]);export{h as default};