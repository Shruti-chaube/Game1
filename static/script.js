function ageindays(){
    var birthyear=prompt('Can u tell me your  birth year');
var ageindays=(( 2021-birthyear)*365);
//console.log(ageindays);
var h1=document.createElement('h1');
var text=document.createTextNode('You Are   '+ ageindays +'   days  old');
h1.setAttribute('id','ageindays');
h1.appendChild(text);
document.getElementById('flex box result').appendChild(h1);
} 
function reset(){
document.getElementById('ageindays').remove();
}
 



function age(){
var age=prompt('What is your age');
if (age>=18){
    status=alert('CONGRATULATIONS !!!!YOU ARE ELEIGIBLE FOR VOTING! ');
    console.log(status);
}else {
    status=alert(' SORRY !!!!YOU ARE NOT ELEIGIBLE FOR VOTING!');
    console.log(status);
}
var h1=document.createElement('h1');
}





// rock paper scissors

function rpsGame(yourChoice) {
   console.log(yourChoice);
var humanChoice, botChoice;
humanChoice=yourChoice.id;
botChoice=  numberToChoice(randToRpsInt());
console.log('Computer choice:',botChoice);
results=decideWinner(humanChoice,botChoice);
console.log(results);
message=finalMessage(results);
console.log(message);
rpsFrontEnd(yourChoice.id,botChoice,message);
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
return ['Rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase ={
      'Rock':{'scissors':1,'Rock':0.5,'paper':0},
      'paper':{'Rock':1,'paper':0.5,'scissors':0},
      'scissors':{'Rock':0,'paper':1,'scissors':0.5}
    }
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}



function finalMessage([yourScore,computerScore]){
if(yourScore===0){
    return{'message':'you lost!','color':'red'};
}else if(yourScore===0.5){
    return{'message':'  Tie!','color':'yellow'};
}else{
    return{'message':'You won','color':'purple'};
}
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
      'Rock': document.getElementById('Rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
    }
    //lets remove all images 
    document.getElementById('Rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
   
    humanDiv.innerHTML="<img src='"+imageDatabase[humanImageChoice]+"' height=150 width=150 style ='box-shadow:0px 10px 50px rgba(37,50,223,1);'>"
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size: 60px; padding: 30px;'>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='"+imageDatabase[botImageChoice]+"' height=150 width=150 style ='box-shadow:0px 10px 50px rgba(243,38,38,1);'>"
    document.getElementById('flex-1').appendChild(humanDiv);
    document.getElementById('flex-1').appendChild(messageDiv);
    document.getElementById('flex-1').appendChild(botDiv);  
}
//Challege4:change the color of all button


var all_buttons=document.getElementsByTagName('button');

var copyAllButtons=[];
for (let i=0; i<all_buttons.length; i++ ) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if (buttonThingy.value==='red'){
        buttonsRed();
    }else if(buttonThingy.value==='green'){
        buttonsGreen();
    }else if (buttonThingy.value==='reset'){
        buttonColorReset();
    }else if(buttonThingy.value==='random'){
        randomColors();
    }
}
function buttonsRed()  {
    for(let i=0; i <all_buttons.length;  i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen()  {
    for(let i=0; i <all_buttons.length;  i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset() {
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
     let Choices =['btn-primary','btn-danger','btn-success','btn-warning']
    
    for ( let i=0; i <all_buttons.length; i++){
        let randomNumber= Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(Choices[randomNumber]);
    }
}

