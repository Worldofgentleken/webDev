var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
    document.write(`tv 색상: ${this.color}`, "<br>");
    document.write(`tv 가격: ${this.price}`, "<br>");
};

var car = {
    color: "black",
    price: 5000000,
    info: function(){
        document.write(`car 색상: ${this.color}`,"<br>");
        document.write(`car 가격: ${this.price}`,"<br>");
    }
};

document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();
document.write("<h1>car 객체 메서드 호출</h1>");
car.info();

var today = new Date();
var nowMonth = today.getMonth();
nowDate = today.getDate();
nowDay = today.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월: " + nowMonth, "<br>");
document.write("현재 일: " + nowDate, "<br>");
document.write("현재 요일: " + nowDay, "<br>");

var worldcup = new Date(2002,4,31);
var theMonth = worldcup.getMonth();
theDate = worldcup.getDate();
theDay = worldcup.getDay();

document.write("<h1>월드컵 날짜 정보</h1>");
document.write("2002월드컵 몇 월: " + theMonth, "<br>");
document.write("2002월드컵 몇 일: " + theDate, "<br>");
document.write("2002월드컵 무슨 요일: " + theDay, "<br>");

var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear,11,31);
var diffDate = theDate.getTime()-today.getTime();

var result = Math.ceil(diffDate / (60*1000*60*24));
document.write("연말 D-day: " + result + "일 남았습니다.");