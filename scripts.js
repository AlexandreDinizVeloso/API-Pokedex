function acessarPokedex() {
    let pokemon = document.getElementById("nomePokemon").value
    let url = `https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${pokemon}`
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((resposta) => resposta.json())
            .then((pokemon) => resolve(pokemon.pokemon))
            .catch((erro) => reject(erro))
    })
}
function checarPokemon() {
    let geracao = document.getElementById("geracaoPokemon").value
    acessarPokedex().then((pokemon)=>{
        if (geracao == pokemon.geracao) {
            carregaPokedex(pokemon)
        } else {
            alert("ERRO")
        }
    })
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
