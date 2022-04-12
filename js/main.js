function accordeon() {
  const chItems = document.querySelectorAll(".accordion");

  chItems.forEach((item) => {
    const chContent = item.querySelector(".accordion__content");

    item.addEventListener("click", () => {
      chContent.classList.toggle("accordion__content--active");
      item.querySelector('.accordion__title').classList.toggle("accordion__title--active")
    });
  });
}

accordeon()