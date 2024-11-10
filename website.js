// Select all accordion headers
const accordionHeader = document.querySelectorAll(".accordionHeader");

accordionHeader.forEach((header) => {
  // Add a click event listener to each header
  header.addEventListener("click", () => {
    // Find the corresponding content div
    const content = header.nextElementSibling;

    // Toggle the 'show' class on the content div to toggle visibility
    content.classList.toggle("show");
  });
});
