// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const beeps = process.argv.splice(2);

const timer = beeps => {
  let index = 0;
  beeps.forEach(num => {
    let converted = Number(num);
    if (Number.isInteger(converted) && converted > 0) {
      setTimeout(() => {
        index === beeps.length - 1 ? process.stdout.write('.\n') : process.stdout.write('.');
        index++;
      }, converted * 1000);
    } 
  }); 
};

timer(beeps);
