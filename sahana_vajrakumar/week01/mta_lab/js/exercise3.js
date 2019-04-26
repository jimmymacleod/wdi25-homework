let subway = {
  n:["n34" , "n28" , "n23" , "Union Square" , "n8"],
  l:["l8" , "l6" , "Union Square" , "l3" , "l1"],
  sixLine:["Grand Central" , "six33" , "six28" , "six23" , "Union Square" , "Astor Place"],


sourceLine:function(srcLine , srcStop){
newArray = [];
  for(let key in subway){
if(srcLine === key){
if(subway[key].indexOf(srcStop) < subway[key].indexOf("Union Square")){
  newArray = subway[key].slice(subway[key].indexOf(srcStop) , subway[key].indexOf("Union Square")+1)
}else{
  newArray = subway[key].slice(subway[key].indexOf("Union Square") , subway[key].indexOf(srcStop)+1)
  newArray.reverse();
}
}
    }
    return newArray.join();
  },

destLine:function(destLine , destStop){
  newArray = [];
    for(let key in subway){
  if(destLine === key){
  if(subway[key].indexOf(destStop) < subway[key].indexOf("Union Square")){
    newArray = subway[key].slice(subway[key].indexOf(destStop) , subway[key].indexOf("Union Square") )
    newArray.reverse();
  }else{
    newArray = subway[key].slice(subway[key].indexOf("Union Square")+1 , subway[key].indexOf(destStop)+1)

  }
  }
      }
      return newArray.join();
},

planMyTrip:function(start , startPoint , stop , stopPoint){
  if(start === stop){

    console.log(`the stops are ${subway.sourceLine(start , startPoint)} , ${subway.destLine(stop , stopPoint)} `);
  }else{

  console.log(`The stops are ${subway.sourceLine(start , startPoint)} CHANGE AT UNION SQUARE follwed by the stops ${subway.destLine(stop , stopPoint)} `);
}
}

}


subway.planMyTrip("sixLine" , "Astor Place" , "l" , "l8");
