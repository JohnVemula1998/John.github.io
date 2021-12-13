fetch('https://meme-api.herokuapp.com/gimme').then((responce) => {
            responce.json().then(data => {
                console.log(data);
                document.getElementById("mem").src = data.preview[0];
            })
        });