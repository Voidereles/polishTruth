import 'bootstrap';
import 'owl.carousel';
import './scripts/magicLine.js';


function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (window.pageYOffset > 100) {
            $('.header ').addClass('scrolled');

            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
                $('.column-toggle').removeClass('header-hidden');
            } else {
                document.getElementById("header").style.top = "-151px";
                $('.column-toggle').addClass('header-hidden');
            }
            prevScrollpos = currentScrollPos;
        } else {
            $('.header ').removeClass('scrolled');
        }
    }
}

const columnToggle = document.querySelector('.column-toggle');
const disableBodyScroll = () => {
    // document.getElementById('dialog').classList.add('show');
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.overflow = `hidden`;
    // body.style.height = `100vh`;
};
const enableBodyScroll = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    body.style.overflow = `auto`;
    body.style.overflowX = `hidden`;
    // body.style.height = `auto`;
    // document.getElementById('dialog').classList.remove('show');
};
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});






const navUpper = document.querySelector('.header__nav-upper');
const navSocialIcons = document.querySelector('.header__nav-right');

// function menuResponsive() {
//     if (innerWidth < 1400) {
//         navUpper.append(navSocialIcons);
//     }
// }

const headerMoveLinks = () => {
    if (window.innerWidth >= 1200) {
        document.querySelector('.header .header__container-bottom').append(document.querySelector('.header__nav-right'));
    } else {
        document.querySelector('.header__nav').append(document.querySelector('.header__nav-right'));
    }
    // console.log("links moved");
}

window.addEventListener('resize', function (event) {
    headerMoveLinks();
    // menuResponsive();
});


function centerGoMid(event) {
    if (innerWidth > 1200) {
        document.querySelectorAll('.owl-item').forEach(element => {
            if (element.classList.contains('center')) {
                let centerCopy = element.innerHTML;
                document.querySelector('.hero__big-container').innerHTML = centerCopy;
            }
        });
    }
}

$(function () {
    $('a[href^="#"]').click(function () {
        document.getElementById("header").style.top = "0";
    });

    $('.header__logo').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);
    })

    $('.nav-toggle').click(function () {
        $('.header__nav').toggleClass('header__nav--entered');
        $('.nav-toggle').toggleClass('nav-toggle--entered');
        // $('body').toggleClass('stop-scrolling');
        if ($('.nav-toggle').hasClass('nav-toggle--entered') || $('.column-toggle').hasClass('open')) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
    });

    $('.column-toggle').click(function () {
        $('.right-column').toggleClass('open');
        $('.column-toggle').toggleClass('open');
        if ($('.column-toggle').hasClass('open') || $('.nav-toggle').hasClass('nav-toggle--entered')) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }

        // $('body').toggleClass('stop-scrolling');
        // if (isEnabled == true) {
        //     disableScroll();
        //     isEnabled = false;
        // } else {
        //     enableScroll();
        //     isEnabled = true;
        // }
    });




    headerOnScroll();
    headerMoveLinks();
    menuResponsive();
});



if (typeof (document.querySelector('.hero')) != 'undefined' && document.querySelector('.hero') != null) {


    $('.hero__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        // autoplay: false,
        lazyLoad: true,
        items: 3,
        margin: 24,
        stagePadding: 0,
        center: true,
        nav: true,
        onInitialized: centerGoMid,
        onTranslated: centerGoMid,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: true,
                nav: false
            },
            1200: {
                items: 3,
                nav: true
            }
        }
    })

    // if (innerWidth > 1200) {
    //     document.querySelectorAll('.owl-item').forEach(element => {
    //         element.onclick = function () {
    //             let owlPosition = element.firstElementChild.getAttribute('data-owl-target') + 3;
    //             $('.hero__carousel').trigger("to.owl.carousel", [owlPosition, 50]);
    //         }
    //     });
    // }
}


if (typeof (document.querySelector('.standard-owl')) != 'undefined' && document.querySelector('.standard-owl') != null) {

    $('.standard-owl').owlCarousel({
        loop: true,
        // autoplay: true,
        autoplay: false,
        lazyLoad: true,
        items: 3,
        margin: 24,
        stagePadding: 0,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                stagePadding: 40,
                dots: true
            },
            600: {
                items: 2,
                margin: 20
            },
            1200: {
                items: 3
            },
            1610: {
                items: 4
            }
        }
    })
}