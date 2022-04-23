// Custom Scripts
// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)
    //Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        1920: {
            slidesPerView: 4,
        },
        1450: {
            slidesPerView: 3,
        },

        993: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        701: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 1,
        },

        300: {
            slidesPerView: 1,
        }
    },



});
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
// const mySwiper = new Swiper('.swiper1', {
//     // Optional parameters
//     slidesPerView: 1,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination1',
//     },
//     breakpoints: {
//         1920: {
//             slidesPerView: 3,
//         },
//         1450: {
//             slidesPerView: 3,
//         },

//         993: {
//             slidesPerView: 2,
//         },
//         992: {
//             slidesPerView: 2,
//         },
//         701: {
//             slidesPerView: 2,
//         },
//         700: {
//             slidesPerView: 2,
//         },

//         300: {
//             slidesPerView: 2,
//         }
//     },



// });
