let url = "https://pokemon.danielpimentel.com.br/v1/pokemon/geracao/1/50/1";

fetch(url)
        .then((resposta) => resposta.json())
        .then((pokemon) => carregaPokedex(pokemon.pokemon))
        .catch((erro) => console.log(erro))

function carregaPokedex(pokemon) {
    let pokedex = document.getElementById("pokedex");
    pokedex.innerHTML = ""
    for (let i = 0; i < pokemon.length; i++) {
        let html = `
            <div class="molduraPokemon">
                <img src="${pokemon[i].img_3d}" heigth="150" /> <br>
                <div class="infoPokemon">
                    ${pokemon[i].nome} - ${pokemon[i].numero}

                </div>
            </div>
        `;    
        pokedex.insertAdjacentHTML("beforeend", html);
    }
}
