// Task N1

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function youngestUser(arr) {
  let youngestAge;
  let name;

  // Method1
  //   for (i = 0; i < arr.length; i++) {
  //     if (youngestAge === undefined) {
  //       youngestAge = arr[i].age;
  //       name = arr[i].name;
  //     } else if (youngestAge > arr[i].age) {
  //       youngestAge = arr[i].age;
  //       name = arr[i].name;
  //     }
  //   }

  // Method2
  arr.forEach(function (user) {
    if (youngestAge === undefined) {
      youngestAge = user.age;
      name = user.name;
    } else if (youngestAge > user.age) {
      youngestAge = user.age;
      name = user.name;
    }
  });

  return name;
}

const youngestUserName = youngestUser(users);

console.log(youngestUserName);

// Task N2

const user = {
  name: "Temo",
  age: 25,
};

function createNewObject(obj) {
  // Method N1
  //   return Object.assign({}, obj);

  // Method N2 Deep Cloning(Costly Performance)
  //   return JSON.parse(JSON.stringify(obj));

  // Method N3 ES6
  return { ...obj };
}

const newUser = createNewObject(user);
newUser.name = "Eka";

console.log(user, newUser);

// Task N3
let winner;
let userARoll;
let userBRoll;

function throwDice() {
  return parseInt(Math.random() * 6) + 1;
}

while (winner === undefined) {
  userARoll = throwDice();
  userBRoll = throwDice();
  console.log("User a rolled: " + userARoll, "User b rolled: " + userBRoll);

  if (userARoll === 3 && userBRoll === 3)
    winner = "Both Users rolled a 3 it's a Tie!";
  else if (userARoll === 3) winner = "User a won!";
  else if (userBRoll === 3) winner = "User b won!";
}

console.log(winner);
