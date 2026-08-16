// EDIT THIS DATE when your final wedding date is confirmed.
const weddingDate = new Date('2027-09-25T15:00:00+02:00');
const milestones=[
 {year:'2023',title:'The day we met',text:'Some stories begin quietly — with an ordinary day that becomes unforgettable. This was the moment our paths crossed and everything started to change.',image:'Images/Photo1.jpeg'},
 {year:'2024',title:'Our first adventures',text:'From spontaneous drives to our favourite little traditions, we discovered that the best memories were the ones we made side by side.',image:'Images/Photo2.png'},
 {year:'2025',title:'Growing together',text:'Through every season, celebration and challenge, we became each other’s safest place and biggest supporter.',image:'Images/Photo3.jpeg'}];
document.querySelector('#timeline').innerHTML=milestones.map((m,i)=>`<article class="milestone"><div class="timeline-image"><img src="${m.image}" alt="Replace with your memory photo"><span>${String(i+1).padStart(2,'0')}</span></div><div class="timeline-copy"><em>${m.year}</em><h3>${m.title}</h3><p>${m.text}</p></div></article>`).join('');
function showPage(name){document.querySelector('#site-shell').classList.add('active');document.querySelector('#envelope-view').classList.remove('active');document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.querySelector(`#${name}-page`).classList.add('active');location.hash=name;scrollTo({top:0,behavior:'smooth'})}
document.querySelector('#open-envelope').addEventListener('click',e=>{document.querySelector('#envelope-view').classList.add('opening');setTimeout(()=>showPage('home'),1050)});
document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>showPage(button.dataset.go)));
addEventListener('popstate',()=>{const page=location.hash.slice(1);if(['home','story','engagement'].includes(page))showPage(page)});
function updateCountdown(){const d=Math.max(0,weddingDate-Date.now());const values={days:Math.floor(d/86400000),hours:Math.floor(d/3600000%24),minutes:Math.floor(d/60000%60),seconds:Math.floor(d/1000%60)};Object.entries(values).forEach(([key,value])=>document.querySelector(`#${key}`).textContent=String(value).padStart(2,'0'))}updateCountdown();setInterval(updateCountdown,1000);
if(['home','story','engagement'].includes(location.hash.slice(1)))showPage(location.hash.slice(1));
