function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach((sliderImage, index) => {
    let slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    let imageBottom = sliderImage.offsetTop + sliderImage.height;
    let isHalfShown = slideInAt > sliderImage.offsetTop;
    let isNotScrolledPast = window.scrollY < imageBottom;
    isHalfShown && isNotScrolledPast ? sliderImage.classList.add('active') : sliderImage.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(checkSlide))
