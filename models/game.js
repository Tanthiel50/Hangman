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