(this["webpackJsonpswapi-trivia"]=this["webpackJsonpswapi-trivia"]||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(20),s=a.n(c),i=(a(29),a(14)),o=a(6),l=a(7),u=a(9),m=a(8),p=a(10),h=(a(30),a(21)),d=(a(31),a(3)),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this))).updateFormState=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value),(function(){a.errorHandling()}))},a.errorHandling=function(){""!==a.state.name&&""!==a.state.quote&&""!==a.state.status?(a.setState((function(){return{isValid:!0}})),a.props.updateUserState(a.state)):a.setState((function(){return{isValid:!1}}))},a.state={name:"",quote:"",status:"",isValid:!1},a.props=e,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("main",{className:"form"},n.a.createElement("p",{className:"form-p",style:{visibility:this.state.isValid?"hidden":"visible"}},"Please enter values for each input!"),n.a.createElement("input",{className:"input-fill",type:"text",placeholder:"Name",name:"name",value:this.state.name,onChange:function(t){return e.updateFormState(t)}}),n.a.createElement("input",{className:"input-fill",type:"text",placeholder:"Favorite Quote",name:"quote",value:this.state.quote,onChange:function(t){return e.updateFormState(t)}}),n.a.createElement("div",{className:"input-container"},n.a.createElement("label",{className:"input-radio"},n.a.createElement("input",{type:"radio",name:"status",value:"PADAWAN",onChange:function(t){return e.updateFormState(t)}})," PADAWAN",n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"input-radio"},n.a.createElement("input",{type:"radio",name:"status",value:"JEDI",onChange:function(t){return e.updateFormState(t)}})," JEDI",n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"input-radio"},n.a.createElement("input",{type:"radio",name:"status",value:"YODA",onChange:function(t){return e.updateFormState(t)}})," YODA",n.a.createElement("span",{className:"checkmark"}))),n.a.createElement(d.b,{to:this.state.isValid?"/movies":"/"},n.a.createElement("button",{onClick:function(){return e.props.updateUserState(e.state)}},"Submit")))}}]),t}(r.Component),v=(a(37),function(){return fetch("https://swapi.co/api/films/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){var t=e.release_date.split("-")[0],a=e.characters.slice(0,10);return{title:e.title,episode_id:e.episode_id,release_date:t,characters:a,opening_crawl:e.opening_crawl}}))}))}),E=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.name,a=e.homeworld,r=e.species,n=e.films;return C(a,r,n).then((function(e){return{name:t,res:e}}))}))},C=function(e,t,a){var r=S(e),n=N(t),c=b(a);return Promise.all([r,n,c])},S=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return{home:e.name,population:e.population}}))},N=function(e){return fetch.apply(void 0,Object(i.a)(e)).then((function(e){return e.json()})).then((function(e){return e.name}))},b=function(e){var t=e.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.title}))}));return Promise.all(t)},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){var e=[];a.props.characters.forEach((function(t){E(t).then((function(e){return{name:e.name,homeworld:e.res[0].home,population:e.res[0].population,species:e.res[1],films:e.res[2][0],url:t}})).then((function(t){e.push(t),10===e.length&&(a.setState({characters:e}),a.setState({waitingForLoad:!1}))})).catch((function(e){return console.error("error")}))}))},a.state={characters:[],waitingForLoad:!0},a.props=e,a.movieData={episode_id:a.props.episode_id,title:a.props.title,opening_crawl:a.props.opening_crawl},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",null,n.a.createElement("div",{className:"movie-card"},n.a.createElement("h3",null,this.props.title),n.a.createElement("h4",null,n.a.createElement("span",{className:"bold-text"},"EPISODE")," ",this.props.episode_id),n.a.createElement("h4",null,n.a.createElement("span",{className:"bold-text"},"RELEASE")," ",this.props.release_date)),n.a.createElement("div",{className:"view-charac"},this.state.waitingForLoad?n.a.createElement("img",{src:"https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif",alt:"loading..."}):n.a.createElement(d.b,{className:"link",to:"movies/".concat(this.props.episode_id)},n.a.createElement("h5",{onClick:function(){return e.props.updateCurrentCharacters(e.state.characters,e.movieData)}},"VIEW CHARACTERS"))))}}]),t}(r.Component),g=(a(38),function(e){var t,a=e.movies.map((function(t){return n.a.createElement(O,{title:t.title,episode_id:t.episode_id,release_date:t.release_date,id:t.episode_id,key:t.episode_id,characters:t.characters,updateCurrentCharacters:e.updateCurrentCharacters,opening_crawl:t.opening_crawl})}));return t=7===e.movies.length?a:n.a.createElement("img",{src:"https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif",alt:"loading..."}),n.a.createElement("main",{className:"movies-container"},t)}),F=(a(39),function(e){var t=e.name,a=e.quote,r=e.status;return n.a.createElement("section",{className:"profile"},n.a.createElement("p",{className:"profile-p"},n.a.createElement("span",{className:"bold-text"},"NAME "),t),n.a.createElement("p",{className:"profile-p"},n.a.createElement("span",{className:"bold-text"},"QUOTE "),a),n.a.createElement("p",{className:"profile-p"},n.a.createElement("span",{className:"bold-text"},"STATUS "),r))}),k=(a(40),a(11)),w=function(e){return n.a.createElement("nav",{className:"menu"},n.a.createElement(k.a,{path:"/movies",render:function(){return n.a.createElement("h1",{className:"small-heading"},n.a.createElement("span",{className:"yellow-text"},"SW"),"API")}}),n.a.createElement(k.a,{path:"/favorites",render:function(){return n.a.createElement("h1",{className:"small-heading"},n.a.createElement("span",{className:"yellow-text"},"SW"),"API")}}),n.a.createElement("div",{className:"favandlog"},n.a.createElement(k.a,{path:"/movies",render:function(){return n.a.createElement(d.b,{className:"link",to:"/favorites"},n.a.createElement("p",null,"FAVORITES ".concat(e.favoriteCharacters.length)))}}),n.a.createElement(k.a,{path:"/favorites",render:function(){return n.a.createElement(d.b,{className:"link",to:"/favorites"},n.a.createElement("p",null,"FAVORITES ".concat(e.favoriteCharacters.length)))}}),n.a.createElement(k.a,{path:"/movies",render:function(){return n.a.createElement(d.b,{className:"link",to:"/"},n.a.createElement("p",{onClick:function(){return e.removeUserState()}},"LOGOUT"))}}),n.a.createElement(k.a,{path:"/favorites",render:function(){return n.a.createElement(d.b,{className:"link",to:"/"},n.a.createElement("p",{onClick:function(){return e.removeUserState()}},"LOGOUT"))}})))},j=(a(41),function(e){var t=["I","II","III","IV","V","VI","VII"][parseInt(e.movieData.episode_id)-1];return n.a.createElement("article",null,n.a.createElement("section",{className:"scrolling-text"},n.a.createElement("div",{className:"crawl"},n.a.createElement("div",{className:"title"},n.a.createElement("p",null,"Episode ",t),n.a.createElement("h4",{className:"movie-title"},e.movieData.title)),n.a.createElement("p",null,e.movieData.opening_crawl))))}),I=(a(42),a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this))).props=e,a.state={isFavorited:a.props.checkFavoriteStatus(a.props)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"charac-card"},n.a.createElement("div",{className:this.state.isFavorited?"favorite":"unfavorite",onClick:function(){e.props.updateFavoriteCharacters(e.props),e.state.isFavorited?e.setState({isFavorited:!1}):e.setState({isFavorited:!0})}}),n.a.createElement("h3",null,this.props.name),n.a.createElement("h4",null,n.a.createElement("span",{className:"bold-text"},"SPECIES "),this.props.species),n.a.createElement("h4",null,n.a.createElement("span",{className:"bold-text"},"HOMEWORLD "),this.props.homeworld),n.a.createElement("h4",null,n.a.createElement("span",{className:"bold-text"},"POPULATION "),this.props.population),n.a.createElement("h4",null,n.a.createElement("span",{className:"bold-text"},"OTHER MOVIES "),this.props.films))}}]),t}(r.Component)),x=function(e){var t=e.characters.map((function(t){var a=t.url.split("/")[5];return n.a.createElement(I,{key:a,id:a,name:t.name,homeworld:t.homeworld,species:t.species,films:t.films,population:t.population,updateFavoriteCharacters:e.updateFavoriteCharacters,url:t.url,isFavorite:e.favorites,checkFavoriteStatus:e.checkFavoriteStatus})}));return n.a.createElement("section",{className:"charac-container"},0===t.length?n.a.createElement("div",{className:"prompt"},n.a.createElement("p",{className:"favorite-que"},"Favorite characters"),n.a.createElement("div",{className:"heart"}),n.a.createElement("p",{className:"favorite-que"},"to see them here!")):null,t)},_=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){v().then((function(e){return e.sort((function(e,t){return parseInt(e.episode_id)-parseInt(t.episode_id)}))})).then((function(t){return e.setState({movies:t})})).catch((function(e){return console.error("error")}))},e.updateUserState=function(t){e.setState({user:t})},e.updateCurrentCharacters=function(t,a){e.setState({currentCharacters:t}),e.setState({currentMovie:a})},e.updateFavoriteCharacters=function(t){var a=!0;if(e.state.favoriteCharacters.forEach((function(r,n){if(r.id===t.id){a=!1;var c=e.state.favoriteCharacters;c.splice(n,1),e.setState({favoriteCharacters:c})}})),!0===a){var r=Object(i.a)(e.state.favoriteCharacters);r.push(t),e.setState({favoriteCharacters:r})}},e.checkFavoriteStatus=function(t){return e.state.favoriteCharacters.find((function(e){return e.id===t.id}))},e.removeUserState=function(){e.setState({user:null})},e.state={user:null,movies:[],currentMovie:{},currentCharacters:[],favoriteCharacters:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"App"},n.a.createElement(k.a,{path:"/movies",render:function(){return n.a.createElement(w,{removeUserState:e.removeUserState,favoriteCharacters:e.state.favoriteCharacters})}}),n.a.createElement(k.a,{exact:!0,path:"/favorites",render:function(){return n.a.createElement(w,{removeUserState:e.removeUserState,favoriteCharacters:e.state.favoriteCharacters})}}),n.a.createElement(k.a,{exact:!0,path:"/",render:function(){return n.a.createElement("h1",null,n.a.createElement("span",{className:"yellow-text"},"SW"),"API")}}),n.a.createElement(k.a,{exact:!0,path:"/",render:function(){return n.a.createElement(f,{updateUserState:e.updateUserState})}}),n.a.createElement(k.a,{path:"/movies",render:function(){return n.a.createElement(F,{name:e.state.user.name,quote:e.state.user.quote,status:e.state.user.status})}}),n.a.createElement(k.a,{path:"/favorites",render:function(){return n.a.createElement(F,{name:e.state.user.name,quote:e.state.user.quote,status:e.state.user.status})}}),n.a.createElement(k.a,{exact:!0,path:"/movies",render:function(){return n.a.createElement("h2",null,"EPISODES")}}),n.a.createElement(k.a,{exact:!0,path:"/movies/:id",render:function(){return n.a.createElement(j,{movieData:e.state.currentMovie})}}),n.a.createElement(k.a,{exact:!0,path:"/movies/:id",render:function(){return n.a.createElement("h2",null,"CHARACTERS")}}),n.a.createElement(k.a,{exact:!0,path:"/movies",render:function(){return n.a.createElement(g,{movies:e.state.movies,user:e.state.user,updateCurrentCharacters:e.updateCurrentCharacters})}}),n.a.createElement(k.a,{exact:!0,path:"/favorites",render:function(){return n.a.createElement("h2",null,"FAVORITES")}}),n.a.createElement(k.a,{exact:!0,path:"/favorites",render:function(){return n.a.createElement(x,{characters:e.state.favoriteCharacters,updateFavoriteCharacters:e.updateFavoriteCharacters,favorites:!0,checkFavoriteStatus:e.checkFavoriteStatus})}}),n.a.createElement(k.a,{exact:!0,path:"/movies/:episode_id",render:function(){return n.a.createElement("div",null,n.a.createElement(x,{characters:e.state.currentCharacters,updateFavoriteCharacters:e.updateFavoriteCharacters,favorites:!1,checkFavoriteStatus:e.checkFavoriteStatus}))}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n.a.createElement(d.a,null,n.a.createElement(_,null));s.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.1133c374.chunk.js.map