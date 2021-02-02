let nextBtn = document.getElementById('nextButton');
let prevBtn = document.getElementById('prevButton');
let active = document.querySelector('.pageActive')
let carouselItems = document.getElementsByClassName('carousel-item')
let pages = document.getElementsByClassName('page')
let pagePosition = 0;

function nextSlide() {
    carouselItems[pagePosition].classList.remove('pageActive');
    pages[pagePosition].classList.remove('pageActive')
    if (pagePosition == carouselItems.length - 1) {
        pagePosition = 0;
    } else {
        pagePosition++;
    }
    carouselItems[pagePosition].classList.add('pageActive')
    pages[pagePosition].classList.add('pageActive')
}

function previousSlide() {
    carouselItems[pagePosition].classList.remove('pageActive');
    pages[pagePosition].classList.remove('pageActive')
    if (pagePosition == 0) {
        pagePosition = carouselItems.length - 1;
    } else {
        pagePosition--;
    }
    carouselItems[pagePosition].classList.add('pageActive');
    pages[pagePosition].classList.add('pageActive');
}


prevBtn.addEventListener('click', previousSlide)

nextBtn.addEventListener("click", nextSlide)
