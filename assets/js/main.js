// Change bg nav 
const navBar = document.querySelector('.navbar');
const navBarIcon = document.querySelector('.navbar-toggler');
const navIcon =document.querySelector('.nav-icon');
window.addEventListener('scroll', () => {
    navBar.classList.toggle('bg-nav', window.scrollY > 0);
});

let bgNavChange = () =>  
    window.scrollY > 0 ? navBar.classList.add('bg-nav') : navBar.classList.remove('bg-nav');
bgNavChange();

// Change toggler nav
navBarIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
    let iconCond = navIcon.classList.contains('fa-bars');
    if(iconCond) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.add('fa-bars');
        navIcon.classList.remove('fa-times');
    }
});

// Open and close Video 
const sliderHeader = document.querySelector('#slider-header');
const btnsPlay = document.querySelectorAll('.btnPlay');
const videosPlayer = document.querySelectorAll('.videoPlayer');
const closesPlay = document.querySelectorAll('.closePlay');
btnsPlay.forEach(btnPlay => {
    btnPlay.addEventListener('click', () => {
        videosPlayer.forEach(videoPlayer => {
            if(btnPlay.parentElement === document.querySelector('.content-btn')){
                document.querySelector('.header-video').style.display = 'block';
                sliderHeader.style.display = 'none';
            }
            else if(btnPlay.parentElement == videoPlayer.parentElement){
                videoPlayer.style.display = 'block';
            }
        })   
    })
})

closesPlay.forEach(closePlay => {
    closePlay.addEventListener('click', () => {
        videosPlayer.forEach(videoPlayer => {
            if(closePlay.parentElement === document.querySelector('.header-video')){
                document.querySelector('.header-video').style.display = 'none';
                sliderHeader.style.display = 'flex';
            }else if(closePlay.parentElement == videoPlayer){
                videoPlayer.style.display = 'none';
            }
        })
    })
})

// Show and hide settings
const asideSetting = document.querySelector('aside');
asideSetting.addEventListener('click', () => {
    asideSetting.classList.toggle('active');
});

// Counter enrolled 
$(document).ready(function(){
    $('.enrolled .counter').counterUp({
        delay: 10,
        time: 1200
    });
});

// Slide courses
const listCourses = document.querySelector('.list-courses'); // content Btns type courses 
const listBtns = Array.from(listCourses.children);

const tabContent = document.querySelector('.tab-content');
const tabPanes = Array.from(tabContent.children);

const carouselTrack = document.querySelectorAll('.carousel__track');
   
window.onload = changeCourses();

function changeCourses() {    
    tabPanes.forEach((tabPan, index) => {
        const nextBtn = tabPan.querySelector('.carousel__button--right');
        const prevBtn = tabPan.querySelector('.carousel__button--left');

        carouselTrack.forEach((track,ind) => {
            const slides = Array.from(carouselTrack[ind].children);
            slides[0].classList.add('active');
            const cardCourses = track.querySelectorAll('.slide-courses .card');
            const moreDetails = track.querySelectorAll('.slide-courses .more-details');

            cardCourses.forEach(card => {
                card.addEventListener('mouseover', () => {
                    if(card.parentElement.classList.contains('active')) {
                        moreDetails.forEach(details => {
                            if(details.parentElement === card.parentElement) {
                                details.style.transform = 'translateX(100%)';
                                details.style.right = '-0.5rem';
                                details.style.left = 'auto';
                            }
                        }) 
                    }else {  
                        moreDetails.forEach(details => {
                            if(details.parentElement === card.parentElement) {
                                details.style.transform = 'translateX(-100%)';
                                details.style.left = '-0.5rem';
                                details.style.right = 'auto';
                                
                            }
                        }) 
                    }
                })
            });
            if(index===ind){
                nextBtn.addEventListener('click', () => {
                    const sizeGap = parseInt(window.getComputedStyle(track).getPropertyValue('gap'));
                    const slideWidth = slides[0].getBoundingClientRect().width + sizeGap;
                    const currentSlide = carouselTrack[ind].querySelector('.active');
                    const nextSlide = currentSlide.nextElementSibling;
                    currentSlide.classList.remove('active');
                    nextSlide.classList.add('active');
                    
                    carouselTrack[ind].style.transform = `translateX(-${slideWidth * slides.indexOf(nextSlide)}px)`;
                    prevBtn.style.display = 'block';
                    if(slides.indexOf(nextSlide) >= slides.length-1){
                        nextBtn.style.display = 'none';
                    }
                });
                
                prevBtn.addEventListener('click', (e) => {
                    const sizeGap = parseInt(window.getComputedStyle(track).getPropertyValue('gap'));
                    const slideWidth = slides[0].getBoundingClientRect().width + sizeGap;
                    const currentSlide = carouselTrack[ind].querySelector('.active');
                    const prevSlide = currentSlide.previousElementSibling;
                    currentSlide.classList.remove('active');
                    prevSlide.classList.add('active');
                    carouselTrack[ind].style.transform = `translateX(-${slideWidth * slides.indexOf(prevSlide)}px)`;
                    nextBtn.style.display = 'block';
                    if(slides.indexOf(prevSlide) == 0){
                        prevBtn.style.display = 'none';
                    }
                });
            }
        })
        
    });
};

// Change accordion icon 
const accordion = document.querySelectorAll('.card-header');
accordion.forEach(accord => {
    accord.addEventListener('click', () => {
        if(accord.classList.contains('active')){accord.classList.remove('active');
        }else{
            accordion.forEach(accord => {
                accord.classList.remove('active');
            });
            accord.classList.add('active');
        }
        
    });
});

// Aos animation
AOS.init();

// Owl carousel (our instructor)
$('.our-instructors .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    autoplay:false,
    dots:true,
    dotsEach:true,
    dotsData:false,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false
        },
        600:{
            items:2,
            dots:true,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            dots:true,
            loop:true
        }
    }
});

// Nice scroll
/*$("body").niceScroll({
    cursorcolor: '#eb4c6e',
    cursorwidth: '12px',
    cursorborder: 'none',
    cursorborderradius: '6px',
    emulatetouch: true,
    preventmultitouchscrolling: false,
    cursordragontouch: true,
    zindex: 5000
});*/

// The latest news (nicescroll)
$(".nicescroll-box").niceScroll(".wrap",
    {
        cursorcolor: '#eb4c6e',
        cursorwidth:'10px',
        autohidemode: false
    }
);

