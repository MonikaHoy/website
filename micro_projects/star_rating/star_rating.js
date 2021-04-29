const stars = document.getElementsByClassName("star");
const rating = document.getElementById("rating");

const highlight = (upTo) => {
    for(i = 0; i <= upTo; i++) {
        const x = stars[i];
        x.src = "star_black.png";
    }
}

const reset = () => {
    for(i = 0; i <5; i++) {
        const x = stars[i];
        x.src = "star_grey.png";
    }
}

const addListeners = (el, index) => {
    el.addEventListener("mouseover", function (){
        rating.value = index + 1;
        highlight(index);
    })

    el.addEventListener("mouseout", function() {
        reset();
    })
}

const starsButArray = [...stars];
starsButArray.forEach(addListeners);

