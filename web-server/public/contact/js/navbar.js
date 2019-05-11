$(document).ready(function() {
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $("#nav-ul").toggleClass("showing");
    $("nav").toggleClass("grey-bg");
  });
});
