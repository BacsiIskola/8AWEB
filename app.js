$(document).ready(function(){

    $("a").on('click', function(event) {
  

      if (this.hash !== "") {

        event.preventDefault();
  

        var hash = this.hash;
  

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  

          window.location.hash = hash;
        });
      } 
    });
  });


  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }