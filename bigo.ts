// Big O Notation - way to categorize an alorithms time and space efficiency based on input (growth is with respect to input)


//Find the sum of a strings' ASCII codes starting from the left but terminate when a specified character is found 
function sum_of_char(n:string) : number {
    let sum = 0;
    for (let i = 0; i  < n.length; ++i){

        const charCode = n.charCodeAt(i)

        if (charCode === 69) {
            return sum; 
        }

        sum += charCode
    }

    return sum;
} // For this fucntion it is O(N) 

/*
Common Complexities in increasing order

O(1)
O(logn) ex. BST -> Binary Search Trees
O(n) ex. a for loop 
O(n logn) ex. Quicksort
O(n^2) ex. Nested Loops, exponent states the number of loops
Last two are not ideal for any modern computer to execute
O(2^n)
O(n!)


O(srt(n))

*/
