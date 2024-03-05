<br/>
<p align="center">
  <h3 align="center">Swiper Distortion Effect</h3>

  <p align="center">
    Awesome Swiper Slide Effect With Power of WebGL.
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/alprnrtrk/SwiperDistortionEffect/total) ![Contributors](https://img.shields.io/github/contributors/alprnrtrk/SwiperDistortionEffect?color=dark-green) ![Issues](https://img.shields.io/github/issues/alprnrtrk/SwiperDistortionEffect) ![License](https://img.shields.io/github/license/alprnrtrk/SwiperDistortionEffect) 

## About The Project

I created this project cause i saw some of the WebGL effects on the web but none of them go with the swiper.

I used already existed image swap and hover effect and merged that effect with any swiper you can create

## Built With

I used some of the frameworks helped me with this project

* [Three.js](https://threejs.org/)
* [GSAP](https://gsap.com/)
* [Swiper](https://swiperjs.com/)
* [hover-effect](https://github.com/robin-dela/hover-effect)

## Getting Started

First of all import Swiper, GSAP, Three.js and hover-effect in order.

### Prerequisites

* Swiper
```sh
npm i swiper
```
* GSAP
```sh
npm i gsap
```
* Three.js
```sh
npm i three
```
* hover-effect
```sh
npm install hover-effect
```


## Usage

import the frameworks and then finally add mine code and of them and call the function :
```
    swiperDistortion(
        swiperEl = '.indexHero',
        swiperParams = {
            modules: [A, P, N, Px, EC],
            slidesPerView: 1,
            speed: 0,
            spaceBetween: 0,
            watchSlidesProgress: true,
            pagination: {
                el: '.indexHero-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.indexHero-button-next',
                prevEl: '.indexHero-button-prev',
            },
            effect: 'creative',
            creativeEffect: {
                next: {
                    opacity: 0,
                },
                prev: {
                    opacity: 0,
                }
            }
        },
        duration = 1000,
        prevClass = 'dPrev',
        mask = '../assets/image/bump.jpeg',
        power = .15,
    );
```
    
## Authors

* **Alperen Ertürk** - *Front-end Developer* - [Alperen Ertürk](https://github.com/alprnrtrk) - **

## Acknowledgements

* [Robin Dela](https://github.com/robin-dela)
