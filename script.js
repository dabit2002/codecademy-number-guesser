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
     if ((x < 0) && (y < 0)){
      sumCS *= -1;
      sumHS *= -1;
      return sumCS;
      return sumHS;
    } else if (y < 0){
      return sumCS *= -1;
    } else if (x < 0){
      return sumHS *= -1;
    }
  };
  diffN();
  console.log(sumHS);
  console.log(sumCS);
    if (sumCS < sumHS){
      return winner = false;
    } return winner = true;
    };
const updateScore = (x = winner) => {
  if (x == false){
    return humanScore += 1;
  } else if (x ==  true){
    return computerScore += 1;
  }
};
const advanceRound = () => {
  return currentRoundNumber += 1;
};
