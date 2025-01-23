import{C as u}from"./HardwareInstallation-774805b0.js";import{_ as m,u as t,l as f,m as c,G as i,E as s,y as n,x as a,F as g}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-6ffbdc7e.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const w={name:"DeviceFroniusInverterSecondary",mixins:[u],computed:{powerFlowUrl:{get(){return`http://${this.device.configuration.ip_address}/solar_api/v1/GetPowerFlowRealtimeData.fcgi?Scope=System`}}}},_={class:"device-fronius-inverter-secondary"},v=["href"];function b(r,e,D,k,h,o){const d=t("openwb-base-heading"),l=t("openwb-base-number-input");return f(),c("div",_,[i(d,null,{default:s(()=>e[1]||(e[1]=[n(" Einstellungen für einen sekundären Wechselrichter ")])),_:1}),i(l,{title:"ID","model-value":r.component.configuration.id,min:"0",required:"","onUpdate:modelValue":e[0]||(e[0]=p=>r.updateConfiguration(p,"configuration.id"))},{help:s(()=>[e[2]||(e[2]=n(" Die ID des sekundären Wechselrichters. Diese ist für jede Installation individuell und muss ermittelt werden. Dafür kann der folgende Link verwendet werden. Die ID kann den zurückgegebenen JSON entnommen werden. ")),a("a",{href:o.powerFlowUrl,target:"_blank",rel:"noopener noreferrer"},g(o.powerFlowUrl),9,v),e[3]||(e[3]=a("br",null,null,-1)),e[4]||(e[4]=n(' Im Abschnitt "Body" -> "Data" -> "SecondaryMeters" werden die installierten Zähler angezeigt. Die ID ist die Zahl vor dem Doppelpunkt und den zugehörigen Daten. '))]),_:1},8,["model-value"])])}const V=m(w,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fronius/fronius/inverter_secondary.vue"]]);export{V as default};