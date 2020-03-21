 /**
  * Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Game.js
  */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases (); 
        this.activePhrase = new Phrase (this.getRandomPhrase ()); 
    }

    /**
     * Creates phrases for use in game
     * @return {array} an array of phrases that could be used in the game
     */
    createPhrases () {
        let phrases = ['You are a wizard', 
                       'Never trust anything that can think for itself if you cannot see where it keeps its brain',
                       'Every human life is worth the same and worth saving',
                       'Dobby is free',
                       'I solemnly swear I am up to no good'];
        return phrases; 
    }

    /**
     * Select random phrase from phrases property
     * @return {object} phrase object chosen to be used 
     */
    getRandomPhrase () {
        for (let i = 0; i < this.phrases.length; i ++) {
            return this.phrases[Math.floor(Math.random() * this.phrases.length)]; 
        }
    } 

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame () {
        document.querySelector ('#overlay').style.display = 'none';  
        this.activePhrase.addPhraseToDisplay ();   
    }

    /**
     * Checks for winning move 
     * @return {boolean} true if game has been won, false if game wasn't won   
     */
    checkForWin () {
        const listItems = document.querySelector ('#phrase ul').children;
        for (let i = 0; i < listItems.length; i ++) {
            let listItem = listItems[i]; 
            if (/^show\sletter\s[a-z]?$/.test(listItem.className)) {
                return true; 
            } else {
                return false; 
            } 
        }
    }

    /**
     * Increases the value of the missed property  
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out    
     */
    removeLife () {
        const hearts = document.querySelectorAll ('.tries img'); 
        if (hearts[4].getAttribute ('src') === 'images/liveHeart.png') {
            hearts[4].removeAttribute ('src');
            hearts[4].setAttribute ('src', 'images/lostHeart.png');
            this.missed ++;
        } else if (hearts[3].getAttribute ('src') === 'images/liveHeart.png') {
            hearts[3].removeAttribute ('src');
            hearts[3].setAttribute ('src', 'images/lostHeart.png');
            this.missed ++;
        } else if (hearts[2].getAttribute ('src') === 'images/liveHeart.png') {
            hearts[2].removeAttribute ('src');
            hearts[2].setAttribute ('src', 'images/lostHeart.png');
            this.missed ++;
        } else if (hearts[1].getAttribute ('src') === 'images/liveHeart.png') {
            hearts[1].removeAttribute ('src');
            hearts[1].setAttribute ('src', 'images/lostHeart.png');
            this.missed ++;
        } else if (hearts[0].getAttribute ('src') === 'images/liveHeart.png') {
            hearts[0].removeAttribute ('src');
            hearts[0].setAttribute ('src', 'images/lostHeart.png');
            this.missed ++;
            this.gameOver ();
        }  
    }

    /**
     * Displays game over message 
     * @param {boolean} gameWon - whether or not the user won the game   
     */
    gameOver (gameWon) {
        document.querySelector ('#overlay').style.display = '';
        if (gameWon) {
            document.querySelector ('#game-over-message').innerHTML = `<h1>Great Job!</h1>`;
            document.querySelector ('#overlay').className = 'win'; 
        } else {
            document.querySelector ('#game-over-message').innerHTML = `<h1>Sorry, better luck next time!</h1>`;
            document.querySelector ('#overlay').className = 'lose';
        } 
    }
}