let getKeyword = document.getElementsByClassName("keyword");
let getAudio = document.getElementsByClassName("audio");
for (let index = 0; index < getKeyword.length; index++) {
  getKeyword[index].addEventListener("click", function () {
    if (this.value === "Q") {
      getAudio[0].play();
    } else if (this.value === "W") {
      getAudio[1].play();
    } else if (this.value === "E") {
      getAudio[2].play();
    } else if (this.value === "A") {
      getAudio[3].play();
    } else if (this.value === "S") {
      getAudio[4].play();
    } else if (this.value === "D") {
      getAudio[5].play();
    } else if (this.value === "Z") {
      getAudio[6].play();
    } else if (this.value === "X") {
      getAudio[7].play();
    } else if (this.value === "C") {
      getAudio[8].play();
    }
  });
}

let power = document.getElementById("power");
let powerAudio = document.getElementById("audioPower");
let getTextOnOrOff = document.getElementById("text");
power.addEventListener("change", function () {
  if (power.checked) {
    powerAudio.play();
    getTextOnOrOff.textContent = "On";
  } else {
    getTextOnOrOff.textContent = "Off";
  }
});
