
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

sr.reveal('.education',{interval:200});

sr.reveal('.skills',{}); 
sr.reveal('.skill-1',{}); 
sr.reveal('.skill-2',{}); 
sr.reveal('.skill-3',{delay:200,interval:100}); 
sr.reveal('.skill-4',{}); 
sr.reveal('.skill-5',{delay:500}); 
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


//dark

// $(".theme").on("click",function(){
//     if( $( "body" ).hasClass( "dark" )) {
//       $( "body" ).removeClass( "dark" );
//       $( ".theme" ).text( "OFF" );
//   } else {
//       $( "body" ).addClass( "dark" );
//       $( ".theme" ).text( "ON" );
//   }
//   })