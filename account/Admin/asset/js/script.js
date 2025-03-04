const menuBtn = document.querySelector('.bar');
const sideNav = document.querySelector('.left');
const body = document.querySelector('.body-container');


menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    body.classList.toggle('active');
    
});
// 

document.addEventListener('click', (event) => {
    if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
        sideNav.classList.remove('active');
        body.classList.remove('active');
    }
});



const dropBtns = document.querySelectorAll(".dropbtn");

dropBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the document click handler
        
        // Deactivate all dropdowns
        const allDropdowns = document.querySelectorAll(".drop-down");
        allDropdowns.forEach(drop => {
            drop.classList.remove("active");
        });

        // Activate the dropdown associated with the clicked button
        const dropdown = btn.nextElementSibling; // Assuming the dropdown is the next sibling
        if (dropdown && dropdown.classList.contains("drop-down")) {
            dropdown.classList.add("active");
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
    const allDropdowns = document.querySelectorAll(".drop-down");
    allDropdowns.forEach(drop => {
        drop.classList.remove("active");
    });
});


const dropBtn = document.querySelectorAll(".dropDownBtn");

dropBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the document click handler

        // Get the associated dropdown
        const dropdown1 = btn.nextElementSibling; // Assuming the dropdown is the next sibling

        if (dropdown1 && dropdown1.classList.contains("drop")) {
            // Toggle the active state of the clicked dropdown
            if (dropdown1.classList.contains("active")) {
                dropdown1.classList.remove("active"); // Deactivate if active
            } else {
                // Deactivate all other dropdowns
                const allDropdown = document.querySelectorAll(".drop");
                allDropdown.forEach(drop => drop.classList.remove("active"));

                // Activate the clicked dropdown
                dropdown1.classList.add("active");
            }
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
    const allDropdown = document.querySelectorAll(".drop");
    allDropdown.forEach(drop => drop.classList.remove("active"));
});








// Get modal elements
const btnModal = document.querySelectorAll(".btnModal");
const modalBtn = document.querySelector(".modalBtn");
const modal = document.getElementById("userModal");
const closeBtn = document.querySelector(".closeBtn");

// Open modal when button is clicked
modalBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Show modal
});

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









document.querySelectorAll('.status-option').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const status = e.target.getAttribute('data-status');
        const statusCell = e.target.closest('tr').querySelector('td:nth-child(3)');

        // Update the status text and class dynamically
        statusCell.textContent = status;
        statusCell.className = status; // Update class to match status for styling (if needed)
        
        alert(`Status changed to: ${status}`);
    });
});
