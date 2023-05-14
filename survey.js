const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)  `, (answer1) => {
  rl.question(`What's an activity you like doing?  `, (answer2) => {
    rl.question(`What do you listen to while doing that?  `, (answer3) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)  `, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal?  `, (answer5) => {
          rl.question(`Which sport is your absolute favourite?  `, (answer6) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!  `, (answer7) => {
              console.log(`Your name is: ${answer1}`);
              console.log(`You love to do this: ${answer2}`);
              console.log(`You listen to this: ${answer3}`);
              console.log(`Your favourite meal is this: ${answer4}`);
              console.log(`You love to eat this: ${answer5}`);
              console.log(`You love this sport: ${answer6}`);
              console.log(`You are amazing at this: ${answer7}`);
              console.log("Have a great day!");
              rl.close();
            });
          });
        });
      });
    });
  });
});