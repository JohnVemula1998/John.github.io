var sum = function (a){
    a=prompt("Enter first number");
    a = parseInt(a);

    var b = function (b){
        b = prompt("Enter second number");
        b = parseInt(b);
        var c = function (c){
            c = prompt("Enter third number");
            c = parseInt(c);
            let res = a+b+c;
            console.log("sum of three numbers is "+res);
        }
        return c;

    }
    return b;
}
sum()()();