document.addEventListener("DOMContentLoaded",function(){let e="",t=[],_=[],l=0,i=0,n,r=document.createElement("div");r.id="rcw-container",document.body.appendChild(r),r.innerHTML=`
        <div id="rcw-phone" class="rcw-phone">
          <div class="rcw-phone-content">
            <div class="rcw-circle"></div>
            <div class="rcw-circle-fill"></div>
            <div class="rcw-img-circle">
            <div style="width: 30px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/>
              </svg>
            </div>
            </div>
          </div>
        </div>

        <div id="rcw-modal" class="rcw-modal">
          <div class="rcw-modal-content">
            <div class="rcw-modal-header">
              <span class="rcw-close">&times;</span>
              <h2 style="display:none;">&nbsp;</h2>
            </div>
            <div class="rcw-modal-body" id="rcw-modal-body">
              <div id="rcw-modal-body-call">
                <div style="text-align: center;">
                  <p class="rcw-body-title"></p>
                  <p class="rcw-body-title-sub"></p>
                </div>
                <div>
                  <div>
                    <div class="rcw-row">
                      <div class="rcw-input-group rcw-prefix">
                        <span class="rcw-input-group-addon">
                          <svg style="width: 40px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 36 26">
                            <path fill="#EEE" d="M32 5H20.5v10.5H36V9c0-2.209-1.791-4-4-4z" />
                            <path fill="#E8112D" d="M20.5 5h-5v10.5H0v5h15.5V31h5V20.5H36v-5H20.5z" />
                            <path fill="#E8112D" d="M28.915 9.585c.031-.623.104-1.244.221-1.86-.588.073-1.183.073-1.77 0 .117.615.19 1.237.221 1.86-.623-.031-1.244-.104-1.86-.221.073.588.073 1.183 0 1.77.615-.117 1.237-.19 1.86-.221-.031.623-.104 1.244-.221 1.86.588-.073 1.183-.073 1.77 0-.117-.615-.19-1.237-.221-1.86.623.031 1.244.104 1.86.221-.073-.588-.073-1.183 0-1.77-.616.118-1.237.191-1.86.221z" />
                            <path fill="#EEE" d="M15.5 5H4C1.791 5 0 6.791 0 9v6.5h15.5V5z" />
                            <path fill="#E8112D" d="M8.415 9.585c.031-.623.104-1.244.221-1.86-.588.073-1.183.073-1.77 0 .117.615.19 1.237.221 1.86-.623-.031-1.244-.104-1.86-.221.073.588.073 1.183 0 1.77.615-.117 1.237-.19 1.86-.221-.031.623-.104 1.244-.221 1.86.588-.073 1.183-.073 1.77 0-.117-.615-.19-1.237-.221-1.86.623.031 1.244.104 1.86.221-.073-.588-.073-1.183 0-1.77-.616.118-1.237.191-1.86.221z" />
                            <path fill="#EEE" d="M36 27v-6.5H20.5V31H32c2.209 0 4-1.791 4-4z" />
                            <path fill="#E8112D" d="M28.915 26.415c.031.623.104 1.244.221 1.86-.588-.073-1.183-.073-1.77 0 .117-.615.19-1.237.221-1.86-.623.031-1.244.104-1.86.221.073-.588.073-1.183 0-1.77.615.117 1.237.19 1.86.221-.031-.623-.104-1.244-.221-1.86.588.073 1.183.073 1.77 0-.117.615-.19 1.237-.221 1.86.623-.031 1.244-.104 1.86-.221-.073.588-.073 1.183 0 1.77-.616-.118-1.237-.191-1.86-.221z" />
                            <path fill="#EEE" d="M15.5 20.5H0V27c0 2.209 1.791 4 4 4h11.5V20.5z" />
                            <path fill="#E8112D" d="M8.415 26.415c.031.623.104 1.244.221 1.86-.588-.073-1.183-.073-1.77 0 .117-.615.19-1.237.221-1.86-.623.031-1.244.104-1.86.221.073-.588.073-1.183 0-1.77.615.117 1.237.19 1.86.221-.031-.623-.104-1.244-.221-1.86.588.073 1.183.073 1.77 0-.117.615-.19 1.237-.221 1.86.623-.031 1.244-.104 1.86-.221-.073.588-.073 1.183 0 1.77-.616-.118-1.237-.191-1.86-.221z" />
                          </svg>
                        </span>
                        <input type="number" placeholder="5xx xx xx xx" name="rcw_input_mobile" class="rcw-input" id="rcw-input">
                      </div>
                      <div class="rcw-error-message" id="rcw-error-message"></div>
                    </div>
                  </div>
                  <div class="rcw-select-call-date" id="rcw-select-call-date" style="margin: 10px 0;">
                    <div>
                      <select name="rcw_day_pick" id="rcw-day-pick">
                      </select>
                    </div>
                    <div>
                      <select name="rcw_time_pick" id="rcw-time-pick">
                      </select>
                    </div>
                  </div>
                  <div class="rcw-keypad" id="rcw-keypad">
                    <div class="rcw-key">1</div>
                    <div class="rcw-key">2</div>
                    <div class="rcw-key">3</div>
                    <div class="rcw-key">4</div>
                    <div class="rcw-key">5</div>
                    <div class="rcw-key">6</div>
                    <div class="rcw-key">7</div>
                    <div class="rcw-key">8</div>
                    <div class="rcw-key">9</div>
                    <div class="rcw-key">0</div>
                    <div class="rcw-key">←</div>
                    <div class="rcw-key">x</div>
                  </div>
                  <div class="rcw-error-message" id="rcw-error-message-date"></div>
                  <div style="margin: 10px 0;">
                    <button class="rcw-button" id="rcw-button-submit" style="width: 100%;">ველოდები ზარს!</button>
                  </div>
                  <div class="rcw-choose-date" style="text-align: center;margin: 10px 0;text-decoration: underline; cursor: pointer;">
                    აირჩიეთ დაკავშირების სასურველი დრო
                  </div>
                  <div class="rcw-choose-date-now" style="display: none; text-align: center;margin: 10px 0;text-decoration: underline; cursor: pointer;">
                    დამიკავშირდით ახლავე
                  </div>
                </div>
              </div>
              <div id="rcw-modal-body-result">
              </div>
            </div>
            <div class="rcw-modal-footer">
              <div style="text-align: center;"><a href="https://citynet.ge/ka/biznesistvis" target="_blank">Powered by Citynet</a></div>
            </div>
          </div>
        </div>
    `;let s=document.getElementById("rcw-modal-body"),a=document.getElementById("rcw-modal-body-call"),c=document.getElementById("rcw-modal-body-result"),d=document.getElementById("rcw-input"),$=document.getElementsByClassName("rcw-choose-date")[0],o=document.getElementsByClassName("rcw-choose-date-now")[0],w=document.getElementsByClassName("rcw-select-call-date")[0],p=document.getElementById("rcw-modal"),v=document.getElementById("rcw-phone"),y=document.getElementById("rcw-button-submit"),g=document.getElementsByClassName("rcw-close")[0],m=document.getElementsByClassName("rcw-body-title")[0],u=document.getElementsByClassName("rcw-body-title-sub")[0],h=async()=>{let t=new FormData;t.append("site",window.location.origin);let _=await fetch("https://citynet.ge/b2b/rcw/get_api_key.php",{method:"POST",body:t});if(_.ok)try{let l=await _.text();(e=l)?.length>0&&(v.style.display="block")}catch(i){}};h(),v.onclick=function(){o.click(),s.classList.remove("result-body"),p.style.display="block",a.style.display="block",c.style.display="none",document.getElementById("rcw-error-message-date").textContent="",E(1),y.removeAttribute("disabled"),y.classList.remove("loading"),e&&f()},g.onclick=function(){p.style.display="none",d.value=""},window.onclick=function(e){e.target==p&&(p.style.display="none",d.value="")},$.onclick=function(){_=B(t),x(),_=M(_),document.getElementById("rcw-day-pick").classList.remove("rcw-error-select-message"),document.getElementById("rcw-time-pick").classList.remove("rcw-error-select-message");let e=_[0]?.value;C("rcw-day-pick",_.map(e=>({value:e.value,label:e.date}))),C("rcw-time-pick",T(e)),w.style.setProperty("display","flex"),$.style.setProperty("display","none"),o.style.setProperty("display","block"),l=1},o.onclick=function(){w.style.removeProperty("display"),o.style.setProperty("display","none"),$.style.setProperty("display","block"),l=0};let k=document.getElementById("rcw-keypad");k.addEventListener("click",function(e){let t=e.target;if(t.classList.contains("rcw-key")){let _=d.value,l=t.innerText;"←"===l?d.value=_.slice(0,-1):"x"===l?d.value="":d.value=_+l,b()}}),d.addEventListener("input",function(){b()}),y.addEventListener("click",function(e){b()&&L()});let b=()=>{let e=document.getElementById("rcw-error-message");return/^\+?(995)?0?(5\d{8}|(32)?2\d{6}|7\d{8}|(3|4)\d{2}\d{6})$/.test(d.value)?(e.textContent="",!0):(e.textContent="ნომერი არასწორად არის მითითებული",!1)},f=async()=>{let l=new FormData;l.append("apikey",e),l.append("site",window.location.origin);let i=await fetch("https://citynet.ge/b2b/rcw/get_schedule.php",{method:"POST",body:l});if(i.ok)try{let n=await i.json();t=n,_=B(t),x()}catch(r){}},E=(e,t=[])=>{1==e?(m.innerHTML="გნებავთ ჩვენ გადმოგირეკავთ?",u.innerHTML="მიუთითეთ თქვენი ნომერი და ჩვენ დაგიკავშირდებით 1 წუთის განმავლობაში!"):2==e?(m.innerHTML="სამუშაო საათები დასრულებულია",u.innerHTML="დაგირეკავთ შერჩეულ დროს"):3==e?(m.innerHTML="დღეს ვისვენებთ",u.innerHTML="დაგიკავშირდებით შერჩეულ დროს"):4==e&&(m.innerHTML=`შესვენება ${t[0]}-დან ${t[1]}-მდე`,u.innerHTML="დაგიკავშირდებით შერჩეულ დროს")},x=()=>{let e=_.some(e=>e.value===I().substring(0,10)),t=_[0]?.working_hours.length>0;if(!e||!t){t?E(3):E(2),$.click(),o.style.setProperty("display","none");return}let l=function e(t){let _=new Date;for(let l of t){let i=new Date(l.value+" "+l.work_start),n=new Date(l.value+" "+l.work_end);if(_>=i&&_<=n){if(null===l.break_start||null===l.break_end)return!0;{let r=new Date(l.value+" "+l.break_start),s=new Date(l.value+" "+l.break_end);if(_<r||_>s)return!0}}}return!1}(_);l||(E(4,[_[0].break_start.substring(0,5),_[0].break_end.substring(0,5)]),$.click(),o.style.setProperty("display","none"))},B=e=>Object.values(e).map(e=>{let t=new Date().getFullYear(),_=new Date().getMonth()+1,l=new Date().getDate(),i=new Date().getDay(),n=e.week_day_id-(0===i?7:i);n<0&&(n+=7);let r=new Date(t,_-1,l+n),s=`${r.getDate().toString().padStart(2,"0")}/${(r.getMonth()+1).toString().padStart(2,"0")}`,a=`${r.getFullYear()}-${(r.getMonth()+1).toString().padStart(2,"0")}-${r.getDate().toString().padStart(2,"0")}`,c=new Date,d=new Date(c);return d.setDate(c.getDate()+1),r.toDateString()===c.toDateString()?s="დღეს":r.toDateString()===d.toDateString()&&(s="ხვალ"),{...e,date:s,value:a,working_hours:H(e)}}).sort((e,t)=>{let _=new Date(e.value),l=new Date(t.value);return _-l}),M=e=>e.filter(e=>e.working_hours.length>0),L=async()=>{let t="";if(0==l)t=I(new Date);else{let _=document.getElementById("rcw-day-pick").value,r=document.getElementById("rcw-time-pick").value;t=I(`${_} ${r}:00`)}let $=new FormData;$.append("apikey",e),$.append("phone",d.value),$.append("time",t),$.append("site",window.location.origin),0==l&&$.append("immediately",1);let o=await fetch("https://citynet.ge/b2b/rcw/request_call.php",{method:"POST",body:$});if(o.ok)try{var w;let p=await o.json(),v;if(("success"==p.result||"exists"==p.error)&&(a.style.display="none",c.style.display="block",w=t.replace("T"," "),s.classList.add("result-body"),v="",0==l?(v=`<div style="text-align: center;">
                    <h3>გაკავშირებთ მენეჯერს...</h3>
                    <div style="display: inline-block; margin-top: 40px;">
                      <div style="display: inline-block; width: 60px;margin-right: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M360 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24 0 91 51 167.7 120.8 192C75 280.3 24 357 24 448c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24 0-91-51-167.7-120.8-192C309 231.7 360 155 360 64c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zm-64 448H88c0-77.5 46.2-144 104-144 57.8 0 104 66.5 104 144z"/></svg></div>
                      <div style="display: inline-block; vertical-align: sub;"><h2 id="rcw-timer"></h2></div>
                    </div>
                  </div>`,clearInterval(n),i=6e4,D(),n=setInterval(D,100)):v=`<div style="text-align: center;">
                      <h2>მადლობა</h2>
                      <h4>ჩვენ დაგიკავშირდებით! დრო: ${w}</h4>
                    </div>`,c.innerHTML=v),"passed date"==p.error){let y=document.getElementById("rcw-error-message-date");document.getElementById("rcw-day-pick").classList.add("rcw-error-select-message"),y.textContent="მიუთითეთ ვალიდური თარიღი"}if("passed time"==p.error){let g=document.getElementById("rcw-error-message-date");document.getElementById("rcw-time-pick").classList.add("rcw-error-select-message"),g.textContent="მიუთითეთ ვალიდური დრო"}"spam"==p.error&&(c.innerHTML='<div class="rcw-loading"></div>',a.style.display="none",c.style.display="block")}catch(m){}};function I(e=new Date,t=0){let _=new Date(e);_.setSeconds(_.getSeconds()+t);let l=_.getFullYear(),i=(_.getMonth()+1).toString().padStart(2,"0"),n=_.getDate().toString().padStart(2,"0"),r=_.getHours().toString().padStart(2,"0"),s=_.getMinutes().toString().padStart(2,"0"),a;return l+"-"+i+"-"+n+"T"+r+":"+s+":"+_.getSeconds().toString().padStart(2,"0")}function S(e){let[t,_]=e.split("T"),[l,i,n]=t.split("-"),[r,s,a]=_.split(":");return new Date(l,i-1,n,r,s,a)}let H=e=>{let t=[],_=new Date().getFullYear(),l=new Date().getMonth()+1,i=(new Date().getDay()+6)%7+1,n=parseInt(e.week_day_id,10),r=new Date().getHours(),s=new Date().getMinutes(),a=S(`${_}-${l}-${i}T${e.work_start}`),c=S(`${_}-${l}-${i}T${e.work_end}`),d=e.break_start?S(`${_}-${l}-${i}T${e.break_start}`):null,$=e.break_end?S(`${_}-${l}-${i}T${e.break_end}`):null,o=new Date(a);for(i===n&&r>o.getHours()&&o.setHours(r,15*Math.ceil(s/15),0);o<c;){if(!(d&&o>=d&&o<=$)&&o>a){let w=o.toLocaleTimeString("ka-GE",{hour12:!1}).slice(0,5);i===n&&o.getMinutes()===s||t.push({value:w,label:w})}o.setMinutes(o.getMinutes()+15)}return t};function C(e,t){let _=document.getElementById(e);_.innerHTML="",t.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.label,_.appendChild(t)})}function T(e){let t=_.find(t=>t.value===e);return t?t.working_hours:[]}function D(){let e=Math.floor(i/1e3),t=Math.floor(i%1e3/10),_=`${e<10?"0":""}${e}.${t<10?"0":""}${t}`,l=document.getElementById("rcw-timer");l&&(l.textContent=_,(i-=100)<0&&(clearInterval(n),c.innerHTML=`<div style="text-align: center;">
                                            <div>
                                              <div style="display: inline-block; width: 60px; margin-bottom: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M97.3 507c-129.9-129.9-129.7-340.3 0-469.9 5.7-5.7 14.5-6.6 21.3-2.4l64.8 40.5a17.2 17.2 0 0 1 6.8 21l-32.4 81a17.2 17.2 0 0 1 -17.7 10.7l-55.8-5.6c-21.1 58.3-20.6 122.5 0 179.5l55.8-5.6a17.2 17.2 0 0 1 17.7 10.7l32.4 81a17.2 17.2 0 0 1 -6.8 21l-64.8 40.5a17.2 17.2 0 0 1 -21.3-2.4zM247.1 95.5c11.8 20 11.8 45 0 65.1-4 6.7-13.1 8-18.7 2.6l-6-5.7c-3.9-3.7-4.8-9.6-2.3-14.4a32.1 32.1 0 0 0 0-29.9c-2.5-4.8-1.7-10.7 2.3-14.4l6-5.7c5.6-5.4 14.8-4.1 18.7 2.6zm91.8-91.2c60.1 71.6 60.1 175.9 0 247.4-4.5 5.3-12.5 5.7-17.6 .9l-5.8-5.6c-4.6-4.4-5-11.5-.9-16.4 49.7-59.5 49.6-145.9 0-205.4-4-4.9-3.6-12 .9-16.4l5.8-5.6c5-4.8 13.1-4.4 17.6 .9zm-46 44.9c36.1 46.3 36.1 111.1 0 157.5-4.4 5.6-12.7 6.3-17.9 1.3l-5.8-5.6c-4.4-4.2-5-11.1-1.3-15.9 26.5-34.6 26.5-82.6 0-117.1-3.7-4.8-3.1-11.7 1.3-15.9l5.8-5.6c5.2-4.9 13.5-4.3 17.9 1.3z"/></svg></div>
                                            </div>
                                            <h3>უკაცრავად, მალე დაგიკავშირდებით!</h3>
                                          </div>`))}document.getElementById("rcw-day-pick").addEventListener("change",function e(){document.getElementById("rcw-error-message-date").textContent="",document.getElementById("rcw-day-pick").classList.remove("rcw-error-select-message");let t=document.getElementById("rcw-day-pick").value,_=T(t);C("rcw-time-pick",_)}),document.getElementById("rcw-time-pick").addEventListener("change",function e(){document.getElementById("rcw-error-message-date").textContent="",document.getElementById("rcw-time-pick").classList.remove("rcw-error-select-message")})});
