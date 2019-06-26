function maxMin(operations, x){
    let resultArr = [];

    for(let i = 0; i < x.length; i++){
        let max = x[0]; 
        let min = x[0];
        if(x[i]>max){
           max = x[i];
        }
        if(x[i]<min){
           min = x[i];
        }
        if(operations[i] === "push"){
            resultArr.push(min*max);
        }
        if(operations[i] === "pop"){
            let temp = [];
            for(let num of resultArr){
                if(num !== x[i]){
                    temp.push(num);
                }
            } 
            let tempmin = Math.min(...temp);
            let tempmax = Math.max(...temp);
            resultArr.push(tempmin*tempmax);
        }
    }
    return resultArr;
}

 console.log(maxMin(["push","push"],[3,2])); //[9,6]
 console.log(maxMin(["push","push","push","pop"],[1,2,3,1])); //[1,2,3,6]

