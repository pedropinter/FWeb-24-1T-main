let imgPK = document.querySelector("#fotoPK"); // Imagem do Pokémon
let formPK = document.querySelector("#formPK"); // Formulário de busca
let inputPK = document.querySelector("#inputPK"); // Campo de entrada do nome/id

let idPK = document.querySelector("#idPK"); // ID do Pokémon
let nomePK = document.querySelector("#nomePK"); // Nome do Pokémon

let tipo1 = document.querySelector("#tipo1PK"); // Primeiro tipo
let tipo2 = document.querySelector("#tipo2PK"); // Segundo tipo

let habiPK = document.querySelector("#habiPK"); // Habilidade
let pesoPK = document.querySelector("#pesoPK"); // Peso
let alturaPK = document.querySelector("#alturaPK"); // Altura

let btnVoltar = document.querySelector("#btnVoltar"); // Botão de voltar
let btnProximo = document.querySelector("#btnProximo"); // Botão de próximo

let audio = document.querySelector("#musica"); // Musica de fundo
let btnPlay = document.querySelector("#btnPlay"); // Botão de play/pause

let numeroPokedex = 1; // Número atual da Pokédex

// Função para buscar dados da API
const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); // Requisição à API
    const data = await APIresponse.json(); // Conversão da resposta em JSON
    return data; // Retorna os dados
}

// Função que exibe os dados do Pokémon na tela
const showPokemon = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon); // Busca os dados

    imgPK.src = dataPokemon.sprites.front_default; // Imagem do Pokémon
    idPK.innerHTML = `ID: ${dataPokemon.id}`; // ID
    nomePK.innerHTML = `Nome: ${dataPokemon.name}`; // Nome

    tipo1.innerHTML = `Tipo: ${dataPokemon.types[0].type.name}`; // Primeiro tipo
    if (dataPokemon.types[1] != undefined) {
        tipo2.innerHTML = dataPokemon.types[1].type.name; // Segundo tipo (se tiver)
    } else {
        tipo2.innerHTML = ""; // Se não tiver, limpa o campo
    }

    habiPK.innerHTML = `Habilidade: ${dataPokemon.abilities[0].ability.name}`; // Habilidade
    pesoPK.innerHTML = `Peso: ${dataPokemon.weight / 10}KG`; // Peso (convertido)
    alturaPK.innerHTML = `Altura: ${dataPokemon.height / 10}m`; // Altura (convertido)

    const audio = new Audio(dataPokemon.cries.latest); // Cria áudio do Pokémon
    audio.play(); // Reproduz o som
}

// Formulário buscando Pokémon por nome ou ID
formPK.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o reload da página
    showPokemon(inputPK.value.toLowerCase()); // Chama função para mostrar o Pokémon
    numeroPokedex = inputPK.value; // Atualiza o número da Pokédex
})

// Botão "Voltar"
btnVoltar.addEventListener("click", (event) => {
    if (numeroPokedex > 1) { // Não deixa o numero do Pokémon menor que 1
        numeroPokedex--;
    }
    showPokemon(numeroPokedex); // Mostra o Pokémon anterior
})

// Botão "Próximo"
btnProximo.addEventListener("click", (event) => {
    if (numeroPokedex < 1025) { // Não pode passar do último Pokémon da API
        numeroPokedex++;
    }
    showPokemon(numeroPokedex); // Mostra o próximo Pokémon
})

// Botão de play/pause da música de fundo
btnPlay.addEventListener('click', (event) => {
    if (audio.paused) {
        audio.play(); // Toca a música
        btnPlay.textContent = "Pause"; // Atualiza texto do botão
    } else {
        audio.pause(); // Pausa a música
        btnPlay.textContent = "Play"; // Atualiza texto do botão
    }
});

showPokemon(numeroPokedex); // Mostra o primeiro Pokémon ao carregar a página
