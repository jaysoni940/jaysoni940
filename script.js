// /*!
// * Start Bootstrap - Resume v6.0.3 (https://startbootstrap.com/theme/resume)
// * Copyright 2013-2021 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
// */
// (function ($) {
//     "use strict"; // Start of use strict

//     // Smooth scrolling using anime.js
//     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
//         if (
//             location.pathname.replace(/^\//, "") ==
//             this.pathname.replace(/^\//, "") &&
//             location.hostname == this.hostname
//         ) {
//             var target = $(this.hash);
//             target = target.length ?
//                 target :
//                 $("[name=" + this.hash.slice(1) + "]");
//             if (target.length) {
//                 anime({
//                     targets: 'html, body',
//                     scrollTop: target.offset().top,
//                     duration: 1000,
//                     easing: 'easeInOutExpo'
//                 });
//                 return false;
//             }
//         }
//     });

//     // Closes responsive menu when a scroll trigger link is clicked
//     $(".js-scroll-trigger").on('click', function () {
//         $(".navbar-collapse").collapse("hide");
//     });

//     // Activate scrollspy to add active class to navbar items on scroll
//     $("body").scrollspy({
//         target: "#mainNav"
//     });

// })(jQuery); // End of use strict


// // ScrollReveal.js implementation

// const sr = ScrollReveal({
//     origin: 'bottom',
//     distance: '50px',
//     duration: 1000,
//     reset: true
// });

// // sr.reveal('.about',{}); 
// sr.reveal('.about_name',{delay: 200}); 
// sr.reveal('.about_svg',{}); 
// sr.reveal('.about_intro',{delay: 400}); 
// sr.reveal('.social-icon',{interval:200}); 


// sr.reveal('.experience',{}); 
// sr.reveal('.exp_1',{delay:200}); 
// sr.reveal('.exp_2',{delay:400}); 


// sr.reveal('.projects',{}); 
// sr.reveal('.card',{interval:500}); 

// sr.reveal('.education',{interval:200});

// sr.reveal('.skills',{}); 
// sr.reveal('.skill-1',{}); 
// sr.reveal('.skill-2',{}); 
// sr.reveal('.skill-3',{delay:200,interval:100}); 
// sr.reveal('.skill-4',{}); 
// sr.reveal('.skill-5',{delay:500}); 
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
// sr.reveal('.skills__data',{interval: 200}); 
// sr.reveal('.skills__img',{delay: 600});


// // sr.reveal('.interests',{}); 
// sr.reveal('.interests1',{delay:200}); 
// sr.reveal('.interests2',{delay:400}); 

// // sr.reveal('.connect',{}); 
// sr.reveal('.connect1',{delay:200}); 
// sr.reveal('.connect2',{delay:400}); 


// // Chartjs

//     var chartColors = {
//        red: 'rgb(255, 99, 132)',
//        orange: 'rgb(255, 159, 64)',
//        yellow: 'rgb(255, 205, 86)',
//        green: 'rgb(75, 192, 192)',
//        blue: 'rgb(54, 162, 235)',
//        purple: 'rgb(153, 102, 255)',
//        grey: 'rgb(231,233,237)'
//     };
//     var color = Chart.helpers.color;
//     var config = {
//       type: 'radar',
//       data: {
//         labels: ["COMMUNICATION",
//           ["CO-CURRICULAR"],
//           ["PROBLEM SOLVING"], "RESEARCH", "DISCIPLINE" ],
//         datasets: [{
//           label: "Scale",
//           backgroundColor: "rgba(40,255,40,0.2)",
//           // backgroundColor: "rgba(255, 99, 132, 0.3)",
//           borderColor: "rgba(5, 56, 107, 1)",
//           pointBackgroundColor: chartColors.red,
//           data: [85,80,90,80,90]
//         }, ]
//       },
//       options: {

//         legend: {
//           display:false,
//           position: 'top',
//           labels: {
//             fontColor: 'black'
//           }
//         },
//         title: {
//           display: true,
//         //   text: 'Chart.js Radar Chart',
//           fontColor: 'black'
//         },
//         scale: {
            
//           ticks: {
//             min:50,
//             max:100,
//             stepSize:10,
//             beginAtZero: false,
//             fontColor: 'black', // labels such as 10, 20, etc
//             showLabelBackdrop: false // hide square behind text
//           },
//           pointLabels: {
//             fontColor: 'rgba(5, 56, 107, 0.8)', // labels around the edge like 'Running'
            
//           },
//           gridLines: {
//             //color: 'rgba(255, 255, 255, 1)'
//             color: 'rgba(0, 0, 0, 0.2)'
//           },
//           angleLines: {
//             //color: 'rgba(255, 255, 255, 1)'
//             color: 'rgba(0, 0, 0, 0.2)' // lines radiating from the center
//           }
//         }
//       }
//     };
    
//     new Chart(document.getElementById("canvas"), config);
        