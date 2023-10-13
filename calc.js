var kuang=document.getElementById("kuang");
function an(){
  var dq = event.target.textContent; 
kuang.value= kuang.value+ dq
}
function fa(){
  var fh = event.target.textContent; 
  if(fh=="+"){
suan="+";
  }
  if(fh=="-"){
suan="-";
  }
  if(fh=="*"){
suan="*";
  }
  if(fh=="/"){
suan="/";
  }
yiyi=kuang.value

  kuang.value=" "
}



function sa(){
erer=kuang.value
if(suan=="+"){
kuang.value=Number(yiyi)+Number(erer)
}
if(suan=="-"){
kuang.value=Number(yiyi)-Number(erer)
}
if(suan=="*"){
kuang.value=Number(yiyi)*Number(erer)
}
if(suan=="/"){
kuang.value=Number(yiyi)/Number(erer)
}
}

function ac(){
yiyi=""
erer=""
kuang.value=" "
}