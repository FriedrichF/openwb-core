import{C as a}from"./HardwareInstallation-774805b0.js";import{_ as p,u as t,l as u,m as l,G as n,E as m,y as c}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-6ffbdc7e.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceKostalPikoInverter",mixins:[a]},_={class:"device-kostal-piko-inverter"};function f(o,e,b,v,g,k){const i=t("openwb-base-heading"),r=t("openwb-base-button-group-input");return u(),l("div",_,[n(i,null,{default:m(()=>e[1]||(e[1]=[c(" Einstellungen für Kostal Piko Wechselrichter ")])),_:1}),n(r,{title:"Speicher",buttons:[{buttonValue:!1,text:"nicht vorhanden"},{buttonValue:!0,text:"vorhanden"}],"model-value":o.component.configuration.bat_configured,"onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.bat_configured"))},null,8,["model-value"])])}const N=p(d,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal/kostal_piko/inverter.vue"]]);export{N as default};
