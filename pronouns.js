/*
var continueBtn = document.getElementById("continue");
var nextBtn = document.getElementById("next");
var checkBtn = document.getElementById("check");
*/
var x,y,z;
var pics =["<img src='man.png'/>","<img src='woman.png'/>","<img src='cat.png'/>","<img src='manWoman.png'/>","<img src='you.png'/>"]
var verbs=["love","like","see","hear","help"];
var subPronArray =["he","she","it","they","you"];
var obPronArray = ["him","her","it","them","you"];

function showExer(){
  document.getElementById("exerciseSec").style.display="inline";
  document.getElementById("lessonSec").style.display="none";
}
function showLesson(){
  document.getElementById("lessonSec").style.display="inline";
  document.getElementById("exerciseSec").style.display="none";
}
function toggleCheckNext(){
  document.getElementById("checkBtn").style.display="none";
  document.getElementById("nextBtn").style.display="inline";
}
function nextQuestion(){
  document.getElementById("checkBtn").style.display="inline";
  document.getElementById("nextBtn").style.display="none";
}
function genExercise(){
	
  z = Math.floor(Math.random()*((4-0)+1)+0);
  x = Math.floor(Math.random()*((4-0)+1)+0);
  y = Math.floor(Math.random()*((4-0)+1)+0);
  if(x===0 || x=== 1 || x===2){
	 document.getElementById("givenVerb").innerHTML=verbs[z]+"s"; 
  }else{
	 document.getElementById("givenVerb").innerHTML=verbs[z]; 
  }
  
  document.getElementById("computerSub").innerHTML= pics[x];
  document.getElementById("computerOb").innerHTML= pics[y];
  document.getElementById("userSub").value="";
  document.getElementById("userObj").value="";
  document.getElementById("userSub").style.background="white";
  document.getElementById("userObj").style.background="white";
}
function checkExer(){
	var ss =document.getElementById("userSub").value;
	var s = ss.toLowerCase();
	var oo = document.getElementById("userObj").value;
	var o = oo.toLowerCase();
	var s = subPronArray.indexOf(s);
	var o = obPronArray.indexOf(o);
	
	
	if(s === x){
		document.getElementById("userSub").style.background="green";
	}else{
		document.getElementById("userSub").style.background="red";
	}
	
	if(o === y){
		document.getElementById("userObj").style.background="green";
	}else{
		document.getElementById("userObj").style.background="red";
	}
		
}

function continueButton(){
	showExer();
	genExercise();
}
function checkButton(){
	checkExer();
	toggleCheckNext();
}
function nextButton(){
	nextQuestion();
	genExercise();
}
function backButton(){
	showLesson();
}
/*
continueBtn.addEventListener("click", showExer);
continueBtn.addEventListener("click", genExercise);
backBtn.addEventListener("click", showLesson);
checkBtn.addEventListener("click", checkExercise);
nextBtn.addEventListener("click", nextQuestion);
nextBtn.addEventListener("click", genExercise);
*/





