function searchArray(array,target){
  for(let i=0;i<array.length;i++){
    if(array[i] === target){
        console.log(`Target is present ${target} in the list at the position of ${i+1}.`);
        break
    }
  }
}

searchArray(['i' , 'am', 'a','good','boy'],'boy');