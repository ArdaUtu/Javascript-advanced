let output = document.querySelector('#FortniteCosmetics')


fetch('https://fortnite-api.com/v2/cosmetics/new')
.then((response) => response.json())
.then((data) => {
    console.log(data.data.items.br);
    for (let item of data.data.items.br){
        output.innerHTML += `
             
            <h3 class="name">${item.name}</h3>
            <img class="image" src=${item.images.featured}>
            
        `;
    }

});
