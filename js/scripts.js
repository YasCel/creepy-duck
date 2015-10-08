$(function() {
  $("button#light-dark").click(function() {
    $("body").removeClass();
    $("body").addClass("light-dark-background");
  });

  $("button#dark-light").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-light-background");
  });

  $("button#default").click(function() {
    $("body").removeClass();
  });
});
