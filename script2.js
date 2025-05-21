console.log("Namaste Javascript");

const allKeys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyPressed = document.querySelector(`div[data-key= "${e.keyCode}"]`);
//   console.log(audio);
//   console.log(keyPressed);
  setTimeout(() => {
    keyPressed.classList.remove("playing");
  }, 0.007);
  keyPressed.classList.add("playing");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
});

// what if user presses the key manually on the screen
// very good you yourself build this feature
allKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    // console.dir(key);
    // console.log(key.attributes[0].value);
    const audio = document.querySelector(
      `audio[data-key="${key.attributes[0].value}"]`
    );
    // console.log(audio);
    setTimeout(() => {
      key.classList.remove("playing");
    }, 200);
    key.classList.add("playing");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});
