// write a typescript program which contains one function named 
// as ChkPrime. That function should accept one number and it should 
// return true if the given number is prime and otherwise return false

//   Input : 11
//   Output :  it is prime number


function ChkPrime(No : number) : boolean
{
    if((No % 1 ==0) &&(No %  No == 0))
    {
        return true;
    }
    else
    {
        return false;
    }


}

var No : number = 11;
var bRet : boolean  = false;

bRet = ChkPrime(No);

if(bRet == true)
{
    console.log("The given number is prime number\n");
}

else
{
    console.log("The number is not prime \n");
}