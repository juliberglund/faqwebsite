// Select all accordion headers (titles)
const accordionHeader = document.querySelectorAll(".accordionHeader");

accordionHeader.forEach((title) => {
  title.addEventListener("click", function () {
    // Toggle the 'active' class on the clicked title div
    this.classList.toggle("active");

    // Find the adjacent panel (the next sibling)
    const panel = this.nextElementSibling;

    // Check if the panel is already displayed and toggle it
    if (panel.style.display === "block") {
      panel.style.display = "none"; // Hide the panel if it's currently visible
    } else {
      panel.style.display = "block"; // Show the panel if it's hidden
    }
  });
});
