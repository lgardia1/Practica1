export default class Card {

    #cards = [];
    numberOfCards;

    constructor(numberOfCards) {
        this.numberOfCards = numberOfCards;
        this.#initCards()
    }

    #initCards() {
        const typesCards = ['corazones', 'naipes'];
        let id = 0
        typesCards.forEach((element)=> {
            for(let i = 0 ; i < this.numberOfCards ; i++) {
                const card = document.createElement('div');
              
                card.setAttribute('data-id', id)

                if(element === 'corazones') {
                    card.setAttribute('data-type', 'corazones');
                    card.setAttribute('class', 'corazones');
                }else {
                    card.setAttribute('data-type', 'naipes');
                    card.setAttribute('class', 'naipes');
                }

                id++;

                this.#cards.push(card);
            }
        });
    }


    get getNumberOfCards() {
        return this.numberOfCards;
    }

    get getCards() {
        return this.#cards;
    }
    
}
 