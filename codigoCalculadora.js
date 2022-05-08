function uno(){
    document.getElementById("result").value+='1';   
}
function dos(){
    document.getElementById("result").value+='2';
}
function tres(){
    document.getElementById("result").value+='3';
}
function cuatro(){
    document.getElementById("result").value+='4';
}
function cinco(){
    document.getElementById("result").value+='5';
}
function seis(){
    document.getElementById("result").value+='6';
}
function siete(){
    document.getElementById("result").value+='7';
}
function ocho(){
    document.getElementById("result").value+='8';
}
function nueve(){
    document.getElementById("result").value+='9';
}
function cero(){
    document.getElementById("result").value+='0';
}
function coma(){
    document.getElementById("result").value+='.';
}

/* ############################################# */

function dividir(){
    document.getElementById("result").value+='/';
}
function multiplicar(){
    document.getElementById("result").value+='*';
}
function restar(){
    document.getElementById("result").value+='-';
}
function sumar(){
    document.getElementById("result").value+='+';
}
function borrar(){
    document.getElementById("result").value='';
}

/* ############################################# */

function calcular(){
    document.getElementById("resultAlmacenado").value=document.getElementById("result").value;
    document.getElementById("result").value=eval(document.getElementById("result").value);
}