var wakeuptime;
var dstime;
var sleeptime;
var noon=12;

function.showCurrentTime(){
    var clock=document.getElementById('clock');
    var currrentTime=new Date();

    var hours=currrentTime.getHours();
    var minutes=currrentTime.getMinutes();
    var seconds=currrentTime.getSeconds();

    var meridian="AM";
    if(hours>=noon){
        meridian="PM";
    }
    var clockTime= hours+ ":" +minutes+ ":" +seconds+ ":" +meridian;
    clock.innerText=clockTime;
    changeImage();
};
var oneSecond=1000; 
setInterval(showCurrentTime, oneSecond);

function changeImage(){
    var time = new Date().getHours();
    console.log(time);

    var image = "images/ds_clock.png";
    var imageHTML = document.getElementById("timeImage");

    if(time == wakeuptime){
        image = "images/morning.gif";
        console.log("morning");
    }
    else if(time == dstime){
        image = "images/class.gif";
    }
    else if(time == sleeptime){
        image = "images/night.gif";
    }
    imageHTML = image;
    console.log(imageHTML.src);
}
function updateClock(){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
    wakeuptime = wakeUpTimeSelector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dstime = dsTimeSelector.value;

    var sleepTimeSelector = document.getElementById('sleepTimeSelector');
    sleeptime = sleepTimeSelector.value;
}
var saveButton=document.getElementById("saveButton");
saveButton.addEventListener("click",updateClock);