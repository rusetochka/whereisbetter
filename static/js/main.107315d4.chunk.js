(this.webpackJsonpwhereisbetter=this.webpackJsonpwhereisbetter||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),s=n(8),i=n.n(s),r=(n(13),n(3)),c=n(4),l=n(1),h=n(6),u=n(5),p=(n(14),n(15),n(16),n(17),n(0)),d=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).prevSlide=o.prevSlide.bind(Object(l.a)(o)),o.nextSlide=o.nextSlide.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"prevSlide",value:function(){this.props.slide(-1)}},{key:"nextSlide",value:function(){this.props.slide(1)}},{key:"renderCarousel",value:function(){if(this.props.photo)return Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{className:"prev",href:"/#",onClick:this.prevSlide,children:"\u276e"},"prev"),Object(p.jsx)("a",{className:"next",href:"/#",onClick:this.nextSlide,children:"\u276f"},"next")]})}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"mySlides fade",children:[Object(p.jsx)("img",{className:"landmarkPhoto",src:this.props.photo.url,alt:"null"}),Object(p.jsx)("div",{className:"text",children:this.props.photo.countryPhoto}),this.renderCarousel()]})})}}]),n}(a.a.Component),f=1,m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).showSlides=o.showSlides.bind(Object(l.a)(o)),o.plusSlides=o.plusSlides.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.photos[0]&&this.showSlides()}},{key:"componentDidUpdate",value:function(){this.props.photos[0]&&this.showSlides()}},{key:"plusSlides",value:function(e){this.showSlides(f+=e)}},{key:"showSlides",value:function(e){var t,n=document.getElementsByClassName("mySlides"),o=document.getElementsByClassName("dot");for(e>n.length&&(f=1),e<1&&(f=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<o.length;t++)o[t].className=o[t].className.replace(" active","");n[f-1].style.display="block",o[f-1].className+=" active"}},{key:"render",value:function(){var e=this;return void 0!==this.props.photos?Object(p.jsxs)("div",{className:"Landmarks-gallery",children:[this.props.photos.map((function(t){return Object(p.jsx)(d,{photo:t,slide:e.plusSlides},t.id)})),Object(p.jsxs)("div",{className:"dotsContainer",children:[Object(p.jsx)("span",{className:"dot"},"1"),Object(p.jsx)("span",{className:"dot"},"2"),Object(p.jsx)("span",{className:"dot"},"3")]})]}):Object(p.jsx)("h3",{children:"Top 3 Landmarks"})}}]),n}(a.a.Component),g=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).handleHomeButton=o.handleHomeButton.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"handleHomeButton",value:function(){this.props.backToHome()}},{key:"render",value:function(){for(var e=this.props.language,t=Object.values(e),n=[],o=0;o<t.length;o++)n.includes(" "+t[o])||n.push(" "+t[o]);var a=n.toString(),s=0,i="";this.props.country.population>999999?(s+=Math.round(this.props.country.population/1e6),i+="mln"):this.props.country.population<999999&&this.props.country.population>1e3?(s=Math.round(this.props.country.population/1e3),i+="k"):s=this.props.country.population;var r="",c="";if(this.props.country.square)if(this.props.country.square>999999)r+=Math.round(this.props.country.square/1e6),c+="mln \u33a2";else if(this.props.country.square<999999&&this.props.country.square>1e3){var l=Math.round(this.props.country.square).toString();switch(l.length){case 6:r+=l.slice(0,3)+" "+l.slice(3,6);break;case 5:r+=l.slice(0,2)+" "+l.slice(2,5);break;case 4:r+=l.slice(0,1)+" "+l.slice(1,3);break;default:r+=l}c+=" \u33a2"}else r+=Math.round(this.props.country.square),c+=" \u33a2";var h=Math.round(this.props.temp),u="";if(this.props.weatherIcon)if(!0===this.props.isDay)u="http://openweathermap.org/img/wn/".concat(this.props.weatherIcon,"@2x.png");else{var d=this.props.weatherIcon.slice(0,2)+"n";u="http://openweathermap.org/img/wn/".concat(d,"@2x.png")}return Object(p.jsxs)("div",{className:"Country",id:"country",children:[Object(p.jsx)("a",{href:"/#",className:"Home-Button",onClick:this.handleHomeButton,children:"Try again"}),Object(p.jsxs)("div",{className:"Country-Heading",children:[Object(p.jsx)("div",{className:"Flag",children:this.props.flag&&Object(p.jsx)("img",{src:this.props.flag,alt:"country flag"})}),Object(p.jsx)("h2",{children:this.props.country.name},"country-name")]}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"continent",children:this.props.country.continent})}),Object(p.jsxs)("div",{className:"Top-Info",children:[this.props.country.capital&&Object(p.jsxs)("p",{className:"Capital",children:["Now in ",Object(p.jsxs)("span",{className:"Capital-Text",children:[this.props.country.capital,":"]})," ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{id:"time"})]}),this.props.temp&&Object(p.jsxs)("p",{className:"Weather",children:[h," \xbaC"]}),""!==u&&Object(p.jsx)("img",{className:"Weather-Icon",src:u,alt:"weather icon"}),Object(p.jsx)("p",{className:"Weather-Description",children:this.props.weather})]}),this.props.photos&&Object(p.jsx)(m,{photos:this.props.photos}),Object(p.jsxs)("div",{className:"Bottom-Info",children:[this.props.country.population&&Object(p.jsxs)("p",{className:"Population statistic",children:["Population:",Object(p.jsx)("br",{})," ",Object(p.jsxs)("span",{className:"stat-span",children:[s,i]})]}),this.props.country.square&&Object(p.jsxs)("p",{className:"Square statistic",children:["Total Area: ",Object(p.jsx)("br",{})," ",Object(p.jsxs)("span",{className:"stat-span",children:[r,c]})]}),this.props.language&&Object(p.jsxs)("p",{className:"Language statistic",children:["Language(s): ",Object(p.jsx)("br",{})," ",Object(p.jsx)("span",{className:"stat-span",children:a})]})]})]})}}]),n}(a.a.Component),j={getListOfCountries:function(){return fetch("http://api.geonames.org/countryInfo?type=json&username=".concat("rusetochka")).then((function(e){return e.json()}))},getLangName:function(){return fetch("https://en.wikipedia.org/w/api.php?action=parse&page=List_of_ISO_639-1_codes&prop=wikitext&section=1&format=json&origin=*").then((function(e){return e.json()}))},getFlagFile:function(e){return fetch("https://en.wikipedia.org/w/api.php?action=query&titles=Gallery_of_sovereign_state_flags&prop=images&imlimit=500&format=json&origin=*").then((function(e){return e.json()})).then((function(t){if(t.query.pages[361082].images){console.log("Searching the gallery of sovereign state flags...");var n=t.query.pages[361082].images.find((function(t){return t.title.includes(e)}));return n?j.getFlagUrl(n.title):fetch("https://en.wikipedia.org/w/api.php?action=query&titles=Gallery_of_flags_of_dependent_territories&prop=images&imlimit=500&format=json&origin=*").then((function(e){return e.json()})).then((function(t){if(t.query.pages[2485800].images){console.log("Searching list of dependent territories...");var n=t.query.pages[2485800].images.find((function(t){return t.title.includes(e)}));return n?j.getFlagUrl(n.title):(console.log("A flag wasn't find"),"https://upload.wikimedia.org/wikipedia/commons/b/bd/Gray_flag_waving.png")}}))}}))},getFlagUrl:function(e){return fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&titles=".concat(e,"&iiprop=url&origin=*")).then((function(e){return e.json()})).then((function(e){if(e.query.pages[Object.keys(e.query.pages)[0]].imageinfo)return e.query.pages[Object.keys(e.query.pages)[0]].imageinfo[0].url}))},getWeatherInfo:function(e){return fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat("f06d76a331ee877094b6644de5b0638c")).then((function(e){return e.json()})).then((function(e){return e.weather?{temperature:e.main.temp,description:e.weather[0].main,icon:e.weather[0].icon,timezone:e.timezone,sunrise:e.sys.sunrise,sunset:e.sys.sunset,lon:e.coord.lon,lat:e.coord.lat}:void console.log("The city not found.")}))},getPhotosFromFlickr:function(e){return fetch("https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=".concat("8330ac9784218276b98195a5e4c25189","&gallery_id=").concat(e,"&format=json&nojsoncallback=1"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){if(e.photos.photo)return e.photos.photo.map((function(e){return{fPhotoId:e.id,fPhotoSecret:e.secret,fPhotoServer:e.server,fPhotoComment:e.comment._content}}))}))}},b=(n(19),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).handleSearch=o.handleSearch.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleSearch",value:function(){this.props.searchGeo()}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"Container",id:"mainScreen",children:Object(p.jsx)("button",{className:"Start-Button",onClick:this.handleSearch,children:"Where is better?"})})}}]),n}(a.a.Component)),y=(n(20),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Container",id:"loadingScreen",children:[Object(p.jsx)("p",{children:"Searching for the best place on Earth..."}),Object(p.jsx)("div",{className:"loader"})]})}}]),n}(a.a.Component)),v=[8,65,231,105,215],O=j.getListOfCountries(),x=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={country:[],language:"",flag:"",landmarks:[]},o.langName=o.langName.bind(Object(l.a)(o)),o.searchGeo=o.searchGeo.bind(Object(l.a)(o)),o.backToHome=o.backToHome.bind(Object(l.a)(o)),o.flagImage=o.flagImage.bind(Object(l.a)(o)),o.weatherInfo=o.weatherInfo.bind(Object(l.a)(o)),o.localTime=o.localTime.bind(Object(l.a)(o)),o.formatTime=o.formatTime.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"formatTime",value:function(e){var t=e.slice(0,5);document.getElementById("time").innerHTML=t}},{key:"searchGeo",value:function(){var e=this;document.getElementById("mainScreen").style.display="none",document.getElementById("loadingScreen").style.display="block";var t=Math.floor(250*Math.random());v.includes(t)&&(console.log("The country does not have a capital. Relaunching..."),t=Math.floor(250*Math.random())),console.log("Searching for country with index "+t+"..."),O.then((function(n){if(n.geonames){console.log("List of countries has been recieved.");var o,a=n.geonames[t];return console.log("Country: "+a.countryName+"("+a.countryCode+")"),console.log("Capital: "+a.capital),console.log("Languages: "+a.languages),e.langName(a.languages),e.flagImage(a.countryName),o="Palestine"===a.countryName?"Jerusalem":a.capital,e.weatherInfo(o),{name:a.countryName,code:a.countryCode,population:a.population,square:a.areaInSqKm,language:a.languages,capital:o,continent:a.continentName}}})).then((function(t){e.setState({country:t})})),j.getPhotosFromFlickr("72157718532451323").then((function(t){for(var n=[],o=0;o<t.length;o++)t[o].fPhotoComment===e.state.country.name&&(console.log("Photos have been recieved."),document.getElementById("loadingScreen").style.display="none",n.push({id:t[o].fPhotoId,title:t[o].fPhotoComment,url:"https://live.staticflickr.com/"+t[o].fPhotoServer+"/"+t[o].fPhotoId+"_"+t[o].fPhotoSecret+"_w.jpg"}));return n})).then((function(t){t.length>0?e.setState({photos:t}):j.getPhotosFromFlickr("72157718591676711").then((function(t){for(var n=[],o=0;o<t.length;o++)t[o].fPhotoComment===e.state.country.name&&(console.log("Photos have been recieved."),document.getElementById("loadingScreen").style.display="none",n.push({id:t[o].fPhotoId,title:t[o].fPhotoComment,url:"https://live.staticflickr.com/"+t[o].fPhotoServer+"/"+t[o].fPhotoId+"_"+t[o].fPhotoSecret+"_w.jpg"}));return document.getElementById("loadingScreen").style.display="none",n})).then((function(t){t.length>0?e.setState({photos:t}):console.log("Photos didn't find")}))}))}},{key:"langName",value:function(e){var t=this,n=[];if("string"===typeof e)for(var o=e.split(","),a=0;a<o.length;a++)n.push(o[a].slice(0,2));else n.push(e);for(var s=[],i=function(o){var a=n[o].toUpperCase();j.getLangName(e).then((function(e){if(e.parse.wikitext["*"]){console.log("Parsing Wikipedia's list of languages");var t="#"+a,n=e.parse.wikitext["*"].indexOf(t);if(-1===n)return void console.log("One of the languages was not found");var o=e.parse.wikitext["*"].lastIndexOf("title",n)+7,i=e.parse.wikitext["*"].indexOf('"',o),r=e.parse.wikitext["*"].slice(o,i);s.push(r)}})).then((function(){console.log("Language has been found."),t.setState({language:s})}))},r=0;r<n.length;r++)i(r);return s}},{key:"flagImage",value:function(e){var t=this;j.getFlagFile(e).then((function(e){console.log("Image of flag has been found."),t.setState({flag:e})}))}},{key:"backToHome",value:function(){this.searchGeo()}},{key:"weatherInfo",value:function(e){var t=this;j.getWeatherInfo(e).then((function(e){console.log("Weather Info has been recieved."),t.setState({weather:e.description,temp:e.temperature,timezone:e.timezone,icon:e.icon,sunrise:e.sunrise,sunset:e.sunset,lon:e.lon,lat:e.lat})})).then((function(e){t.localTime(t.state.timezone),t.formatTime(t.state.localTime)}),(function(e){return console.log("The city was not found in the Weather database")}))}},{key:"localTime",value:function(e){var t=Date.now(),n=t+6e4*new Date(t).getTimezoneOffset()+1e3*e;n>=1e3*this.state.sunrise&&n<1e3*this.state.sunset?this.setState({isDay:!0}):this.setState({isDay:!1});var o=new Date(n).toTimeString();this.setState({localTime:o})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(b,{searchGeo:this.searchGeo}),Object(p.jsx)(y,{}),Object(p.jsx)(g,{country:this.state.country,time:this.state.localTime,language:this.state.language,backToHome:this.backToHome,flag:this.state.flag,weather:this.state.weather,temp:this.state.temp,weatherIcon:this.state.icon,isDay:this.state.isDay,photos:this.state.photos})]})}}]),n}(a.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.107315d4.chunk.js.map