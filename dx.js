// 从浏览器的cookie中获取所有cookie字符串
var cookies = document.cookie;
// 查找名为"userfenz="的cookie
var userDataCookie = cookies.split(";").find(function(cookie) {
  return cookie.trim().startsWith("userfenz=");
});

// 如果找到了"userfenz="的cookie
if (userDataCookie) {
  // 提取cookie中的分数值
  var userDataValue = userDataCookie.split("=")[1];
  // 将分数值设置到页面上ID为"fen"的元素内显示
  document.getElementById("fen").innerText = userDataValue;
}

// 获取ID为"jg"的元素，清空其内容
let jgb=document.getElementById("jg");
jgb.innerHTML="";

// 定义计算输赢的函数
function suan(){
  // 获取显示分数的元素
  let fen= document.getElementById("fen");
  // 生成1到2之间的随机整数作为游戏结果
  let jg = Math.floor(Math.random() * 2)+1;
  // 获取用户选择的元素
  var zhi=document.getElementById("select");
  // 获取用户输入的值（假设为押注）
  var yf=document.getElementById("yf");
  
  // 将显示的分数转换为数字
  fenz=Number(fen.innerHTML);
  // 将用户输入的押注转换为数字
  yfz=Number(yf.value);
  // 将用户选择的数字转换为数字
  zhiz=Number(zhi.value);
  // 将随机结果转换为数字
  jgz=Number(jg);
  
  // 判断用户是否猜中
  if(jgz==zhiz){
    // 如果猜中，记录"win"并累加分数
    jgb.innerHTML=jgb.innerHTML+"win"+"<br>";
    fenz=fenz+yfz;
    document.getElementById("fen").innerText=fenz;
  } else {
    // 如果没猜中，记录"lose"并减少分数
    jgb.innerHTML=jgb.innerHTML+"lose"+"<br>";
    fenz=fenz-yfz;
    document.getElementById("fen").innerText=fenz;
  }
  
  // 分数低于等于0时，禁止再次投注并提示
  if(fenz<=0){
    alert("余额不足");
    document.getElementById("ya").disabled=true;
  }

  // 更新cookie中的分数值，确保页面刷新后分数仍能保留
  document.cookie = "userfenz=" + fenz + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
}
