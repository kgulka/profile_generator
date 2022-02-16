const readline = require('readline');
//Create survey that asks questions and reads in the reponses
//once all the responses have been received the system should
//print out a paragraph containing the information.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = '';
let activity = '';
let music = '';
let mealOfDay = '';
let food = '';
let sport = '';
let superPower = '';

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  name = answer;
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  //rl.close();
  rl.question("What's an activity you like doing? ", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
        music = answer;
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
          mealOfDay = answer;
          rl.question("What's your favourite thing to eat for that meal?", (answer) => {
            food = answer;
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              sport = answer;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                superPower = answer;
                console.log('');
                console.log(`My name is ${name}. I like to list to ${music} while I ${activity}`);
                console.log(`I like to eat ${food} and ${mealOfDay} is my favourite meal of the day.`); 
                console.log(`${sport} is my favorite sport, but my superpower is ${superPower} so watch out!`);
                rl.close();
                                });
                        });
                });
            });
        });
    });
});

rl.question("What's an activity you like doing? ", (answer) => {
activity = answer;
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  console.log(`My name is ${name}. I like ${activity}`);
  rl.close();
});


