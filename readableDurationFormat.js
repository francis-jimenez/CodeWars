// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    //counting time messures
    const time = {}
    if (seconds == 0) return 'now';
    while (seconds != 0) {
      if (seconds >= 31536000) {
        time.year ? time.year ++ : time.year = 1;
        seconds -= 31536000;
        continue;
      }
      
      if (seconds >= 86400) {
        time.day ? time.day ++ : time.day = 1;
        seconds -= 86400;
        continue;
      }
      
      if (seconds >= 3600) {
        time.hour ? time.hour ++ : time.hour = 1;
        seconds -= 3600;
        continue;
      }
      
      if (seconds >= 60) {
        time.minute ? time.minute ++ : time.minute = 1;
        seconds -= 60;
        continue;
      }
      
      if (seconds >= 1 && seconds < 60){
        time.second ? time.second ++ : time.second = seconds;
        seconds = 0;
        continue;
      }
    }
        console.log(time)
  
    //defining if unit is plural
    let times = {}
    for (property in time) {
      if (time[property] > 1) {
        times[`${property}s`] = time[property];
      } else {
        times[property] = time[property];
      }
    }
     
      console.log(time)
    //if only one unit of time
    if (Object.keys(times).length == 1) {  
      return `${Object.values(times)} ${Object.keys(times)}`
    } 
    //if two unit of times
    else if (Object.keys(times).length == 2) {
      return `${Object.values(times)[0]} ${Object.keys(times)[0]} and ${Object.values(times)[1]} ${Object.keys(times)[1]}`
    }
    //if more than 2 unit of times
    else if (Object.keys(times).length > 2) {
      let fstr = ''
      for (i = 0; i < Object.keys(times).length; i++) {
        if (i == Object.keys(times).length - 1) {
          fstr = fstr.slice(0, fstr.length - 2).concat(' and ' + Object.values(times)[i] + ' ' + Object.keys(times)[i])
        } else {
          fstr = fstr.concat(Object.values(times)[i] + ' ' + Object.keys(times)[i] + ', ')
        }
      }
      return fstr
    }
  }