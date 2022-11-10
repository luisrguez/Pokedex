console.log("Hello Danna");

const fetchPokemon = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
    })
}

fetchPokemon();