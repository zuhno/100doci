const images = document.querySelectorAll("img");
const loadingEl = document.querySelector(".loadResource");

const loadHandler = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].dataset.src;
  }
  images[images.length - 1].addEventListener("load", () => {
    loadingEl.classList.add("hide");
  });
};

const imageLoaded = () => window.addEventListener("load", loadHandler);

export default imageLoaded;
