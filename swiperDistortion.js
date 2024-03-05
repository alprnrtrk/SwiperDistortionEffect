window.swiperDistortion = function () {
    window.distoretedSwiper = new Swiper(`${swiperEl}`, swiperParams)
    var slides = document.querySelectorAll(`${swiperEl} .swiper-slide`);
    var images = Array.from(slides).map((slide, index) => {
        var img = slide.querySelector('img');
        return {
            slideEl: slide,
            imgEl: img,
            link: img.getAttribute('src'),
        };
    }).filter(item => item.image !== null);
    images.forEach((e, i) => {
        e.imgEl.remove();
        window['a' + i] = new hoverEffect({
            parent: e.slideEl,
            intensity: power,
            speedIn: duration / 1000,
            speedOut: duration / 1000,
            hover: false,
            image1: images[(i-- == 0) ? 0 : i++].link,
            image2: e.link,
            displacementImage: mask
        });
    })
    distoretedSwiper.on('slideChange', () => {
        if (distoretedSwiper.activeIndex > distoretedSwiper.previousIndex) {
            slides.forEach((e, i) => {
                window['a' + i].previous();
            });
        } else {
            slides.forEach((e, i) => {
                window['a' + i].next();
            });
        }
        distoretedSwiper.allowSlideNext = false;
        distoretedSwiper.allowSlidePrev = false;
        if (distoretedSwiper.realIndex > distoretedSwiper.previousIndex) {
            distoretedSwiper.el.classList.remove(prevClass);
            window['a' + distoretedSwiper.realIndex].next();
        } else {
            distoretedSwiper.el.classList.add(prevClass);
            window['a' + (distoretedSwiper.realIndex + 1)].previous();
        }
        setTimeout(() => {
            distoretedSwiper.allowSlideNext = true;
            distoretedSwiper.allowSlidePrev = true;
        }, duration);
    })
}
