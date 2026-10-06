document.getElementById('year').textContent=new Date().getFullYear();
const n=document.getElementById('nav');document.getElementById('toggle').onclick=()=>n.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>n.classList.remove('open'));
const buttons=document.querySelectorAll('.filters button'), cards=document.querySelectorAll('.grid article');
buttons.forEach(b=>b.onclick=()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');cards.forEach(c=>c.style.display=b.dataset.filter==='all'||c.dataset.cat===b.dataset.filter?'grid':'none')});