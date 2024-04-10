import{C as f}from"./index-720fb9ac.js";import{_ as w,q as g,k as d,l as u,u as r,B as i,M as l,x as a,z as W,A as B}from"./vendor-f0f38b48.js";import"./vendor-fortawesome-9fdc06a9.js";import"./vendor-bootstrap-384bc385.js";import"./vendor-jquery-8576ed22.js";import"./vendor-axios-e59ef189.js";import"./vendor-sortablejs-cbf37f8f.js";const S={name:"OpenwbPVChargeConfig",mixins:[f],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/pv_charging/control_range","openWB/general/chargemode_config/pv_charging/feed_in_yield","openWB/general/chargemode_config/pv_charging/switch_on_threshold","openWB/general/chargemode_config/pv_charging/switch_on_delay","openWB/general/chargemode_config/pv_charging/switch_off_threshold","openWB/general/chargemode_config/pv_charging/switch_off_delay","openWB/general/chargemode_config/pv_charging/phases_to_use","openWB/general/chargemode_config/pv_charging/phase_switch_delay","openWB/general/chargemode_config/pv_charging/bat_prio","openWB/general/chargemode_config/pv_charging/switch_on_soc","openWB/general/chargemode_config/pv_charging/switch_off_soc","openWB/general/chargemode_config/pv_charging/charging_power_reserve","openWB/general/chargemode_config/pv_charging/rundown_power","openWB/general/chargemode_config/pv_charging/rundown_soc"],calculatedControlMode:void 0}},computed:{controlMode:{get(){if(this.calculatedControlMode!==void 0)return this.calculatedControlMode;const e="openWB/general/chargemode_config/pv_charging/control_range";let n=this.$store.state.mqtt[e];var h="individual";return typeof n<"u"&&(n[0]===-230&&n[1]===0?h="export":n[0]===0&&n[1]===230?h="import":n[0]===-115&&n[1]===115?h="balanced":h="individual"),h},set(e){const n="openWB/general/chargemode_config/pv_charging/control_range";switch(this.calculatedControlMode=e,e){case"export":this.updateState(n,[-230,0]);break;case"import":this.updateState(n,[0,230]);break;case"balanced":this.updateState(n,[-115,115]);break}}}},methods:{updateBatterySwitchOnSoc(e){this.updateState("openWB/general/chargemode_config/pv_charging/switch_on_soc",e),e<=this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_soc"]&&this.updateState("openWB/general/chargemode_config/pv_charging/switch_off_soc",Math.max(0,e-5))},updateBatterySwitchOffSoc(e){this.updateState("openWB/general/chargemode_config/pv_charging/switch_off_soc",e),e>=this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_soc"]&&this.updateState("openWB/general/chargemode_config/pv_charging/switch_on_soc",e+5)}},watch:{controlMode(e){this.calculatedControlMode=e}}},z={class:"pvChargeConfig"},V={name:"pvChargeConfigForm"},k={key:0},E={key:1},C=r("br",null,null,-1),L=r("br",null,null,-1),y=r("hr",null,null,-1),M=r("br",null,null,-1),P=r("br",null,null,-1),A=r("hr",null,null,-1),R=r("br",null,null,-1),U=r("br",null,null,-1),q=r("hr",null,null,-1),$=r("br",null,null,-1),D=r("br",null,null,-1),I=r("br",null,null,-1),F=r("br",null,null,-1),N={key:0},O={key:1},Z={key:0},T={key:1},H=r("br",null,null,-1),G=r("br",null,null,-1),K=r("br",null,null,-1),j=r("br",null,null,-1),J=r("br",null,null,-1),Q=r("br",null,null,-1),X=r("hr",null,null,-1);function Y(e,n,h,x,ee,s){const p=g("openwb-base-alert"),m=g("openwb-base-button-group-input"),o=g("openwb-base-number-input"),b=g("openwb-base-card"),c=g("openwb-base-range-input"),_=g("openwb-base-heading"),v=g("openwb-base-submit-buttons");return d(),u("div",z,[r("form",V,[i(b,{title:"Regelparameter"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(d(),u("div",k,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(d(),u("div",E,[i(m,{title:"Regelmodus",buttons:[{buttonValue:"export",text:"Einspeisung"},{buttonValue:"import",text:"Bezug"},{buttonValue:"balanced",text:"Ausgewogen"},{buttonValue:"individual",text:"Individuell"}],modelValue:s.controlMode,"onUpdate:modelValue":n[0]||(n[0]=t=>s.controlMode=t)},{help:l(()=>[a(" Der Regelbereich wird auf den gesamten Überschuss angewendet, bevor die PV-Regelung durchgeführt wird. D.h. der Regelbereich wird auf alle Einstellungen für das PV-Laden angewendet und nur einmal unabhängig von der Anzahl der angesteckten Fahrzeuge. Liegt der Überschuss im vorgegebenen Regelbereich, wird nicht nachgeregelt. Liegt der Überschuss außerhalb des Regelbereichs, wird in die Mitte des Regelbereichs nachgeregelt."),C,a(' "Einspeisung" definiert einen Bereich mit minimaler Einspeisung (-230W, 0W), "Bezug" mit minimalem Netzbezug (0W, 230W), "Ausgewogen" mit ausgewogenem Netzbezug (-115W, 115W). Mit der Auswahl "individuell" kann ein eigener Regelbereich definiert werden.'),L,a(" Bei Speichervorrang erzeugt die Regelung bei Bedarf unabhängig vom eingestellten Regelmodus Einspeisung, damit der Speicher seine Ladeleistung erhöht. ")]),_:1},8,["modelValue"]),i(o,{disabled:s.controlMode!=="individual",readonly:s.controlMode!=="individual",title:"Minimum",step:.005,unit:"kW","model-value":Array.isArray(e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][0]/1e3:void 0,"onUpdate:modelValue":n[1]||(n[1]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"0"))},{help:l(()=>[a(" Untere Grenze des Regelbereichs. ")]),_:1},8,["disabled","readonly","model-value"]),i(o,{disabled:s.controlMode!=="individual",readonly:s.controlMode!=="individual",title:"Maximum",step:.005,unit:"kW","model-value":Array.isArray(e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][1]/1e3:void 0,"onUpdate:modelValue":n[2]||(n[2]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"1"))},{help:l(()=>[a("Obere Grenze des Regelbereichs.")]),_:1},8,["disabled","readonly","model-value"]),y,i(o,{title:"Einschaltschwelle",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]/1e3,"onUpdate:modelValue":n[3]||(n[3]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_on_threshold",t*1e3))},{help:l(()=>[a(" Wird der Regelbereich in Richtung Einspeisung um diese Leistung überschritten, so wird der Ladevorgang gestartet."),M,a(" Dieser Wert wird pro Phase genutzt und ist daher immer für eine Phase anzugeben. ")]),_:1},8,["model-value"]),i(o,{title:"Einschaltverzögerung",min:0,step:1,unit:"s","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_delay"],"onUpdate:modelValue":n[4]||(n[4]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_on_delay",t))},{help:l(()=>[a(" Die Einschaltschwelle muss für die hier angegebene Zeit dauerhaft überschritten werden, bevor ein Ladevorgang gestartet wird."),P,a(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird weiter geladen, wenn die Abschaltschwelle nicht unterschritten wird. ")]),_:1},8,["model-value"]),A,i(o,{title:"Abschaltschwelle",step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"]/1e3,"onUpdate:modelValue":n[5]||(n[5]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_off_threshold",t*1e3))},{help:l(()=>[a(" Wird der Regelbereich in Richtung Netzbezug um diese Leistung überschritten, so wird der Ladevorgang beendet."),R,a(" Dieser Wert ist unabhängig von der Anzahl genutzter Phasen. ")]),_:1},8,["model-value"]),i(o,{title:"Abschaltverzögerung",min:0,step:1,unit:"s","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_delay"],"onUpdate:modelValue":n[6]||(n[6]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_off_delay",t))},{help:l(()=>[a(" Die Abschaltschwelle muss für die hier angegebene Zeit dauerhaft unterschritten werden, bevor ein Ladevorgang beendet wird."),U,a(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird die Ladung sofort beendet, wenn die Abschaltschwelle unterschritten wird. ")]),_:1},8,["model-value"]),q,i(o,{title:"Regelpunkt Einspeisegrenze",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/feed_in_yield"]/1e3,"onUpdate:modelValue":n[7]||(n[7]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/feed_in_yield",t*1e3))},{help:l(()=>[a(" Ein Wert größer 0kW bewirkt, dass weniger PV-Leistung zum Laden benutzt wird."),$,a(" Die Nutzung dieser Option ergibt nur Sinn, wenn ein Wechselrichter mit separatem Smart-Meter am EVU-Punkt verbaut ist (nicht der originale Zähler des Versorgers!), welches eine dynamische Begrenzung der Einspeiseleistung am EVU-Punkt durch den PV-Wechselrichter bietet (bitte bei ev. Problemen immer vorab prüfen lassen)."),D,a(' Ist eine Einspeiseleistungsreduzierung verbaut (in vielen älteren, privaten Einspeiseverträgen z.B. als 70% Regelung bekannt), wird mit Eingabe des Wertes "Regelpunkt Einspeisegrenze" ein eigenverbrauchsoptimiertes Fahrzeugladen mit PV-Überschussenergie möglich, die sonst abgeregelt werden würde (Nutzung der PV-Peaks).'),I,a(' Wird in einem "Ladeprofil" die Option "Einspeisegrenze beachten" eingeschaltet, so wird der Regelpunkt auf diesen Wert verschoben und die Ladung startet erst, wenn der hinterlegte Wert "Regelpunkt Einspeisegrenze" überschritten wird.'),F,a(" Zur optimalen Eigenverbrauchssteuerung sollte der Wert einige hundert Watt UNTER der im Wechselrichter hinterlegten EVU-Einspeiseleistungsgrenze liegen, damit openWB die Ladung freigibt, BEVOR der Wechselrichter begrenzt wird. ")]),_:1},8,["model-value"])]))]),_:1}),i(b,{title:"Phasenumschaltung"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(d(),u("div",N,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(d(),u("div",O,[i(m,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"],"onUpdate:modelValue":n[8]||(n[8]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/phases_to_use",t))},{help:l(()=>[a(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "PV-Laden" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um den verfügbaren Überschuss in die Fahrzeuge zu laden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen einer und drei Phasen (s.g. 1p3p). ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"]==0?(d(),W(c,{key:0,title:"Verzögerung automat. Phasenumschaltung",min:1,max:15,step:1,unit:"Min.","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phase_switch_delay"],"onUpdate:modelValue":n[9]||(n[9]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/phase_switch_delay",t))},{help:l(()=>[a(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung gewechselt. ")]),_:1},8,["model-value"])):B("",!0)]))]),_:1}),i(b,{title:"Speicher-Beachtung"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(d(),u("div",Z,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(d(),u("div",T,[i(m,{title:"Priorisierung",buttons:[{buttonValue:!1,text:"Fahrzeuge"},{buttonValue:!0,text:"Speicher"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_prio"],"onUpdate:modelValue":n[10]||(n[10]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/bat_prio",t))},{help:l(()=>[a(' Sofern ein Hausstromspeicher (im Folgenden "Speicher" genannt) im Energiesystem verbaut ist, kann dieser beim Fahrzeugladen mit berücksichtigt werden. Dies erfolgt passiv über die Berücksichtigung der Speicherleistungswerte und des Speicher-SoC. Eine aktive Speichersteuerung durch openWB ist aktuell mangels Speicherschnittstelle nicht möglich.'),H,G,a(' Bei Priorisierung "Fahrzeuge" wird die gesamte PV-Leistung ABZÜGLICH der "reservierten Ladeleistung" des Speichers zum Fahrzeugladen verwendet.'),K,j,a(' Bei Priorisierung "Speicher" wird die gesamte PV-Leistung und ZUSÄTZLICH die "erlaubte Entladeleistung" des Speichers (bis zum Erreichen des "minimalen Entlade-SoC" des Speichers) zum Fahrzeugladen verwendet.'),J,Q,a(" Beide Modi lassen sich mit den zusätzlichen Einstellungen an die eigenen Bedürfnisse anpassen, so dass auch ein Mischbetrieb möglich ist. ")]),_:1},8,["model-value"]),i(o,{title:"Reservierte Ladeleistung",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/charging_power_reserve"]/1e3,"onUpdate:modelValue":n[11]||(n[11]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/charging_power_reserve",t*1e3))},{help:l(()=>[a(' Die "reservierte Ladeleistung" des Speichers wird von der Regelung auch bei "Fahrzeuge"-Vorrang NICHT für das Fahrzeugladen verwendet und bleibt immer dem Speicher vorbehalten, sofern dieser nicht zu 100% geladen ist. ')]),_:1},8,["model-value"]),i(o,{title:"Erlaubte Entladeleistung",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/rundown_power"]/1e3,"onUpdate:modelValue":n[12]||(n[12]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/rundown_power",t*1e3))},{help:l(()=>[a(' Die "erlaubte Entladeleistung" des Speichers wird von der Regelung bei "Speicher"-Vorrang ZUSÄTZLICH zur PV-Leistung für das Fahrzeugladen verwendet, solange der Speicher-SoC über dem "minimalen Entlade-SoC" liegt. ')]),_:1},8,["model-value"]),i(c,{title:"Minimaler Entlade-SoC",min:0,max:20,step:1,unit:"%",labels:[{label:0,value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95},{label:"Aus",value:100}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/rundown_soc"],"onUpdate:modelValue":n[13]||(n[13]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/rundown_soc",t))},{help:l(()=>[a(" Ein vorhandener Speicher wird im Modus PV-Laden mit der erlaubten Entladeleistung höchstens bis zu dem hier eingestellten Ladestand entladen. ")]),_:1},8,["model-value"]),X,i(_,null,{default:l(()=>[a(" Laden mit minimalem Dauerstrom ")]),_:1}),i(c,{title:"Einschalt-SoC",min:0,max:18,step:1,unit:"%",labels:[{label:"Aus",value:0},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_soc"],"onUpdate:modelValue":n[14]||(n[14]=t=>s.updateBatterySwitchOnSoc(t))},{help:l(()=>[a('Ist der Speicher-SoC größer oder gleich dem "Einschalt-SoC", wird der Speicher im Modus "PV-Laden" bei aktiviertem Mindeststrom bis zum "Ausschalt-SoC" entladen, auch wenn KEIN Überschuss vorhanden ist. Der "Einschalt-SoC" muss größer oder gleich dem "Ausschalt-SoC" sein.')]),_:1},8,["model-value"]),i(c,{title:"Ausschalt-SoC",min:0,max:18,step:1,unit:"%",labels:[{label:"Aus",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_soc"],"onUpdate:modelValue":n[15]||(n[15]=t=>s.updateBatterySwitchOffSoc(t))},{help:l(()=>[a('Ist der Speicher-SoC größer oder gleich dem "Einschalt-SoC", wird der Speicher im Modus "PV-Laden" bei aktiviertem Mindeststrom bis zum "Ausschalt-SoC" entladen, auch wenn KEIN Überschuss vorhanden ist. Der "Einschalt-SoC" muss größer oder gleich dem "Ausschalt-SoC" sein.')]),_:1},8,["model-value"])]))]),_:1}),i(v,{formName:"pvChargeConfigForm",onSave:n[16]||(n[16]=t=>e.$emit("save")),onReset:n[17]||(n[17]=t=>e.$emit("reset")),onDefaults:n[18]||(n[18]=t=>e.$emit("defaults"))})])])}const se=w(S,[["render",Y],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/PVChargeConfig.vue"]]);export{se as default};