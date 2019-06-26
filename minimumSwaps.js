function minimumSwaps(popularity) {
    let counter = 0;
    for (let i = popularity.length; i > 0; i--) {
       let maxval = Math.max(...popularity);
       let maxIndex = popularity.indexOf(maxval);
       if (maxval !== popularity[0]) {
          let tempVal = popularity[0];
          popularity[0] = popularity[maxIndex];
          popularity[maxIndex] = tempVal; 
          popularity.splice(0, 1);
          counter++;
       }
       else {
          popularity.splice(0, 1); 
       }
    } return counter;
 }
 
 console.log("answer", minimumSwaps([3,3,1,2])); ///1
 console.log("answer", minimumSwaps([3,1,2])); ///1
 console.log("answer", minimumSwaps([3,1,2,4])); ///2
 
 