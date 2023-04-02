function showClock () {
    let clock = new Date();
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    document.body.append(date);
    document.body.append(time);
    let day = clock.getDate() < 10 ? `0${clock.getDate()}` : clock.getDate();        //2 число
    let month = clock.getMonth() < 10 ? `0${clock.getMonth()}` : clock.getMonth();     // 3  месяц (март) 0-январь 11-декабрь
    let year = clock.getFullYear();   //2023 год
    let hour = clock.getHours() < 10 ? `0${clock.getHours()}` : clock.getHours();     //17  часов
    let minute = clock.getMinutes() < 10 ? `0${clock.getMinutes()}` : clock.getMinutes();  //48 минут
    let second = clock.getSeconds() < 10 ? `0${clock.getSeconds()}` : clock.getSeconds();  //56 секунд
    const daysOfTheWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    let dayOfTheWeek = daysOfTheWeek[clock.getDay()];
    date.innerHTML = `${day}.${month}.${year} ${dayOfTheWeek}`;
    time.innerHTML = `${hour}:${minute}:${second}`;

}
setInterval(showClock,1000);