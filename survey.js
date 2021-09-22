const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

//const rl = readline.createInterface({ input, output });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name?", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)",(answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            console.log(`Hello ${answer1} you like ${answer2} while listening to ${answer3}, you like ${answer5} for your ${answer4} and your favourite sport is ${answer6}.` );
            rl.close();
          });
        });
        
      });
      
    });
    
    
  });

  
});





