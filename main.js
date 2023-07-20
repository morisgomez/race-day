let raceNumber = Math.floor(Math.random() * 1000); //# between 0 and 999.
let isRegisteredEarly = true;//change to play around w/ logic.
let runnerAge = 22;//change to play around w/ logic.

//race # logic:
if (runnerAge > 18 && isRegisteredEarly === true) //does not run if age is <= 18.
{
 raceNumber += 1000; //to keep racenumber over 1000 for early adults.
}

//start time logic based on variables:
if (runnerAge > 18 && isRegisteredEarly === true)//for adults who are early.
{
  console.log("Your race time is at 9:30am, and your race number is " + raceNumber);
}
else if (runnerAge > 18 && isRegisteredEarly === false)//for adults who are not early.
{
  console.log("Your race time is at 11:00am, and your race number is " + raceNumber);
}
else if (runnerAge < 18)//for all youth.
{
  console.log("Your race time is at 12:30pm, and your race number is " + raceNumber);
}
else//for folks who are 18.
{
  console.log("see registration desk");
}
