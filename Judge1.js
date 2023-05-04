var accu=0;
function Judge1(){
  var response=prompt("What is your answer?");
  var answer1="IVE";
    if(response==answer1){
      alert(response+" is the right answer");
      accu=accu+1;
    }
    else{
      alert(response+" is not the right answer");
    }
}

function Judge2(){
  var response=prompt("What is your answer?");
  var answer1="BTS";
    if(response==answer1){
      alert(response+" is the right answer");
      accu=accu+1;
    }
    else{
      alert(response+" is not the right answer");
    }
}

function Judge3(){
  var response=prompt("What is your answer?");
  var answer1="SEVENTEEN";
    if(response==answer1){
      alert(response+" is the right answer");
      accu=accu+1;
    }
    else{
      alert(response+" is not the right answer");
    }
}

function Judge4(){
  var response=prompt("What is your answer?");
  var answer1="GFRIEND";
    if(response==answer1){
      alert(response+" is the right answer");
      accu=accu+1;
    }
    else{
      alert(response+" is not the right answer");
    }
    switch(accu){
      case 0:
      alert("May be you do not familiar with KPOP" )
      break;
      case 1:
      alert("You are a rookie\nThe answer is: IVE,BTS,SEVENTEEN,GFRIEND" )
      accu=accu-1
      break;
      case 2:
      alert("You are a sophomore\nThe answer is: IVE,BTS,SEVENTEEN,GFRIEND" )
      accu=accu-2
      break;
      case 3:
      alert("You are so intelligent\nThe answer is: IVE,BTS,SEVENTEEN,GFRIEND" )
      accu=accu-3
      break;
      case 4:
      alert("You are so sophisticated\nThe answer is: IVE,BTS,SEVENTEEN,GFRIEND" )
      accu=accu-4
      break;
    }
}
