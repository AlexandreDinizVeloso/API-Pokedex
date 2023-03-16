function acessarPokedex() {
    let pokemon = document.getElementById("nomePokemon").value
    let url = `https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${pokemon}`
    fetch(url)
            .then((resposta) => resposta.json())
            .then((pokemon) => carregaPokedex(pokemon.pokemon))
            .catch((erro) => console.log(erro))
}

function carregaPokedex(pokemon) {
    let pesquisaPokemon = document.getElementById("pesquisaPokemon");
    pesquisaPokemon.innerHTML = ""
    let html = `
        <div class="molduraPokemon">
            <img src="${pokemon.img_3d}" heigth="150" /> <br>
            <div class="infoPokemon">
                ${pokemon.nome} - ${pokemon.numero}

            </div>
        </div>
    `;
    pesquisaPokemon.insertAdjacentHTML("beforeend", html);
}
