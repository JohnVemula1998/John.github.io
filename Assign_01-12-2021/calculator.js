var calci = {
    num_arr:[],
    push:function(){
        var number = prompt("Enter the number");
        number = parseInt(number);
        this.num_arr.push(number);
    },
    sum:function(){
        var addition = 0;
        for(var i =0;i<this.num_arr.length;i++){
            addition +=this.num_arr[i];
        }
        console.log("Sum of given numbers is: "+addition );
    }, 
    multi:function() {
        var product = 1;
        for(var i =0;i<this.num_arr.length;i++){
            product *=this.num_arr[i];
        }
        console.log("Multiplication of given numbers is "+product);
    },
    modulo_division : function(){
        var num1 =prompt("Enter first number for modulo division");
        var num2 =prompt("Enter second number for modulo division");
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        var modulus=0;
        if(num1>num2){ 
            modulus = (num1%num2);
        }else{
            modulus = (num2%num1);
        }
        
        console.log("Modulo division of given numbers is "+modulus);
    },
    division : function(){
        var num1 =prompt("Enter first number for  division");
        var num2 =prompt("Enter second number for division");
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        var result=num1/num2;
        console.log("division of given numbers is "+result);
    },
    diffrence : function(){
        var num1 =prompt("Enter first number for diffrence b/n numbers");
        var num2 =prompt("Enter second number for diffrence b/n numbers");
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        var result=(num1 - num2);
        
        
        console.log("Diffrence of given numbers is "+ result);
    },
    Enter_Calculator :function() {
        var function_call = prompt("Enter the operator add/multi/diff/mod/div");
        if(function_call == "diff"||function_call=="mod"||function_call=="div"){
            if(function_call=="diff"){
                this.diffrence();
            }else if(function_call == "mod"){
                this.modulo_division();
            }else if(function_call == "div"){ 
                this.division();
            }
        }else{ 
        var n = prompt("how many numbers you want to sum/multi");
        n = parseInt(n);
        for(let i = 0; i<n;i++){
            this.push();
        }
        if(function_call=="add"){
            this.sum();
        }else{
            this.multi();
        }
    }
    }
    
};
calci.Enter_Calculator();