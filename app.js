// import 'bootstrap';
// import 'owl.carousel';
// import './scripts/magicLine.js';

// if (module.hot) {
//     module.hot.accept()
// }

function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (window.pageYOffset > 100) {
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

const navUpper = document.querySelector('.header__nav-upper');
const navSocialIcons = document.querySelector('.header__nav-right');

function menuResponsive() {
    if (innerWidth < 1400) {
        console.log('das');
        navUpper.append(navSocialIcons);
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

window.addEventListener('resize', function (event) {
    headerMoveLinks();
    menuResponsive();
});

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





    menuResponsive();

});

if (typeof (document.querySelector('.hero')) != 'undefined' && document.querySelector('.hero') != null) {
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
        autoplayHoverPause: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: true
            },
            1200: {
                items: 3
            }
        }
    })

    // $('.hero__big-container').on('mouseover', function () {
    //     $('.hero__carousel').trigger("autoplay.stop.owl");
    //     console.log('dasd');
    // });
    // $('.hero__big-container').on('mouseout', function () {
    //     $('.hero__carousel').trigger("play.owl.carousel");
    // });

    if (innerWidth < 1200) {
        document.querySelectorAll('.owl-item').forEach(element => {
            element.onclick = function () {
                let owlPosition = element.firstElementChild.getAttribute('data-owl-target') + 3;
                $('.hero__carousel').trigger("to.owl.carousel", [owlPosition, 50]);
            }
        });
    }
}