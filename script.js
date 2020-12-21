var i = 0;
var time=3000;
function changeImage(){
    var slides = document.querySelectorAll('.mySlides img');
    document.getElementById('img').src = slides[i].src;
    if(i < slides.length-1){
        i=i+1;
    }
    else {
        i=0;
    }
    
    var set = setTimeout("changeImage(i)",time);
}

window.onload = changeImage();


function like(x){
    if(flag==0){
    x.src="Images/heart-solid.svg"; 
    flag=1;
    }
    else{
    x.src="Images/heart-regular.svg";
    flag=0;
    }
    
    }
    var flag=0;

var img1 = document.getElementById("dot1");
var modal1 = document.getElementById("myModal1");
var img2 = document.getElementById("dot2");
var modal2 = document.getElementById("myModal2");
var img3 = document.getElementById("dot3");
var modal3 = document.getElementById("myModal3");
var img4 = document.getElementById("dot4");
var modal4 = document.getElementById("myModal4");

img1.onclick=function (){
    if(modal1.style.display === "none"){
        modal1.style.display = "block";
    }
    else{
        modal1.style.display = "none";
    }
}
img2.onclick=function (){
    if(modal2.style.display === "none"){
        modal2.style.display = "block";
    }
    else{
        modal2.style.display = "none";
    }
}
img3.onclick=function (){
    if(modal3.style.display === "none"){
        modal3.style.display = "block";
    }
    else{
        modal3.style.display = "none";
    }
}
img4.onclick=function (){
    if(modal4.style.display === "none"){
        modal4.style.display = "block";
    }
    else{
        modal4.style.display = "none";
    }
}

var playModal=document.getElementById('play')
var pop1=document.getElementById("playMusic1");


var pop2=document.getElementById("playMusic2");

var pop3=document.getElementById("playMusic3");

var pop4=document.getElementById("playMusic4");


pop1.onclick=function (){
    if(playModal.style.display === "none"){
        playModal.style.display = "block";
    }
    else{
        playModal.style.display = "none";
    }
}

pop2.onclick=function (){
    if(playModal.style.display === "none"){
        playModal.style.display = "block";
    }
    else{
        playModal.style.display = "none";
    }
}

pop3.onclick=function (){
    if(playModal.style.display === "none"){
        playModal.style.display = "block";
    }
    else{
        playModal.style.display = "none";
    }
}

pop4.onclick=function (){
    if(playModal.style.display === "none"){
        playModal.style.display = "block";
    }
    else{
        playModal.style.display = "none";
    }
}


