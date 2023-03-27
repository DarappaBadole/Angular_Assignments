//write a typescript program which contains one function named as maximum . that function accepts three parameters and it should returns largest value 
// from three input parameters 
//   input : 23  89  6
 //   output :   maximum number is 89


 function Maximum(No1 : number , No2 : number , No3 : number) : number
 {
    var Max = No1;

    if(No2 > Max)
    {
        Max = No2;
    }
    else if(No3 > Max)
    {
        Max = No3;

    }
    
    return Max;

 }


 var No1 : number = 23;
 var No2 : number = 89;
 var No3 : number  = 6

 var Ret :number = 0;

 Ret = Maximum(23,89,6);
 console.log("The maximum number is :"+Ret);