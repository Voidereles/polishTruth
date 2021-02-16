const heroBigContainer = document.querySelector('.hero__big-container');

function centerGoMid(event) {
    if (innerWidth > 1200) {
        document.querySelectorAll('.owl-item').forEach(element => {
            if (element.classList.contains('center')) {
                let centerCopy = element.innerHTML;
                heroBigContainer.innerHTML = centerCopy;
            }
        });
    }

}

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
    });
};


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