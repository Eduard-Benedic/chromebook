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