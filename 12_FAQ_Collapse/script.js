const toggles = document.querySelectorAll(".faq-toggle");
// Find all the toggles

toggles.forEach((toggle) => {
  // Add an event listener to all the toggles which gives its parent the active class.
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
