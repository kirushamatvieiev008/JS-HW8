// task1
const friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`]
console.log(friends.join(`,`));
// console.log(friends);

// task2

const cards = [
    `card1`,
    `card2`,
    `card3`,
    `card4`,
    `card5`,
];

const deleted = cards.splice(2, 1);

// console.log(cards);

const add = cards.splice(4, 0, `card6`);


const reload = cards.splice(3, 1, `card-reload`);
console.log(cards);
