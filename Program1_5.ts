// write a typescript program which contains one function named as fibonacci.
// That function accept one numner from user and print fibonacci series 
// till that number

 //   Input : 21
//    Output : 1  1  2  3  5  8  13  21

function Fibonacci(No : number ) : void
{ 
    var Sum : number = 0;
    var No1 =0;
    var No2 = 1;

    var i = 0;

        Sum = No1+No2;
        for(i= 1; i< No ; ++i)
        {
            
            if(Sum <= No)
            {

                console.log(Sum);
                Sum = No1+No2;
              
            
               No1= No2;
               No2= Sum;
            }
        }
    }






var No : number = 21;

Fibonacci(No);

