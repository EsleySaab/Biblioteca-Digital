const movies = [
  {
    name: "Os Goonies",
    description:
      "Jovens encontram um misterioso mapa do tesouro e começam a seguir as pistas, entrando em um fabuloso mundo subterrâneo de passagens secretas, perigosas armadilhas e um antigo galeão pirata que esconde moedas de ouro.",
    img: "https://m.media-amazon.com/images/I/81v9kAgiOaL._AC_SX569_.jpg",
    director: "Richard Donner",
    year: 1985,
    genre: "Aventura",
    ISBN: "978-0736430507",
  },
  {
    name: "Batman: Assault on Arkham",
    description:
      "Batman precisa impedir o Coringa de destruir Gotham City, enquanto enfrenta um novo grupo de vilões: o Esquadrão Suicida.",
    img: "https://m.media-amazon.com/images/I/81jTV4y4FpL._AC_SX522_.jpg",
    director: "Jay Oliva, Ethan Spaulding",
    year: 2014,
    genre: "Animação, Ação, Crime",
    ISBN: "978-1401250833",
  },
  {
    name: "Os Garotos Perdidos",
    description:
      "Os irmãos adolescentes Michael e Sam se mudam com a sua mãe para uma pequena cidade no norte da Califórnia. Enquanto o jovem Sam encontra novos amigos com interesses semelhantes, o angustiado Michael acaba se apaixonando por Star, que está envolvida com David, o líder de uma gangue local de vampiros. Ao se dar conta do que está acontecendo, Sam e seus novos amigos embarcam na missão de salvar Michael e Star dos mortos-vivos.",
    img: "https://m.media-amazon.com/images/I/71iajjPtobL._AC_SX569_.jpg",
    director: "Joel Schumacher",
    year: 1987,
    genre: "Terror, Comédia",
    ISBN: "978-0446353477",
  },
  {
    name: "De Volta para o Futuro",
    description:
      "O adolescente Marty McFly é transportado para 1955 quando uma experiência do excêntrico cientista Doc Brown dá errado. Ele viaja pelo tempo em um carro modificado e acaba conhecendo seus pais ainda jovens. O problema é que Marty pode deixar de existir porque ele interferiu na rotina dos pais, que correm o risco de não se apaixonar mais. Para complicar ainda mais a situação, Marty precisa voltar para casa a tempo de salvar o cientista.",
    img: "https://m.media-amazon.com/images/I/91lRDuAIV6L._AC_SX569_.jpg",
    director: "Robert Zemeckis",
    year: 1985,
    genre: "Ficção Científica, Aventura",
    ISBN: "978-0553340196",
  },
  {
    name: "Scarface",
    description:
      "Após receber residência permanente nos Estados Unidos em troca do assassinato de um oficial do governo cubano, Tony Montana se torna o chefe do tráfico de drogas em Miami. Matando qualquer um que entre em seu caminho, Tony eventualmente se torna o maior traficante da Flórida, controlando quase toda a cocaína que entra em Miami. Porém, a pressão da polícia, as guerras com cartéis colombianos e sua própria paranoia servem para alimentar as chamas de sua eventual queda.",
    img: "https://m.media-amazon.com/images/I/71hzm7Yh01L._AC_SX569_.jpg",
    director: "Brian De Palma",
    year: 1983,
    genre: "Policial, Drama",
    ISBN: "978-0393356811",
  },
  {
    name: "O Mágico de Oz",
    description:
      "Dorothy e seu cachorro Totó são levados para a terra mágica de Oz quando um ciclone passa pela fazenda de seus avós no Kansas. Eles viajam em direção à Cidade Esmeralda para encontrar o Mago Oz e no caminho encontram um Espantalho, que precisa de um cérebro, um Homem de Lata sem um coração e um Leão Covarde que quer coragem. O Mago pede ao grupo que tragam a vassoura da Bruxa Malvada do Oeste a fim de ganharem sua juda.",
    img: "https://m.media-amazon.com/images/I/911Vq15gIXL._AC_SX569_.jpg",
    director: "Victor Fleming",
    year: 1939,
    genre: "Aventura, Fantasia",
    ISBN: "978-1783293698",
  },
]

