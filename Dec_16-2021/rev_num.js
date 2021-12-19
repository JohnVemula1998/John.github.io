let input = document.getElementById('ip');
let btn = document.createElement('button');
btn.innerText = "reverse the number";
let div =  document.getElementById('container');
div.appendChild(btn);
let ans = document.createElement("p");
div.appendChild(ans);


btn.addEventListener("click",reverseNum);


function reverseNum(){
    let rev_num = "";
    let num = (input.value);
    for(let i = num.length-1;i>=0;i--){
        rev_num += num[i];
    }
    if(parseInt(rev_num)){
        ans.innerText = "Reversed Number is: "+ rev_num;
    }else {
        ans.innerText = "Reversed String is: "+ rev_num;
    }
}
