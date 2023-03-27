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

class CircleX extends Circle
{
    constructor(Data : number)
    {
        super(Data);
    }

    Circumference() : number
    {
        var Ans : number = 0;

        Ans = 2 * this.PI * this.Radius;
        return Ans;

    }


}

var obj = new CircleX(10.7);
var Ret : number =0;

Ret = obj.Area();
console.log("Area of circle is :"+Ret);

Ret = obj.Circumference();
console.log("circumference of circle is :"+Ret);
