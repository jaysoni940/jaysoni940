/*!
* Start Bootstrap - Resume v6.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav"
    });

})(jQuery); // End of use strict


// ScrollReveal.js implementation

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: true
});

// sr.reveal('.about',{}); 
sr.reveal('.about_name',{delay: 200}); 
sr.reveal('.about_svg',{}); 
sr.reveal('.about_intro',{delay: 400}); 
sr.reveal('.social-icon',{interval:200}); 


sr.reveal('.experience',{}); 
sr.reveal('.exp_1',{delay:200}); 
sr.reveal('.exp_2',{delay:400}); 


sr.reveal('.projects',{}); 
sr.reveal('.card',{interval:500}); 

sr.reveal('.education',{interval:300});

sr.reveal('.skills',{}); 
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});


// sr.reveal('.interests',{}); 
sr.reveal('.interests1',{delay:200}); 
sr.reveal('.interests2',{delay:400}); 

// sr.reveal('.connect',{}); 
sr.reveal('.connect1',{delay:200}); 
sr.reveal('.connect2',{delay:400}); 
