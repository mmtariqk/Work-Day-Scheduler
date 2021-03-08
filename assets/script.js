// Using Moment.js API for Date & Time

var currDate = moment().format('dddd') + " : " + moment().format("MM/DD/YYYY");
var currHour = moment().format('h:mm:ss a');

// Variables for text hour 
 
var _9AM = $("#9am");
var _10AM = $("#10am");
var _11AM = $("#11am");
var _12PM = $("#12pm");
var _1PM = $("#13pm");
var _2PM = $("#14pm");
var _3PM = $("#15pm");
var _4PM = $("#16pm");
var _5PM = $("#17pm");
var _6PM = $("#18pm");
var _7PM = $("#19pm");

var hour = moment().hours();
var uInput;
var hSpan;

// var hourString = $(".hour").text().split(" ");
// Date and Hour

var intv = setInterval(function() {
  var momentNow = moment();
  $('#currDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currDay').html(currDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

  console.log("Current Hour " + hour);

  var initialize9 = JSON.parse(localStorage.getItem("09:00 am"));
  _9AM.val(initialize9);

  var initialize10 = JSON.parse(localStorage.getItem("10:00 am"))
  _10AM.val(initialize10);
  
  var initialize11 = JSON.parse(localStorage.getItem("11:00 am"))
  _11AM.val(initialize11);
  
  var initialize12 = JSON.parse(localStorage.getItem("12:00 pm"))
  _12PM.val(initialize12);
  
  var initialize1 = JSON.parse(localStorage.getItem("01:00 pm"))
  _1PM.val(initialize1);
  
  var initialize2 = JSON.parse(localStorage.getItem("02:00 pm"))
  _2PM.val(initialize2);
  
  var initialize3 = JSON.parse(localStorage.getItem("03:00 pm"))
  _3PM.val(initialize3);
 
  var initialize4 = JSON.parse(localStorage.getItem("04:00 pm"))
  _4PM.val(initialize4);
  
  var initialize5 = JSON.parse(localStorage.getItem("05:00 pm"))
  _5PM.val(initialize5);
  
  var initialize6 = JSON.parse(localStorage.getItem("06:00 pm"))
  _6PM.val(initialize6);
  
  var initialize7 = JSON.parse(localStorage.getItem("07:00 pm"))
  _7PM.val(initialize7);
} 

function background() {
      
  $(".form-control").each(function () {
      var timeT = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeT);
      console.log(hour);
//      console.log(this);
      if (hour > timeT) {
          $(this).addClass("past");
      } else if (hour < timeT) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  // Buttons (save to Local Storage)

  $(".saveBtn").on("click", function(){
    uInput = $(this).siblings(".form-control").val().trim();
    console.log(uInput);
    hSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hSpan);
    localStorage.setItem(hSpan, JSON.stringify(uInput));

  })

  // Button for clear the day

  $("#clearyourDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});