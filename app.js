import 'bootstrap';
import 'owl.carousel';
import './scripts/magicLine.js';

if (module.hot) {
    module.hot.accept()
}

function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (window.pageYOffset > 36) {
            $('.header ').addClass('scrolled');

            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-151px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            $('.header ').removeClass('scrolled');
        }
    }
}

const headerMoveLinks = () => {
    if (window.innerWidth >= 992) {
        document.querySelector('.header .header__container-bottom').append(document.querySelector('.header__nav-right'));
    } else {
        document.querySelector('.header__nav').append(document.querySelector('.header__nav-right'));
    }
    // console.log("links moved");
}

window.addEventListener('resize', headerMoveLinks);

$(function () {



    $('a[href^="#"]').click(function () {

        document.getElementById("header").style.top = "16px";

    });


    $('.header__logo').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);
    })

    $('.nav-toggle').click(function () {
        $('.header__nav').toggleClass('header__nav--entered');
        $('.nav-toggle').toggleClass('nav-toggle--entered');
        $('body').toggleClass('stop-scrolling');
        if ($('body').hasClass('stop-scrolling') == false) {
            $('body').unbind('touchmove')
        } else {
            $('body').bind('touchmove', function (e) {
                e.preventDefault()
            })
        }
    });


    headerOnScroll();
    headerMoveLinks();
});


document.querySelectorAll('.owl-item').forEach(element => {
    element.onclick = function () {
        console.log('dupa');
        let centerCopy = element.innerHTML;
        document.querySelector('.hero__big-container').innerHTML = centerCopy;
        document.querySelector('.hero__big-container .hero__item').classList.add('fadeIn');

        // to.owl.carousel
    }
    // let centerCopy = element.innerHTML;
    // document.querySelector('.hero__big-container').innerHTML = centerCopy;
    // document.querySelector('.hero__big-container .hero__item').classList.add('fadeIn');

});


function centerGoMid(event) {
    document.querySelectorAll('.owl-item').forEach(element => {
        if (element.classList.contains('center')) {
            let centerCopy = element.innerHTML;
            document.querySelector('.hero__big-container').innerHTML = centerCopy;
            document.querySelector('.hero__big-container .hero__item').classList.add('fadeIn');
        }
    });
}

function addFadeOut() {
    document.querySelectorAll('.hero__big-container .hero__item').forEach(element => {
        // if (element.classList.contains('center')) {
        element.classList.add('fadeOut');
        // }
    });
}

function addFadeIn() {
    document.querySelectorAll('.hero__big-container .hero__item').forEach(element => {
        // if (element.classList.contains('center')) {
        element.classList.add('fadeIn');
        // }
    });
}

$('.hero__carousel').owlCarousel({
    loop: true,
    autoplay: true,
    // autoplay: false,
    lazyLoad: true,
    items: 3,
    margin: 24,
    stagePadding: 0,
    center: true,
    nav: false,
    onInitialized: centerGoMid,
    onTranslated: centerGoMid,
    onChanged: addFadeOut,
    // onChange: addFadeIn,
    // autoplayHoverPause: true,
    dots: false,

})