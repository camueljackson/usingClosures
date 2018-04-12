function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var index = 0//i make sure to assign first index to a variable

    return function() {
        for ( i = 0; i < 3; i++ ){//we didnt need an if statment
            index++;//I simply add index variable up everytime the funciton is called through console.log
            return(list[index - 1])//and i return the value at the index "index"of the array.
        }//the - 1 is because the very first time i run the function, line 7 will happen, meaning index will be 1 right away(which is the second element in the array.
    }
}

var rollLoadedDie = makeLoadedDie();
console.log("version 2");
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log("");