let x = document.getElementById("myAudio");
let krik = false;
let krikInterval = 0;
let interval = 0;

document.querySelector('.halloween').onclick = randomInterval;

function playAudio() {
    if (krik) {
        x.play();
        interval = 0;
    }
    else {
        x.pause();
    }
}

x.onended = function () {
    krik = false;
    if (interval == 0) {
        randomInterval();
    }
}

function randomInterval() {
    if (interval == 0 && krik == false) {
        interval = Math.random() * krikInterval;
        console.log(interval);
        setTimeout(playAudio, interval);
        document.querySelector('.halloween').classList.add('halloween-active');
        krik = true;
    }
    else {
        clearInterval(interval);
        interval = 0;
        krik = false;
        document.querySelector('.halloween').classList.remove('halloween-active');
        playAudio();
    }
}