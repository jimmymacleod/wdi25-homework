let surge = function(question){

if(question[question.length-1] == "?"){
  console.log('sure');
}

else if(question == question.toUpperCase()){
  console.log('Woah, chill out!');
}
else if(question == false){
  console.log('Fine. Be that way!');
}else{
console.log('whatever');
};
};
surge('hi?');
