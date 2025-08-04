$(document).ready(function () {
  //Off Canvas Menu Slide
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("nav-hide");
  });

  //Page Scroll To
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      900,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
  });
  // Extra Portfolio Gallery
  $(".show-more-btn").click(function () {
    $(".hidden-gallery").toggle("slow");
  });
  
});

document.getElementById(
  "footer"
).innerHTML = `© ${new Date().getFullYear()}  - <span>Leon</span>, All Right Reserved`;
