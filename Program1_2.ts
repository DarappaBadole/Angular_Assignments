// write a typescript program which contains one function named as Area . that 
// function should calculate area of circle. Accept value of radius from user 
// and return its area. default value of PI should be 3.14 if it not provided by user

//  Input : 5
//  Output : area of circle is 78.5


function Area(No : number) : number
{
    var PI : number = 3.14;

    var Area : number = 0;
    
    Area = PI * (No * No);
    return Area;


}





var rad : number = 5;
var Ret : number = 0;

Ret = Area(rad);
console.log("area of circle is :"+Ret);