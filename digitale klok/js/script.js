function showTime_br(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59 
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s;
    document.getElementById("clock_br").innerText = time;
    
    setTimeout(showTime_br, 1000);
    
}

function showTime_ny(){
    let date = new Date();
    let h = date.getHours()-6;
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s;
    document.getElementById("clock_ny").innerText = time;
    
    setTimeout(showTime_ny, 1000);
    
}

showTime_br();
showTime_ny();

/*function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city"+ city +" is "+ nd.toLocaleString();
}

alert(calcTime('Bombay', '-6'));*/