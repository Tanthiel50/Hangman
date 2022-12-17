


// const movies = [
// 	['','','','PARASITE','INCEPTION','WHIPLASH','PSYCHOSE',
// 	'JOKER','HAMILTON','HARAKIRI','MATRIX','SHINING','TITANIC','SCARFACE','AVATAR',
//     'CASABLANCA','AMADEUS'],
//     ['','', '','Bong Joon-ho','Christopher Nolan',
//     'Damien Chazelle','Alfred Hitchcock','Todd Phillips','Thomas Kail','Masaki Kobayashi',
//     'The Wachowskis','Stanley Kubrick','James Cameron','Brian de Palma','James Cameron',
//     'Michael Curtiz','Miloš Forman'],
//     ['','','','2019', '2010','2014','1960','2019','2020','1962','1999','1980',
//     '1997','1983','2009','1942','1984'],
//     ['','',
//     '','Song Kang-ho,Lee Sun-kyun,Cho Yeo-jeong',
//     'Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt','Miles Teller, J.K. Simmons, David Lancaster',
//     'Anthony Perkins, Vera Miles, John Gavin','Joaquin Phoenix, Robert De Niro, Zazie Beetz',
//     'Daveed Diggs, Renée Elise Goldsberry, Jonathan Groff','Tatsuya Nakadai, Shima Iwashita, Akira Ishihama',
//     'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss','Jack Nicholson, Shelley Duvall, Scatman Crothers',
//     'Leonardo DiCaprio, Kate Winslet, Billy Zane','Al Pacino','Sam Worthington, Zoe Saldana, Stephen Lang',
//     'Humphrey Bogart, Ingrid Bergman, Paul Henreid','F. Murray Abraham, Tom Hulce, Elizabeth Berridge'],
// ]
let guessWord = document.querySelector("#guessWord");


function Movie(titre,realisateur, annee,acteurs) {
    this.titre = titre;
    this.realisateur = realisateur;
    this.annee = annee;
    this.acteurs = acteurs;
}

const movies=[
    new Movie(
        "GLADIATOR",
        "Ridley Scott",
        2000,
        "Russel Crowe, Joaquin Pheonix, Connie Nielsen"),
    new Movie(
        "INTERSTELLAR",
        "Christopher Nolan",
        2014,
        "Matthew McConaughey, Anne Hathaway, Jessica Chastain"),
    new Movie(
        "SEVEN",
        "David Fincher",
        1995,
        "Brad Pitt, Morgan Freeman, Gwyneth Paltrow"),
];

    //Récupérer un index entre 0 et la longueur du tableau
function getRandomIndexMovie() {
    return Math.floor(Math.random() * movies.length);
}

const indexMovie = getRandomIndexMovie();

//Récupérer l'objet movie correspondant à la clef
const selectedMovie = movies[indexMovie];

guessWord.textContent=selectedMovie.titre;