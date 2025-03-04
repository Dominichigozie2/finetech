// Get modal elements
const btnModal = document.querySelectorAll(".btnModal");
const modal = document.getElementById("userModal");
const closeBtn = document.querySelector(".closeBtn");


btnModal.forEach(btnt =>{
    btnt.addEventListener("click", () => {
        modal.style.display = "flex"; // Show modal
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Hide modal
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});
