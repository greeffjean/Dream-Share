$(".mobile-navbar").on("click", function(event){
  event.preventDefault();
  $(".menu-items").slideToggle();
});
$(".fa-times").click("click", function(){
  $(".menu-items").slideToggle();
});
