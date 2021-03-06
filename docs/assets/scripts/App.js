/*--- Code used for the header----- */

class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this), false);
    }


     toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__menu-content--visible');
        this.siteHeader.classList.toggle('site-header--expanded');
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    }
}

/*
    toggleTheMenu() {
        if (this.menuContent.className === 'site-header__menu-content site-header__menu-content--visible') {

            this.menuContent.classList.remove('site-header__menu-content--visible');
        }
            else {
                this.menuContent.classList.add('site-header__menu-content--visible');
            }
    }
*/


var mobileMenu = new MobileMenu();


/* Code used for reaveal-on-scroll */


class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.scrollToShow();
       
    }

    scrollToShow() {
        window.addEventListener('scroll', this.hideInitially.bind(this), false);
    }
    
    hideInitially() {
        var windowYHeight = window.innerHeight;
        /*var item = this.itemsToReveal.getBoundingClientRect().bottom;
        console.log(windowYHeight);
        console.log(item);
       if (item < windowYHeight*0.9) {
           this.itemsToReveal.classList.add('reveal-item');
       }*/
       this.itemsToReveal.forEach(function(items){
            var itemsCoordinates = items.getBoundingClientRect().bottom;
            if (itemsCoordinates < windowYHeight) {
                items.classList.add('reveal-item');
            } else {
                items.classList.remove('reveal-item');
            }
       });
      
    }
}

var revealOnScroll = new RevealOnScroll();



class RevealOnScrollTestiomonial {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.testimonial');
        this.scrollToShow();
       
    }

    scrollToShow() {
        window.addEventListener('scroll', this.hideInitially.bind(this), false);
    }
    
    hideInitially() {
        var windowYHeight = window.innerHeight;
        /*var item = this.itemsToReveal.getBoundingClientRect().bottom;
        console.log(windowYHeight);
        console.log(item);
       if (item < windowYHeight*0.9) {
           this.itemsToReveal.classList.add('reveal-item');
       }*/
       this.itemsToReveal.forEach(function(items){
            var itemsCoordinates = items.getBoundingClientRect().bottom;
            if (itemsCoordinates < windowYHeight) {
                items.classList.add('testimonial-reveal');
            } else {
                items.classList.remove('testimonial-reveal');
            }
       });
      
    }
}

var testimonialReveal = new RevealOnScrollTestiomonial();


class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.scrollToShow();
    }
    scrollToShow() {
        window.addEventListener('scroll', this.darkenTheBackground.bind(this));
    }

    darkenTheBackground() {
        var windowYHeight = window.innerHeight;
        var logo = document.querySelector('.large-hero');
        var siteHeader = document.querySelector('.site-header');
        var logoCoordinates = logo.getBoundingClientRect().bottom;
        if ( logoCoordinates < windowYHeight/2 ) {
            siteHeader.classList.add('site-header--darken');
        } else {
            siteHeader.classList.remove('site-header--darken');
        }
    
    }
}
var stickyHeader = new StickyHeader();


// Get the modal element

var modal = document.querySelector('.modal');

// Get the open modal button

var button = document.querySelector('.btn');
var closeBtn = document.querySelector('.btn--close');

button.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


function openModal() {
    modal.style.display = 'block';
}

function closeModal () {
    modal.style.display = 'none';
}


