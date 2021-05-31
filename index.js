window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";

    const main = document.querySelector(".loading");
    main.classList.remove("loading");

    const footer = document.querySelector(".footer-loading");
    footer.classList.remove("footer-loading");
})

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

/** Switch view */
function switchToNepal(){
   console.log("switched to nepal")
   const nepal = document.querySelector(".nepal")
    nepal.classList.remove("hide");
    
   const country = document.querySelector(".india");
   country.classList.add("hide");

}

/** Switch view */
function switchToIndia(){
    console.log("switched to india")
    const india = document.querySelector(".india");
     india.classList.remove("hide");
    const nepal = document.querySelector(".nepal");
    nepal.classList.add("hide");
}

function showInfoWizard(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    const body = document.querySelector(".body");
    body.classList.add("info");

    const x = document.querySelector(".wizard");
    x.classList.remove("hide");

}
function closeWizard(){
    const body = document.querySelector(".body");
    body.classList.remove("info");

    const x = document.querySelector(".wizard");
    x.classList.add("hide");
}