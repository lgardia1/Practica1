//Controla las cartas
const CardController = {
  cards: [],
  saveCard: function ({ id: idCard, type: typeCard, father: fatherCard }) {
    const card = {
      id: idCard,
      type: typeCard,
      father: fatherCard,
    };
    this.cards.push(card);
    return card;
  },
  getCards: function () {
    return this.cards;
  },
};
export default CardController;
