const pesquisaPokemon = document.getElementById("pesquisaPokemon");

async function acessarPokedex() {
  const pokemon = document.getElementById("nomePokemon").value;
  const url = `https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${pokemon}`;
  try {
    const resposta = await fetch(url);
    const { pokemon: p } = await resposta.json();
    return p;
  } catch (erro) {
    console.log(erro);
  }
}

async function acessarGeracao() {
  const geracao = document.getElementById("geracaoPokemon").value;
  const url = `https://pokemon.danielpimentel.com.br/v1/pokemon/geracao/${geracao}/50/1`;
  try {
    const resposta = await fetch(url);
    const { pokemon: p } = await resposta.json();
    carregaGeracao(p);
  } catch (erro) {
    console.log(erro);
  }
}

function checarPokemon() {
  const geracao = document.getElementById("geracaoPokemon").value;
  acessarPokedex().then((pokemon) => {
    if (geracao == pokemon.geracao) {
      carregaPokemon(pokemon);
    } else {
      alert("ERRO");
    }
  });
}

function carregaPokemon(pokemon) {
  pesquisaPokemon.innerHTML = "";
  const html = `
    <div class="molduraPokemonPesquisa">
        <img src="${pokemon.img_3d}" height="150" /> <br>
        <div class="infoPokemon">
            ${pokemon.nome} - ${pokemon.numero}
        </div>
    </div>
  `;
  pesquisaPokemon.insertAdjacentHTML("beforeend", html);
}

function carregaGeracao(pokemon) {
  pesquisaPokemon.innerHTML = "";
  pokemon.forEach((p) => {
    const html = `
      <div class="molduraPokemonGeracao">
          <img src="${p.img_3d}" height="150" /> <br>
          <div class="infoPokemon">
              ${p.nome} - ${p.numero}
          </div>
      </div>
    `;
    pesquisaPokemon.insertAdjacentHTML("beforeend", html);
  });
}

document.getElementById("botaoPesquisa").addEventListener("click", checarPokemon);
document.getElementById("botaoPesquisaGeracao").addEventListener("click", acessarGeracao);
