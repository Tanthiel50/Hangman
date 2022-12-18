


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
let clue = document.getElementById('clue');
let text = document.getElementById('text');
let rules = document.getElementById('rules');
let keyboard = document.getElementById('keyboard');
let message = document.getElementById('message');
let img = document.querySelector("img");
//C= Clavier, R=regle, I=indice
let pageState = "C";
const letters =[ "A","Z","E","R","S","N","V"];


function initKeyboard(){
    letters.forEach((letter) =>{
        let element = document.createElement('button');
        element.textContent = letter;
        element.addEventListener('click', (event) => {
            const isOk = game.addUserInput(letter.toUpperCase());
            element.disabled = true;
            //au lieu de changer le texte changer la couleur du bouton
            if (isOk) {
                element.textContent = letter + " (ok)";
            } else {
                element.textContent = letter + '(perdu)';
            }
        refreshPage();
        });
        keyboard.append(element);
    })
};

initKeyboard();

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
        text.textContent = "Réalisateur: " + game.selectedMovie.realisateur + "\n";
    }
    guessWord.textContent=game.hiddenName();
    //ici on actualisera l'image en fonction du nombre d'erreur
    if (!game.error) {
        img.src = '';
    } else {
        img.src = `images/phase${game.error}.png`;
    }
    
    //ici on actualisera le texte gagné/perdu
    if (game.hiddenName().indexOf('_')===-1){
        message.textContent = "Vous avez gagné ! ";
    }
    else if (game.error>=10){
        message.textContent = " Vous avez perdu !"
    }
    else{
        message.textContent = "";
    }
};


function Game(selectedMovie){
    this.selectedMovie = selectedMovie;
    this.historique = [];
    this.error = 0;
    //cette fonction va tester la lettre entrée par le user et l'ajouter dans l'historique si elle n'éxiste pas
    //après verification on évalue le pendu
    this.addUserInput = (userInput) => {
        this.historique.push(userInput);
        
        //va parcourir le titre et retourner la position de lettre input si elle existe et sinon retourne -1
        const isOk = this.selectedMovie.titre.indexOf(userInput)>-1;
        if (!isOk){
            this.error ++;
            console.log(this.error);
        }
        return isOk;
    }

    //cette fonction retourne le nom du film caché
    this.hiddenName = () => {
        let titre = "";
        for(const char of this.selectedMovie.titre){
            if (this.historique.includes(char)) {
                titre += char + " ";
            } else {
                titre += "_ ";
            }
        }
        console.log(titre);
        return titre;
    }
}


function Movie(titre,realisateur, annee,acteurs) {
    this.titre = titre.toUpperCase();
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
const game = new Game(movies[indexMovie]);

guessWord.textContent=game.hiddenName();


//Afficher les indices si bouton indice cliqué
refreshPage();

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