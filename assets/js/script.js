const menuIcon = document.querySelector("#bars");
menuIcon.addEventListener("click", ()=>{
    const sideNav = document.querySelector(".sidebar");
    const menubar = document.querySelector("#bars");
    sideNav.classList.toggle("active");
    menubar.classList.toggle("fa-times");

});


