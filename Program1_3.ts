// write a typescript program which contains one function named as 
// DisplayFactors. that function should accept one number and display 
// factors of thet number.

// Input : 20
// output : 1  2  4  5  10


function DisplayFactors(No : number) :  void
{
    var iCnt : number = 0;

    console.log("The factors of the given numbrs are :\n");

    for(iCnt = 1 ; iCnt <= (No/2) ; iCnt++)
    {
        if(No % iCnt == 0)
        {
            console.log( iCnt);
        }

    }
}



var No : number = 20

DisplayFactors(No);