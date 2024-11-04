function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '0';
    document.getElementById('message').style.display = 'none';
    document.getElementById('loveSong').pause();
    document.getElementById('loveSong').currentTime = 0;
}

function calculate() {
    const display = document.getElementById('display');
    display.innerText = "I LOVE YOU BEBEE❤️";
    document.getElementById('message').style.display = 'block'; // Menampilkan pesan
}

function playSong() {
    document.getElementById('loveSong').play(); // Memutar lagu
    document.getElementById('message').style.display = 'none'; // Menghilangkan pesan
}
