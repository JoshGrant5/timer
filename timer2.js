/* Implement a new timer which behaves in the following way:

The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let beeper = () => {
  rl.question('Set the timer:  ', (answer) => {
    if (answer === 'b') {
      setTimeout(() => {
        beeper();
      }, 500);
      console.log('beep!');
    } else if (answer > 0 && answer < 10) {
      setTimeout(() => {
        console.log('beep!');
        setTimeout(() => {
          beeper();
        }, 1000);
      }, answer * 1000);
      process.stdout.write(`Setting timer for ${answer} seconds...  `);
    } 
  });
  rl.on('close', function() {
    console.log('\nThank you for using me, ciao!');
    process.exit(0); // will exit as quicly as possible (regardless of async pending) 
  });
};

beeper();