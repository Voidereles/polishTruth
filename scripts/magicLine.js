document.addEventListener('DOMContentLoaded', function () {
    const mainNav = document.getElementById("navList");
    const magicLine = document.createElement('li');
    magicLine.classList.add('magic-line');
    mainNav.append(magicLine);
    let activeElement = document.querySelector('#navList .active');
    // const logo = document.querySelector(".header__logo-img");

    const activeElLine = () => {
        let activeWidth = parseFloat(getComputedStyle(activeElement, null).width.replace("px", ""));
        magicLine.style.left = activeElement.offsetLeft + "px";
        magicLine.style.width = activeWidth + "px";
        magicLine.style.opacity = 1;
    }

    // if (document.querySelector('#navList li').classList.contains('active')) {
    //     logo.addEventListener('load', (event) => {
    //         activeElLine();
    //     });
    // }

    const navItems = document.querySelectorAll('.header__nav-li');

    for (const navItem of navItems) {
        navItem.addEventListener('mouseenter', () => {
            itemWidth = parseFloat(getComputedStyle(navItem, null).width.replace("px", ""));
            itemLeftPos = navItem.offsetLeft + "px";
            magicLine.style.left = itemLeftPos;
            magicLine.style.width = itemWidth + "px";
            magicLine.style.opacity = 1;
        });
        navItem.addEventListener('mouseleave', () => {
            activeElLine();
        });
    }
});