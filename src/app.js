function showpage2(page1,page2){
    var page1 = document.getElementById(page1);
    var page2 = document.getElementById(page2);
    page1.style.display = 'none';
    page2.style.display = 'block';
}

function showpage1(page1,page2){
    var page1 = document.getElementById(page1);
    var page2 = document.getElementById(page2);
    page1.style.display = 'block';
    page2.style.display = 'none';
}

function time(){
    let currentDate = new Date()
    let day = currentDate.getDay();
    let listDays = ["","Monday","Thuesday","Wenesday","Thursday","Friday","Saturday","Sunday"]
    for (var i in listDays){
        if (i == day){
            day = listDays[i];
        }
    }
    var currentDay = document.getElementById('currentDay');
    currentDay.innerText = day;
}

setInterval(time,1000)