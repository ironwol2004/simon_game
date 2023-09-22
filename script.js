var buttonColours=["green","red","yellow","blue"];
var randomPattern=[];
var patternClicked=[];
var lvl=0;
var cont =false;
var gameOver=false;
function gamePattern(){
var randomNumber=Math.floor(Math.random()*4);
var randomChosenColour=buttonColours[randomNumber];
randomPattern.push(randomChosenColour);
$("#"+randomChosenColour).css("opacity","0.5");
    setTimeout(function () {
        $("#"+randomChosenColour).css("opacity","1");
    },400);
var audio=new Audio("./sounds/"+randomChosenColour+".mp3");
audio.play();
}
$(".btn").click(function(){
    var cl=$(this).attr("id");
patternClicked.push(cl);
var audio=new Audio("./sounds/"+cl+".mp3");
audio.play();
anscheck();
setTimeout(function () {
  if(patternClicked.length===randomPattern.length){lvl=lvl+1;  patternClicked=[];gameRun();}
},1500);
if(cont===false){var aud=new Audio("./sounds/wrong.mp3" ) ;aud.play();game_over();}});
if(!cont){$(document).keypress(function(){
  cont=true;

    gameRun();

});
$(".st").click(function(){
  cont=true;

    gameRun();

});}
function anscheck(){
  cont=true;
 for(var i=0;i<patternClicked.length;i++){
     if(patternClicked[i]!=randomPattern[i]){
         cont=false;break;
     }
}}
function gameRun(){
    if(cont===true){
        gamePattern();
        $("h1").text("level "+(lvl+1));
    }
    else{game_over();
    }
}
function game_over() {gameOver=true;
    randomPattern=[];
    patternClicked=[];
    if(gameOver){$("h1").text("Press any key to restart or");
    $("h1").addClass("game-over");
    setTimeout(function(){$("h1").removeClass("game-over");},3000);
    lvl=0;

  }
    gameOver=false;

}
