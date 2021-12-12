let r = fetch('https://meme-api.herokuapp.com/gimme');

let s = r.then(function (response) {
    return response.json();
});

s.then(function(a) {
    // displayData(a.data);
    console.log(s);
});


function displayData(data) {
       
        // let images=document.getElementById('images');
        let source=document.getElementById('source');

        for(let i=0;i<data.length;i++){
            let obj=data[i];
       let link= document.createElement('li');

       link.innerText=obj.url; 
       
        source.appendChild(link);
        console.log(data);
    }
       
    }