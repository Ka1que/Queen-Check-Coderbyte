let queenAtack = [[]];
let queenPos = [];
let kingPos = [];
let kingPosArray =[]
let kingMove = [[]]

function QueensAtackArea(){
  
  //area diagonal 

  for(x=1; x<9; x++){
    if( (queenPos[0]-x) < 0 || (queenPos[1]-x) < 0){
      break
      }
    
    queenAtack.push([queenPos[0]- x,queenPos[1]- x])
  }

  for(x=1; x<9; x++){
    if( (queenPos[0]+ x) > 7 || (queenPos[1]+x) > 7){
      break
      }
    
    queenAtack.push([queenPos[0]+ x,queenPos[1]+ x])
  }

  //Outra diagonal
  for(x=1; x<9; x++){
    if( (queenPos[0]+ x) > 7 || (queenPos[1]-x) < 0){
      break
      }
    
    queenAtack.push([queenPos[0]+ x,queenPos[1]- x])
  }

  for(x=1; x<9; x++){
    if( (queenPos[0]- x) < 0 || (queenPos[1]+ x) > 7){
      break
      }
    
    queenAtack.push([queenPos[0]- x,queenPos[1] + x])
  }

  // Horizontal

  for(x=1; x<9; x++){
    if( (queenPos[0] - x) < 0){
      break
      }
    
    queenAtack.push([queenPos[0]- x, queenPos[1]])
  }

  for(x=1; x<9; x++){
    if( (queenPos[0] + x) > 7 ){
      break
      }
    
    queenAtack.push([queenPos[0]+ x,queenPos[1]])
  }

  // Vertical

  for(x=1; x<9; x++){
    if( (queenPos[1] - x) < 0){
      break
      }
    
    queenAtack.push([queenPos[0], queenPos[1] - x])
  }

  for(x=1; x<9; x++){
    if( (queenPos[1] + x) > 7 ){
      break
      }
    
    queenAtack.push([queenPos[0],queenPos[1] + x ])
  }

}

function KingMove(){

  for(x=-1; x<=1; x++){
    for(y=-1; y<=1; y++){

      if( x != 0 || y!= 0 ){
        kingMove.push([(kingPos[0] + x),(kingPos[1] + y)])
        
      }  
    }
  }

}

function isCheck(){
  
    for(x=0; x < queenAtack.length; x++){
      if(queenAtack[x].toString() == kingPosArray[0].toString()){
        return true;
        console.log("tá em check deu certo");
      }
    }

  return false;
}

function CapaMoves(){
  var moves = 0;

  for(x=0; x<= kingMove.length;x++){
    for(y=0; y<queenAtack.length;y++){
      if(queenAtack[y].toString() == kingMove[x].toString() ){
        moves++
        console.log(moves+" ");
      }

    }
  }
  

  return moves
}

function QueenCheck(strArr) {

  queenPos[0] = parseInt(strArr[0].charAt(1));
  queenPos[1] = parseInt(strArr[0].charAt(3));
  
  kingPos[0] = parseInt(strArr[1].charAt(1));
  kingPos[1] = parseInt(strArr[1].charAt(3));

  kingPosArray[0] = [parseInt(strArr[1].charAt(1)),parseInt(strArr[1].charAt(3))]

  //console.log(queenPos[0]+ " " + queenPos[1]);
  //console.log(kingPos[0]+ " " + kingPos[1]);
  QueensAtackArea();
  console.log("area de atak da rainha");
  for(x=0; x < queenAtack.length; x++){
    
    console.log(queenAtack[x] + " " + x);
  }

  KingMove();

  console.log(" movimentos do rei");
  for(x=0; x < kingMove.length; x++){
    
    console.log(kingMove[x] + " " + x);
  }

  // Verifica se está em check
  if (isCheck()){
    //movimentos válidos
    return CapaMoves();

  } else {
    return -1
  }

  return strArr;
}
   
// keep this function call here 
console.log(QueenCheck(readline()));
