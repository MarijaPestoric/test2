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

function sound(event){
  playAudio(event.key);
};

  function playAudio (key) {
    let heater = document.getElementById('btn-heater');
    let getAudio = document.getElementsByClassName("audio");
    if (this.value === "Q" || key === "q") {
      getAudio[0].play(); 
      heater.textContent = this.id;
    } else if (this.value === "W" || key === "w") {
      getAudio[1].play();
      heater.textContent = this.id;
    } else if (this.value === "E" || key === "e") {
      getAudio[2].play();
      heater.textContent = this.id;
    } else if (this.value === "A" || key === "a") {
      getAudio[3].play();
      heater.textContent = this.id;
    } else if (this.value === "S" || key === "s") {
      getAudio[4].play();
      heater.textContent = this.id;
    } else if (this.value === "D" || key === "d") {
      getAudio[5].play();
      heater.textContent = this.id;
    } else if (this.value === "Z" || key === "z") {
      getAudio[6].play();
      heater.textContent = this.id;
    } else if (this.value === "X" || key === "x") {
      getAudio[7].play();
      heater.textContent = this.id;
    } else if (this.value === "C" || key === "c") {
      getAudio[8].play();
      heater.textContent = this.id;
    }
}


