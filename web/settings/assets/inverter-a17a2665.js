import{C as m}from"./HardwareInstallation-d2c0f1d5.js";import{_ as d,u as o,k as u,l,D as t,N as i,y as r}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-c79666b6.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceEnphaseInverter",mixins:[m]},_={class:"device-enphase-inverter"};function f(n,e,v,b,g,h){const s=o("openwb-base-heading"),p=o("openwb-base-number-input");return u(),l("div",_,[t(s,null,{default:i(()=>e[1]||(e[1]=[r(" Einstellungen für Enphase Envoy / IQ Gateway Wechselrichter ")])),_:1}),t(p,{title:"EID",required:"","model-value":n.component.configuration.eid,"onUpdate:modelValue":e[0]||(e[0]=a=>n.updateConfiguration(a,"configuration.eid"))},{help:i(()=>e[2]||(e[2]=[r(' EID für "production" ')])),_:1},8,["model-value"])])}const B=d(c,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/enphase/inverter.vue"]]);export{B as default};