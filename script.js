


// const movies = [
// 	['','','','','','','',
// 	'','','','MATRIX','SHINING','TITANIC','SCARFACE','AVATAR',
//     'CASABLANCA','AMADEUS'],
//     ['','', '','','',
//     '','','','','',
//     'The Wachowskis','Stanley Kubrick','James Cameron','Brian de Palma','James Cameron',
//     'Michael Curtiz','Miloš Forman'],
//     ['','','','', '','','','','','','1999','1980',
//     '1997','1983','2009','1942','1984'],
//     ['','',
//     '','',
//     '','',
//     '','z',
//     '','',
//     'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss','Jack Nicholson, Shelley Duvall, Scatman Crothers',
//     'Leonardo DiCaprio, Kate Winslet, Billy Zane','Al Pacino','Sam Worthington, Zoe Saldana, Stephen Lang',
//     'Humphrey Bogart, Ingrid Bergman, Paul Henreid','F. Murray Abraham, Tom Hulce, Elizabeth Berridge'],
// ]


let guessWord = document.querySelector("#guessWord");
let clue = document.getElementById('clue');
let text = document.getElementById('text');
let rules = document.getElementById('rules');
let keyboard = document.getElementById('keyboard');
let message = document.getElementById('message');
let img = document.querySelector("img");
let playAgain = document.getElementById('playAgain');
//C= Clavier, R=regle, I=indice
let pageState = "C";
const letters =[ "A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
const movies=[
    new Movie(
        "GLADIATOR",
        "Ridley Scott",
        "2000",
        "Russel Crowe, Joaquin Pheonix, Connie Nielsen"),
    new Movie(
        "INTERSTELLAR",
        "Christopher Nolan",
        "2014",
        "Matthew McConaughey, Anne Hathaway, Jessica Chastain"),
    new Movie(
        "SEVEN",
        "David Fincher",
        "1995",
        "Brad Pitt, Morgan Freeman, Gwyneth Paltrow"),
    new Movie(
        "PARASITE",
        "Bong Joon-ho",
        "2019",
        "Song Kang-ho,Lee Sun-kyun,Cho Yeo-jeong"),
    new Movie(
        "INCEPTION",
        "Christopher Nolan",
        "2010",
        "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt"),
    new Movie(
        "WHIPLASH",
        "Damien Chazelle",
        "2014",
        "Miles Teller, J.K. Simmons, David Lancaster"),
    new Movie(
        "PSYCHOSE",
        "Alfred Hitchcock",
        "1960",
        "Anthony Perkins, Vera Miles, John Gavin"),
    new Movie(
        "JOKER",
        "Todd Phillips",
        "2019",
        "Joaquin Phoenix, Robert De Niro, Zazie Beet"),
    new Movie(
        "HAMILTON",
        "Thomas Kail",
        "2020",
        "Daveed Diggs, Renée Elise Goldsberry, Jonathan Groff"),
    new Movie(
        "HARAKIRI",
        "Masaki Kobayashi",
        "1962",
        "Tatsuya Nakadai, Shima Iwashita, Akira Ishihama"),
];
let game = null;


function initKeyboard(){
    keyboard.innerHTML="";
    letters.forEach((letter) =>{
        let element = document.createElement('button');
        element.textContent = letter;
        element.style.backgroundColor = "#0C0D0A";
        element.style.color = "#C3F25C";
        element.style.padding = "5px 20px";
        element.addEventListener('click', (event) => {
            const isOk = game.addUserInput(letter.toUpperCase());
            element.disabled = true;
            //change la couleur du bouton
            if (isOk) {
                element.style.backgroundColor= "#C3F25C";
                element.style.color= "#0C0D0A";
            } else {
                element.style.backgroundColor= "#B158FD";
                element.style.color= "#0C0D0A";
            }
        refreshPage();
        });
        keyboard.append(element);
    })
};


function refreshPage() {
    if (pageState === "C") {
        clue.textContent = "Indice";
        rules.textContent = "Règle";
        text.textContent = "";
        keyboard.style.display = "grid";
    }
    else if (pageState === "R"){
        clue.textContent = "Indice";
        rules.textContent = "Clavier";
        keyboard.style.display = "none";
        text.textContent = `Dans le jeu du pendu vous devez deviner un mot. Servez-vous des touches de 
        votre clavier pour entrer une lettre et deviner le mot avant que l'affiche ne
        soit reconstituée. La thématique de ce pendu est "film".`;
    }
    else if(pageState === "I"){
        clue.textContent = "Clavier";
        rules.textContent = "Règle";
        keyboard.style.display = "none";
        text.textContent = "Réalisateur: " + game.selectedMovie.realisateur + '\n' + "Année: " + game.selectedMovie.annee + "\n" + "Acteurs: " + game.selectedMovie.acteurs;
    }
    guessWord.textContent=game.hiddenName();
    //ici on actualisera l'image en fonction du nombre d'erreur
    if (!game.error) {
        img.src = 'images/phase.png';
    } else {
        img.src = `images/phase${game.error}.png`;
    }
    

    //ici on actualisera le texte gagné/perdu
    if (game.hiddenName().indexOf('_')===-1){
        message.textContent = "Vous avez gagné ! ";
        message.style.color= "#C3F25C";
        playAgain.style.display = "block";
        keyboard.style.display = "none";
    }
    else if (game.error>=8){
        message.textContent = " Vous avez perdu ! Le film était "+ game.selectedMovie.titre;
        message.style.color= "white";
        playAgain.style.display = "block";
        keyboard.style.display = "none";

    }
    else{
        message.textContent = "";
    }
};





    //Récupérer un index entre 0 et la longueur du tableau
function getRandomIndexMovie() {
    return Math.floor(Math.random() * movies.length);
}

function initPage(){
    const indexMovie = getRandomIndexMovie();

    //Récupérer l'objet movie correspondant à la clef
    game = new Game(movies[indexMovie]);
    guessWord.textContent=game.hiddenName();
    initKeyboard();
    refreshPage();
    playAgain.style.display = "none";
}



initPage();

//Afficher les indices si bouton indice cliqué


clue.addEventListener('click',() => {
    if (pageState !== "I") {
        pageState = "I";
    } else {
        pageState = "C";
    }
    refreshPage();
});

rules.addEventListener('click',() => {
    if (pageState !== "R") {
        pageState = "R";
    } else {
        pageState = "C";
    }
    refreshPage();
});

playAgain.addEventListener('click',() =>{
    initPage();
});

