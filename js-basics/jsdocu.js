// Find Methode. Sucht das erste Element raus, bei dem die Bedingung auf true ist
const randomNumbers = [{ id: 10 }, { id: 4 }, { id: 3 }, { id: 10 }];

const currentItem = randomNumbers.find((item) => item.id === 10);

console.log("CURRENT ITEM ", currentItem);

const USERS = [
  {
    id: 1,
    username: "mexx",
    birthdate: new Date("1960-01-01"),
  },
  {
    id: 2,
    username: "anna",
    birthdate: new Date("1965-01-01"),
  },
];

function convertDateToUsersAge(date) {
  return 20;
}

const myReturned = USERS.map((u) => {
  return {
    username: u.username,
    id: u.id,
    age: convertDateToUsersAge(u.birthdate),
  };
});

console.log("MY RETURNED USERS", myReturned);
