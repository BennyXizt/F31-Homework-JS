
//setTimeout

//1
setTimeout(() => {
    console.log("Timeout after 5sec");
}, 5000)

//2
let value = 0
setTimeout(() => {
    value = "data changed from server"
}, 10000)


//setInterval

//1
setInterval(() => {
    const time = new Date()
    const last = 24 - time.getHours() != 0 ? `осталось ${24 - time.getHours()}h до завтра` : "уже следующий день"
    console.log(last);
}, 5000)

//Date

//1
const currTime = () => {
    const time = new Date()
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}

//2
const currTimeInYear = () => {
    const time = new Date()
    console.log(`${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`);
}

//3
const toNewYear = () => {
    today = new Date()
    
    nextDate = new Date("January 1, 2024")
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((nextDate.getTime()
     - today.getTime())/msPerDay);
    dayname=""
    ds=""+daysLeft

    dd=parseInt(ds.substr(ds.length-1))
    if(daysLeft>4&&daysLeft<21)dayname=" дней"
    else
     if(dd==1)dayname=" день"
     else
      if(dd==2||dd==3||dd==4)dayname=" дня"
      else dayname=" дней"
 
    console.log(`До Нового года осталось ${daysLeft+dayname}`)
}
currTime()
currTimeInYear()
toNewYear()