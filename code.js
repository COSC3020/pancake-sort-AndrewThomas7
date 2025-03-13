function flip(array, n) {
    var Ostack = [];
    if (n > array.length) {
        var Istack = [];
        var arrLen = array.length
        for (i = 0; i <= arrLen - 1; i++) {
            Istack.push(array[array.length - 1])
            array.pop()
        }
        return Istack;
    }
    var B = array.slice(0, n)
    for (i = 0; i < n; i++) {
        Ostack.push(B[B.length - 1])
        B.pop()
    }
    for (i = n; i < array.length; i++) {
        Ostack.splice(i, 0, array[i]);
    }
    return Ostack;
}
// console.log(flip(Testarr, 1))

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var ArrayLen=array.length-1
    while(ArrayLen>0){
        var arrPop=array.slice(0,ArrayLen+1)
        var max = Math.max(...arrPop);
        var Flipindex = arrPop.indexOf(max)+1;
        if(max!=array[ArrayLen]&&max!=array[0]){
            array=flip(array,Flipindex);
        }
        if(max==array[0]){
           array= flip(array,ArrayLen+1);
        }
        if(max==array[ArrayLen]){
               ArrayLen= ArrayLen-1;
            }

    }
    return array;
}
