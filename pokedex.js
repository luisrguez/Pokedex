console.log("Hello Danna");

const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    //Control de minusculas
    let pokeInput = pokeName.value.toLowerCase();
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        //Validando nuestro programa por si existe un error el programa no truene

        if(res.status != "200"){
            console.log(res);
            pokeImage("./img/PK2.png");
        }

        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png")

/* const imprimirPoke = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
    //console.log("Hola Danna");
} */