function findMax(numbers){
  var max = numbers[0];
  for(var i=1; i<numbers.length; i++){
    if(numbers[i]>max){
      max = numbers[i];
    }
  }
  console.log(max);
}

var test=[5, 0, 34, 71, 2];
findMax(test);
