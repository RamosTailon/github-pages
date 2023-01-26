//função Header scroll
document.addEventListener('scroll', () => {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function inicia_modal(modal_id) {
    const modal = document.getElementById(modal_id)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (event) => {
        //console.log(event.target.id)
        if (event.target.id == modal_id || event.target.className == 'modalclose') {
            modal.classList.remove('mostrar')
        }
    })
}

const view1 = document.getElementById('3d_viewMore')
const view2 = document.querySelector('#app_design_viewMore')
const view3 = document.querySelector('#design_viewMore')


view1.addEventListener('click', () => inicia_modal('modeling'))
view2.addEventListener('click', () => inicia_modal('language'))
view3.addEventListener('click', () => inicia_modal('design'))


// ===MOBILE HAMBÚRGUER

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        /*PROPRIEDADES*/
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active_mobile";

        /*método .bind()*/
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `menuFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })

    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this;
    }


}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu li",
);

mobileNavbar.init();

//GLIDER JS
const simpleCarousel = document.querySelector('.carousel')

new Glider(simpleCarousel, {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.simple-dots',
    arrows: {
        prev: '#arrow-previous',
        next: '#arrow-next'
    }
})




