const alarmClock = function() {
  const alarms = process.argv
  console.log(alarms)
  for (let i = 0; i < alarms.length; i++) {
    if(alarms[0] < 0 || undefined );
    return "";
  }
    
  setTimeout(() => {
    process.stdout.write('..');
  }, alarms[i] * 1000)
};
