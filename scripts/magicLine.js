function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        // Document is already ready, call the callback directly
        callbackFunc();
    } else if (document.addEventListener) {
        // All modern browsers to register DOMContentLoaded
        document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
        // Old IE browsers
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') {
                callbackFunc();
            }
        });
    }
}

ready(function () {
    const mainNav = document.getElementById("navList");
    const magicLine = document.createElement('li');
    magicLine.classList.add('magic-line');
    mainNav.append(magicLine);
    let activeElement = document.querySelector('#navList .active');

    const activeElLine = () => {
        let activeWidth = parseFloat(getComputedStyle(activeElement, null).width.replace("px", ""));
        magicLine.style.left = activeElement.offsetLeft + "px";
        magicLine.style.width = activeWidth + "px";
        magicLine.style.opacity = 1;
    }

    activeElLine();

    if (document.querySelector('#navList li').classList.contains('active')) {
        document.querySelector('.hero__carousel').addEventListener('load', (event) => {
            activeElLine();
        });
    }


    activeElLine();

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