const books = [
  {
    name: "É assim que acaba",
    description:
      "Da autora das séries Slammed e Hopeless. Um romance sobre as escolhas corretas nas situações mais difíceis. As coisas não foram sempre fáceis para Lily, mas isso nunca a impediu de conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, mudou para Boston e abriu a própria loja. Então, quando se sente atraída por um lindo neurocirurgião chamado Ryle Kincaid, tudo parece perfeito demais para ser verdade. Ryle é confiante, teimoso, talvez até um pouco arrogante e se sente atraído por Lily. Porém, sua grande aversão a relacionamentos é perturbadora. Além de estar sobrecarregada com as questões sobre seu novo relacionamento, Lily não consegue tirar Atlas Corrigan da cabeça — seu primeiro amor e a ligação com o passado que ela deixou para trás.",
    img: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SY445_SX342_.jpg",
    author: "Colleen Hoover",
    year: 2016,
    genre: "Romance",
    ISBN: "978-8501112514",
  },

  {
    name: "A Maldição do Titã - Percy Jackson e os Olimpianos 3",
    description:
      "Como sempre, Percy sabe que precisará contar com o poder de seus aliados heróis, com sua leal espada Contracorrente... e com uma caroninha da mãe. O que eles ainda não sabem é que os jovens descobertos não são os únicos em perigo: Cronos, o Senhor dos Titãs, arquitetou um de seus planos mais traiçoeiros, e nossos heróis serão presas fáceis. Um monstro ancestral foi despertado – um ser com poder suficiente para destruir o Olimpo –, e Ártemis, a única deusa capaz de encontrá-lo, desapareceu. Percy e seus amigos têm apenas uma semana para resgatar a deusa sequestrada e solucionar o mistério que ronda o monstro que ela caçava.",
    img: "https://m.media-amazon.com/images/I/61s1FVTeVpL._SY385_.jpg",
    author: "Rick Riordan",
    year: 2007,
    genre: "Mitologia Grega, romance",
    ISBN: "978-6555606546",
  },

  {
    name: "É Assim Que Começa",
    description:
      "Lily Bloom continua administrando uma floricultura. Seu ex-marido abusivo, Ryle Kincaid, ainda é um cirurgião. Mas agora os dois estão oficialmente divorciados e dividem a guarda da filha, Emerson.",
    img: "https://m.media-amazon.com/images/I/51jiQtSEwDL._SY445_SX342_.jpg",
    author: "Colleen Hoover",
    year: 2022,
    genre: "Romance",
    ISBN: "978-6559811397",
  },

  {
    name: "O Pequeno Príncipe",
    description:
      "Um jovem príncipe viaja de planeta em planeta, aprendendo lições sobre amor, amizade e a essência da vida. Com sua inocência e sabedoria, ele encontra diferentes personagens que refletem aspectos da condição humana. Através de suas aventuras, 'O Pequeno Príncipe' nos lembra da importância das coisas simples e do que realmente importa no mundo.",
    img: "https://m.media-amazon.com/images/I/41fMsvWHL-L._SY445_SX342_.jpg",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    genre: "Fábula, literatura infantil",
    ISBN: "978-8501062176",
  },

  {
    name: "Iracema",
    description:
      "Uma história de amor entre Iracema, uma índia tabajara, e Martim, um colonizador português. Ambientada nas paisagens exuberantes do Brasil colonial, 'Iracema' explora temas como o amor, a identidade cultural e o encontro entre diferentes mundos. A obra é uma bela representação da natureza e da cultura indígena, marcada pela prosa poética de José de Alencar.",
    img: "https://m.media-amazon.com/images/I/515hmL1QOuL._SY445_SX342_.jpg",
    author: "José de Alencar",
    year: 1865,
    genre: "Romance, literatura brasileira",
    ISBN: "978-8508114182",
  },

  {
    name: "O Ateneu",
    description:
      "Um romance de formação que narra a história de Sérgio, um jovem que ingressa em um internato chamado Ateneu, onde vive diversas experiências que moldam seu caráter. A obra explora temas como a educação, a hipocrisia da sociedade e as relações humanas. Com uma crítica mordaz ao sistema educacional e à moral da época, 'O Ateneu' é uma reflexão sobre a perda da inocência e o amadurecimento.",
    img: "https://m.media-amazon.com/images/I/51EnkfF1a4L._SY445_SX342_.jpg",
    author: "Raul Pompeia",
    year: 1888,
    genre: "Romance, literatura brasileira",
    ISBN: "978-8508120879",
  },
]

