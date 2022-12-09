var audioElement = new Audio("./bensound-love.mp3");
var firstReproduction = 0;
var soundMuted=document.getElementById("sound");
var a = document.getElementsByClassName('agradecimiento')

function reproduceMusic(push){
    a[0].style.display = 'block';
    
    if (firstReproduction == 0){
        audioElement.setAttribute("loop","");
        audioElement.play();
        audioElement.muted=false;
        if(audioElement.muted==false){
            soundMuted.setAttribute("src","./icons/sound-svg.svg")
        }
        firstReproduction++;
    }else{
        audioElement.muted=!audioElement.muted;
        if(audioElement.muted==false){
            soundMuted.setAttribute("src","./icons/sound-svg.svg")
        }else{
            soundMuted.setAttribute("src","./icons/sound-muted-svg.svg")
        }
        console.log(audioElement.muted)
        firstReproduction++;
    }
}

var navBarStatus = false;
function navBar(){
    let showMenu = document.querySelector('.main-nav');
    let hamburguer = document.querySelector('.main-nav__hamburguer-container');
    if (navBarStatus==false){
        showMenu.style.display="block";
        hamburguer.style.background="url('./icons/close-menu.svg') center/cover no-repeat";
    }else{
        showMenu.style.display="none";
        hamburguer.style.background="url('./icons/Menu-Mobile.svg') center/cover no-repeat";
    }
    navBarStatus=!navBarStatus;
}