let x = 0;
let y = 0;
let z = 0;
let t = 0;

setinterval_id = null;
let day = document.createElement("td");
let hour = document.createElement("td");
let min = document.createElement("td");
let sec = document.createElement("td");
let start_btn = document.createElement("button");
start_btn.innerText = "start";
let pause_btn = document.createElement("button");
pause_btn.innerText = "Pause";
let restart_btn = document.createElement("button");
restart_btn.innerText = "Restart";
 let reset_btn = document.createElement("button");
 reset_btn.innerText = "Reset";

let apollo = function(){
    x++;
    day.innerText = t;
    hour.innerText = z;
    min.innerText = y;
    sec.innerText = x;
    if(x==60){
        y++;
        x=0;
        if(y==60){
            z++;
            y=0;
            if(z==24){
                t++;
                z=0;
            }
        }
        
        
    }
}


let tbl = document.getElementById("watch");
tbl.appendChild(day);
tbl.appendChild(hour);
tbl.appendChild(min);
tbl.appendChild(sec);

let div = document.getElementById("buttons");
div.appendChild(start_btn);
div.appendChild(pause_btn);
div.appendChild(restart_btn);
div.appendChild(reset_btn);

pause_btn.addEventListener("click",function(){
    clearInterval(setinterval_id);
});

start_btn.addEventListener('click',function(){
    setinterval_id = setInterval(apollo,1000);
    this.innerText = "Resume";
});

restart_btn.addEventListener('click',function(){
    clearInterval(setinterval_id);
    setinterval_id = setInterval(apollo,1000);
    x=0;y=0;z=0;t=0;
    day.innerText = t;
    hour.innerText = z;
    min.innerText = y;
    sec.innerText = x;
    
});

reset_btn.addEventListener('click',function(){
    clearInterval(setinterval_id);
    x=prompt("Enter secs");
    x=parseInt(x);
    x=0;y=0;z=0;t=0; y=prompt("Enter secs");
    y=parseInt(y);
    z=prompt("Enter secs");
    z=parseInt(z);
    t=prompt("Enter secs");
    t=parseInt(t);
    
    day.innerText = t;
    hour.innerText = z;
    min.innerText = y;
    sec.innerText = x;
    
});


