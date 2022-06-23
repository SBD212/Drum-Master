
$('button').on('click', function(e) {
    let keyPressed = e.target.innerHTML;
    playSound(keyPressed);
    buttonAnimation(keyPressed)
}
)  

$('body').on('keydown', function(e) {
    let keyPressed = e.key;
    playSound(keyPressed);
    buttonAnimation(keyPressed)
}
)  

const playSound = (key) =>{
    key === 'w' ? audioFile = 'sounds/crash.mp3' : 
    key === 'a' ? audioFile = 'sounds/kick-bass.mp3': 
    key === 's' ? audioFile = 'sounds/snare.mp3' : 
    key === 'd' ? audioFile = 'sounds/tom-1.mp3' :
    key === 'j' ? audioFile = 'sounds/tom-2.mp3':
    key === 'k' ? audioFile = 'sounds/tom-3.mp3': 
    key === 'l' ? audioFile = 'sounds/tom-4.mp3': audioFile = ''

    let audio = new Audio(audioFile);
    audio.play();
}

const buttonAnimation = (key) =>{
    $('.'+key).addClass('pressed')
    setTimeout(function() {
        $('.'+key).removeClass('pressed')
    },200)
}


  