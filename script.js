let rules = document.querySelector("#rules");
let clue = document.querySelector('#clue');
let alert = document.querySelector('.alert');
let input = document.querySelector('input');
let choix = [];
let word = '';
let motMapping = [];
let choixMapping = [];
let scoreCount = 0;
let scoreMax = 9;

const movies = [
	['GLADIATOR','INTERSTELLAR','SEVEN','PARASITE','INCEPTION','WHIPLASH','PSYCHOSE',
	'JOKER','HAMILTON','HARAKIRI','MATRIX','SHINING','TITANIC','SCARFACE','AVATAR',
    'CASABLANCA','AMADEUS','BARBEROUSSE','PHILADELPHIA','IMPITOYABLE','METROPOLIS',
    'PLATOON'],
    ['Ridley Scott','Christopher Nolan', 'David Fincher','Bong Joon-ho','Christopher Nolan',
    'Damien Chazelle','Alfred Hitchcock','Todd Phillips','Thomas Kail','Masaki Kobayashi',
    'The Wachowskis','Stanley Kubrick','James Cameron','Brian de Palma','James Cameron',
    'Michael Curtiz','Miloš Forman',],
    ['2000','2014','1995','2019', '2010','2014','1960','2019','2020','1962','1999','1980',
    '1997','1983','2009','1942','1984',],
    ['Russel Crowe, Joaquin Pheonix, Connie Nielsen','Matthew McConaughey, Anne Hathaway, Jessica Chastain',
    'Brad Pitt, Morgan Freeman, Gwyneth Paltrow','Song Kang-ho,Lee Sun-kyun,Cho Yeo-jeong',
    'Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt','Miles Teller, J.K. Simmons, David Lancaster',
    'Anthony Perkins, Vera Miles, John Gavin','Joaquin Phoenix, Robert De Niro, Zazie Beetz',
    'Daveed Diggs, Renée Elise Goldsberry, Jonathan Groff','Tatsuya Nakadai, Shima Iwashita, Akira Ishihama',
    'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss','Jack Nicholson, Shelley Duvall, Scatman Crothers',
    'Leonardo DiCaprio, Kate Winslet, Billy Zane','Al Pacino','Sam Worthington, Zoe Saldana, Stephen Lang',
    'Humphrey Bogart, Ingrid Bergman, Paul Henreid','F. Murray Abraham, Tom Hulce, Elizabeth Berridge',
    ''],
]

