//  write a  typescript program which contains one function named as Maximum
//  That function accepts array of numbers and returns the summation of array



function Summation(Arr : number[]) : number
{
    var i = 0;
    var Sum = 0;

    for(i = 0; i<Arr[i] ; i++)
    {
       Sum = Sum+ Arr[i];
    }


    return Sum;
}

var Arr :number[];
var iRet : number =0;

Arr = [23,6,7,4,5,7];
 
iRet = Summation(Arr);
console.log("Summation of array  is :"+iRet);



