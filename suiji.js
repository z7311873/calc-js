function ks() {
var tian  = document.getElementById("she");
she=tian.value;
var zhan=document.getElementById("lie");
var suiji=11
ci=1
while(suiji>=10){
  suiji = Math.floor(Math.random() * Number(she)) + 1;
  console.log(suiji);
  zhan.innerHTML=zhan.innerHTML+ci+": "+suiji+"</br>";
  ci++
}
alert(ci)
}







