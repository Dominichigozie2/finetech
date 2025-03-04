const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", ()=>{
    const sideNav = document.querySelector(".side-bar");
    const menubar = document.querySelector(".menu-icon i");
    sideNav.classList.toggle("active");
    menubar.classList.toggle("fa-times");

});


