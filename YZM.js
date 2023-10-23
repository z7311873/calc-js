function huan(){
code = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
for (var i = 0; i < 8; i++) {
var randomIndex = Math.floor(Math.random() * characters.length);
code += characters.charAt(randomIndex);
    }
    
tu=document.getElementById("tu")


//console.log(t.toDataURL());

tuz=tu.getContext("2d")
tuz.font='50px Arial'
tuz.fillText(code,50,50)
var image = new Image();
image.src = tu.toDataURL()
console.log(image.src)
document.body.appendChild(image);

}
huan()
function yz(){
    var z=document.getElementById("yzz").value
    if(z==code){
        alert("you are right !!")
    }
    else{
        alert("you are error!")
        document.getElementById("wai").innerHTML="<canvas id='tu'></canvas>"
        huan()
    }
}
  





