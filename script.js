let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let winner = true;
// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};
const compareGuesses = (humanN,computerN,secretN = generateTarget()) => {
  //secretN  = generateTarget();
  let sumHS = secretN - humanN;
  let sumCS = secretN -computerN;
  console.log(sumHS, sumCS, secretN);
  const diffN = (x=sumHS, y=sumCS) => {
     if (y < 0){
     sumCS *= -1;
    } if (x < 0){
      sumHS *= -1;
    }
  };

  diffN();
  
    if (sumCS < sumHS){
      return winner = false;
    } return winner = true;
};
const updateScore = (x = winner) => {
  if (!x){
    return humanScore += 1;
  } return computerScore += 1;
};
const advanceRound = () => {
  return currentRoundNumber += 1;
};

