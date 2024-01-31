document.addEventListener("DOMContentLoaded",function(){let e="",t=[],_=[],i=0,l=0,n,a=document.createElement("div");a.id="rcw-container",document.body.appendChild(a),a.innerHTML=`
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
                        <option value="_">დღეს</option>
                        <option value="_">30/12</option>
                        <option value="_">31/12</option>
                      </select>
                    </div>
                    <div>
                      <select name="rcw_time_pick" id="rcw-time-pick">
                        <option value="_">10:00</option>
                        <option value="_">10:15</option>
                        <option value="_">10:30</option>
                        <option value="_">10:45</option>
                        <option value="_">11:00</option>
                        <option value="_">11:15</option>
                        <option value="_">11:30</option>
                        <option value="_">11:45</option>
                        <option value="_">12:00</option>
                        <option value="_">13:15</option>
                        <option value="_">13:30</option>
                        <option value="_">13:45</option>
                        <option value="_">14:00</option>
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
    `;let r=document.getElementById("rcw-modal-body"),s=document.getElementById("rcw-modal-body-call"),c=document.getElementById("rcw-modal-body-result"),o=document.getElementById("rcw-input"),d=document.getElementsByClassName("rcw-choose-date")[0],$=document.getElementsByClassName("rcw-choose-date-now")[0],p=document.getElementsByClassName("rcw-select-call-date")[0],v=document.getElementById("rcw-modal"),w=document.getElementById("rcw-phone"),y=document.getElementById("rcw-button-submit"),g=document.getElementsByClassName("rcw-close")[0],m=document.getElementsByClassName("rcw-body-title")[0],u=document.getElementsByClassName("rcw-body-title-sub")[0],h=async()=>{let t=new FormData;t.append("site",window.location.origin);let _=await fetch("https://citynet.ge/b2b/rcw/get_api_key.php",{method:"POST",body:t});if(_.ok)try{let i=await _.text();(e=i)?.length>0&&(w.style.display="block")}catch(l){}};h(),w.onclick=function(){$.click(),r.classList.remove("result-body"),v.style.display="block",s.style.display="block",c.style.display="none",document.getElementById("rcw-error-message-date").textContent="",E(1),y.removeAttribute("disabled"),y.classList.remove("loading"),e&&f()},g.onclick=function(){v.style.display="none",o.value=""},window.onclick=function(e){e.target==v&&(v.style.display="none",o.value="")},d.onclick=function(){_=B(t),x(),_=M(_),document.getElementById("rcw-day-pick").classList.remove("rcw-error-select-message"),document.getElementById("rcw-time-pick").classList.remove("rcw-error-select-message");let e=_[0]?.value;C("rcw-day-pick",_.map(e=>({value:e.value,label:e.date}))),C("rcw-time-pick",T(e)),p.style.setProperty("display","flex"),d.style.setProperty("display","none"),$.style.setProperty("display","block"),i=1},$.onclick=function(){p.style.removeProperty("display"),$.style.setProperty("display","none"),d.style.setProperty("display","block"),i=0};let k=document.getElementById("rcw-keypad");k.addEventListener("click",function(e){let t=e.target;if(t.classList.contains("rcw-key")){let _=o.value,i=t.innerText;"←"===i?o.value=_.slice(0,-1):"x"===i?o.value="":o.value=_+i,b()}}),o.addEventListener("input",function(){b()}),y.addEventListener("click",function(e){b()&&L()});let b=()=>{let e=document.getElementById("rcw-error-message");return/^\+?(995)?0?(5\d{8}|(32)?2\d{6}|7\d{8}|(3|4)\d{2}\d{6})$/.test(o.value)?(e.textContent="",!0):(e.textContent="ნომერი არასწორად არის მითითებული",!1)},f=async()=>{let i=new FormData;i.append("apikey",e);let l=await fetch("https://citynet.ge/b2b/rcw/get_schedule.php",{method:"POST",body:i});if(l.ok)try{let n=await l.json();t=n,_=B(t),x()}catch(a){}},E=(e,t=[])=>{1==e?(m.innerHTML="გნებავთ ჩვენ გადმოგირეკავთ?",u.innerHTML="მიუთითეთ თქვენი ნომერი და ჩვენ დაგიკავშირდებით 1 წუთის განმავლობაში!"):2==e?(m.innerHTML="სამუშაო საათები დასრულებულია",u.innerHTML="დაგირეკავთ შერჩეულ დროს"):3==e?(m.innerHTML="დღეს ვისვენებთ",u.innerHTML="დაგიკავშირდებით შერჩეულ დროს"):4==e&&(m.innerHTML=`შესვენება ${t[0]}-დან ${t[1]}-მდე`,u.innerHTML="დაგიკავშირდებით შერჩეულ დროს")},x=()=>{let e=_.some(e=>e.value===I().substring(0,10)),t=_[0]?.working_hours.length>0;if(!e||!t){t?E(3):E(2),d.click(),$.style.setProperty("display","none");return}let i=function e(t){let _=new Date;for(let i of t){let l=new Date(i.value+" "+i.work_start),n=new Date(i.value+" "+i.work_end);if(_>=l&&_<=n){if(null===i.break_start||null===i.break_end)return!0;{let a=new Date(i.value+" "+i.break_start),r=new Date(i.value+" "+i.break_end);if(_<a||_>r)return!0}}}return!1}(_);i||(E(4,[_[0].break_start.substring(0,5),_[0].break_end.substring(0,5)]),d.click(),$.style.setProperty("display","none"))},B=e=>Object.values(e).map(e=>{let t=new Date().getFullYear(),_=new Date().getMonth()+1,i=new Date().getDate(),l=new Date().getDay(),n=e.week_day_id-(0===l?7:l);n<0&&(n+=7);let a=new Date(t,_-1,i+n),r=`${a.getDate().toString().padStart(2,"0")}/${(a.getMonth()+1).toString().padStart(2,"0")}`,s=`${a.getFullYear()}-${(a.getMonth()+1).toString().padStart(2,"0")}-${a.getDate().toString().padStart(2,"0")}`,c=new Date,o=new Date(c);return o.setDate(c.getDate()+1),a.toDateString()===c.toDateString()?r="დღეს":a.toDateString()===o.toDateString()&&(r="ხვალ"),{...e,date:r,value:s,working_hours:H(e)}}).sort((e,t)=>{let _=new Date(e.value),i=new Date(t.value);return _-i}),M=e=>e.filter(e=>e.working_hours.length>0),L=async()=>{let t="";if(0==i)t=I(new Date);else{let _=document.getElementById("rcw-day-pick").value,a=document.getElementById("rcw-time-pick").value;t=I(`${_} ${a}:00`)}let d=new FormData;d.append("apikey",e),d.append("phone",o.value),d.append("time",t),0==i&&d.append("immediately",1);let $=await fetch("https://citynet.ge/b2b/rcw/request_call.php",{method:"POST",body:d});if($.ok)try{var p;let v=await $.json(),w;if(("success"==v.result||"exists"==v.error)&&(s.style.display="none",c.style.display="block",p=t.replace("T"," "),r.classList.add("result-body"),w="",0==i?(w=`<div style="text-align: center;">
                    <h3>გაკავშირებთ მენეჯერს...</h3>
                    <div style="display: inline-block; margin-top: 40px;">
                      <div style="display: inline-block; width: 60px;margin-right: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M360 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24 0 91 51 167.7 120.8 192C75 280.3 24 357 24 448c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24 0-91-51-167.7-120.8-192C309 231.7 360 155 360 64c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zm-64 448H88c0-77.5 46.2-144 104-144 57.8 0 104 66.5 104 144z"/></svg></div>
                      <div style="display: inline-block; vertical-align: sub;"><h2 id="rcw-timer"></h2></div>
                    </div>
                  </div>`,clearInterval(n),l=6e4,D(),n=setInterval(D,100)):w=`<div style="text-align: center;">
                      <h2>მადლობა</h2>
                      <h4>ჩვენ დაგიკავშირდებით! დრო: ${p}</h4>
                    </div>`,c.innerHTML=w),"passed date"==v.error){let y=document.getElementById("rcw-error-message-date");document.getElementById("rcw-day-pick").classList.add("rcw-error-select-message"),y.textContent="მიუთითეთ ვალიდური თარიღი"}if("passed time"==v.error){let g=document.getElementById("rcw-error-message-date");document.getElementById("rcw-time-pick").classList.add("rcw-error-select-message"),g.textContent="მიუთითეთ ვალიდური დრო"}"spam"==v.error&&(c.innerHTML='<div class="rcw-loading"></div>',s.style.display="none",c.style.display="block")}catch(m){}};function I(e=new Date,t=0){let _=new Date(e);_.setSeconds(_.getSeconds()+t);let i=_.getFullYear(),l=(_.getMonth()+1).toString().padStart(2,"0"),n=_.getDate().toString().padStart(2,"0"),a=_.getHours().toString().padStart(2,"0"),r=_.getMinutes().toString().padStart(2,"0"),s;return i+"-"+l+"-"+n+"T"+a+":"+r+":"+_.getSeconds().toString().padStart(2,"0")}function S(e){let[t,_]=e.split("T"),[i,l,n]=t.split("-"),[a,r,s]=_.split(":");return new Date(i,l-1,n,a,r,s)}let H=e=>{let t=[],_=new Date().getFullYear(),i=new Date().getMonth()+1,l=(new Date().getDay()+6)%7+1,n=parseInt(e.week_day_id,10),a=new Date().getHours(),r=new Date().getMinutes(),s=S(`${_}-${i}-${l}T${e.work_start}`),c=S(`${_}-${i}-${l}T${e.work_end}`),o=e.break_start?S(`${_}-${i}-${l}T${e.break_start}`):null,d=e.break_end?S(`${_}-${i}-${l}T${e.break_end}`):null,$=new Date(s);for(l===n&&a>$.getHours()&&$.setHours(a,15*Math.ceil(r/15),0);$<c;){if(!(o&&$>=o&&$<=d)&&$>s){let p=$.toLocaleTimeString("ka-GE",{hour12:!1}).slice(0,5);l===n&&$.getMinutes()===r||t.push({value:p,label:p})}$.setMinutes($.getMinutes()+15)}return t};function C(e,t){let _=document.getElementById(e);_.innerHTML="",t.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.label,_.appendChild(t)})}function T(e){let t=_.find(t=>t.value===e);return t?t.working_hours:[]}function D(){let e=Math.floor(l/1e3),t=Math.floor(l%1e3/10),_=`${e<10?"0":""}${e}.${t<10?"0":""}${t}`,i=document.getElementById("rcw-timer");i&&(i.textContent=_,(l-=100)<0&&(clearInterval(n),c.innerHTML=`<div style="text-align: center;">
                                            <div>
                                              <div style="display: inline-block; width: 60px; margin-bottom: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M97.3 507c-129.9-129.9-129.7-340.3 0-469.9 5.7-5.7 14.5-6.6 21.3-2.4l64.8 40.5a17.2 17.2 0 0 1 6.8 21l-32.4 81a17.2 17.2 0 0 1 -17.7 10.7l-55.8-5.6c-21.1 58.3-20.6 122.5 0 179.5l55.8-5.6a17.2 17.2 0 0 1 17.7 10.7l32.4 81a17.2 17.2 0 0 1 -6.8 21l-64.8 40.5a17.2 17.2 0 0 1 -21.3-2.4zM247.1 95.5c11.8 20 11.8 45 0 65.1-4 6.7-13.1 8-18.7 2.6l-6-5.7c-3.9-3.7-4.8-9.6-2.3-14.4a32.1 32.1 0 0 0 0-29.9c-2.5-4.8-1.7-10.7 2.3-14.4l6-5.7c5.6-5.4 14.8-4.1 18.7 2.6zm91.8-91.2c60.1 71.6 60.1 175.9 0 247.4-4.5 5.3-12.5 5.7-17.6 .9l-5.8-5.6c-4.6-4.4-5-11.5-.9-16.4 49.7-59.5 49.6-145.9 0-205.4-4-4.9-3.6-12 .9-16.4l5.8-5.6c5-4.8 13.1-4.4 17.6 .9zm-46 44.9c36.1 46.3 36.1 111.1 0 157.5-4.4 5.6-12.7 6.3-17.9 1.3l-5.8-5.6c-4.4-4.2-5-11.1-1.3-15.9 26.5-34.6 26.5-82.6 0-117.1-3.7-4.8-3.1-11.7 1.3-15.9l5.8-5.6c5.2-4.9 13.5-4.3 17.9 1.3z"/></svg></div>
                                            </div>
                                            <h3>უკაცრავად, მალე დაგიკავშირდებით!</h3>
                                          </div>`))}document.getElementById("rcw-day-pick").addEventListener("change",function e(){document.getElementById("rcw-error-message-date").textContent="",document.getElementById("rcw-day-pick").classList.remove("rcw-error-select-message");let t=document.getElementById("rcw-day-pick").value,_=T(t);C("rcw-time-pick",_)}),document.getElementById("rcw-time-pick").addEventListener("change",function e(){document.getElementById("rcw-error-message-date").textContent="",document.getElementById("rcw-time-pick").classList.remove("rcw-error-select-message")})});
