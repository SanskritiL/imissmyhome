window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";

    const main = document.querySelector(".loading");
    main.classList.remove("loading");

    const footer = document.querySelector(".footer-loading");
    footer.classList.remove("footer-loading");
})

if (window.innerWidth < 1024) {
    const height = document.documentElement.scrollHeight

    const element = document.getElementsByClassName("embed")[0];
    element.style.top = height + 200 + "px";
    console.log(element.style.top);

    const footer = document.getElementsByClassName("footer")[0];
    footer.style.top = height + 250 + 400 + "px";
    footer.style.paddingLeft = "20px"

}


/**
 * This function toggles play/pause button and plays/stop audio 
 * @param {Object} icon - i object 
 * @param {string} audioId - audio id of audio that needs to be played
 */
function play(icon, audioId) {
    const audio = document.querySelector(audioId);
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        audio.play();
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        audio.pause();
    }
}

/**
 * This function controls audio volume when slider value is changed
 * @param {string} id  - id of the audio object
 * @param {Object} event - event body
 */
function controlVolume(id, event) {
    document.querySelector(id).volume = event.currentTarget.value / 100;
}

function mute(icon, audioId) {
    const audio = document.querySelector(audioId);
    if (icon.classList.contains('fa-volume')) {
        icon.classList.remove('fa-volume');
        icon.classList.add('fa-volume-mute');
        audio.muted = true;
    } else {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume');
        audio.muted = false;
    }

}
document.documentElement.scrollHeight