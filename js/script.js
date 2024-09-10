// handle up/down scrollwheel on the scroller, as most folks don't have horizontal scroll
let contentWrapper = document.querySelector('.contentWrapper');


// disable scrolling vertically and transform the vertical scroll distance to horizontal scroll distance
contentWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();  
    contentWrapper.scrollLeft += (e.deltaY + e.deltaX);
  });

