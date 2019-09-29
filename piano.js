/*
Author: Rúben Filipe
Sounds by: DANMITCH3LL
https://freesound.org/people/DANMITCH3LL/
*/
let Audio_do = new Audio("Notas/c.wav");
let Audio_re = new Audio("Notas/d.wav");
let Audio_mi = new Audio("Notas/e.wav");
let Audio_fa = new Audio("Notas/f.wav");
let Audio_sol = new Audio("Notas/g.wav");
let Audio_la = new Audio("Notas/a.wav");
let Audio_si = new Audio("Notas/b.wav");
let Audio_do2 = new Audio("Notas/c2.wav");

function toca_do(){
    Audio_do.play();     
    Audio_do.currentTime = 0.1;
}

function toca_re(){
    Audio_re.play();   
    Audio_re.currentTime = 0.1  
}

function toca_mi(){
    Audio_mi.play();     
    Audio_mi.currentTime = 0.1
}

function toca_fa(){
    Audio_fa.play();   
    Audio_fa.currentTime = 0.1  
}

function toca_sol(){
    Audio_sol.play();   
    Audio_sol.currentTime = 0.1  
}

function toca_la(){
    Audio_la.play();     
    Audio_la.currentTime = 0.1
}

function toca_si(){
    Audio_si.play();    
    Audio_si.currentTime = 0.1 
   
}


function toca_do2(){
    Audio_do2.play();    
    Audio_do2.currentTime = 0.1 
   
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