const ebooks = [
  {
    name: "Heartstopper: Dois Garotos, Um Encontro",
    description:
      "Uma história comovente e sincera sobre o amor adolescente e a descoberta da identidade. 'Heartstopper' acompanha Charlie, um jovem que se apaixonou por seu colega de classe Nick. Enquanto os dois navegam pelas complexidades do amor e da amizade, eles enfrentam desafios e aprendem a aceitar quem realmente são. A graphic novel é repleta de momentos adoráveis e emocionantes, abordando temas de aceitação e pertencimento.",
    img: "https://m.media-amazon.com/images/I/91OtLO6tVdL._SY385_.jpg",
    author: "Alice Oseman",
    year: 2018,
    genre: "Graphic Novel, Romance, Jovem Adulto",
    ISBN: "978-8555341618",
  },

  {
    name: "Harry Potter e a Pedra Filosofal",
    description:
      "O primeiro livro da famosa série Harry Potter apresenta a história de um jovem órfão que descobre que é um bruxo e é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts. Enquanto Harry faz novos amigos, como Hermione Granger e Ron Weasley, ele também descobre os segredos de seu passado e a verdade sobre a morte de seus pais. A trama gira em torno da busca pela Pedra Filosofal, um objeto mágico que confere imortalidade, e Harry deve enfrentar perigos e adversidades para proteger a magia e seus amigos.",
    img: "https://m.media-amazon.com/images/I/51lRMYwP-4L._SY445_SX342_.jpg",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasia, Literatura Infantojuvenil",
    ISBN: "978-8544000398",
  },

  {
    name: "A Culpa é das Estrelas",
    description:
      "A história emocionante de Hazel Grace Lancaster, uma adolescente que vive com câncer. Ao frequentar um grupo de apoio, ela conhece Augustus Waters, um jovem carismático e ex-paciente de câncer. Juntos, eles desenvolvem um profundo amor enquanto enfrentam as dificuldades da vida e da doença. O livro explora temas como a vida, a morte, o amor e a busca por significado em meio à dor, com uma prosa sensível e cativante.",
    img: "https://m.media-amazon.com/images/I/811ivBP1rsL._SY385_.jpg",
    author: "John Green",
    year: 2012,
    genre: "Ficção, Romance, Literatura Jovem Adulto",
    ISBN: "978-8580576512",
  },

  {
    name: "Diário de uma Paixão",
    description:
      "Uma história de amor que transcende o tempo, 'Diário de uma Paixão' narra a relação entre Noah Calhoun e Allie Nelson, dois jovens apaixonados que se separam devido a circunstâncias da vida. Anos depois, Noah, agora um homem mais velho, lê a história de seu amor por Allie em um diário, lembrando dos momentos que viveram juntos. A narrativa é uma reflexão sobre o verdadeiro amor, a memória e as escolhas que fazemos, mostrando como o amor pode ser eterno, mesmo diante da adversidade.",
    img: "https://m.media-amazon.com/images/I/81kLeiwk1ML._SY385_.jpg",
    author: "Nicholas Sparks",
    year: 1996,
    genre: "Romance, Ficção",
    ISBN: "978-6555091994",
  },

  {
    name: "As Vantagens de Ser Invisível",
    description:
      "A história acompanha Charlie, um adolescente introvertido e sensível que está enfrentando os desafios da adolescência, como amizade, amor e traumas do passado. Através de cartas endereçadas a um amigo desconhecido, Charlie compartilha suas experiências e sentimentos, explorando a luta pela aceitação e compreensão. O livro aborda temas como saúde mental, identidade e as dificuldades de crescer, proporcionando uma profunda reflexão sobre a vida e as relações humanas.",
    img: "https://m.media-amazon.com/images/I/81tJ71gMtpL._SY385_.jpg",
    author: "Stephen Chbosky",
    year: 1999,
    genre: "Ficção, Literatura Jovem Adulto",
    ISBN: "978-8501083479",
  },

  {
    name: "Berserk Max, Band 3",
    description:
      "No terceiro volume de 'Berserk Max', a intensa e sombria jornada de Guts continua em um mundo repleto de demônios e monstros. Neste volume, Guts enfrenta novos desafios e inimigos poderosos enquanto busca vingança e tenta encontrar seu lugar em um mundo que parece estar contra ele. A arte impressionante e a narrativa envolvente de Kentaro Miura aprofundam ainda mais os temas de luta, sobrevivência e redenção.",
    img: "https://m.media-amazon.com/images/I/51ZJj0YvpaL._SY445_SX342_.jpg",
    author: "Kentaro Miura",
    year: 1995,
    genre: "Ação, Fantasia Sombria, Manga",
    ISBN: "978-3570507311",
  },
]

const dvdsContainer = document.getElementById("dvds")

// Usa forEach para iterar sobre cada filme e criar a estrutura HTML
movies.forEach((movie, index) => {
  // Cria uma nova div para cada filme
  const bookDiv = document.createElement("div")
  bookDiv.classList.add("books")

  // Define o HTML dentro da div
  bookDiv.innerHTML = `
    <a class="card-img" href="#" onclick="saveMovieData(${index})">
      <img class="img-3" src="${movie.img}" alt="${movie.name}" />
    </a>
  `

  // Adiciona a nova div ao container de DVDs
  dvdsContainer.appendChild(bookDiv)
})

// Função que salva os dados do filme no localStorage e redireciona
function saveMovieData(index) {
  // Salva o filme no localStorage
  localStorage.clear()
  localStorage.setItem("selectedMovie", JSON.stringify(movies[index]))

  // Redireciona para a página rent-dvds.html
  window.location.href = "rent-dvds.html"
}
