import{C as r}from"./ChargePointInstallation-547f555f.js";import{_ as i,u as a,l as p,m as s,G as d}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-6ffbdc7e.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const c={name:"ChargePointOpenwbDcAdapter",mixins:[r]},m={class:"charge-point-openwb-dc-adapter"};function u(e,o,_,l,f,g){const t=a("openwb-base-text-input");return p(),s("div",m,[d(t,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.chargePoint.configuration.ip_address,"onUpdate:modelValue":o[0]||(o[0]=n=>e.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"])])}const k=i(c,[["render",u],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/openwb_dc_adapter/chargePoint.vue"]]);export{k as default};
