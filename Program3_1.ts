/*
create one application which contains one class named as aithmetic
Arithmetic class contains three characteristics as Number1 , number2 
create one parameterised constructor which accept two values and assign it
to Number1 and number2 .
 In Arithmetic class we have to write four methods as addition , substraction,
 multiplication and division .

*/

class Arithmetic
{
    Number1 : number;
    Number2 : number;

    constructor(No1 : number , No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }

    Addition() : number
    {
        return this.Number1 + this.Number2

    }

    Substraction() : number
    {
        return this.Number1 - this.Number2

    }
     
    Multiplication() : number
    {
        return this.Number1 * this.Number2

    }
    
    Division() : number
    {
        return this.Number1 / this.Number2

    }


} 

var Obj1 = new Arithmetic(10,5);
var Obj2 = new Arithmetic(20,10);
var Ret : number = 0;

Ret = Obj1.Addition();
console.log("Addition is :"+Ret);
Ret = Obj1.Substraction();
console.log("Substaction  is :"+Ret);
Ret = Obj1.Multiplication();
console.log("Multiplictaion is :"+Ret);
Ret = Obj1.Division();
console.log("Division is :"+Ret);




