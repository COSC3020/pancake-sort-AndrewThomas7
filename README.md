# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Sources:

1.)-https://sortvisualizer.com/pancakesort/- Used this website to get a visual for how pancake sort worked as well as learning it was related to selection sort

2.)- https://www.youtube.com/watch?v=g-PGLbMth_g

3.)https://www.geeksforgeeks.org/how-to-analyse-loops-for-complexity-analysis-of-algorithms/

4.) https://github.com/COSC3020/pancake-sort-Hrics12-1/blob/main/README.md-Used this repository to see what I should do because I was confused on how to find the time complexity without a recurrance relation.

# Run Time Analysis Report:

### Runtime for Average compares

Taking a look at the code I've written we can determine the number of comparisons it makes 

```javascript
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

```

We can see that no inital comparisons are are made until we get to the While loop condition, here we make one comparison and move until we hit the conditionals. Here we can analyze what happens for the best and worst case scenarios.

Before continuing note we already have 1 comparison.

Additionally its important to cover how I implemented my flip function so we can see how the analysis below works:

*Flip Analysis*

```Javascript
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

```
Here I used to stacks to implement my flip, however what's important is that when we flip the whole list we have one for-loop. This is a runtime of $n$. Then when we have to flip anything thats not the whole list we have to do two for-loops, however because they aren't nested the time is still $n$.

Moving on:


*<span style='color:Red'>Worst case:</span>* List is not sorted and max value is not at the end.

Here before we check the first condition we run the max math function which of time $n$. Then we check the first condition, which will be true in this case. Then it does a flip, which for this scenario runs a time of $n$ so we have 2n+2(The plus 2 comes from the while condition and the first if condition).

Now our max value will be the first item so we run another comparison and do flip again, however this time we flip the whole list and end up with n+1.

We hit the last conditional which is just one comparison. Giving a total of $n(2n+2+n+1+1) $ comparisons(*The additional n comes from the fact that the while loop iterates n times*). Dropping the lower order terms and constants we then have $n(n)=n^2=\theta(n^2)$

*<span style='color:Green'>Best Case:</span>* List is already sorted and only has to run the third conditional each time. However we still run through the length of the list once checking the max every time which is still a complexity of $\theta(n^2)$.


### Complexity of the flips

For the <span style='color:Red'>Worst Case </span> scenario we have that Flip gets called twice per iteration through the while loop which would be 2n flips. Dropping the constant we get $\Theta(n)$

<span style='color:green'>Best case: </span> In this case the function just gets called once per iteration leaving us with a total of $n$ flips thus this time complexity is also $\theta(n)$

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

