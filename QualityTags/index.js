import{intercept as c}from"@neptune";import{getState as s}from"@neptune/store";import{appendStyle as d}from"@neptune/utils";var l={HIRES_LOSSLESS:"HiRes",MQA:"MQA",DOLBY_ATMOS:"Atmos"},p={HIRES_LOSSLESS:"#499690",MQA:"#e6c200",DOLBY_ATMOS:"#0052a3"},S=[c("favorites/SET_FAVORITE_IDS",()=>{let t=s(),r=document.querySelectorAll("[data-track-id]");for(let e of r){if(e.querySelector(".qualitytags--tags"))continue;let n=e.getAttribute("data-track-id"),{tags:i}=t.content.mediaItems.get(n).item.mediaMetadata,a=document.createElement("div");a.className="qualitytags--tags",e.querySelector(`[data-test="table-row-title"] [data-id="${n}"]`).parentElement.appendChild(a);for(let o of i)o!="LOSSLESS"&&a.insertAdjacentHTML("beforeend",`<div style="background-color:${p[o]}">${l[o]}</div>`)}}),d(".qualitytags--tags{display:flex;padding-left:5px;gap:5px}.qualitytags--tags div{border-radius:500px!important;height:10px;padding:5px 10px;line-height:10px;color:#000}")],f=()=>S.forEach(t=>t());export{f as onUnload};
