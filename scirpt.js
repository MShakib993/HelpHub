



    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize Swiper sliders with faster autoplay
    const academicSwiper = new Swiper('.academic-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 2500, // Reduced from 3000 to 2000 milliseconds
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.academic-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    const beyondSwiper = new Swiper('.beyond-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 2500, // Reduced from 3000 to 2000 milliseconds
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.beyond-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Pause autoplay when hovering over sliders
    document.querySelectorAll('.swiper-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            academicSwiper.autoplay.stop();
            beyondSwiper.autoplay.stop();
        });
        
        container.addEventListener('mouseleave', () => {
            academicSwiper.autoplay.start();
            beyondSwiper.autoplay.start();
        });
    });