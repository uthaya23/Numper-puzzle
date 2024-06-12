/*let msg1=(document.getElementById('msg1'));
let msg2=(document.getElementById('msg2'));
let msg3=(document.getElementById('msg3'));

var result= Math.floor(Math.random()*10);
console.log(result);
var no_of_guess = 0;
var guessed_num=[];

function play()
{
  
  var guess=document.getElementById('guess').value;
  
  if (guess<1 || guess>10)
  {
    alert("please enter the number 0 to 10");
  }
  else{
    no_of_guess = no_of_guess+1;
    guessed_num.push(guess);  

  if(guess > result)
    {
        msg1.textcontent=" given num is high";
        msg2.textcontent=" NO OF GUESSES:"+no_of_guess;
        msg3.textcontent=" GUESSED NO ARE: "+ guessed_num;
    }
   else if(guess < result)
    {
        msg1.textcontent=" given num is low" ;
        msg2.textcontent=" NO OF GUESSES:"+no_of_guess;
        msg3.textcontent=" GUESSED NO ARE: "+ guessed_num;
    }
    else if(guess == result)
    {
        msg1.textcontent=" your num  is Correct"+ guess;
        msg2.textcontent=" your lucky no is: "+result;
        msg3.textcontent=" you guessed:"+ guessed_num + "Guesses"
    }
}
} */


var msg1=(document.getElementById('msg1'));
let msg2=(document.getElementById('msg2'));
let msg3=(document.getElementById('msg3'));
var result= Math.floor(Math.random()*10);
console.log(result);
var no_of_guess = 0;
var guessed_num=[];
function play()
{
  var guess=document.getElementById('guess').value;
  if (guess<1 || guess>10)
  {
    alert("please enter the number 0 to 10");
  }
  else{
    no_of_guess = no_of_guess+1;
    guessed_num.push(guess);
  if(guess > result)
    {
        msg1.textContent=" GIVEN NUM IS high";
        msg2.textConten=" NO OF GUESSES:"+no_of_guess;
        msg3.textContent=" GUESSED NO ARE: "+ guessed_num;
    }
   else if(guess < result)
    {
        msg1.textContent=" GIVEN NUM IS low";
        msg2.textContent=" NO OF GUESSES:"+no_of_guess;
        msg3.textContent=" GUESSED NO ARE: "+ guessed_num;
    }
    else if(guess == result)
    {
        msg1.textContent=" GIVEN NUM IS CORRECT ";
        msg2.textcontent=" your lucky no is: "+result;
        msg3.textContent=" you guessed:"+ guessed_num + "Guesses"
    }
}
}
