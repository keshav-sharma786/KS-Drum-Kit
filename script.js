console.log("Namaste Javascript");

const allKeys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyPressed = document.querySelector(`div[data-key= "${e.keyCode}"]`);
  //   console.log(audio);
  //   console.log(keyPressed);
  setTimeout(() => {
    keyPressed.classList.remove("playing");
  }, 100);
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
    }, 100);
    key.classList.add("playing");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});
// allKeys.forEach((key) => {
//   key.addEventListener("click", (e) => {
//     console.log(key);
//     if (key.attributes[0].value === "65") {
//       const audioElement1 = new Audio("beats/clap.wav");
//       audioElement1.play();
//       setTimeout(() => {
//         key.classList.toggle("playing");
//       }, 100);
//       key.classList.toggle("playing");
//     }
//   });
// });
