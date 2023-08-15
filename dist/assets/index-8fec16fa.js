(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`

    <div class="box">
      <div class="calculator">
        <input type="number" class="salario" value="" placeholder="Salario diario ($MXN)" />
        <input type="number" class="años" value="" placeholder="Años en la empresa" />
        <button class="calcular">Calcular</button>

        <div class="resultado">
          <p class="resultado-texto">Prima vacacional:</p>
          <p class="resultado-prima">$0.00 MXN</p>
        </div>
      </div>
    </div>
  
`;const i=(a,t)=>{const o=[1,2,3,4,5,6,11,16,21,26,31],s=[12,14,16,18,20,22,24,26,28,30,32];let e=0;for(let n=0;n<o.length;n++)t>=o[n]&&(e=s[n]);return a*e*.25},u=document.querySelector(".salario"),d=document.querySelector(".años"),m=document.querySelector(".calcular"),l=document.querySelector(".resultado-texto"),c=document.querySelector(".resultado-prima");m.addEventListener("click",()=>{const a=Number(u.value),t=Number(d.value);if(isNaN(a)||isNaN(t)){l.textContent="Error",c.textContent="Ingresa valores válidos";return}else if(a===0||t===0){l.textContent="Error",c.textContent="Ingresa valores válidos";return}const o=i(a,t);l.textContent="Prima vacacional",c.textContent=`$${o.toFixed(2)} MXN`});document.addEventListener("keydown",a=>{if(a.key==="Enter"){const t=Number(u.value),o=Number(d.value);if(isNaN(t)||isNaN(o)){l.textContent="Error",c.textContent="Ingresa valores válidos";return}else if(t===0||o===0){l.textContent="Error",c.textContent="Ingresa valores válidos";return}const s=i(t,o);l.textContent="Prima vacacional",c.textContent=`$${s.toFixed(2)} MXN`}});
