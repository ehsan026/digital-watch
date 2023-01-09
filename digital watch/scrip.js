let finalTime = document.querySelector("#fainaltime");
let timeFormat  = document.querySelector("#timeFormat");
let Date = document.querySelector("#Date");

function GetTime(){
    
let Time = new date();
let hour = Time.GetHours();
let min = Time.GetMinutes();
let sec = Time.GetSeconds();
let getDay = Time.GetDay();
let getDate = Time.GetDate();
let getMonth = Time.GetMonth();
let getYear = Time.GetYear();
 
let dayText = '';

if(getDay == 0){
    dayText = "sun"
} else if(getDay == 1){
    dayText = "Mon"
} else if(getDay == 2){
    dayText = "tue"
} else if(getDay == 3){
    dayText = "Wed"
} else if(getDay == 4){
    dayText = "thu"
} else if(getDay == 5){
    dayText = "fri"
} else if(getDay == 6){
    dayText = "sat"

}

let newMonth = '';

if(getMonth == 0){
newMonth = 'January';

}else if(getMonth == 1){
    newMonth = "February";
}
else if(getMonth == 2){
    newMonth = "March";
}else if(getMonth == 3){
    newMonth = "April";
}else if(getMonth == 4){
    newMonth = "May";
}else if(getMonth == 5){
    newMonth = "June";
}else if(getMonth == 6){
    newMonth = "July";
}else if(getMonth == 7){
    newMonth = "August";
}else if(getMonth == 8){
    newMonth = "September";
}else if(getMonth == 9){
    newMonth = "October";
}else if(getMonth == 10){
    newMonth = "November";
}else if(getMonth == 11){
    newMonth = "December";
}
let postTime = "AM";
if (hour > 12) {
    postTime = "PM"
}else{
    let postTime = "AM";
}


if (hour == 13) {
    hour = 1;
}else if(hour == 14){
    hour = 2;
}else if(hour == 15){
    hour = 3;
}else if(hour == 16){
    hour = 4;
}else if(hour == 17){
    hour = 5;
}else if(hour == 18){
    hour = 6;
}else if(hour == 19){
    hour = 7;
}else if(hour == 20){
    hour = 8;
}else if(hour == 21){
    hour = 9;
}else if(hour == 22){
    hour = 10;
}else if(hour == 23){
    hour = 11;
}else if(hour == 24){
    hour = 12;
}

if (hour < 10) {
    hour = "0" + hour;
}

if (min < 10) {
    min = "0" + min;
}

if (sec < 10) {
    sec = "0" + sec;
}
console.log( dayText,newMonth,postTime)

let fTime = `${hour}:${min}:${sec}`;
let fPostTime = postTime;
let fDate = `${dayText}, ${getDate} ${newMonth} ${getYear}`;
finalTime.innerText = fTime;
timeFormat.innerText = fPostTime;
date.innerText = fDate;
}
setInterval(GetTime, 1000);