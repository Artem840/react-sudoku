(this["webpackJsonpreact-sudoku"]=this["webpackJsonpreact-sudoku"]||[]).push([[0],{21:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i}));var r=t(8),c=function(){return{type:r.a}},o=function(e,n){return{coords:n,type:r.b,value:e}},i=function(e){return{coords:e,type:r.c}}},22:function(e,n){},29:function(e,n,t){"use strict";var r=t(7),c=t(10);var o=function(e){for(var n=0;n<9;n++)for(var t=0;t<9;t++)if(0===e[n][t])return!1;return!0};var i=function e(n,t){if(!Array.isArray(n)&&!Array.isArray(t))return n===t;if(n.length!==t.length)return!1;for(var r=0,c=n.length;r<c;r++)if(!e(n[r],t[r]))return!1;return!0};var a=function(e){for(var n=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],t=0;t<9;t++)for(var r=0;r<9;r++)n[t][r]=e[t][r];return n};var l=function(){var e=[[0,4,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,3,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,6],[0,5,0,0,0,0,0,0,0]];return d(e),e},u=t(16),s=[1,2,3,4,5,6,7,8,9];var d=function e(n){for(var t=0,r=0,c=0;c<81;c++)if(r=c%9,0===n[t=Math.floor(c/9)][r]){g(s);var i,a=Object(u.a)(s);try{for(a.s();!(i=a.n()).done;){var l=i.value;if(!h({grid:n,row:t,value:l})&&!v({col:r,grid:n,value:l})){var d=b({grid:n,row:t,col:r});if(!j({square:d,value:l})){if(n[t][r]=l,o(n))return!0;if(e(n))return!0}}}}catch(f){a.e(f)}finally{a.f()}break}n[t][r]=0};var f=function(){return Math.floor(Math.random()*Math.floor(9))};var b=function(e){var n=e.col,t=e.grid,r=e.row,c=[];if(r<3)if(n<3)for(var o=0;o<3;o++)c.push([t[o][0],t[o][1],t[o][2]]);else if(n<6)for(var i=0;i<3;i++)c.push([t[i][3],t[i][4],t[i][5]]);else for(var a=0;a<3;a++)c.push([t[a][6],t[a][7],t[a][8]]);else if(r<6)if(n<3)for(var l=3;l<6;l++)c.push([t[l][0],t[l][1],t[l][2]]);else if(n<6)for(var u=3;u<6;u++)c.push([t[u][3],t[u][4],t[u][5]]);else for(var s=3;s<6;s++)c.push([t[s][6],t[s][7],t[s][8]]);else if(n<3)for(var d=6;d<9;d++)c.push([t[d][0],t[d][1],t[d][2]]);else if(n<6)for(var f=6;f<9;f++)c.push([t[f][3],t[f][4],t[f][5]]);else for(var b=6;b<9;b++)c.push([t[b][6],t[b][7],t[b][8]]);return c};var v=function(e){for(var n=e.col,t=e.grid,r=e.value,c=0;c<9;c++)if(r===t[c][n])return!0;return!1};var h=function(e){var n=e.grid,t=e.row,r=e.value;return n[t].includes(r)};var j=function(e){var n=e.square,t=e.value;return[].concat(Object(r.a)(n[0]),Object(r.a)(n[1]),Object(r.a)(n[2])).includes(t)},O={counter:0};var k=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;n>0;){for(var t=f(),r=f();0===e[t][r];)t=f(),r=f();var c=e[t][r];e[t][r]=0;var o=a(e);O.counter=0,x(o),1!==O.counter&&(e[t][r]=c,n--)}return e};var g=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}},p=[1,2,3,4,5,6,7,8,9];var x=function e(n){for(var t=0,r=0,c=0;c<81;c++)if(r=c%9,0===n[t=Math.floor(c/9)][r]){var i,a=Object(u.a)(p);try{for(a.s();!(i=a.n()).done;){var l=i.value;if(!h({grid:n,row:t,value:l})&&!v({col:r,grid:n,value:l})){var s=b({col:r,grid:n,row:t});if(!j({square:s,value:l})){if(n[t][r]=l,o(n)){O.counter++;break}if(e(n))return!0}}}}catch(d){a.e(d)}finally{a.f()}break}n[t][r]=0},w=t(8),y={};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w.a:var t=l(),o=a(t),u=k(o),s=a(u);return Object(c.a)(Object(c.a)({},e),{},{challengeGrid:u,solvedGrid:t,workingGrid:s});case w.b:return e.workingGrid&&e.solvedGrid?e.solvedGrid[n.coords[0]][n.coords[1]]!==n.value?(alert("Incorrect Option!"),e):(e.workingGrid[n.coords[0]][n.coords[1]]=n.value,i(e.workingGrid,e.solvedGrid)&&alert("Completed!"),Object(c.a)(Object(c.a)({},e),{},{workingGrid:Object(r.a)(e.workingGrid)})):e;case w.c:return Object(c.a)(Object(c.a)({},e),{},{selectedBlock:n.coords});default:return e}}},4:function(e,n,t){"use strict";var r=t(29),c=t(21);t.d(n,"createGrid",(function(){return c.a})),t.d(n,"fillBlock",(function(){return c.b})),t.d(n,"selectBlock",(function(){return c.c}));t(22);n.default=r.a},42:function(e,n,t){"use strict";t.r(n);var r,c,o,i,a,l,u,s,d,f,b,v,h,j=t(0),O=t(14),k=t.n(O),g=t(6),p=t(23),x=t(2),w=t(7),y=t(5),B=t(4),m=t(3),G=x.d.div(r||(r=Object(m.a)(["\n    ","\n"])),(function(e){var n=e.active,t=e.puzzle,r=e.theme;return Object(x.c)(c||(c=Object(m.a)(["\n        align-items: center;\n        background-color: ",";\n        border: 1px solid ",";\n        cursor: pointer;\n        display: flex;\n        flex-grow: 1;\n        flex-shrink: 0;\n        flex-basis: 0;\n        font-size: 20px;\n        font-weight: ",";\n        height: auto;\n        justify-content: center;\n        transition: ",";\n        user-select: none;\n\n        &:before {\n            padding-top: 100%;\n            content: '';\n            float: left;\n        }\n\n        &:hover {\n            background-color: ",";\n        }\n    "])),n?r.colors.blue:r.colors.white,r.colors.black,t?"bold":"normal",r.transition,r.colors.lightBlue)})),A=t(1),C=function(e){var n=e.colIndex,t=e.rowIndex,r=Object(g.c)((function(e){var r=e.challengeGrid,c=e.selectedBlock,o=e.workingGrid;return{isActive:!!c&&(c[0]===t&&c[1]===n),isPuzzle:!(!r||0===r[t][n]),value:o?o[t][n]:0}})),c=Object(g.b)();return Object(A.jsx)(G,{active:r.isActive,"data-cy":"block-".concat(t,"-").concat(n),onClick:function(){r.isActive||c(Object(B.selectBlock)([t,n]))},puzzle:r.isPuzzle,children:0===r.value?"":r.value})},z=x.d.div(o||(o=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 10px 0;\n"]))),E=x.d.div(i||(i=Object(m.a)(["\n    ","\n"])),(function(e){var n=e.theme;return Object(x.c)(a||(a=Object(m.a)(["\n        display: flex;\n        flex-flow: row;\n\n        &:nth-child(1) {\n            div {\n                border-top: 4px solid ",";\n            }\n        }\n        &:nth-child(3),\n        &:nth-child(6) {\n            div {\n                border-bottom: 3px solid ",";\n            }\n        }\n        &:nth-child(9) {\n            border-bottom: 4px solid ",";\n        }\n        div {\n            &:nth-child(1) {\n                border-left: 4px solid ",";\n            }\n            &:nth-child(3),\n            &:nth-child(6),\n            &:nth-child(9) {\n                border-right: 4px solid ",";\n            }\n            &:nth-child(4),\n            &:nth-child(7) {\n                border-left: none;\n            }\n        }\n    "])),n.colors.black,n.colors.black,n.colors.black,n.colors.black,n.colors.black)})),I=function(){var e=Object(g.c)((function(e){var n=e.selectedBlock,t=e.solvedGrid,r=e.workingGrid;return{selectedBlock:n,selectedValue:r&&n?r[n[0]][n[1]]:0,solvedGrid:t}})),n=Object(g.b)(),t=Object(j.useCallback)((function(){return n(Object(B.createGrid)())}),[n]),r=Object(j.useCallback)((function(t){e.selectedBlock&&0===e.selectedValue&&n(Object(B.fillBlock)(t,e.selectedBlock))}),[n,e.selectedBlock,e.selectedValue]);return Object(y.a)("1",(function(){return r(1)})),Object(y.a)("2",(function(){return r(2)})),Object(y.a)("3",(function(){return r(3)})),Object(y.a)("4",(function(){return r(4)})),Object(y.a)("5",(function(){return r(5)})),Object(y.a)("6",(function(){return r(6)})),Object(y.a)("7",(function(){return r(7)})),Object(y.a)("8",(function(){return r(8)})),Object(y.a)("9",(function(){return r(9)})),Object(y.a)("down",(function(){e.selectedBlock&&e.selectedBlock[0]<8&&n(Object(B.selectBlock)([e.selectedBlock[0]+1,e.selectedBlock[1]]))})),Object(y.a)("left",(function(){e.selectedBlock&&e.selectedBlock[1]>0&&n(Object(B.selectBlock)([e.selectedBlock[0],e.selectedBlock[1]-1]))})),Object(y.a)("right",(function(){e.selectedBlock&&e.selectedBlock[1]<8&&n(Object(B.selectBlock)([e.selectedBlock[0],e.selectedBlock[1]+1]))})),Object(y.a)("up",(function(){e.selectedBlock&&e.selectedBlock[0]>0&&n(Object(B.selectBlock)([e.selectedBlock[0]-1,e.selectedBlock[1]]))})),Object(j.useEffect)((function(){e.solvedGrid||t()}),[t,e.solvedGrid]),Object(A.jsx)(z,{"data-cy":"grid-container",children:j.Children.toArray(Object(w.a)(Array(9)).map((function(e,n){return Object(A.jsx)(E,{"data-cy":"grid-row-container",children:j.Children.toArray(Object(w.a)(Array(9)).map((function(e,t){return Object(A.jsx)(C,{colIndex:t,rowIndex:n})})))})})))})},M=function(){var e=Object(g.b)(),n=Object(j.useCallback)((function(){window.confirm("Are you sure you want to start a new game?")&&e(Object(B.createGrid)())}),[e]);return Object(A.jsx)(V,{onClick:n,children:"New Game"})},S=function(e){var n=e.value,t=Object(g.c)((function(e){var n=e.selectedBlock,t=e.workingGrid;return{selectedBlock:n,selectedValue:t&&n?t[n[0]][n[1]]:0}})),r=Object(g.b)(),c=Object(j.useCallback)((function(){t.selectedBlock&&0===t.selectedValue&&r(Object(B.fillBlock)(n,t.selectedBlock))}),[r,t.selectedBlock,t.selectedValue,n]);return Object(A.jsx)(V,{onClick:c,children:n})},W=x.d.div(l||(l=Object(m.a)(["\n    display: flex;\n    flex-flow: row;\n"]))),L=function(){return Object(A.jsx)(W,{children:[1,2,3,4,5,6,7,8,9].map((function(e){return Object(A.jsx)(S,{value:e},e)}))})},V=x.d.button(u||(u=Object(m.a)(["\n    ","\n"])),(function(e){var n=e.theme;return Object(x.c)(s||(s=Object(m.a)(["\n        align-items: center;\n        background-color: ",";\n        border: 2px solid ",";\n        border-radius: 4px;\n        color: ",";\n        cursor: pointer;\n        display: flex;\n        flex: 1;\n        font-size: 16px;\n        font-weight: bold;\n        height: 40px;\n        justify-content: center;\n        margin: 4px 2px;\n        min-height: 40px;\n        opacity: 0.9;\n        padding: 0;\n        transition: ",";\n\n        &:focus {\n            border-color: ",";\n            outline: none;\n        }\n\n        &:hover {\n            opacity: 0.6;\n        }\n    "])),n.colors.black,n.colors.black,n.colors.white,n.transition,n.colors.blue)})),T=x.d.div(d||(d=Object(m.a)(["\n    max-width: 500px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n"]))),P=x.d.h1(f||(f=Object(m.a)(["\n    ","\n"])),(function(e){var n=e.theme;return Object(x.c)(b||(b=Object(m.a)(["\n        color: ",";\n        margin-top: 0;\n        text-align: center;\n    "])),n.colors.white)})),q=x.d.div(v||(v=Object(m.a)(["\n    ","\n"])),(function(e){var n=e.theme;return Object(x.c)(h||(h=Object(m.a)(["\n        background-color: ",";\n        border-radius: 15px;\n        display: flex;\n        /* flex: 1; */\n        flex-direction: column;\n        max-height: fit-content;\n        padding: 15px;\n    "])),n.colors.white)})),N=t(9),R=t(19),U=t(27),_=t.n(U),J=t(28),K={key:"root",storage:_.a},D=Object(R.a)(K,B.default);var F,$,H=function(){var e=Object(N.createStore)(D,Object(J.devToolsEnhancer)({}));return{persistor:Object(R.b)(e),store:e}},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=Object(x.b)(F||(F=Object(m.a)(["\n    ","\n"])),(function(e){var n=e.theme;return Object(x.c)($||($=Object(m.a)(["\n        html {\n            height: 100%;\n\n            body {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                margin: 0;\n\n                #root {\n                    background: ",";\n                    color: ",";\n                    display: flex;\n                    font-family: sans-serif;\n                    height: 100%;\n                    justify-content: center;\n                    padding: 15px;\n                }\n            }\n        }\n    "])),n.colors.background,n.colors.black)})),Z=H(),ee=Z.persistor,ne=Z.store;k.a.render(Object(A.jsx)(j.StrictMode,{children:Object(A.jsxs)(x.a,{theme:{colors:{background:"radial-gradient(#282c34cc, #282c34)",black:"#282c34",blue:"#a0e9fd",lightBlue:"#caf3fe",white:"#fff"},transition:"0.3s"},children:[Object(A.jsx)(Y,{}),Object(A.jsx)(g.a,{store:ne,children:Object(A.jsx)(p.a,{loading:null,persistor:ee,children:Object(A.jsxs)(T,{"data-cy":"content",children:[Object(A.jsx)(P,{"data-cy":"title",children:"Sudoku"}),Object(A.jsxs)(q,{"data-cy":"card",children:[Object(A.jsx)(M,{}),Object(A.jsx)(I,{}),Object(A.jsx)(L,{})]})]})})})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-sudoku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-sudoku","/service-worker.js");Q?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(n,e)}))}}()},8:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o}));var r="CREATE_GRID",c="FILL_BLOCK",o="SELECT_BLOCK"}},[[42,1,2]]]);
//# sourceMappingURL=main.87515611.chunk.js.map