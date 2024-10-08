
AOS.init();



document.querySelector('.aboutMe').addEventListener('click', function() {
    document.getElementById('aboutMe').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('.resume').addEventListener('click', function() {
    document.getElementById('resume').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.projects').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.experience').addEventListener('click', function() {
    document.getElementById('timeline').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.abilities').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('hamburger').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

$(document).ready(function() {
    $('.burger-wrap').click(function() {
        $('body').toggleClass('nav-open'); 
        console.log("clicked!");
    });
  
    $('.menu-cover').click(function() {
        $('body').removeClass('nav-open');
        console.log("unclicked!");
    });
  });
  