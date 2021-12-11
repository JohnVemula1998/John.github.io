var sum = function (){
    let x = document.getElementById('number1').value;
    x=parseInt(x);
    let a = function(){
    let y = document.getElementById('number2').value;
    y=parseInt(y);
    let b = function(){
        let z = document.getElementById('number3').value;
        z=parseInt(z);
        document.getElementById('result').innerText = ("sum of three numbers is: "+(x+y+z));
    }
    b();
    }
a();
    
}

var multiply = function (){
    let x = document.getElementById('number1').value;
    x=parseInt(x);
    let a = function(){
    let y = document.getElementById('number2').value;
    y=parseInt(y);
    let b = function(){
        let z = document.getElementById('number3').value;
        z=parseInt(z);
        document.getElementById('result').innerText = ("Multiplication of three numbers is: "+(x*y*z));
    }
    b();
    }
a();
    
}