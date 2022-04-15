function showpage2(page1,page2){
    var page1 = document.getElementById(page1);
    var page2 = document.getElementById(page2);
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    page1.style.display = 'none';
    page2.style.display = 'block';
    button1.style.backgroundColor = '#D9D9D9';
    button2.style.backgroundColor = 'violet';
}

function showpage1(page1,page2){
    var page1 = document.getElementById(page1);
    var page2 = document.getElementById(page2);
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    page1.style.display = 'block';
    page2.style.display = 'none';
    button1.style.backgroundColor = 'violet';
    button2.style.backgroundColor = '#D9d9d9';
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