function playSound(e) {
    sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!sound) return;
    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function main() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(k => k.addEventListener('transitionend', removeTransition))
    window.addEventListener('keydown', playSound)
}

main()