(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(38)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),i=(t(27),t(5)),m=t(6),o=t(8),s=t(7),u=t(9),d=(t(28),t(10)),p=(t(29),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"emblem"},l.a.createElement("span",{className:"icon-information"})),l.a.createElement("div",{id:"frame",className:"frame"},l.a.createElement("div",{id:"screen",className:"piece output"},l.a.createElement("h1",null,"Welcome"),l.a.createElement("p",null,"Welcome to Zorloff's Colosseum Grand. You have been chosen to compete to forgive your debt. You win and you shall walk away with your freedom. Lose and you shall gain your freedom from this life. At this terminal you will receive your equipment for battle. Today you will be facing those who have displeased Zorloff. You will dawn red gear to denote the delinquents, while your opponents will be clad in green. Goodluck to you and the other ill prepared contestants; you will all need it."),l.a.createElement("a",{href:"/equipment",className:"btn"},"Equipment")),l.a.createElement("div",{className:"piece scanlines noclick"}),l.a.createElement("div",{className:"piece glow noclick"})))}}]),a}(n.Component)),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null))}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={credits:14,bag:[],inventory:{lightArmor:[{name:"Padded Jumpsuit",price:1,type:"light"},{name:"Kevlar Jacket",price:2,type:"light"}],mediumArmor:[{name:"Kevlar Bodysuit",price:2,type:"medium"},{name:"Standard Ballistic Vest",price:4,type:"medium"}],heavyArmor:[{name:"TCE Body Armor ",price:3,type:"heavy"},{name:"ZA Korp Armor",price:5,type:"heavy"}],meleeWeapons:[{name:"Baton",price:0},{name:"Hammer",price:0},{name:"Knife",price:0},{name:"Retractable Baton",price:0}],rangedWeapons:[{name:"21st Century Pistol",price:5},{name:"KHMA Heavy Pistol",price:8},{name:"Black Market SMG",price:5},{name:"Kasai Corporation SMG",price:6},{name:"Street Shotgun",price:8},{name:"Sniper Rifle",price:10},{name:"Standard Assault Rifle",price:13},{name:"Rapid Fire Shotgun",price:14}]}},t.updateBag=function(e){var a=t.state,n=a.credits,l=a.bag,r=e.target.dataset,c=r.name,i=r.price;if(n-i>=0)l.push({name:c,price:i}),t.setState({bag:l,credits:n-e.target.dataset.price});else{var m=document.getElementById("credits");m.classList.remove("blinkMe"),m.classList.add("blinkMe"),setTimeout(function(){m.classList.remove("blinkMe")},3e3)}},t.removeItem=function(e){var a=t.state,n=a.bag,l=a.credits,r=e.target.dataset.index;t.setState({credits:parseInt(l)+parseInt(n[r].price)}),n.splice(r,1),t.setState({bag:n})},t.gearUp=function(){new Audio("industrial_robot.mp3").play();var e=document.getElementById("screen");e.classList.remove("output"),e.classList.add("_off")},t.displayInventory=function(e,a){return l.a.createElement("button",{className:"btn",onClick:t.updateBag,"data-price":e.price,"data-name":e.name},e.name," ",e.price,"c")},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.credits,n=a.bag,r=a.inventory;return l.a.createElement("div",null,l.a.createElement("div",{className:"emblem"},l.a.createElement("span",{className:"icon-information"})),l.a.createElement("div",{id:"frame",className:"frame"},l.a.createElement("div",{id:"screen",className:"piece output"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("h1",null,"Loadout")),l.a.createElement("div",{className:"col-3"},l.a.createElement("h2",{id:"credits"},"Credits: ",t))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h2",null,"Armor"),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Light"),l.a.createElement("div",{className:"col-12"},r.lightArmor.map(this.displayInventory)),l.a.createElement("div",null,l.a.createElement("h3",null,"Medium"),l.a.createElement("div",{className:"col-12"},r.mediumArmor.map(this.displayInventory)),l.a.createElement("div",null,l.a.createElement("h3",null,"Heavy"),l.a.createElement("div",{className:"col-12"},r.heavyArmor.map(this.displayInventory)))))),l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid"}," ",l.a.createElement("br",null),l.a.createElement("h2",null,"Weapons"),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",null,l.a.createElement("h3",null,"Melee"),l.a.createElement("div",{className:"col-12"},r.meleeWeapons.map(this.displayInventory))),l.a.createElement("div",null,l.a.createElement("h3",null,"Weapons"),l.a.createElement("div",{className:"col-12"},r.rangedWeapons.map(this.displayInventory))))))),l.a.createElement("div",{className:"col col-12 col-md-5"},l.a.createElement("h2",null,"Cart"),n.map(function(a,t){return l.a.createElement("div",{key:t,className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,a.name," price: ",a.price)),l.a.createElement("div",{className:"col-2"},l.a.createElement("button",{onClick:e.removeItem,"data-index":t,className:"btn"},"remove")))}),n.length>0&&l.a.createElement("div",{className:"col-3 offset-9"},l.a.createElement("button",{onClick:this.gearUp,className:"btn btn-lg"},"Gear Up")))),l.a.createElement("div",{className:"piece scanlines noclick"}),l.a.createElement("div",{className:"piece glow noclick"}))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null))}}]),a}(n.Component),f=function(e){return l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return l.a.createElement("div",null,l.a.createElement(v,e))}}),l.a.createElement(d.a,{path:"/equipment",render:function(e){return l.a.createElement("div",null,l.a.createElement(h,e))}}))},y=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement(f,null))}}]),a}(n.Component),b=t(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b.a,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.53b5265f.chunk.js.map