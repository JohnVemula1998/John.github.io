let tasks = [];

let btn = document.getElementById('add_task_button');


let delete_task = function (event) {
    let id = event.target.id;
    //console.log(id);
    let element_id = `li_${id}`;
    //console.log(element_id);
    
    let elem = document.getElementById(element_id);
    console.log(elem);
    elem.remove();

    let arr = id.split("_");
    let index = arr[1];
    //console.log(index);

    tasks.splice(index, 1);
}

let check_mark = function(e) {
    let id = e.target.id;
    let index = id.split("_")[1];
    if(tasks[index]==""){
        alert("There no Task");
    }else{
        let x = document.getElementById(`li_btn_${index}`);
        x.style.textDecorationLine = "line-through";

    }
    
}

let edit_task = function(event) {
    let id = event.target.id;
    let index = id.split("_")[1];
    let edit_task = prompt("Enter new task");
    tasks[index] = edit_task;
    display();
}

let display = function () {
    
    let ul = document.getElementById('task_list');
    ul.innerText = "";
    for(let i = 0; i < tasks.length; i++) {
        let single_task = tasks[i];

        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo_div");

        let new_elem = document.createElement('li');
        new_elem.innerText = single_task;
        new_elem.classList.add("list");

        let btn = document.createElement('button');
        btn.innerText = "❌";
        btn.classList.add("button3");
        btn.addEventListener('click', delete_task);
        

        let edit_btn = document.createElement('button');
        edit_btn.innerText = '📝';
        edit_btn.classList.add("button2");
        edit_btn.addEventListener('click', edit_task);
        

        let check_btn = document.createElement("button");
        check_btn.innerHTML = '✅';
        check_btn.classList.add("button1");
        check_btn.addEventListener('click',check_mark)


        check_btn.id = `check_${i}`;
        edit_btn.id = `edit_${i}`;        
        btn.id = `btn_${i}`;
        new_elem.id = `li_btn_${i}`;

        new_elem.appendChild(check_btn);
        new_elem.appendChild(btn);
        new_elem.appendChild(edit_btn);
        ul.appendChild(new_elem);
    
    }
}

let add_task = function () {
    let input = document.getElementsByName('task')[0];
    let val = input.value;
    tasks.push(val);
    display();
}

btn.addEventListener('click', add_task);
