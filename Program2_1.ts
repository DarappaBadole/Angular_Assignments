//  write a  typescript program which contains one function named as Maximum
//  That function accepts array of numbers and returns the largest 
//   number from array

function Maximum(Arr : number[]) : number
{
    var i = 0;
    var Max = Arr[0];
    for(i = 0; i<Arr[i] ; i++)
    {
        if(Arr[i] > Max)
        {
            Max = Arr[i];
        } 
    }


    return Max;
}

var Arr :number[];
var iRet : number =0;

Arr = [23,89,6,29,56,45,77,32];
 
iRet = Maximum(Arr);
console.log("Maximum number is :"+iRet);



