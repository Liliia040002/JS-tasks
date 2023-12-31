// Task 1. Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

// Task 2. Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
    return num < 0 ? num : -num;
   }

//  Task 3. Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move (position, roll) {
    return position + roll * 2;
  }

// Task 4. Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
   }

//  Task 5. Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
    const minLitres = 0.5;
    return Math.floor(time * minLitres);
  }

// Task 6. Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 == 1 ? true : false
   }

   