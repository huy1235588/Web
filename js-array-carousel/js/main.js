
const images = [ 
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];
const carouselContainer = document.querySelector('.carousel-container');

for (let i = 0; i < images.length; i++) {
    const currentImg = images[ i ];
    const imagesEl = document.createElement('img');
    imagesEl.src = currentImg;
    carouselContainer.append(imagesEl);
    imagesEl.classList.add('images-list');


    if ( i === 0 ) {

    imagesEl.classList.add('active');

    }   
}

let currentImgIndex = 0;

const next = document.querySelector('.arrow-down');

next.addEventListener('click', function() {

    if ( currentImgIndex === images.length ) {
        currentImgIndex = 0;
    }

    carouselContainer.querySelectorAll('.images-list')[currentImgIndex].classList.remove('active');
    currentImgIndex = currentImgIndex + 1;
    carouselContainer.querySelectorAll('.images-list')[currentImgIndex].classList.add('active');
});

const previous = document.querySelector('.arrow-up');

previous.addEventListener('click', function() {

    if( currentImgIndex === 0 ) {
        carouselContainer.querySelectorAll('.images-list')[currentImgIndex].classList.remove('active');
        currentImgIndex = images.length - 1;
        carouselContainer.querySelectorAll('.images-list')[currentImgIndex].classList.add('active');
    }
    carouselContainer.querySelectorAll('.images-list')[currentImgIndex].classList.remove('active');
    currentImgIndex = currentImgIndex - 1;
    carouselContainer.querySelectorAll('.images-list')[currentImgIndex].classList.add('active');
});