(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),l=(n(12),n(13),n(1)),i=n(2),s=n(4),h=n(3),u=function(e){e.robots;throw new Error("WADIDAW")},m=function(e){var t=e.onSearchChange;return a.a.createElement("div",null,a.a.createElement("input",{className:"input-form",onChange:t}))},d=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"solid black 5px",height:"900px"}},e.children)},f=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something's Wrong"):this.props.children}}]),n}(r.Component),v=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={robots:[],searchField:""},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.robots,r=this.state.robots.filter((function(e){return e.name.toLocaleLowerCase().includes(t)}));return 0===n.length?a.a.createElement("div",{className:"text-center"},a.a.createElement("h1",null,"Robofriends"),a.a.createElement(m,{onSearchChange:this.onSearchChange}),a.a.createElement("h1",null,"Loading ...")):a.a.createElement("div",{className:"text-center"},a.a.createElement("h1",null,"Robofriends"),a.a.createElement(m,{onSearchChange:this.onSearchChange}),a.a.createElement(d,null,a.a.createElement(f,null,a.a.createElement(u,{robots:r}))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.843bc741.chunk.js.map