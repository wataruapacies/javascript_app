/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

function tran() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.replace(/　/g," ");
    console.log(outputText);
    var outputText0 = outputText.replace(/０/g,"0");
    var outputText1 = outputText0.replace(/１/g,"1");
    var outputText2 = outputText1.replace(/２/g,"2");
    var outputText3 = outputText2.replace(/３/g,"3");
    var outputText4 = outputText3.replace(/４/g,"4");
    var outputText5 = outputText4.replace(/５/g,"5");
    var outputText6 = outputText5.replace(/６/g,"6");
    var outputText7 = outputText6.replace(/７/g,"7");
    var outputText8 = outputText7.replace(/８/g,"8");
    var outputText9 = outputText8.replace(/９/g,"9");
    var outputText10 = outputText9.replace(/ー/g,"-");
    document.getElementById('outputText').value = outputText10;

    var outputText20 = inputText.replace(/ /g,"　");
    var outputText21 = outputText20.replace(/0/g,"０");
    var outputText22 = outputText21.replace(/1/g,"１");
    var outputText23 = outputText22.replace(/2/g,"２");
    var outputText24 = outputText23.replace(/3/g,"３");
    var outputText25 = outputText24.replace(/4/g,"４");
    var outputText26 = outputText25.replace(/5/g,"５");
    var outputText27 = outputText26.replace(/6/g,"６");
    var outputText28 = outputText27.replace(/7/g,"７");
    var outputText29 = outputText28.replace(/8/g,"８");
    var outputText30 = outputText29.replace(/9/g,"９");
    var outputText31 = outputText30.replace(/-/g,"ー");
     document.getElementById('outputText2').value = outputText31;
}


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

