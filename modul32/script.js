var input=document.getElementById('input_id');
var btn=document.getElementById('btn_id');
var text=document.getElementById('teksti_id');

btn.onclick=function(){
    text.innerHTML=input.value;
}
// var text="The best school in the world is Ismail Qemali";
// var result=text.search("Ismail Qemali");
// document.getElementById("result1").innerHTML=result; 

// var text="The best school in the world is Ismail Qemali";
// var result=text.search(/Ismail Qemali/);
// document.getElementById("result2").innerHTML=result; 

// var text="The best school in the world is Ismail Qemali";
// var result=text.replace(/Ismail Qemali/,"Another School");  
// document.getElementById("result3").innerHTML=result; 

// var text="abcdef";
// var regex=new RegExp('abc')
// document.getElementById('result4').innerHTML=regex.test(text);

// var text="My school is the best school in the world";
// var regex=/school/g;
// document.getElementById("result5").innerHTML=text.match(regex);

// var text="My school is the best school in the world";
// var regex=/i/g;
// document.getElementById("result6").innerHTML=text.match(regex);  

// var text="My school is the best school in the world";
// var regex=/[abc]/g;
// document.getElementById("result7").innerHTML=text.match(regex);  

// var text="Ismail Qemali is in top 10 best school of the world";
// var regex=/[0-9]/g;
// document.getElementById("result8").innerHTML=text.match(regex); 

// var text="My school is the best school in the world";
// var regex=/(top|best|school)/g;
// document.getElementById("result9").innerHTML=text.match(regex);  

// var text="100 percent";
// var regex=/\d/g;
// document.getElementById("result10").innerHTML=text.match(regex);  

// var text="My school is the best school in the world";
// var regex=/\s/g;
// document.getElementById("result11").innerHTML=text.match(regex);  

var text="Heeey,how are you";
var regex=/e+/g;
document.getElementById("result12").innerHTML=text.match(regex);  