console.log("Hello Danna");

const fetchPokemon = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    fetch(url).then((res) => {
        //console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
    })
}

fetchPokemon();