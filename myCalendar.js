var currentDate = new Date();
var calendarDate = new Date();
var startMonth =  calendarDate.getMonth(); 
var day = currentDate.getDate();
var currMonth = currentDate.getMonth();
var calendarMonth = calendarDate.getMonth();
var calendarYear = calendarDate.getYear() + 1900;

var monthName = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];
var dayName  = [
"Sun",
"mon",
"tues",
"wed",
"thur",
"fri",
"sat"
];

buildCalendar();

function buildCalendar() {
document.write("<div id='myCal'>");
document.write("<table border='2' >");
document.write("<tr><th colspan='7'>");
 document.write("<button id='reverse' type='button' onclick = 'reverse()'> << </button>");
document.write("<h1>"+ monthName[calendarMonth]+"</h1>"+"<h2>"+ calendarYear +"</h2>");
 document.write("<button id='next' type='button' onclick = 'forward()'> >> </button>");
document.write("</th></tr>");
document.write("<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th> <th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>");
calendarDate.setDate(0);
var firstDay = calendarDate.getDay()


for (i = 0; i < 42; i++)
{
	
if(i <= firstDay && firstDay != 6)
{
document.write("<td></td>");
}else{
calendarDate.setDate(calendarDate.getDate() + 1);
if(calendarDate.getMonth() == startMonth)
{

	if(i % 7 == 0)
	{
	document.write("</tr><tr>");
	}

		if(calendarDate.getDay() == 0 || calendarDate.getDay() == 6 )
		{
			if(currentDate.getDate()  == calendarDate.getDate() )
			{
			document.write("<td id="+calendarDate.getDate()+" style='background-color:#ccff33;' onclick = 'alert(monthName[calendarMonth]+space()+this.id+space()+calendarYear)'>"+calendarDate.getDate()+"</td>");
			}
			else{
			document.write("<td id="+calendarDate.getDate()+" style='background-color:#ccccff;' onclick = 'alert(monthName[calendarMonth]+space()+this.id+space()+calendarYear)'><b>"+calendarDate.getDate()+"</b></td>");
			}
		}
		else{
			if(currentDate.getDate() == calendarDate.getDate())
				{
				document.write("<td id="+calendarDate.getDate()+" style='background-color:#ccff33;' onclick = 'alert(monthName[calendarMonth]+space()+this.id+space()+calendarYear)'>"+calendarDate.getDate()+"</td>");
				}else{
				document.write("<td id="+calendarDate.getDate()+" onclick = 'alert(monthName[calendarMonth]+space()+this.id+space()+ calendarYear)'>"+calendarDate.getDate()+"</td>");
				}
		}
}
}
	}
	calendarDate.setMonth(calendarDate.getMonth()-1);
document.write("</div>");
}

document.write("</tr></table>");

var forward;
function forward() {

  this.calendarDate.setMonth(calendarDate.getMonth() + 1);
  this.startMonth = calendarDate.getMonth();
  this.calendarMonth = calendarDate.getMonth();
  this.calendarYear = calendarDate.getYear() + 1900;
  document.getElementById("myCal").innerHTML ="";
  buildCalendar();
}
function reverse() {
  this.calendarDate.setMonth(calendarDate.getMonth() - 1);
  this.startMonth = calendarDate.getMonth();
  this.calendarMonth = calendarDate.getMonth();
  this.calendarYear = calendarDate.getYear() + 1900;
  document.getElementById("myCal").innerHTML ="";
  buildCalendar();
}
function space(){
return " ";
}



