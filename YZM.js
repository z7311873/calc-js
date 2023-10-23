function huan(){
code = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
for (var i = 0; i < 8; i++) {
var randomIndex = Math.floor(Math.random() * characters.length);
code += characters.charAt(randomIndex);
    }
    
document.getElementById("yzm").innerHTML ="code:  &nbsp&nbsp           "+ code;
}
huan()
function yz(){
    var z=document.getElementById("yzz").value
    console.log(z)
    console.log(code)
    if(z==code){
        alert("you are right !!")
    }
    else{
        alert("you are error!")
        huan()
        document.getElementById("yzz").value=""
    }
}
  





