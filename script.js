window.onload = function() {

    // start on first image
    let currentImage = 0;
    let slideshowInterval = null;
    // get the sliding frame element
    const [frame] = document.getElementsByClassName("frame");
    
    // get number of img divs in gallery 
    const numberOfImages = frame.childElementCount;

    // moves frame by, based on current image number
    const moveFrame = () => {
        const movePercentage = currentImage*-100;
        frame.style.left = movePercentage + "%";
    };

    // constrains image selection to number of images
    // if reached, snap back to beginning/end
    const changeCurrentImage = (input) => {
        let newImage = currentImage + input;
        if (newImage < 0) {
            newImage = numberOfImages - 1;
        }
        else if (newImage > numberOfImages - 1) {
            newImage = 0;
        }
        currentImage = newImage;
        moveFrame();
    }

    const runSlideshow = () => {
        changeCurrentImage(1);
    };

    const stopSlideshow = () => {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        slideshowButton.innerHTML = 'start';
    }

    const [next] = document.getElementsByClassName("next");
    next.addEventListener('click', () => {
        changeCurrentImage(1);
        stopSlideshow();
    });
    const [previous] = document.getElementsByClassName("previous");
    previous.addEventListener('click', () => {
        changeCurrentImage(-1);
        stopSlideshow();
    });
    const [slideshowButton] = document.getElementsByClassName("auto");
    slideshowButton.addEventListener('click', () => {
        if (slideshowInterval === null) {
            slideshowInterval = setInterval(runSlideshow, 2000);
            slideshowButton.innerHTML = 'stop';
        } else {
            stopSlideshow();
        }
    });
    
  };