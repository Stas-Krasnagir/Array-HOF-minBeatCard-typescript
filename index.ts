enum Suit { Diamonds = "d", Hearts = "h", Spades = "s", Clubs = "c" };
enum Rank { Six = 6, Seven = 7, Eight = 8, Nine = 9, Ten = 10, Jack = 11, Queen = 12, King = 13, Ace = 14 };

class Card {
  suit: Suit;
  rank: Rank
  trump: boolean
  constructor(suit, rank, trump) {
    this.suit = suit;
    this.rank = rank;
    this.trump = trump;
  }
};

let inputCard: Card = new Card(Suit.Hearts, Rank.Six, true);

let cards: Card[] = [
  new Card(Suit.Clubs, Rank.Nine, false),
  new Card(Suit.Diamonds, Rank.Six, false),
  new Card(Suit.Hearts, Rank.Nine, true),
  new Card(Suit.Clubs, Rank.Ten, false),
  new Card(Suit.Diamonds, Rank.Ace, false),
  new Card(Suit.Hearts, Rank.Seven, true)
];

function minBeatCard(cards: Card[], inputCard: Card): Card | null {
  return cards
    .filter(item =>
      inputCard.trump && inputCard.suit === item.suit && inputCard.rank < item.rank
      || inputCard.suit === item.suit && inputCard.rank < item.rank
      || !inputCard.trump && item.trump)
    .sort((a, b) => a.rank - b.rank)
    .sort((a, b) => (a.trump ? 1 : 0) - (b.trump ? 1 : 0))
    .reduce(checkCard, null)
}
function checkCard(card: Card | undefined, nullres): Card | null {
  if (card) return card
  else return null
}


// в.карта козырь, в массиве нет выше => null
let cards1 = [
  new Card(Suit.Clubs, Rank.Seven, false),
  new Card(Suit.Diamonds, Rank.Six, false),
  new Card(Suit.Hearts, Rank.Nine, false)
]
let inputCard1 = new Card(Suit.Spades, Rank.Nine, true)
console.log(minBeatCard(cards1, inputCard1) === null)


// в.карта козырь, в массиве есть козырь выше => козырь
let cards2 = [
  new Card(Suit.Clubs, Rank.Seven, false),
  new Card(Suit.Diamonds, Rank.Six, false),
  new Card(Suit.Spades, Rank.Ace, true)
]
let inputCard2 = new Card(Suit.Spades, Rank.Nine, true)
console.log(minBeatCard(cards2, inputCard2) === cards2[2])


// в.карта не козырь, в массиве есть козырь, нет одинаковой масти => козырь
let cards3 = [
  new Card(Suit.Spades, Rank.Seven, false),
  new Card(Suit.Spades, Rank.Nine, false),
  new Card(Suit.Diamonds, Rank.Ace, true)
]
let inputCard3 = new Card(Suit.Spades, Rank.Six, false)
console.log(minBeatCard(cards3, inputCard3) === cards3[0])

// в.карта не козырь, в массиве есть козырь, есть одна масть выше рангом => карта одной масти выше рангом
let cards4 = [
  new Card(Suit.Clubs, Rank.Seven, false),
  new Card(Suit.Clubs, Rank.Jack, false),
  new Card(Suit.Spades, Rank.Ten, true)
]
let inputCard4 = new Card(Suit.Clubs, Rank.Nine, false)
console.log(minBeatCard(cards4, inputCard4) === cards4[1])


// в.карта не козырь, в массиве нет козыря, нет карты с один.мастью => null
let cards5 = [
  new Card(Suit.Clubs, Rank.Ace, false),
  new Card(Suit.Clubs, Rank.Six, false),
  new Card(Suit.Clubs, Rank.Ten, false)
]
let inputCard5 = new Card(Suit.Diamonds, Rank.Nine, false)
console.log(minBeatCard(cards5, inputCard5) === null)

let cards6 = [
  new Card(Suit.Diamonds, Rank.Ace, false),
  new Card(Suit.Clubs, Rank.Six, true),
  new Card(Suit.Clubs, Rank.Ten, true)
]
let inputCard6 = new Card(Suit.Diamonds, Rank.Nine, false)
console.log(minBeatCard(cards6, inputCard6) === cards6[0])
