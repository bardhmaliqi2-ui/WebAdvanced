var circle=document.getElementById("circle");
var showTime=document.getElementById("time");
var timestart=new Date().getTime();

function showCircle(){
    circle.style.display="block";
    circle.style.top=Math.random()*500+'px';
    circle.style.left=Math.random()*500+'px';
    circle.style.background=randomColor();
    timestart=new Date().getTime();       
}
showCircle();