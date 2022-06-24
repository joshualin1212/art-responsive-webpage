/*show*/
document.querySelectorAll(".course-col").forEach((block) => {
  block.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = block
      .querySelector("img")
      .getAttribute("src");
  };
});

/* hide*/

function hidePopUp() {
  document.querySelector(".popup-image").style.display = "none";
}

document.querySelector(".popup-image span").onclick = () => {
  hidePopUp();
};

document
  .querySelector(".popup-image")
  .addEventListener("click", function (event) {
    if (
      !document.querySelector(".popup-image img").contains(event.target) &&
      document.querySelector(".popup-image").style.display != "none"
    ) {
      hidePopUp();
    }
  });
