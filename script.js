const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
  console.log("button pushed" + document.body.dataset.nav);
};
