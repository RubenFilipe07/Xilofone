/*
Author: Rúben Filipe
https://github.com/rubenfilipe07

Sounds by: DANMITCH3LL
https://freesound.org/people/DANMITCH3LL/
*/

let Audio_do = new Audio("Notas/c.mp3");
let Audio_re = new Audio("Notas/d.mp3");
let Audio_mi = new Audio("Notas/e.mp3");
let Audio_fa = new Audio("Notas/f.mp3");
let Audio_sol = new Audio("Notas/g.mp3");
let Audio_la = new Audio("Notas/a.mp3");
let Audio_si = new Audio("Notas/b.mp3");
let Audio_do2 = new Audio("Notas/c2.mp3");


function draw(){
 document.getElementById("c").style = 'transition: 450ms; background-color: rgb(163, 82, 189);';
 document.getElementById("d").style = 'transition: 500ms; background-color: rgb(51, 99, 183)';
 document.getElementById("e").style = 'transition: 550ms; background-color: rgb(45, 148, 189)';
 document.getElementById("f").style = 'transition: 600ms; background-color: rgb(50, 126, 89)';
 document.getElementById("g").style = 'transition: 700ms; background-color: rgb(65, 152, 78)';
 document.getElementById("a").style = 'transition: 750ms; background-color: rgb(213, 187, 57)';
 document.getElementById("b").style = 'transition: 800ms; background-color: rgb(228, 176, 33)';
 document.getElementById("c2").style = 'transition: 850ms; background-color: rgb(219, 37, 37)';      
}


function toca_do(){
    Audio_do.play();     
    Audio_do.currentTime = 0.1;
    anima_do();
}

function toca_re(){
    Audio_re.play();   
    Audio_re.currentTime = 0.1  
    anima_re();
}

function toca_mi(){
    Audio_mi.play();     
    Audio_mi.currentTime = 0.1
    anima_mi();
}

function toca_fa(){
    Audio_fa.play();   
    Audio_fa.currentTime = 0.1  
    anima_fa();
}

function toca_sol(){
    Audio_sol.play();   
    Audio_sol.currentTime = 0.1  
    anima_sol();
}

function toca_la(){
    Audio_la.play();     
    Audio_la.currentTime = 0.1
    anima_la();
}

function toca_si(){
    Audio_si.play();    
    Audio_si.currentTime = 0.1 
    anima_si();
}


function toca_do2(){
    Audio_do2.play();    
    Audio_do2.currentTime = 0.1 
    anima_do2();
}


function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    var str = keyPressed(evt);
    
    if(str=='a' || str=='1'){
        toca_do();
    }

    if(str=='s'|| str=='2'){
        toca_re();
    }

    if(str=='d'|| str=='3'){
        toca_mi();
    }

    if(str=='f'|| str=='4'){
        toca_fa();
    }

    if(str=='g'|| str=='5'){
        toca_sol();
    }

    if(str=='h'|| str=='6'){
        toca_la();
    }

    if(str=='j'|| str=='7'){
        toca_si();
    }

    if(str=='k'|| str=='8'){
        toca_do2();
    }
};



function anima_do(){
 var tcl = document.getElementById("c");
   tcl.style = "transition: 200ms; background-color: #242424;";
   setTimeout(function() {
      tcl.style = "background-color: rgb(163, 82, 189);";
   }, 200);
}

function anima_re(){
    var tcl = document.getElementById("d");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(51, 99, 183);";
      }, 200);
}

function anima_mi(){
    var tcl = document.getElementById("e");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(45, 148, 189);";
      }, 200);
}

function anima_fa(){
    var tcl = document.getElementById("f");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(50, 126, 89);";
      }, 200);
}

function anima_sol(){
    var tcl = document.getElementById("g");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(65, 152, 78);";
      }, 200);
}

function anima_la(){
    var tcl = document.getElementById("a");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(213, 187, 57);;";
      }, 200);
}

function anima_si(){
    var tcl = document.getElementById("b");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(228, 176, 33);";
      }, 200);
}

function anima_do2(){
    var tcl = document.getElementById("c2");
      tcl.style = "transition: 200ms; background-color: #242424;";
      setTimeout(function() {
         tcl.style = "background-color: rgb(219, 37, 37);";
      }, 200);
}