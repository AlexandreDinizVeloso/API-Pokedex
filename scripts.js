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

function acessarGeracao() {
    let geracao = document.getElementById("geracaoPokemon").value
    let url = `https://pokemon.danielpimentel.com.br/v1/pokemon/geracao/${geracao}/50/1`
    fetch(url)
            .then((resposta) => resposta.json())
            .then((pokemon) => carregaGeracao(pokemon.pokemon))
            .catch((erro) => console.log(erro))
}

function checarPokemon() {
    let geracao = document.getElementById("geracaoPokemon").value
    acessarPokedex().then((pokemon)=>{
        if (geracao == pokemon.geracao) {
            carregaPokemon(pokemon)
        } else {
            alert("ERRO")
        }
    })
}

function carregaPokemon(pokemon) {
    let pesquisaPokemon = document.getElementById("pesquisaPokemon");
    pesquisaPokemon.innerHTML = ""
    let html = `
        <div class="molduraPokemonPesquisa">
            <img src="${pokemon.img_3d}" heigth="150" /> <br>
            <div class="infoPokemon">
                ${pokemon.nome} - ${pokemon.numero}
            </div>
        </div>
    `;
    pesquisaPokemon.insertAdjacentHTML("beforeend", html);
}

function carregaGeracao(pokemon) {
    let pesquisaPokemon = document.getElementById("pesquisaPokemon");
    pesquisaPokemon.innerHTML = ""
    for (let i = 0; i < pokemon.length; i++) {
        let html = `
            <div class="molduraPokemonGeracao">
                <img src="${pokemon[i].img_3d}" heigth="150" /> <br>
                <div class="infoPokemon">
                    ${pokemon[i].nome} - ${pokemon[i].numero}
                </div>
            </div>  
        `;  
        pesquisaPokemon.insertAdjacentHTML("beforeend", html);
    }
}
