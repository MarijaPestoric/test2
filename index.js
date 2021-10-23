let power = document.getElementById("power");

power.addEventListener("change", function () {
  let getKeyword = document.getElementsByClassName("keyword");
  let getTextOnOrOff = document.getElementById("text");
  let powerAudio = document.getElementById("audioPower");
  if (power.checked) {
    powerAudio.play();
    getTextOnOrOff.textContent = "On";
    getTextOnOrOff.style.color = "green";
    for (let index = 0; index < getKeyword.length; index++) {
      getKeyword[index].addEventListener("click", playAudio);
      document.addEventListener("keypress", sound);
    }
  } else {
    getTextOnOrOff.textContent = "Off";
    getTextOnOrOff.style.color = "red";
    for (let index = 0; index < getKeyword.length; index++) {
      getKeyword[index].removeEventListener("click", playAudio);
      document.removeEventListener("keypress", sound);
    }
  }
});

function sound(event) {
  playAudio(event.key);
}

function playAudio(key) {
  let heater = document.getElementById("btn-heater");
  let getAudio = document.getElementsByClassName("audio");
  let getVolume = document.getElementById("scale").value;
  let bank = document.getElementById("bank");
  if (!bank.checked) {
    for (let i = 0; i < getAudio.length; i++) {
      if (this.value[i] === key[i]) {
        getAudio[i].play();
        getAudio[i].volume = getVolume;
        heater.textContent = this.id;
      }
    }
  } else if (bank.checked) {
    for (let i = 0; i < getAudio.length; i++) {
      if (this.value[i] === key[i]) {
        getAudio[i].src = getAudio[getAudio.length - i].src;
        getAudio[i].play();
        getAudio[i].volume = getVolume;
        heater.textContent = this.id;
      }
    }
  }
}
