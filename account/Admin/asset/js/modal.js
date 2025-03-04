// Get modal and related elements
const modal1 = document.querySelector(".ticketModal");
const closeBtn1 = document.querySelector(".ticketcloseBtn");
const modalButtons = document.querySelectorAll(".btnModal");

// Function to open the modal
function openModal() {
    if (modal1) {
        modal1.style.display = "flex"; // Show modal
    } else {
        console.error("Modal element not found!");
    }
}

// Function to close the modal
function closeModal() {
    if (modal1) {
        modal1.style.display = "none"; // Hide modal
    } else {
        console.error("Modal element not found!");
    }
}

// Add click event listeners to all modal buttons
modalButtons.forEach((button) => {
    button.addEventListener("click", openModal);
});

// Close modal when the close button is clicked
if (closeBtn1) {
    closeBtn1.addEventListener("click", closeModal);
} else {
    console.error("Close button not found!");
}

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal1 ) {
        closeModal();
    }
});
