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
  // loop through all images
  // get height where they will slide in at
    // amount scrolled + window height - image height / 2
    // window.scrollY + window.innerHeight - slideImage.height / 2
  // if current position is at slide in position
    // add class to image

  sliderImages.forEach(sliderImage => {
    let slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    let imageBottom = sliderImage.offsetTop + sliderImage.height;
    console.log(slideInAt);
  });
}

window.addEventListener('scroll', debounce(checkSlide))
