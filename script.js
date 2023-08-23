const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

console.log(document.querySelectorAll(".hacker-word"));

const hackerwords = document.querySelectorAll(".hacker-word");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

hackerwords.forEach((word) => {
  word.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.name[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.name.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
});

document.querySelector(".hacker-word").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.name[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.name.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
