import{C as a}from"./HardwareInstallation-70f156e6.js";import{_ as u,u as n,k as d,l as c,D as t,N as i,y as s}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const l={name:"DeviceMTecCounter",mixins:[a]},_={class:"device-mtec-counter"};function b(o,e,f,v,g,C){const r=n("openwb-base-heading"),p=n("openwb-base-number-input");return d(),c("div",_,[t(r,null,{default:i(()=>e[1]||(e[1]=[s(" Einstellungen für M-Tec Zähler ")])),_:1}),t(p,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=m=>o.updateConfiguration(m,"configuration.modbus_id"))},{help:i(()=>e[2]||(e[2]=[s(" Die Standard-Modbus-ID von M-Tec ist 247 ")])),_:1},8,["model-value"])])}const V=u(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mtec/mtec/counter.vue"]]);export{V as default};