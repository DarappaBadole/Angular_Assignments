/*
one clss circle
radius , PI
parameterised constructor ->Accept one parameter 
*/

class Circle 
{
    Radius :number;
    PI : number;

    constructor(No1 : number)
    {
        this.Radius = No1;
        this.PI = 3.14;
    }

    Area() : number
    {
        return this.PI * this.Radius* this.Radius;

    }
}

var obj1  = new Circle(10);
var obj2  = new Circle(20);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of circle is :"+Ret);

Ret = obj2.Area();
console.log("Area of circle is :"+Ret);
