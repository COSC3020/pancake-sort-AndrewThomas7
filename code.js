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
    for (i > n; i < array.length; i++) {
        Ostack.splice(i, 0, array[i]);
    }
    return Ostack;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    if(array.len==0){
        return array;
    }
    function pancakeSort_(array,ArrayLen){
        var arrPop=array.slice(0,ArrayLen+1)
        var max = Math.max(...arrPop);
        var Flipindex=array.indexOf(max)
        var Flipindex = ArrayLen - arrPop.indexOf(max);
        if (ArrayLen == 1 && array[0]==Math.min(...arrPop)) {
            return array;
        }
        // if(max==array[1]){
        //     return pancakeSort_(flip(array,ArrayLen))
        // }
        if (Flipindex == 0) {
            ArrayLen -= 1;
            return pancakeSort_(array,ArrayLen);
        }
        var fliparr=flip(array,Flipindex+1);
        return pancakeSort_(fliparr,ArrayLen)
    };
        return pancakeSort_(array,array.length-1)
}
