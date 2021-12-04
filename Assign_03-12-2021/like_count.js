var count = 0;
function count_plus(){
    count=count+1;
    let count_like = document.getElementById('count');
    count_like.innerText = count;
}
function count_minus(){
    count=count-1;
    let count_decrease = document.getElementById('count');
    count_decrease.innerText = count;
}