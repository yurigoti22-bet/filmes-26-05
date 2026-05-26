const filmes = [
  { titulo: "Interestelar", genero: "Ficção", ano: 2014 },
  { titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação", ano: 2008 },
  { titulo: "Parasita", genero: "Drama", ano: 2019 },
  { titulo: "Invocação do Mal", genero: "Terror", ano: 2013 },
  { titulo: "Toy Story", genero: "Animação", ano: 1995 },
  { titulo: "Vingadores: Ultimato", genero: "Ação", ano: 2019 },
  { titulo: "A Origem", genero: "Ficção", ano: 2010 },
  { titulo: "Coringa", genero: "Drama", ano: 2019 },
  { titulo: "Corra!", genero: "Terror", ano: 2017 },
  { titulo: "Shrek", genero: "Comédia", ano: 2001 },
  { titulo: "Matrix", genero: "Ficção", ano: 1999 },
  { titulo: "Titanic", genero: "Drama", ano: 1997 },
  { titulo: "It: A Coisa", genero: "Terror", ano: 2017 },
  { titulo: "Deadpool", genero: "Comédia", ano: 2016 },
  { titulo: "Homem-Aranha no Aranhaverso", genero: "Animação", ano: 2018 },
  { titulo: "Gladiador", genero: "Ação", ano: 2000 },
  { titulo: "Duna", genero: "Ficção", ano: 2021 },
  { titulo: "Whiplash", genero: "Drama", ano: 2014 },
  { titulo: "Hereditário", genero: "Terror", ano: 2018 },
  { titulo: "Se Beber Não Case", genero: "Comédia", ano: 2009 },
  { titulo: "Frozen", genero: "Animação", ano: 2013 },
  { titulo: "John Wick", genero: "Ação", ano: 2014 },
  { titulo: "Avatar", genero: "Ficção", ano: 2009 }
];

const listaFilmes = document.getElementById("listaFilmes");
const filtroGenero = document.getElementById("genero");
const filtroAno = document.getElementById("ano");

const anos = [...new Set(filmes.map(f => f.ano))].sort();

anos.forEach(ano => {
  const option = document.createElement("option");
  option.value = ano;
  option.textContent = ano;
  filtroAno.appendChild(option);
});

function mostrarFilmes() {
  listaFilmes.innerHTML = "";

  const generoSelecionado = filtroGenero.value;
  const anoSelecionado = filtroAno.value;

  const filmesFiltrados = filmes.filter(filme => {
    return (
      (generoSelecionado === "Todos" || filme.genero === generoSelecionado) &&
      (anoSelecionado === "Todos" || filme.ano == anoSelecionado)
    );
  });

  if (filmesFiltrados.length === 0) {
    listaFilmes.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }

  filmesFiltrados.forEach(filme => {
    const card = document.createElement("div");
    card.classList.add("filme");

    card.innerHTML = `
      <h2>${filme.titulo}</h2>
      <p class="info">🎭 Gênero: ${filme.genero}</p>
      <p class="info">📅 Ano: ${filme.ano}</p>
    `;

    listaFilmes.appendChild(card);
  });
}

filtroGenero.addEventListener("change", mostrarFilmes);
filtroAno.addEventListener("change", mostrarFilmes);

mostrarFilmes();