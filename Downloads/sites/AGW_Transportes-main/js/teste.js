// let element = document.getElementById("fn-home-carousel");
// element.addEventListener("click", function(){ debugger; alert("Hello World!"); });

$("#gif").on("mouseover", event=> {    
    var giffile = $(".img-responsive");
    giffile[0].src = giffile[0].src;    
    
})

$("a").on("click", ["data-slide"], event=> {
    var giffile = $(".img-responsive");
    giffile[0].src = giffile[0].src; 
})

const speed = 1000;

$('a[href*="#"]')
.filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
.unbind('click.smoothScroll')
.bind('click.smoothScroll', event => {
        const targetId = event.currentTarget.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
        }
      });