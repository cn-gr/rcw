document.addEventListener("DOMContentLoaded",function(){let e=["ka","en"],t=document.documentElement.lang||"ka";e.includes(t)||(t="ka");let l="",i=[],a=[],n=0,_=0,r;function c(){let e=document.querySelectorAll("[data-rcw-translation-key]");e.forEach(function(e){let l=e.getAttribute("data-rcw-translation-key");e.textContent=d[t][l]})}let s=(l,i)=>{for(let a of l)"attributes"===a.type&&"lang"===a.attributeName&&(t=a.target.lang,e.includes(t)||(t="ka"),c())},o=new MutationObserver(s);o.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});let d={ka:{waiting_call:"ველოდები ზარს!",choose_time:"აირჩიეთ დაკავშირების სასურველი დრო",call_now:"დამიკავშირდით ახლავე",number_incorrect:"ნომერი არასწორად არის მითითებული",callback:"გსურთ, ჩვენ თავად დაგიკავშირდეთ?",call_one_min:"მიუთითეთ თქვენი ნომერი და ჩვენ დაგიკავშირდებით 1 წუთის განმავლობაში!",work_time_over:"სამუშაო საათები დასრულებულია",weekend:"დღეს ვისვენებთ",selected_time:"დაგიკავშირდებით შერჩეულ დროს",break:"შესვენება",from:"-დან",to:"-მდე",not_work_time:"ახლა არასამუშაო დროა",today:"დღეს",tomorrow:"ხვალ",valid_date:"მიუთითეთ ვალიდური თარიღი",valid_time:"მიუთითეთ ვალიდური დრო",contact_manager:"გაკავშირებთ მენეჯერს...",thanks:"მადლობა",contact_you_time:"ჩვენ დაგიკავშირდებით! დრო:",call_back_soon:"უკაცრავად, მალე დაგიკავშირდებით!"},en:{waiting_call:"I am Waiting for a call!",choose_time:"Select the desired connection time",call_now:"Contact me now",number_incorrect:"The number is incorrect!",callback:"Do you want us to call you back?",call_one_min:"Enter your number and we will contact you within 1 minute!",work_time_over:"Working hours are over.",weekend:"Today we are resting.",selected_time:"We will contact you at the selected time",break:"Break from",from:" to",to:"",not_work_time:"Now it's non-working time.",today:"Today",tomorrow:"Tomorrow",valid_date:"Enter a valid date!",valid_time:"Specify a valid time!",contact_manager:"Please wait, I will connect you to the manager...",thanks:"thanks",contact_you_time:"We will contact you! Time:",call_back_soon:"Sorry, I'll call you back soon!"}},$=document.createElement("div");$.id="rcw-container",document.body.appendChild($),$.innerHTML=`
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
                    <button class="rcw-button" id="rcw-button-submit" style="width: 100%;" data-rcw-translation-key="waiting_call">${d[t].waiting_call}</button>
                  </div>
                  <div class="rcw-choose-date" style="text-align: center;margin: 10px 0;text-decoration: underline; cursor: pointer;"
                  data-rcw-translation-key="choose_time"
                  >
                    ${d[t].choose_time}
                  </div>
                  <div class="rcw-choose-date-now" style="display: none; text-align: center;margin: 10px 0;text-decoration: underline; cursor: pointer;"
                  data-rcw-translation-key="call_now"
                  >
                    ${d[t].call_now}
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
    `;let w=document.getElementById("rcw-modal-body"),y=document.getElementById("rcw-modal-body-call"),m=document.getElementById("rcw-modal-body-result"),v=document.getElementById("rcw-input"),p=document.getElementsByClassName("rcw-choose-date")[0],g=document.getElementsByClassName("rcw-choose-date-now")[0],u=document.getElementsByClassName("rcw-select-call-date")[0],k=document.getElementById("rcw-modal"),h=document.getElementById("rcw-phone"),b=document.getElementById("rcw-button-submit"),f=document.getElementsByClassName("rcw-close")[0],E=document.getElementsByClassName("rcw-body-title")[0],x=document.getElementsByClassName("rcw-body-title-sub")[0],M=async()=>{let e=new FormData;e.append("site",window.location.origin);let t=await fetch("https://citynet.ge/b2b/rcw/get_api_key.php",{method:"POST",body:e});if(t.ok)try{let i=await t.text();(l=i)?.length>0&&(h.style.display="block")}catch(a){}};M(),h.onclick=function(){g.click(),w.classList.remove("result-body"),k.style.display="block",y.style.display="block",m.style.display="none",document.getElementById("rcw-error-message-date").textContent="",T(1),b.removeAttribute("disabled"),b.classList.remove("loading"),l&&S()},f.onclick=function(){k.style.display="none",v.value=""},window.onclick=function(e){e.target==k&&(k.style.display="none",v.value="")},p.onclick=function(){a=H(i),I(),a=C(a),document.getElementById("rcw-day-pick").classList.remove("rcw-error-select-message"),document.getElementById("rcw-time-pick").classList.remove("rcw-error-select-message");let e=a[0]?.value;N("rcw-day-pick",a.map(e=>({value:e.value,label:e.date}))),N("rcw-time-pick",V(e)),u.style.setProperty("display","flex"),p.style.setProperty("display","none"),g.style.setProperty("display","block"),n=1},g.onclick=function(){u.style.removeProperty("display"),g.style.setProperty("display","none"),p.style.setProperty("display","block"),n=0};let B=document.getElementById("rcw-keypad");B.addEventListener("click",function(e){let t=e.target;if(t.classList.contains("rcw-key")){let l=v.value,i=t.innerText;"←"===i?v.value=l.slice(0,-1):"x"===i?v.value="":v.value=l+i,L()}}),v.addEventListener("input",function(){L()}),b.addEventListener("click",function(e){L()&&D()});let L=()=>{let e=document.getElementById("rcw-error-message");return/^\+?(995)?0?(5\d{8}|(32)?2\d{6}|7\d{8}|(3|4)\d{2}\d{6})$/.test(v.value)?(e.textContent="",!0):(e.textContent=d[t].number_incorrect,!1)},S=async()=>{let e=new FormData;e.append("apikey",l),e.append("site",window.location.origin);let t=await fetch("https://citynet.ge/b2b/rcw/get_schedule.php",{method:"POST",body:e});if(t.ok)try{let n=await t.json();i=n,a=H(i),I()}catch(_){}},T=(e,l=[])=>{1==e?(E.innerHTML=d[t].callback,x.innerHTML=d[t].call_one_min):2==e?(E.innerHTML=d[t].work_time_over,x.innerHTML=d[t].selected_time):3==e?(E.innerHTML=d[t].weekend,x.innerHTML=d[t].selected_time):4==e?(E.innerHTML=`${d[t].break} ${l[0]}${d[t].from} ${l[1]}${d[t].to}`,x.innerHTML=d[t].selected_time):5==e&&(E.innerHTML=d[t].not_work_time,x.innerHTML=d[t].selected_time)},I=()=>{let e=a.some(e=>e.value===z().substring(0,10)),t=a[0]?.working_hours.length>0;if(!e||!t){t?T(3):T(2),p.click(),g.style.setProperty("display","none");return}let l=function e(t){let l=new Date;for(let i of t){let a=new Date(i.value+" "+i.work_start),n=new Date(i.value+" "+i.work_end);if(l>=a&&l<=n){if(null===i.break_start||null===i.break_end)return!0;{let _=new Date(i.value+" "+i.break_start),r=new Date(i.value+" "+i.break_end);if(l<_||l>r)return!0}}}return!1}(a),i=new Date().getTime();void 0!=a[0].break_start&&void 0!=a.break_end?!l&&a[0].break_start<=i&&i<=a[0].break_end&&(T(4,[a[0].break_start.substring(0,5),a[0].break_end.substring(0,5)]),p.click(),g.style.setProperty("display","none")):l||(T(5),p.click(),g.style.setProperty("display","none"))},H=e=>Object.values(e).map(e=>{let l=new Date().getFullYear(),i=new Date().getMonth()+1,a=new Date().getDate(),n=new Date().getDay(),_=e.week_day_id-(0===n?7:n);_<0&&(_+=7);let r=new Date(l,i-1,a+_),c=`${r.getDate().toString().padStart(2,"0")}/${(r.getMonth()+1).toString().padStart(2,"0")}`,s=`${r.getFullYear()}-${(r.getMonth()+1).toString().padStart(2,"0")}-${r.getDate().toString().padStart(2,"0")}`,o=new Date,$=new Date(o);return $.setDate(o.getDate()+1),r.toDateString()===o.toDateString()?c=d[t].today:r.toDateString()===$.toDateString()&&(c=d[t].tomorrow),{...e,date:c,value:s,working_hours:F(e)}}).sort((e,t)=>{let l=new Date(e.value),i=new Date(t.value);return l-i}),C=e=>e.filter(e=>e.working_hours.length>0),D=async()=>{let e="";if(0==n)e=z(new Date);else{let i=document.getElementById("rcw-day-pick").value,a=document.getElementById("rcw-time-pick").value;e=z(`${i} ${a}:00`)}let c=new FormData;c.append("apikey",l),c.append("phone",v.value),c.append("time",e),c.append("site",window.location.origin),0==n&&c.append("immediately",1);let s=await fetch("https://citynet.ge/b2b/rcw/request_call.php",{method:"POST",body:c});if(s.ok)try{var o;let $=await s.json(),p;if(("success"==$.result||"exists"==$.error)&&(y.style.display="none",m.style.display="block",o=e.replace("T"," "),w.classList.add("result-body"),p="",0==n?(p=`<div style="text-align: center;">
                    <h3>${d[t].contact_manager}</h3>
                    <div style="display: inline-block; margin-top: 40px;">
                      <div style="display: inline-block; width: 60px;margin-right: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M360 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24 0 91 51 167.7 120.8 192C75 280.3 24 357 24 448c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24 0-91-51-167.7-120.8-192C309 231.7 360 155 360 64c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zm-64 448H88c0-77.5 46.2-144 104-144 57.8 0 104 66.5 104 144z"/></svg></div>
                      <div style="display: inline-block; vertical-align: sub;"><h2 id="rcw-timer"></h2></div>
                    </div>
                  </div>`,clearInterval(r),_=6e4,A(),r=setInterval(A,100)):p=`<div style="text-align: center;">
                      <h2>${d[t].thanks}</h2>
                      <h4>${d[t].contact_you_time} ${o}</h4>
                    </div>`,m.innerHTML=p),"passed date"==$.error){let g=document.getElementById("rcw-error-message-date");document.getElementById("rcw-day-pick").classList.add("rcw-error-select-message"),g.textContent=d[t].valid_date}if("passed time"==$.error){let u=document.getElementById("rcw-error-message-date");document.getElementById("rcw-time-pick").classList.add("rcw-error-select-message"),u.textContent=d[t].valid_time}"spam"==$.error&&(m.innerHTML='<div class="rcw-loading"></div>',y.style.display="none",m.style.display="block")}catch(k){}};function z(e=new Date,t=0){let l=new Date(e);l.setSeconds(l.getSeconds()+t);let i=l.getFullYear(),a=(l.getMonth()+1).toString().padStart(2,"0"),n=l.getDate().toString().padStart(2,"0"),_=l.getHours().toString().padStart(2,"0"),r=l.getMinutes().toString().padStart(2,"0"),c;return i+"-"+a+"-"+n+"T"+_+":"+r+":"+l.getSeconds().toString().padStart(2,"0")}function P(e){let[t,l]=e.split("T"),[i,a,n]=t.split("-"),[_,r,c]=l.split(":");return new Date(i,a-1,n,_,r,c)}let F=e=>{let t=[],l=new Date().getFullYear(),i=new Date().getMonth()+1,a=(new Date().getDay()+6)%7+1,n=parseInt(e.week_day_id,10),_=new Date().getHours(),r=new Date().getMinutes(),c=P(`${l}-${i}-${a}T${e.work_start}`),s=P(`${l}-${i}-${a}T${e.work_end}`),o=e.break_start?P(`${l}-${i}-${a}T${e.break_start}`):null,d=e.break_end?P(`${l}-${i}-${a}T${e.break_end}`):null,$=new Date(c);for(a===n&&_>$.getHours()&&$.setHours(_,15*Math.ceil(r/15),0);$<s;){if(!(o&&$>=o&&$<=d)&&$>c){let w=$.toLocaleTimeString("ka-GE",{hour12:!1}).slice(0,5);a===n&&$.getMinutes()===r||t.push({value:w,label:w})}$.setMinutes($.getMinutes()+15)}return t};function N(e,t){let l=document.getElementById(e);l.innerHTML="",t.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.label,l.appendChild(t)})}function V(e){let t=a.find(t=>t.value===e);return t?t.working_hours:[]}function A(){let e=Math.floor(_/1e3),l=Math.floor(_%1e3/10),i=`${e<10?"0":""}${e}.${l<10?"0":""}${l}`,a=document.getElementById("rcw-timer");a&&(a.textContent=i,(_-=100)<0&&(clearInterval(r),m.innerHTML=`<div style="text-align: center;">
                                            <div>
                                              <div style="display: inline-block; width: 60px; margin-bottom: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M97.3 507c-129.9-129.9-129.7-340.3 0-469.9 5.7-5.7 14.5-6.6 21.3-2.4l64.8 40.5a17.2 17.2 0 0 1 6.8 21l-32.4 81a17.2 17.2 0 0 1 -17.7 10.7l-55.8-5.6c-21.1 58.3-20.6 122.5 0 179.5l55.8-5.6a17.2 17.2 0 0 1 17.7 10.7l32.4 81a17.2 17.2 0 0 1 -6.8 21l-64.8 40.5a17.2 17.2 0 0 1 -21.3-2.4zM247.1 95.5c11.8 20 11.8 45 0 65.1-4 6.7-13.1 8-18.7 2.6l-6-5.7c-3.9-3.7-4.8-9.6-2.3-14.4a32.1 32.1 0 0 0 0-29.9c-2.5-4.8-1.7-10.7 2.3-14.4l6-5.7c5.6-5.4 14.8-4.1 18.7 2.6zm91.8-91.2c60.1 71.6 60.1 175.9 0 247.4-4.5 5.3-12.5 5.7-17.6 .9l-5.8-5.6c-4.6-4.4-5-11.5-.9-16.4 49.7-59.5 49.6-145.9 0-205.4-4-4.9-3.6-12 .9-16.4l5.8-5.6c5-4.8 13.1-4.4 17.6 .9zm-46 44.9c36.1 46.3 36.1 111.1 0 157.5-4.4 5.6-12.7 6.3-17.9 1.3l-5.8-5.6c-4.4-4.2-5-11.1-1.3-15.9 26.5-34.6 26.5-82.6 0-117.1-3.7-4.8-3.1-11.7 1.3-15.9l5.8-5.6c5.2-4.9 13.5-4.3 17.9 1.3z"/></svg></div>
                                            </div>
                                            <h3>${d[t].call_back_soon}</h3>
                                          </div>`))}document.getElementById("rcw-day-pick").addEventListener("change",function e(){document.getElementById("rcw-error-message-date").textContent="",document.getElementById("rcw-day-pick").classList.remove("rcw-error-select-message");let t=document.getElementById("rcw-day-pick").value,l=V(t);N("rcw-time-pick",l)}),document.getElementById("rcw-time-pick").addEventListener("change",function e(){document.getElementById("rcw-error-message-date").textContent="",document.getElementById("rcw-time-pick").classList.remove("rcw-error-select-message")})});
