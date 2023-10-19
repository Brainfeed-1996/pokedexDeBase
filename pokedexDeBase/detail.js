const grid = document.getElementById('grid')

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
    const results = data.results
    results.forEach((pokemon, index) => {
        const ceil = document.createElement('div')
        ceil.classList.add('item')
        const pokemonNumber = ++index

        ceil.onclick = function() {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
            .then(response => response.json())
            .then(data => {
                console.log(`Index: ${pokemonNumber}`)
                console.log(`Image Front: ${data.sprites.front_default}`)
                console.log(`Image Back: ${data.sprites.back_default}`)
                const name = document.createElement('div')
                console.log(`Name: ${data.name}`)
                function displayPokemon(pokemonArray) {
                pokemonArray.forEach((pokemon) => {
                 const indexDiv = document.getElementById('index');
                const imageFrontDiv = document.getElementById('image_front');
                const imageBackDiv = document.getElementById('image_back');

    indexDiv.innerHTML = `Index: ${pokemonNumber}`;
    imageFrontDiv.innerHTML = `<img src="${data.sprites.front_default}" alt="Front Image">`;
    imageBackDiv.innerHTML = `<img src="${data.sprites.back_default}" alt="Back Image">`;
  });
}
            })
        }
        
        const img = document.createElement('img')
        img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
        const name = document.createElement('div')
        const pokemonName = pokemon.name
        name.innerText = pokemonName
        ceil.appendChild(img)
        ceil.appendChild(name)
        grid.appendChild(ceil)
    })
})