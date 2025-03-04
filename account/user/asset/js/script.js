// sidebar toggle


function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('.user img')) {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) dropdown.style.display = 'none';
    }
};


const bar = document.querySelector(".bars");
const rowContainer = document.querySelector(".row-container");
const sideBar = document.querySelector(".sidebar");

bar.addEventListener("click", () => {
    sideBar.classList.toggle("active");

    if (sideBar.classList.contains("active")) {
        sideBar.style.display = "none";
        rowContainer.classList.add("active");
    } else {
        sideBar.style.display = "flex";
        rowContainer.classList.remove("active");
    }
});







document.addEventListener("DOMContentLoaded", () => {
    const profileNavItems = document.querySelectorAll(".profile-nav li");
    const editFo = document.querySelector(".profile-content");
    const passwords = document.querySelector(".passwords");
    const ver = document.querySelector(".verification");
    const trans = document.querySelector(".transaction");
    const notify = document.querySelector(".notificate");
    const msgBtn = document.querySelectorAll(".message-content");
    const msg = document.querySelector(".msg-container");

    // Default view setup
    editFo.style.display = "flex";
    passwords.style.display = "none";
    ver.style.display = "none";
    trans.style.display = "none";
    notify.style.display = "none";
    msg.style.display = "none";

    profileNavItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            profileNavItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            if (index === 0) {
                editFo.style.display = "flex";
                passwords.style.display = "none";
                ver.style.display = "none";
                trans.style.display = "none";
                notify.style.display = "none";
                msg.style.display = "none";
            }
            else if (index === 1) {
                editFo.style.display = "none";
                passwords.style.display = "flex";
                ver.style.display = "none";
                trans.style.display = "none";
                notify.style.display = "none";
                msg.style.display = "none";
            }
            else if (index === 2) {
                editFo.style.display = "none";
                passwords.style.display = "none";
                ver.style.display = "flex";
                trans.style.display = "none";
                notify.style.display = "none";
                msg.style.display = "none";
            }
            else if (index === 3) {
                editFo.style.display = "none";
                passwords.style.display = "none";
                ver.style.display = "none";
                trans.style.display = "flex";
                notify.style.display = "none";
                msg.style.display = "none";
            }
            else if (index === 4) {
                editFo.style.display = "none";
                passwords.style.display = "none";
                ver.style.display = "none";
                trans.style.display = "none";
                notify.style.display = "flex";
                msg.style.display = "none";
            }
            
        });
    });
    
    msgBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            msg.style.display = "flex";
            editFo.style.display = "none";
            passwords.style.display = "none";
            ver.style.display = "none";
            trans.style.display = "none";
            notify.style.display = "none";
        });
    });


});





document.addEventListener("DOMContentLoaded", () => {
    const profileNavItems = document.querySelectorAll(".deposit-nav li");
    const dep = document.querySelector(".deposit-content");
    const apple = document.querySelector(".Apple-content");
    const bank = document.querySelector(".bank-content");
    const usdt = document.querySelector(".usdt-content");

    // Default view setup
    dep.style.display = "flex";
    apple.style.display = "none";
    bank.style.display = "none";
    usdt.style.display = "none";

    profileNavItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            profileNavItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            if (index === 0) {
                dep.style.display = "flex";
                apple.style.display = "none";
                bank.style.display = "none";
                usdt.style.display = "none";
            
            }
            else if (index === 1) {
                dep.style.display = "none";
                apple.style.display = "flex";
                bank.style.display = "none";
                usdt.style.display = "none";
            
            }
            else if (index === 2) {
                dep.style.display = "none";
                apple.style.display = "none";
                bank.style.display = "flex";
                usdt.style.display = "none";
            }
            else if (index === 3) {
                dep.style.display = "none";
                apple.style.display = "none";
                bank.style.display = "none";
                usdt.style.display = "flex";
            }
        });
    });

    });

















 // Select the toggle icon
 const themeToggle = document.getElementById('theme-toggle');

 // Function to set the mode
 function setMode(isDark) {
   if (isDark) {
     document.body.classList.add('dark-mode');
     themeToggle.textContent = '☀️';
     localStorage.setItem('theme', 'dark');
   } else {
     document.body.classList.remove('dark-mode');
     themeToggle.textContent = '🌙';
     localStorage.setItem('theme', 'light');
   }
 }

 // Check saved mode in localStorage
 const savedTheme = localStorage.getItem('theme');
 if (savedTheme === 'dark') {
   setMode(true);
 } else {
   setMode(false);
 }

 // Add click event listener
 themeToggle.addEventListener('click', () => {
   const isDarkMode = document.body.classList.contains('dark-mode');
   setMode(!isDarkMode);
 });









// copy script

 // Get the elements
 const copyButton = document.getElementById('copy-button');
 const addressInput = document.getElementById('address');

 // Add event listener to the button
 copyButton.addEventListener('click', () => {
   // Select the input's value
   addressInput.select();
   addressInput.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text to the clipboard
   navigator.clipboard.writeText(addressInput.value)
     .then(() => {
       alert('Address copied to clipboard!');
     })
     .catch(err => {
       alert('Failed to copy address: ' + err);
     });
 });


