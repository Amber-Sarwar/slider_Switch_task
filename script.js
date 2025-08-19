const radios = document.querySelectorAll('input[name="slide"]');
    let currentIndex = 0;

    function changeSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) currentIndex = radios.length - 1;
        if (currentIndex >= radios.length) currentIndex = 0;

        radios[currentIndex].checked = true;
    }

    // Optional: Auto-detect current checked slide on load
    radios.forEach((radio, i) => {
        if (radio.checked) currentIndex = i;
    });