// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects
// rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.
//
// Write a function that, given an amount of money and an array of coin
// denominations, computes the number of ways to make the amount of money with
// coins of the available denominations.
//
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
// your program would output 4—the number of ways to make 4¢ with those
// denominations:
//
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, denominations){
  const possibleCombinations = [];

  for (let i = 0; i <= amount; i += 1){
    possibleCombinations[i] = 0;
  }
  possibleCombinations[0] = 1;

  for (let i = 0; i < denominations.length; i += 1){
    const coin = denominations[i];
    for (let j = coin; j <= amount; j += 1){
      const change = j - coin;
      possibleCombinations[j] += possibleCombinations[change];
    }
  }
  return possibleCombinations[amount];
}


changePossibilities(4,[1,2,3])
