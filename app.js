const $=id=>document.getElementById(id),pad=n=>String(n).padStart(2,'0');
const ICONS=['home','car','gamepad','shield-alert','piggy-bank','package','utensils','zap','heart','briefcase','gift','plane','book'];
const COL=['#1f7a45','#4fbf9a','#f0b93a','#8ab6d6','#3d9a6a','#b98cce','#e59a5f','#5fb0b3','#c9d8cd','#7c9a92'];
const P={
wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
banknote:'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
'piggy-bank':'<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/>',
'shield-alert':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
gamepad:'<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/>',
car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
package:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
'trending-up':'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
'circle-alert':'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
'triangle-alert':'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
'circle-check':'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
sprout:'<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.3.5-.1 1.1.4 1.4L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.5.9.7 1.4.4l.5-.3c.4-.2.6-.6.5-1.1z"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>'};
const svg=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||P.package}</svg>`;
const bd=(n,c)=>`<span class="ib ${c||''}">${svg(n)}</span>`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=s=>{s=String(s).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[٫،]/g,'.').replace(/[,\s]/g,'');return s===''?0:Number(s)};
const fmt=n=>(Math.round(n*100)/100).toLocaleString('en');
const now=new Date(),ymOf=d=>d.getFullYear()+'-'+pad(d.getMonth()+1),YM=ymOf(now),TODAY=YM+'-'+pad(now.getDate());
const startKey=n=>ymOf(new Date(now.getFullYear(),now.getMonth()-n,1));
const DEF_CATS=[{n:'الاحتياجات الأساسية',ic:'home'},{n:'الترفيه',ic:'gamepad'},{n:'المواصلات',ic:'car'},{n:'الطوارئ',ic:'shield-alert'},{n:'الادخار',ic:'piggy-bank'},{n:'أخرى',ic:'package'}];
const DEF={name:'',salary:0,sdate:'',sT:0,sO:0,eT:0,eO:0,th:70,tx:[],goals:[],cats:DEF_CATS,id:1};
let S=structuredClone(DEF),per=0,showAll=false,CUR={left:0,bal:()=>0};
try{const r=localStorage.getItem('nzm-v1');if(r)S={...DEF,...JSON.parse(r)}}catch(e){}
if(!Array.isArray(S.cats)||!S.cats.length)S.cats=structuredClone(DEF_CATS);
S.goals=(S.goals||[]).map(g=>({s:g.c>=g.t?'done':g.c==0?'ns':'prog',...g}));
const save=()=>{try{localStorage.setItem('nzm-v1',JSON.stringify(S))}catch(e){}};
const ic=name=>{const c=S.cats.find(x=>x.n==name);if(c)return svg(c.ic)+esc(name);if(name=='دخل إضافي')return svg('trending-up')+esc(name);return svg('package')+esc(name)};
const hn=(t,neg,sm)=>`<div class="hn${neg?' neg':''}${sm?' sm':''}">${svg('circle-alert')}<span>${t}</span></div>`;
const rem=(pre,v)=>v<0?hn(`${pre} ينقصك <b>${fmt(-v)} ر.س</b> من المتبقي من راتبك`,1):hn(`${pre} سيبقى من راتبك <b>${fmt(v)} ر.س</b>`);
const STMAP={ns:['لم يبدأ','bad'],prog:['قيد التنفيذ','warn'],done:['مكتمل','ok']},BARCLS={ns:'r',prog:'y',done:'d'};

function ask(title,fields,onSave,extra,hintFn){
  const d=$('dlg');
  d.innerHTML=`<h3>${title}</h3>`+fields.map(f=>`<label for="f-${f.k}">${f.l}</label>`+(f.o?`<select id="f-${f.k}">${f.o.map(o=>`<option value="${esc(o[0])}"${o[0]==f.v?' selected':''}>${esc(o[1])}</option>`).join('')}</select>`:`<input id="f-${f.k}" type="${f.t=='date'?'date':'text'}" ${f.t=='n'?'inputmode="decimal"':''} value="${esc(f.v??'')}">`)).join('')+`<div id="hint"></div><div class="err" id="err"></div><div class="acts"><button class="p" id="ok">حفظ</button><button id="no">إلغاء</button>${extra||''}</div>`;
  $('no').onclick=()=>d.close();
  const vals=()=>{const v={};fields.forEach(f=>{const x=$('f-'+f.k).value;v[f.k]=f.t=='n'?num(x):x});return v};
  const upd=()=>{$('hint').innerHTML=hintFn?hintFn(vals())||'':''};d.oninput=upd;d.onchange=upd;upd();
  $('ok').onclick=()=>{const v=vals();const e=onSave(v);if(e)$('err').textContent=e;else{d.close();save();render()}};
  d.showModal();
}
const okNum=(v,ks)=>ks.some(k=>!isFinite(v[k])||v[k]<0)?'أدخل أرقاماً صحيحة (صفر أو أكبر).':'';
function txDlg(id){
  const t=id!=null?S.tx.find(x=>x.id==id):null;
  ask(t?'تعديل المعاملة':'معاملة جديدة',[
    {k:'type',l:'النوع',o:[['expense','مصروف'],['income','دخل إضافي']],v:t?t.type:'expense'},
    {k:'date',l:'التاريخ',t:'date',v:t?t.date:TODAY},
    {k:'cat',l:'التصنيف',o:S.cats.map(c=>[c.n,c.n]),v:t&&t.type!='income'?t.cat:S.cats[0].n},
    {k:'amt',l:'المبلغ (ر.س)',t:'n',v:t?t.amt:''},
    {k:'note',l:'ملاحظة (اختياري)',v:t?t.note:''},
    {k:'nec',l:'الحالة',o:[['0','عادي'],['1','غير ضروري']],v:t&&t.un?'1':'0'}
  ],v=>{
    if(!(v.amt>0))return'أدخل مبلغاً أكبر من صفر.';if(!v.date)return'اختر التاريخ.';
    const o={type:v.type,date:v.date,cat:v.type=='income'?'دخل إضافي':v.cat,amt:v.amt,note:v.note,un:v.type=='expense'&&v.nec=='1'};
    if(t)Object.assign(t,o);else S.tx.push({id:S.id++,...o})
  },t?'<button id="dtx" style="color:var(--r);margin-inline-start:auto">حذف المعاملة</button>':'',
  v=>v.amt>0&&v.date.slice(0,7)==YM?rem(v.type=='income'?'بعد هذا الدخل':v.cat=='الادخار'?'لو ادخرت '+fmt(v.amt)+' ر.س':v.cat=='الطوارئ'?'لو خصصت '+fmt(v.amt)+' ر.س للطوارئ':'لو صرفت '+fmt(v.amt)+' ر.س',CUR.left+(v.type=='income'?v.amt:-v.amt)):'');
  if(t){const b=$('dtx');b&&(b.onclick=()=>{S.tx=S.tx.filter(x=>x.id!=t.id);save();$('dlg').close();render()})}
}
function catDlg(){
  const d=$('dlg');let sel='package';
  function paint(){
    d.innerHTML=`<h3>إدارة التصنيفات</h3>
    <div class="catlist" id="catlist">${S.cats.map((c,i)=>`<div class="catrow">${bd(c.ic)}<span>${esc(c.n)}</span><button class="x" data-dc="${i}" aria-label="حذف">✕</button></div>`).join('')}</div>
    <label for="cn">اسم التصنيف الجديد</label><input id="cn" placeholder="مثال: المواصلات، البيت">
    <label>اختر أيقونة</label><div class="iconpick" id="icpick"></div>
    <div class="err" id="err"></div>
    <div class="acts"><button class="p" id="addc">إضافة التصنيف</button><button id="no">تم</button></div>`;
    $('icpick').innerHTML=ICONS.map(n=>`<button type="button" class="${n==sel?'on':''}" data-pick="${n}">${svg(n)}</button>`).join('');
    $('icpick').onclick=e=>{const b=e.target.closest('button');if(!b)return;sel=b.dataset.pick;[...$('icpick').children].forEach(x=>x.classList.toggle('on',x.dataset.pick==sel))};
    $('no').onclick=()=>d.close();
    $('addc').onclick=()=>{const n=$('cn').value.trim();if(!n){$('err').textContent='اكتب اسم التصنيف.';return}if(S.cats.some(c=>c.n==n)){$('err').textContent='هذا التصنيف موجود بالفعل.';return}S.cats.push({n,ic:sel});save();sel='package';paint()};
    $('catlist').onclick=e=>{const b=e.target.closest('[data-dc]');if(!b)return;if(S.cats.length<=1){alert('يجب أن يبقى تصنيف واحد على الأقل.');return}const i=+b.dataset.dc,removed=S.cats[i].n,target=S.cats.find((c,idx)=>idx!=i&&c.n=='أخرى')||S.cats.find((c,idx)=>idx!=i);S.tx.forEach(t=>{if(t.cat==removed)t.cat=target.n});S.cats.splice(i,1);save();paint()};
  }
  paint();d.showModal();d.addEventListener('close',render,{once:true});
}
function setDlg(){
  ask('الإعدادات',[{k:'name',l:'اسمك',v:S.name},{k:'salary',l:'الراتب الشهري (ر.س)',t:'n',v:S.salary||''},{k:'sdate',l:'تاريخ الاستلام',t:'date',v:S.sdate},{k:'sT',l:'هدف الادخار (ر.س)',t:'n',v:S.sT||''},{k:'sO',l:'رصيد الادخار الحالي قبل البدء',t:'n',v:S.sO||''},{k:'eT',l:'هدف صندوق الطوارئ',t:'n',v:S.eT||''},{k:'eO',l:'رصيد الطوارئ الحالي قبل البدء',t:'n',v:S.eO||''},{k:'th',l:'حد التنبيه لنسبة الصرف (%)',t:'n',v:S.th}],v=>{
    const e=okNum(v,['salary','sT','sO','eT','eO','th']);if(e)return e;if(v.th<1||v.th>100)return'حد التنبيه بين 1 و 100.';Object.assign(S,v)},
    '<button id="rs" style="margin-inline-start:auto;color:var(--r)">مسح كل البيانات</button>',v=>{const b=CUR.left-S.salary+v.salary,o=[];
    if(v.sT>0)o.push(rem('لو حققت هدف الادخار',b-Math.max(0,v.sT-(v.sO+CUR.bal('الادخار')))));
    if(v.eT>0)o.push(rem('لو حققت هدف الطوارئ',b-Math.max(0,v.eT-(v.eO+CUR.bal('الطوارئ')))));
    return o.join('')});
  $('rs').onclick=()=>{if($('rs').dataset.s){S=structuredClone(DEF);S.cats=structuredClone(DEF_CATS);save();$('dlg').close();render()}else{$('rs').dataset.s=1;$('rs').textContent='اضغط مرة أخرى للتأكيد'}};
}
function goalDlg(i){
  const g=i==null?{n:'',t:'',c:'',s:'prog'}:S.goals[i];
  ask(i==null?'هدف جديد':'تعديل الهدف',[{k:'n',l:'اسم الهدف',v:g.n},{k:'t',l:'المبلغ المستهدف (ر.س)',t:'n',v:g.t},{k:'c',l:'المبلغ الحالي (ر.س)',t:'n',v:g.c},{k:'s',l:'حالة الهدف',o:[['ns','لم يبدأ'],['prog','قيد التنفيذ'],['done','مكتمل']],v:g.s||'prog'}],v=>{
    if(!v.n.trim())return'اكتب اسم الهدف.';if(!(v.t>0))return'المستهدف يجب أن يكون أكبر من صفر.';if(!isFinite(v.c)||v.c<0)return'المبلغ الحالي غير صحيح.';
    const o={n:v.n.trim(),t:v.t,c:v.c,s:v.s};i==null?S.goals.push(o):S.goals[i]=o},
    i==null?'':'<button id="dg2" style="color:var(--r);margin-inline-start:auto">حذف الهدف</button>',
    v=>v.t>0&&isFinite(v.c)?rem('لو حققت هذا الهدف',CUR.left-Math.max(0,v.t-v.c)):'');
  if(i!=null){const b=$('dg2');b&&(b.onclick=()=>{S.goals.splice(i,1);save();$('dlg').close();render()})}
}
function donutSVG(items){
  const total=items.reduce((a,x)=>a+x.v,0),R=16,CX=21,CY=21,SW=7;
  if(total<=0)return `<svg viewBox="0 0 42 42"><circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--line)" stroke-width="${SW}"/></svg>`;
  let acc=0;
  const parts=items.filter(x=>x.v>0).map(x=>{const pct=x.v/total*100,dash=`${pct} ${100-pct}`,off=100-acc;acc+=pct;
    return `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${x.c}" stroke-width="${SW}" stroke-dasharray="${dash}" stroke-dashoffset="${off}" pathLength="100"/>`}).join('');
  return `<svg viewBox="0 0 42 42" style="transform:rotate(-90deg)">${parts}</svg>`;
}
function render(){
  const inM=S.tx.filter(t=>t.date.slice(0,7)==YM),exp=inM.filter(t=>t.type=='expense'),spent=exp.reduce((a,t)=>a+t.amt,0);
  const income=S.salary+inM.filter(t=>t.type=='income').reduce((a,t)=>a+t.amt,0),left=income-spent,pct=income>0?spent/income*100:0,over=income>0&&pct>S.th;
  const bal=c=>S.tx.filter(t=>t.type=='expense'&&t.cat==c).reduce((a,t)=>a+t.amt,0);
  const sc=S.sO+bal('الادخار'),ec=S.eO+bal('الطوارئ'),p=(a,b)=>b>0?Math.min(100,a/b*100):0;
  CUR={left,bal};
  const sh=(T,c)=>income>0&&T>0&&c<T?(x=>x<0?hn(`لو حققت الهدف ينقصك <b>${fmt(-x)} ر.س</b>`,1,1):hn(`لو حققت الهدف سيبقى من راتبك <b>${fmt(x)} ر.س</b>`,0,1))(left-(T-c)):'';
  $('hello').textContent=S.name?'مرحباً '+S.name:'مرحباً بك';
  $('date').innerHTML=now.toLocaleDateString('ar-SA-u-nu-latn',{weekday:'long',day:'numeric',month:'long',year:'numeric'})+'<br>'+now.toLocaleDateString('ar-SA-u-ca-islamic-umalqura-nu-latn',{day:'numeric',month:'long',year:'numeric'});
  const sd=S.sdate?new Date(S.sdate+'T00:00').toLocaleDateString('ar-SA-u-nu-latn',{day:'numeric',month:'long',year:'numeric'}):'غير محدد';
  const card=(cls,t,n,b)=>`<div class="card stat ${cls}"><div class="t">${t}</div><div class="n">${fmt(n)} <small>ر.س</small></div>${b}</div>`;
  const pb=(cl,v,z)=>`<div class="bar ${cl}"><i style="width:${v}%"></i></div><div class="row"><span>${Math.round(v)}%</span><span>من ${fmt(z)} ر.س</span></div>`;
  $('stats').innerHTML=card('grn',bd('wallet')+'الراتب الشهري',S.salary,`<div class="row">تاريخ الاستلام: ${sd}</div>`)+
   card('',bd('banknote')+'المتبقي من الدخل',left,pb('',income>0?Math.max(0,Math.min(100,left/income*100)):0,income))+
   card(ec>0&&S.eT>0&&p(ec,S.eT)<50?'red':'',bd('shield-alert','r')+'صندوق الطوارئ',ec,pb('r',p(ec,S.eT),S.eT)+sh(S.eT,ec))+
   card('grn',bd('piggy-bank')+'الادخار',sc,pb('d',p(sc,S.sT),S.sT)+sh(S.sT,sc));
  $('ratio').innerHTML=`<div class="row" style="justify-content:flex-end;font-size:18px;color:${over?'var(--r)':'var(--ink)'};font-weight:800;margin:6px 0">${Math.round(pct)}%</div><div class="bar ${over?'r':'d'}" style="height:12px"><i style="width:${Math.min(100,pct)}%"></i></div><div class="ratio"><div><span>المصروفات</span><b>${fmt(spent)} ر.س</b></div><div><span>المتبقي</span><b style="color:${left<0?'var(--r)':'inherit'}">${fmt(left)} ر.س</b></div></div><div class="warn" style="margin-top:12px"><b>${svg('circle-alert')}تنبيه</b>عند تجاوز ${fmt(S.th)}% من الدخل يتحول اللون إلى الأحمر${over?' — أنت تجاوزته الآن.':'.'}</div>`;
  const R503020=[{n:'الالتزامات',p:50,ic:'briefcase'},{n:'الترفيه',p:30,ic:'gamepad'},{n:'الاستثمار',p:20,ic:'trending-up'}];
  const baseLeft=Math.max(0,left);
  $('r503020').innerHTML=(left<=0?hn('لا يوجد متبقي من راتبك هذا الشهر لتوزيعه على النظام.',1):'')+R503020.map(c=>`<div class="cat"><span>${svg(c.ic)}${c.n} (${c.p}%)</span><div class="bar d"><i style="width:${c.p}%"></i></div><span>${fmt(baseLeft*c.p/100)} ر.س</span></div>`).join('');
  const by=S.cats.map(c=>exp.filter(t=>t.cat==c.n).reduce((a,t)=>a+t.amt,0));
  $('donut').innerHTML=`<div class="donutwrap">${donutSVG(S.cats.map((c,i)=>({v:by[i],c:COL[i%COL.length]})))}<div class="donutctr"><span><b style="color:${over?'var(--r)':'inherit'}">${Math.round(pct)}%</b><small>نسبة الصرف</small></span></div></div><div class="leg">${S.cats.map((c,i)=>`<p><span><u style="background:${COL[i%COL.length]}"></u>${svg(c.ic)}${esc(c.n)}</span><b>${spent>0?Math.round(by[i]/spent*100):0}%</b></p>`).join('')}</div>`;
  const rows=[...S.tx].sort((a,b)=>b.date.localeCompare(a.date)||b.id-a.id),shown=showAll?rows:rows.slice(0,7);
  $('tx').innerHTML=shown.length?shown.map(t=>`<tr><td>${t.date}</td><td>${t.type=='income'?'دخل إضافي':'مصروف'}</td><td>${ic(t.cat)}${t.note?`<br><small style="color:var(--mute)">${esc(t.note)}</small>`:''}</td><td class="${t.type=='income'?'pos':'neg'}">${t.type=='income'?'+':'−'} ${fmt(t.amt)} ر.س</td><td><span class="tag ${t.type=='income'?'ok':t.un?'bad':''}">${t.type=='income'?'مضاف':t.un?'غير ضروري':'عادي'}</span></td><td style="white-space:nowrap"><button class="x" style="color:var(--g)" data-etx="${t.id}">تعديل</button><button class="x" data-del="${t.id}" aria-label="حذف">✕</button></td></tr>`).join(''):'<tr><td colspan="6" class="empty">لا توجد معاملات بعد. اضغط «+ معاملة جديدة» لتبدأ.</td></tr>';
  $('more').style.display=rows.length>7?'':'none';$('more').textContent=showAll?'عرض أقل':'عرض الكل';
  const sk=startKey(per),pex=S.tx.filter(t=>t.type=='expense'&&t.date.slice(0,7)>=sk&&t.date.slice(0,7)<=YM),pb2=S.cats.map(c=>pex.filter(t=>t.cat==c.n).reduce((a,t)=>a+t.amt,0)),mx=Math.max(...pb2,1),ptot=pb2.reduce((a,b)=>a+b,0);
  $('cats').innerHTML=S.cats.map((c,i)=>`<div class="cat"><span>${svg(c.ic)}${esc(c.n)}</span><div class="bar d"><i style="width:${pb2[i]/mx*100}%"></i></div><span>${fmt(pb2[i])}</span></div>`).join('');
  const unP=pex.filter(t=>t.un).reduce((a,t)=>a+t.amt,0);
  $('unn').innerHTML=`<div class="unn"><b>${svg('circle-alert')}المصروفات غير الضرورية: ${fmt(unP)} ر.س</b><div class="bar r"><i style="width:${ptot>0?unP/ptot*100:0}%"></i></div><div class="row"><span>تمثل ${ptot>0?Math.round(unP/ptot*100):0}% من إجمالي المصروفات</span></div></div>`;
  const gh=g=>{const x=left-(g.t-g.c);return income>0?`<div class="gh${x<0?' neg':''}">${svg('circle-alert')}<span>${x<0?`ينقصك ${fmt(-x)} ر.س من المتبقي لتحقيقه`:`لو حققته سيبقى من راتبك ${fmt(x)} ر.س`}</span></div>`:''};
  const gp=g=>g.t>0?Math.min(100,g.c/g.t*100):0;
  $('goalchart').innerHTML=S.goals.length?S.goals.map(g=>`<div class="cat"><span>${esc(g.n)}</span><div class="bar ${BARCLS[g.s||'prog']}"><i style="width:${gp(g)}%"></i></div><span>${Math.round(gp(g))}%</span></div>`).join(''):'';
  $('goals').innerHTML=S.goals.length?S.goals.map((g,i)=>{const s=STMAP[g.s||'prog'];return `<tr><td style="min-width:180px">${esc(g.n)}${g.c<g.t?gh(g):''}</td><td>${fmt(g.t)}</td><td>${fmt(g.c)}</td><td style="min-width:90px"><div class="bar ${BARCLS[g.s||'prog']}"><i style="width:${gp(g)}%"></i></div>${Math.round(gp(g))}%</td><td><span class="tag ${s[1]}">${s[0]}</span></td><td style="white-space:nowrap"><button class="x" style="color:var(--g)" data-eg="${i}">تعديل</button><button class="x" data-dg="${i}" aria-label="حذف">✕</button></td></tr>`}).join(''):'<tr><td colspan="6" class="empty">لم تضف أهدافاً بعد.</td></tr>';
  const unM=exp.filter(t=>t.un).reduce((a,t)=>a+t.amt,0);
  const I=[];
  if(income<=0)I.push('⚪ ابدأ بإدخال راتبك من «الإعدادات» لتظهر لك النسب والتحليل.');
  else{I.push(over?`🔴 تجاوزت حد الصرف (${fmt(S.th)}%): نسبة صرفك ${Math.round(pct)}%. حاول تقليلها.`:`🟢 نسبة صرفك ${Math.round(pct)}% وهي ضمن الحد (${fmt(S.th)}%).`);if(left<0)I.push(`🔴 مصروفاتك أعلى من دخلك بمقدار ${fmt(-left)} ر.س.`)}
  if(exp.length){const byC={};exp.forEach(t=>byC[t.cat]=(byC[t.cat]||0)+t.amt);const top=Object.entries(byC).sort((a,b)=>b[1]-a[1])[0];if(top)I.push(`🔵 أكثر شيء صرفت فيه هذا الشهر: ${top[0]} بمبلغ ${fmt(top[1])} ر.س.`)}
  if(unM>0){const byU={};exp.filter(t=>t.un).forEach(t=>byU[t.cat]=(byU[t.cat]||0)+t.amt);const topU=Object.entries(byU).sort((a,b)=>b[1]-a[1])[0];if(topU)I.push(`🟡 أكثر شيء غير ضروري صرفت فيه: ${topU[0]} بمبلغ ${fmt(topU[1])} ر.س.`);I.push(`🟡 لو لم تصرف على غير الضروريات كنت ستوفر ${fmt(unM)} ر.س${spent>0?` (${Math.round(unM/spent*100)}% من مصروفاتك)`:''}.`)}
  const openG=S.goals.filter(g=>(g.s||'prog')!='done');
  if(openG.length){const byp=[...openG].sort((a,b)=>gp(b)-gp(a)),near=byp[0],far=byp[byp.length-1];I.push(`🟢 الهدف الأقرب لتحقيقه: «${near.n}» بنسبة إنجاز ${Math.round(gp(near))}%.`);if(far!==near)I.push(`🟡 الهدف الأبعد لا يزال: «${far.n}» بنسبة إنجاز ${Math.round(gp(far))}%.`)}
  if(S.sT>0){const r=Math.round(p(sc,S.sT)/20);I.push(`⭐ تقدمك في الادخار: ${r} من 5 نجوم.`)}
  if(I.length==0)I.push('أضف معاملات وأهدافاً وسيظهر هنا تحليل تلقائي.');
  const EM={'🔴':['circle-alert','#e0524d'],'🟡':['triangle-alert','#c98a12'],'🟢':['circle-check','#1f7a45'],'🔵':['trending-up','#3a7ea8'],'⭐':['star','#c98a12'],'⚪':['info','var(--mute)']};
  $('ins').innerHTML=I.map(x=>{const e=[...x][0],m=EM[e];return m?`<p><span style="color:${m[1]};flex:none">${svg(m[0])}</span><span>${x.slice(e.length).trim()}</span></p>`:`<p>${x}</p>`}).join('')
}
$('b-tx').onclick=()=>txDlg();$('b-set').onclick=setDlg;$('nav-set').onclick=setDlg;$('b-goal').onclick=()=>goalDlg();$('b-cats').onclick=catDlg;
$('more').onclick=()=>{showAll=!showAll;render()};
$('tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;per=+b.dataset.k;[...$('tabs').children].forEach(x=>x.classList.toggle('on',x==b));render()};
document.addEventListener('click',e=>{const t=e.target,go=t.closest('[data-go]');
  if(go){const el=$(go.dataset.go);el&&el.scrollIntoView({block:'start'});return}
  if(t.dataset.del){S.tx=S.tx.filter(x=>x.id!=t.dataset.del);save();render();return}
  if(t.dataset.etx){txDlg(t.dataset.etx);return}
  if(t.hasAttribute('data-dg')){S.goals.splice(+t.dataset.dg,1);save();render();return}
  if(t.hasAttribute('data-eg')){goalDlg(+t.dataset.eg);return}});
document.querySelectorAll('[data-ic]').forEach(e=>e.innerHTML=svg(e.dataset.ic));
render();
