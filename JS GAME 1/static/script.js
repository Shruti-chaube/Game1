function ageindays(){
    var birthyear=prompt('Can u tell me in which year you were born');
var ageindays=((2021-birthyear)*365)*24;
//console.log(ageindays);
var h1=document.createElement('h1');
var text=document.createTextNode('You Are   '+ ageindays +'   hours old');
h1.setAttribute('id','ageindays');
h1.appendChild(text);
document.getElementById('flex box result').appendChild(h1);
} 
function reset(){
document.getElementById('ageindays').remove();
}

