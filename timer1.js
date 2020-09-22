// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const beeps = process.argv.splice(2);

const timer = beeps => {
  
  beeps.forEach(num => {
    let converted = Number(num);
    if (Number.isInteger(converted) && converted > 0) {
      setTimeout(() => {
        process.stdout.write('.'); // instead of outputting a sound
      }, converted * 1000);
    } 
  }); 
};

timer(beeps);
