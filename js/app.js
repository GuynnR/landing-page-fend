/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let navbarList = document.getElementById("navbar__list");
let landingC = document.getElementsByClassName("landing__container").length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * Build Navigation
 */
for (let i = 0; i < landingC; i++) {
    let target = document.querySelectorAll("section")[i];
    let listName = target.dataset.nav;
    let newList = document.createElement("li");
    let listText = document.createTextNode(listName);
    let listItem = "sample-nav-" + i;
    newList.setAttribute("id", listItem);
    newList.setAttribute("class", "menu__link");
    newList.appendChild(listText);
    navbarList.appendChild(newList);

    /**
     * Scroll to section on link click
     */
    let ScrollTo;
    ScrollTo = document.getElementById(listItem);
    ScrollTo.addEventListener( 'click', function () {
        target.scrollIntoView ({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// Add class 'active' to section when near top of viewport\
window.addEventListener('scroll', activeFunction);
function activeFunction() {
    let allSections = document.querySelectorAll('section');
    for (i = 0; i < allSections.length; i++) {
        if(!isInViewport(allSections[i])){
            allSections[i].classList.remove('active');
        } else {
            allSections[i].classList.add('active');
        }
    }
}

function isInViewport(elem) { 
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top + 300 >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 300 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}