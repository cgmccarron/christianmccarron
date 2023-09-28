const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

const hackerwords = document.querySelectorAll(".hacker-word");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

hackerwords.forEach((word) => {
  let interval = null;
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

const aboutSections = document.querySelectorAll(".about_section");
console.log(aboutSections);
const gradient = document.querySelector(".gradient");

const handleOnMove = (e, section) => {
  let rect = section.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  gradient.style.setProperty("--x", `${x}px`);
  gradient.style.setProperty("--y", `${y}px`);
};

aboutSections.forEach((section) => {
  section.onmousemove = (e) => handleOnMove(e, section);
});
