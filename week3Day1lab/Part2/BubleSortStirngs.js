String.prototype.bubbleSort = function(Array){
    let len = Array.length;
    for (let i = 0; i < len; i++) { //you can also use "for in", so you don't need the variable "len"
        for (let j = 0; j < len; j++) {
            if (Array[j] > Array[j + 1]) {
                let tmp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = tmp;
            }
        }
    }
    return Array;
  };



console.log([6,4,0, 3,-2,1].bubbleSort())

