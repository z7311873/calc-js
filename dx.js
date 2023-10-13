var cookies = document.cookie;
var userDataCookie = cookies.split(";").find(function(cookie) {
  return cookie.trim().startsWith("userfenz=");
});

if (userDataCookie) {
  var userDataValue = userDataCookie.split("=")[1];
  document.getElementById("fen").innerText = userDataValue;
}




let jgb=document.getElementById("jg");
jgb.innerHTML="";

function suan(){
  let fen= document.getElementById("fen");
  let jg = Math.floor(Math.random() * 2)+1;
  var zhi=document.getElementById("select");
  var yf=document.getElementById("yf");
  
  fenz=Number(fen.innerHTML);

  yfz=Number(yf.value);

  zhiz=Number(zhi.value);
  jgz=Number(jg);
  if(jgz==zhiz){
    jgb.innerHTML=jgb.innerHTML+"win"+"<br>";
  fenz=fenz+yfz


  
    document.getElementById("fen").innerText=fenz;

  }
  else{
    jgb.innerHTML=jgb.innerHTML+"lose"+"<br>";
    fenz=fenz-yfz
    document.getElementById("fen").innerText=fenz;
  }
  if(fenz<=0){
    alert("NO top")
    document.getElementById("ya").disabled=true
  }

  document.cookie = "userfenz=" + fenz + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";


}




