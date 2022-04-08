/*
Instruction:
Given two integers a and b, return the sum of the two integers without using the operators + and -.
 
Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 
Constraints:
-1000 <= a, b <= 1000
*/

var getSum = function(a, b) {
  
/*  
Binary operators used:
& (AND) - produces a digit of 1 if both numbers have a digit of 1
^ (XOR) - produces a digit of 1 only if one number (not both) have a digit of one
<< (Left Shift) - adds one binary zero onto the number; increments operand.
*/
  
  while (b != 0){
    let carry = a & b;
      a = a ^ b;
        b = carry << 1;
    }
  
    return a;    
};
