//1--
function clickme(){
document.getElementById("hi").innerText = "MERN stack"
}


//2--
function touchme(){
 document.getElementsByClassName("tag")[0].innerText = "Im First h1 Element"
 
}



//3--
function time(){

    let i= new Date().toLocaleTimeString();
    document.getElementById("clock").innerText=i;
}
let sec = 1000;
setInterval(time, sec);



//4--
function btn(){
document.getElementById("h1").innerText = "Welcome to Elevation Academy"
}



//5
function hide(){
    document.getElementById("hideme").style.display="none"
}
