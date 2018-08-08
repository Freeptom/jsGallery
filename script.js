window.onload = function() {

    // start on first image
    let currentImage = 0;
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
    }
    

    const [next] = document.getElementsByClassName("Next");
    next.addEventListener('click', () => {
        console.log('next');
        changeCurrentImage(1);        
        console.log(currentImage);
        moveFrame();
    });
    const [previous] = document.getElementsByClassName("Previous");
    previous.addEventListener('click', () => {
        console.log('previous');
        changeCurrentImage(-1);
        console.log(currentImage);
        moveFrame();
    });
    
  };