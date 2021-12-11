fetch("https://reqres.in/api/user").then(responce =>{
    responce.json().then(
        data => {
            console.log(data.data);
            if(data.data.length > 0){
                var temp = "";
                data.data.forEach((user)=> {
                    temp +="<tr>";
                    temp += `<td> ${user.id} </td>`;
                    temp += `<td> ${user.name} </td>`;
                    temp += `<td> ${user.year} </td>`;
                    temp += `<td> ${user.color} </td>`;
                    temp += `<td> ${user.pantone_value} </td></tr>`;
                });
                document.getElementById('data').innerHTML = temp;
            }
        }
    )

});

// function fetchdata() {
//     fetch("https://reqres.in/api/user")
//     .then(response => {
//         if(!response.ok){
//             throw Error("ERROR");
//         }
//         console.log(response);

//     }).then(data => {
//         console.log(data);
//         const html = data.data.map(user =>{
//             return `<table>
//             <tr>  ${user.id} </tr>
//             <tr> ${user.name} </tr>
//             <tr> ${user.year} </tr>
//             <tr> ${user.color} </tr>
//             <tr> ${user.pantone_value} </tr>

//             </table>`
//         }).join("");
//         //console.log(html);
//         document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }
// fetchdata();

