/*
Pagination Content Filter:
*/

// Global variables
var studentsPerPage = 10;
var $totalStudents = $(".student-list").find(".student-item");
var numofLinks = Math.ceil($totalStudents.length / studentsPerPage);
var currentLink = 0;


// console.logs for testing
console.log(numofLinks);

// console.log(totalStudents);


// appends search to page
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."> <button>Search</button></div>');

// appending the pagination div and child ul
$(".page").append('<div class="pagination"><ul></ul></div>');

// hiding all students when the page first loads
$(".student-item").hide();
// showing the first 10 students
var $studentsPerPage = $(".student-item:lt(10)").show();


// Adding pagination links:

// appending correct number of links

for (var i = 1; i <= numofLinks; i++) {
  $(".pagination ul").append('<li> <a href="#">' + [i] + '</a> </li>');
}

// adding active class to first link when the page loads

$("ul li a:first").addClass("active");

// adds/removes the active class when a link is clicked on

$("ul li a").click(function() {
  $("ul li a").removeClass("active");
  var $activePage = $(this).addClass("active");
  // $(".student-list");
});


// Code that shows correct student for correct page


// $("ul li a").click( function(){
//   $totalStudents.hide();
//   document.write($(".student-item:gt("+ [i] + "):lt(10)").show());
// });

currentLink += 1;


// adding animations


// var $studentsPerPage = $(".student-item:lt(10)").show();

// $("ul li a:not(:first)").click(function() {
//   $("body").css("display", "none").fadeIn(1000);
//   $totalStudents.hide();
//   event.preventDefault();
//   newLocation = "filter-example.html";
//   $("body").fadeOut(1000, newpage);
//   $(".student-item").nextAll(":lt(10)").show();
// });
//
// function newpage() {
//   window.location = newLocation;
// }



var listCorrectStudents = parseInt([i]) + 1;


var studentCount = 1;
$(".student-list > li").each(function(index){
  if ($(this).attr("id") !== "!display") {
    $(this).attr("id", "show-index-"+(studentCount));
    studentCount++;
  }
});


$("li a").on("click", function(){
console.log(parseInt($(".active").html()));


parseInt($(".active").html());
var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
var endId = startId + studentsPerPage - 1;

$totalStudents.hide();
$totalStudents.slice(startId, endId).show();


for (var k = startId; k < endId; k++) {
  $("#show-index-" + k).fadeIn();
  }
});



// Search:

// $("button").on("click", function() {
  // var $studentNames = $("h3").text();
  // $("input").filter(function() {
  //   // $totalStudents.hide()
  //   var $matchingStudents = $("input:contains(" + $studentNames + ")");
  //   $(".student-item").text($matchingStudents);
  // });
// })


$("button").on("click", function() {
  var $studentSearch = $("input").val();
  console.log(".student-item".indexOf($studentSearch));
  $totalStudents.hide();
  var $filteredstudentsShown = $(".student-details:contains(" + $studentSearch + ")").parent();

  if ($filteredstudentsShown.text() === "") {
    $(".student-list").text("Sorry, there are no students matching your search.");
  } else {

  $($filteredstudentsShown).slice(0, studentsPerPage).show();
  console.log($($filteredstudentsShown).slice(0, studentsPerPage).show().length);

  $("li a").on("click", function() {
  parseInt($(".active").html());

  var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
  var endId = startId + studentsPerPage - 1;

  $totalStudents.hide();
  $totalStudents.slice(startId, endId).show();

  for (var k = startId; k < endId; k++) {
    $("#show-index-" + k).fadeIn();
    }
  });
}

  $("a").removeClass("active");
  $("ul li a:first").addClass("active");
});
