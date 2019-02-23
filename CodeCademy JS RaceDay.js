//Race Day

//assigns each runner a random number
//**although, seems like shit since it doesn't prevent duplicates
let raceNumber = Math.floor(Math.random() * 1000);

//variable that determines if the runner registered early
let regEarly = false

//variable to represent the runners age
let runnerAge = 15

//control flow statement that checks whther the runner is an adult AND registered early
//while giving their race time
//Adult registrants run at 9:30 am or 11:00 am.
//Early adults run at 9:30 am.
//Late adults run at 11:00 am.
//Youth registrants run at 12:30 pm (regardless of registration).
if(runnerAge >= 18 && regEarly === true){
  raceNumber += 1000 ,console.log(`Your race time is 9:30am and your race number is ${raceNumber}.`)
}else if(runnerAge >= 18 && regEarly !== true){
  raceNumber+= 0 , console.log(`Your race time is 11:00am and your race number is ${raceNumber}.`)
}else if(runnerAge < 18){
  console.log(`Your race time is 12:30pm and your race number is ${raceNumber}.`)
}else{
  console.log(`Who, or what, are you?!`)
}