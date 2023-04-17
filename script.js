$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        };

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        };
    });

    // Scroll up button function
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('.nav__blog').removeClass('active');
        $('.menu-btn i').removeClass('active');
        window.location = "index.html"

    });

    // menu Button
    $('.menu-btn').click(function () {
        $('nav .nav__blog').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('li a').click(function () {
        $('.nav__blog').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".nav__list");

    menu.onclick = () => {
        menu.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }

    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header .nav__list a');

    window.onscroll = () => {
        menu.classList.remove('bx-x')
        navbar.classList.remove('active')

        section.forEach(sec => {

            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offset = sec.offsetTop - 150;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header .nav__list a[href*=' + id + ']').classList.add('active');
                });
            };

        });

    }



    // Typed animating
    var type = new Typed(".typing", {
        strings: ["Web Designer", "Web App Developer", "Mobile App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var type = new Typed(".typing__two", {
        strings: ["Web Developer", "Web Designer", "Mobile App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var type = new Typed(".typing-3", {
        strings: ["Experiences.", "Skills"],
        typeSpeed: 110,
        backSpeed: 70,
        loop: true
    });

    var type = new Typed(".typing__four", {
        strings: ["Get in Touch", "Leave a Comment"],
        typeSpeed: 110,
        backSpeed: 70,
        loop: true
    });

    // Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHover: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    });

});

function sendMsg() {

    alert(`Message not sent. Kindly email me via: anyomiprince27@gmail.com. Thank you...`)
}
